import "./XPCounter.css";

export default function XPCounter({ xp }) {
    return (
        <div className="xp-counter">
            <div className="xp-icon">⚡</div>
            <div className="xp-info">
                <span className="xp-label">Experience Points</span>
                <span className="xp-value">{xp.toLocaleString()} XP</span>
            </div>
            <div className="xp-badge">+10 per skill</div>
        </div>
    );
}
