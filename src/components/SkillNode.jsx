import { useState } from "react";
import AddBranchModal from "./AddBranchModal";
import ResourcesPanel from "./ResourcesPanel";
import { getIcon } from "../utils/iconHelpers";
import "./SkillNode.css";

export default function SkillNode({
    node,
    depth = 0,
    onToggleComplete,
    onToggleExpand,
    onAddChild,
    onDeleteNode,
    onUpdateResources,
}) {
    const [showModal, setShowModal] = useState(false);
    const [showResources, setShowResources] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const hasChildren = node.children && node.children.length > 0;
    const icon = getIcon(node.id, node.name);

    const handleDelete = () => {
        if (confirmDelete) {
            onDeleteNode(node.id);
        } else {
            setConfirmDelete(true);
        }
    };

    return (
        <div className="skill-node" style={{ "--depth": depth }}>
            <div
                className={`skill-row ${node.completed ? "completed" : ""}`}
                style={{ paddingLeft: `${depth * 24 + 12}px` }}
                onMouseLeave={() => setConfirmDelete(false)}
            >
                {/* Expand/Collapse */}
                <button
                    className={`expand-btn ${!hasChildren ? "invisible" : ""}`}
                    onClick={() => hasChildren && onToggleExpand(node.id)}
                    aria-label={node.expanded ? "Collapse" : "Expand"}
                >
                    <span
                        className="expand-arrow"
                        style={{ transform: node.expanded ? "rotate(90deg)" : "rotate(0deg)" }}
                    >
                        ▶
                    </span>
                </button>

                {/* Completion checkbox */}
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={node.completed}
                        onChange={() => onToggleComplete(node.id)}
                    />
                    <span className={`custom-check ${node.completed ? "checked" : ""}`}>
                        {node.completed && <span className="check-mark">✓</span>}
                    </span>
                </label>

                {/* Skill name with icon */}
                <span className={`skill-name ${node.completed ? "skill-done" : ""}`}>
                    {icon && <span className="skill-icon-inline" style={{ marginRight: '6px' }}>{icon}</span>}
                    {node.name}
                </span>

                {/* Child count badge */}
                {hasChildren && (
                    <span className="child-count">{node.children.length}</span>
                )}

                {/* Resources badge — always visible if node has resources */}
                {(node.resources?.length > 0 || node.videoLink) && (
                    <span className="res-indicator" title="Has resources">📎</span>
                )}

                {/* Action buttons (visible on hover) */}
                <div className="row-actions">
                    {/* Resources button */}
                    <button
                        className={`action-btn res-btn ${showResources ? "active" : ""}`}
                        onClick={() => setShowResources(!showResources)}
                        title="Course resources & video"
                    >
                        📚
                    </button>

                    {/* Add child button */}
                    <button
                        className="action-btn add-child-btn"
                        onClick={() => setShowModal(true)}
                        title="Add child skill"
                    >
                        +
                    </button>

                    {/* Delete button */}
                    {confirmDelete ? (
                        <div className="delete-confirm">
                            <span className="delete-ask">Delete?</span>
                            <button className="confirm-yes" onClick={handleDelete}>Yes</button>
                            <button className="confirm-no" onClick={() => setConfirmDelete(false)}>No</button>
                        </div>
                    ) : (
                        <button
                            className="action-btn delete-btn"
                            onClick={handleDelete}
                            title="Delete skill"
                        >
                            🗑
                        </button>
                    )}
                </div>
            </div>

            {/* Resources Panel */}
            {showResources && (
                <ResourcesPanel
                    nodeId={node.id}
                    videoLink={node.videoLink}
                    resources={node.resources}
                    onUpdate={onUpdateResources}
                />
            )}

            {/* Recursive children */}
            {hasChildren && node.expanded && (
                <div className="children-container">
                    {node.children.map((child) => (
                        <SkillNode
                            key={child.id}
                            node={child}
                            depth={depth + 1}
                            onToggleComplete={onToggleComplete}
                            onToggleExpand={onToggleExpand}
                            onAddChild={onAddChild}
                            onDeleteNode={onDeleteNode}
                            onUpdateResources={onUpdateResources}
                        />
                    ))}
                </div>
            )}

            {showModal && (
                <AddBranchModal
                    parentId={node.id}
                    parentName={node.name}
                    onAdd={onAddChild}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}
