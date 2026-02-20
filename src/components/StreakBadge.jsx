import "./StreakBadge.css";

export default function StreakBadge({ count = 7 }) {
    return (
        <div className="streak-badge" title="Daily Mastery Streak">
            <div className="streak-fire">
                <span className="fire-emoji">🔥</span>
                <div className="fire-glow" />
            </div>
            <div className="streak-info">
                <span className="streak-count">{count}</span>
                <span className="streak-label">DAY STREAK</span>
            </div>
        </div>
    );
}
