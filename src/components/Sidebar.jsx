import { countAll, countCompleted } from "../utils/treeHelpers";
import { getIcon } from "../utils/iconHelpers";
import "./Sidebar.css";

export default function Sidebar({ skills, activeCategory, onSelectCategory, isOpen, onToggle }) {
    return (
        <>
            {/* Mobile toggle */}
            <button className="sidebar-toggle" onClick={onToggle} title="Toggle sidebar">
                {isOpen ? "✕" : "☰"}
            </button>

            <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
                <div className="sb-header">
                    <span className="sb-header-icon">🗺</span>
                    <span className="sb-header-title">Categories</span>
                </div>

                <nav className="sb-nav">
                    {/* All button */}
                    <button
                        className={`sb-item ${activeCategory === null ? "active" : ""}`}
                        onClick={() => onSelectCategory(null)}
                    >
                        <span className="sb-icon">🌐</span>
                        <div className="sb-item-info">
                            <span className="sb-item-name">All Skills</span>
                            <div className="sb-mini-bar">
                                <div
                                    className="sb-mini-fill"
                                    style={{
                                        width: `${countAll(skills) === 0
                                            ? 0
                                            : Math.round((countCompleted(skills) / countAll(skills)) * 100)
                                            }%`,
                                    }}
                                />
                            </div>
                        </div>
                        <span className="sb-pct">
                            {countAll(skills) === 0
                                ? "0"
                                : Math.round((countCompleted(skills) / countAll(skills)) * 100)}%
                        </span>
                    </button>

                    <div className="sb-divider" />

                    {skills.map((cat) => {
                        const total = countAll([cat]);
                        const done = countCompleted([cat]);
                        const pct = total === 0 ? 0 : Math.round((done / total) * 100);
                        return (
                            <button
                                key={cat.id}
                                className={`sb-item ${activeCategory === cat.id ? "active" : ""}`}
                                onClick={() => onSelectCategory(cat.id)}
                                id={`sidebar-cat-${cat.id}`}
                            >
                                <span className="sb-icon">{getIcon(cat.id, cat.name)}</span>
                                <div className="sb-item-info">
                                    <span className="sb-item-name">{cat.name}</span>
                                    <div className="sb-mini-bar">
                                        <div
                                            className="sb-mini-fill"
                                            style={{ width: `${pct}%`, background: pct === 100 ? "var(--clr-green)" : "var(--clr-purple)" }}
                                        />
                                    </div>
                                </div>
                                <span className={`sb-pct ${pct === 100 ? "done" : ""}`}>{pct}%</span>
                            </button>
                        );
                    })}
                </nav>

                <div className="sb-footer">
                    <span>✦ Click to filter</span>
                </div>
            </aside>
        </>
    );
}
