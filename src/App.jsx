import { useState, useMemo, useRef, useCallback } from "react";
import { initialSkillTree } from "./data/initialSkills";
import {
  countAll,
  countCompleted,
  toggleCompletion,
  toggleExpand,
  addChild,
  deleteNode,
  updateNodeResources,
  isSubtreeComplete,
} from "./utils/treeHelpers";
import SkillNode from "./components/SkillNode";
import JourneyProgress from "./components/JourneyProgress";
import XPCounter from "./components/XPCounter";
import StreakBadge from "./components/StreakBadge";
import Sidebar from "./components/Sidebar";
import CompletionAlert from "./components/CompletionAlert";
import "./App.css";

export default function App() {
  const [skills, setSkills] = useState(initialSkillTree);
  const [activeCategory, setActiveCategory] = useState(null); // null = all
  const [completedAlert, setCompletedAlert] = useState(null); // topic name string
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const prevCompletedRoots = useRef(new Set());

  const total = useMemo(() => countAll(skills), [skills]);
  const completed = useMemo(() => countCompleted(skills), [skills]);
  const xp = completed * 10;

  // Compute which skills to show based on active category
  const visibleSkills = useMemo(() => {
    if (activeCategory === null) return skills;
    return skills.filter((s) => s.id === activeCategory);
  }, [skills, activeCategory]);

  // Detect when a root-level node becomes fully complete
  const checkForCompletion = useCallback((updatedSkills) => {
    for (const root of updatedSkills) {
      const wasComplete = prevCompletedRoots.current.has(root.id);
      const nowComplete = isSubtreeComplete(root);
      if (!wasComplete && nowComplete) {
        prevCompletedRoots.current.add(root.id);
        setCompletedAlert(root.name);
        return;
      }
      if (!nowComplete) {
        prevCompletedRoots.current.delete(root.id);
      }
    }
  }, []);

  const handleToggleComplete = useCallback((id) => {
    setSkills((prev) => {
      const updated = toggleCompletion(prev, id);
      checkForCompletion(updated);
      return updated;
    });
  }, [checkForCompletion]);

  const handleToggleExpand = useCallback((id) => {
    setSkills((prev) => toggleExpand(prev, id));
  }, []);

  const handleAddChild = useCallback((parentId, newChild) => {
    setSkills((prev) => addChild(prev, parentId, newChild));
  }, []);

  const handleDeleteNode = useCallback((id) => {
    setSkills((prev) => deleteNode(prev, id));
  }, []);

  const handleUpdateResources = useCallback((id, resources, videoLink) => {
    setSkills((prev) => updateNodeResources(prev, id, resources, videoLink));
  }, []);

  const handleSelectCategory = useCallback((id) => {
    setActiveCategory(id);
    setSidebarOpen(false); // close mobile sidebar on selection
  }, []);

  return (
    <div className="app-shell">
      <Sidebar
        skills={skills}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((o) => !o)}
      />

      {/* Mobile overlay backdrop */}
      {sidebarOpen && (
        <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="app-main">
        {/* Header */}
        <header className="app-header">
          <div className="header-brand">
            <span className="brand-icon">🌳</span>
            <div>
              <h1 className="brand-title">SkillForge</h1>
              <p className="brand-sub">Your personal mastery roadmap</p>
            </div>
          </div>
          <div className="header-actions">
            <StreakBadge count={12} />
            <XPCounter xp={xp} />
          </div>
        </header>

        {/* Progress */}
        <div className="progress-section">
          <JourneyProgress total={total} completed={completed} />
        </div>

        {/* Skill Tree */}
        <main className="tree-container">
          <div className="tree-header">
            <h2 className="tree-title">
              <span className="tree-title-icon">🗂</span>{" "}
              {activeCategory
                ? skills.find((s) => s.id === activeCategory)?.name ?? "Skills"
                : "All Skills"}
            </h2>
            <span className="tree-hint">Hover a skill to see actions</span>
          </div>
          <div className="tree-body">
            {visibleSkills.map((node) => (
              <SkillNode
                key={node.id}
                node={node}
                depth={0}
                onToggleComplete={handleToggleComplete}
                onToggleExpand={handleToggleExpand}
                onAddChild={handleAddChild}
                onDeleteNode={handleDeleteNode}
                onUpdateResources={handleUpdateResources}
              />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <span>
            ✦ Hover any skill for actions &nbsp;·&nbsp;
            <kbd>📚</kbd> resources &nbsp;·&nbsp;
            <kbd>+</kbd> add branch &nbsp;·&nbsp;
            <kbd>🗑</kbd> delete
          </span>
        </footer>
      </div>

      {/* Completion Alert */}
      {completedAlert && (
        <CompletionAlert
          topicName={completedAlert}
          onClose={() => setCompletedAlert(null)}
        />
      )}
    </div>
  );
}
