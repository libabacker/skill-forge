import { useState, useRef } from "react";
import "./ResourcesPanel.css";

function getYouTubeId(url) {
    const match = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
}

function isValidUrl(str) {
    try { new URL(str); return true; } catch { return false; }
}

export default function ResourcesPanel({ nodeId, videoLink, resources, onUpdate }) {
    const [localVideo, setLocalVideo] = useState(videoLink || "");
    const [localResources, setLocalResources] = useState(resources || []);
    const [isAddingVideo, setIsAddingVideo] = useState(false);
    const fileRef = useRef();

    const saveVideo = () => {
        onUpdate(nodeId, localResources, localVideo);
        setIsAddingVideo(false);
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const newRes = [
                    ...localResources,
                    { name: file.name, url: ev.target.result, type: file.type },
                ];
                setLocalResources(newRes);
                onUpdate(nodeId, newRes, localVideo);
            };
            reader.readAsDataURL(file);
        });
        e.target.value = "";
    };

    const removeResource = (idx) => {
        const updated = localResources.filter((_, i) => i !== idx);
        setLocalResources(updated);
        onUpdate(nodeId, updated, localVideo);
    };

    const ytId = localVideo ? getYouTubeId(localVideo) : null;

    const getFileIcon = (type = "") => {
        if (type.startsWith("image/")) return "🖼";
        if (type === "application/pdf") return "📄";
        if (type.includes("word")) return "📝";
        if (type.includes("zip") || type.includes("rar")) return "📦";
        return "📎";
    };

    return (
        <div className="resources-panel" onClick={(e) => e.stopPropagation()}>
            <div className="rp-section">
                <div className="rp-section-header">
                    <span>🎬 Course Video</span>
                    <button className="rp-icon-btn" onClick={() => setIsAddingVideo(!isAddingVideo)} title="Edit video link">
                        {isAddingVideo ? "✕" : "✏️"}
                    </button>
                </div>

                {isAddingVideo ? (
                    <div className="rp-video-input-row">
                        <input
                            className="rp-input"
                            type="url"
                            placeholder="Paste YouTube or any video URL..."
                            value={localVideo}
                            onChange={(e) => setLocalVideo(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && saveVideo()}
                            autoFocus
                        />
                        <button className="rp-save-btn" onClick={saveVideo} disabled={localVideo && !isValidUrl(localVideo)}>
                            Save
                        </button>
                    </div>
                ) : localVideo ? (
                    ytId ? (
                        <a
                            className="rp-yt-thumb"
                            href={localVideo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={`https://img.youtube.com/vi/${ytId}/mqdefault.jpg`}
                                alt="Video thumbnail"
                            />
                            <div className="rp-play-overlay">
                                <span className="rp-play-icon">▶</span>
                                <span className="rp-play-label">Watch on YouTube</span>
                            </div>
                        </a>
                    ) : (
                        <a className="rp-link-pill" href={localVideo} target="_blank" rel="noreferrer">
                            🔗 {localVideo.length > 50 ? localVideo.slice(0, 50) + "…" : localVideo}
                        </a>
                    )
                ) : (
                    <button className="rp-empty-btn" onClick={() => setIsAddingVideo(true)}>
                        + Attach video link
                    </button>
                )}
            </div>

            <div className="rp-section">
                <div className="rp-section-header">
                    <span>📁 Course Files</span>
                    <button
                        className="rp-icon-btn"
                        onClick={() => fileRef.current.click()}
                        title="Upload file"
                    >
                        ⬆️
                    </button>
                    <input
                        ref={fileRef}
                        type="file"
                        multiple
                        style={{ display: "none" }}
                        onChange={handleFileUpload}
                    />
                </div>

                {localResources.length === 0 ? (
                    <button className="rp-empty-btn" onClick={() => fileRef.current.click()}>
                        + Upload course files or paste links
                    </button>
                ) : (
                    <ul className="rp-file-list">
                        {localResources.map((res, i) => (
                            <li key={i} className="rp-file-item">
                                <span className="rp-file-icon">{getFileIcon(res.type)}</span>
                                <a
                                    className="rp-file-name"
                                    href={res.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={res.name}
                                >
                                    {res.name.length > 36 ? res.name.slice(0, 36) + "…" : res.name}
                                </a>
                                <button className="rp-remove-btn" onClick={() => removeResource(i)} title="Remove">×</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
