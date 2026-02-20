import "./JourneyProgress.css";

export default function JourneyProgress({ total, completed }) {
    const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

    // Determine stage emoji
    const getTraveler = () => {
        if (pct === 100) return "🏁";
        if (pct >= 80) return "🏃";
        if (pct >= 50) return "🚶";
        if (pct >= 20) return "🧗";
        return "👶";
    };

    return (
        <div className="journey-container">
            <div className="journey-header">
                <span className="journey-title">Your Learning Journey</span>
                <span className="journey-stats">
                    <span className="stat-highlight">{completed}</span> / {total} milestones
                </span>
            </div>

            <div className="journey-path-wrapper">
                <div className="journey-track">
                    {/* Milestone markers */}
                    {[0, 25, 50, 75, 100].map((m) => (
                        <div
                            key={m}
                            className={`milestone-marker ${pct >= m ? "active" : ""}`}
                            style={{ left: `${m}%` }}
                        >
                            <div className="marker-dot" />
                            <span className="marker-label">{m}%</span>
                        </div>
                    ))}

                    {/* Fulfilled path */}
                    <div className="journey-fill" style={{ width: `${pct}%` }}>
                        <div className="fill-glow" />
                    </div>

                    {/* The traveler */}
                    <div
                        className="journey-traveler"
                        style={{
                            left: `${pct}%`,
                            transform: `translateX(-50%) ${pct === 100 ? "scale(1.2)" : ""}`
                        }}
                    >
                        <div className="traveler-bubble">
                            <span className="traveler-pct">{pct}%</span>
                            <div className="bubble-arrow" />
                        </div>
                        <span className={`traveler-emoji ${pct > 0 && pct < 100 ? "walking" : ""}`}>
                            {getTraveler()}
                        </span>
                    </div>
                </div>
            </div>

            {pct === 100 && (
                <div className="journey-footer">
                    <span className="celebration-text">🎉 Mastery Achieved! You are unstoppable.</span>
                </div>
            )}
        </div>
    );
}
