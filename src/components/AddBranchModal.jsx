import { useState } from "react";
import { generateId, addChild } from "../utils/treeHelpers";
import "./AddBranchModal.css";

export default function AddBranchModal({ parentId, parentName, onAdd, onClose }) {
    const [skillName, setSkillName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = skillName.trim();
        if (!trimmed) return;
        const newChild = {
            id: generateId(),
            name: trimmed,
            completed: false,
            expanded: false,
            children: [],
        };
        onAdd(parentId, newChild);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <span className="modal-icon">🌿</span>
                    <div>
                        <h2 className="modal-title">Add New Skill</h2>
                        <p className="modal-subtitle">
                            Under: <span className="modal-parent">{parentName}</span>
                        </p>
                    </div>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>
                <form onSubmit={handleSubmit} className="modal-form">
                    <input
                        autoFocus
                        type="text"
                        className="modal-input"
                        placeholder="e.g. TypeScript Generics..."
                        value={skillName}
                        onChange={(e) => setSkillName(e.target.value)}
                    />
                    <div className="modal-actions">
                        <button type="button" className="btn-cancel" onClick={onClose}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn-add"
                            disabled={!skillName.trim()}
                        >
                            <span>✦</span> Add Skill
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
