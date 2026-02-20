import "./ProgressBar.css";

export default function ProgressBar({ total, completed }) {
    const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

    const getColor = () => {
        if (pct >= 80) return "var(--clr-green)";
        if (pct >= 50) return "var(--clr-blue)";
        if (pct >= 20) return "var(--clr-purple)";
        return "var(--clr-pink)";
    };

    return (
        <div className="progress-wrapper">
            <div className="progress-labels">
                <span className="progress-label">Overall Progress</span>
                <span className="progress-pct" style={{ color: getColor() }}>
                    {pct}%
                </span>
            </div>
            <div className="progress-track">
                <div
                    className="progress-fill"
                    style={{
                        width: `${pct}%`,
                        background: `linear-gradient(90deg, var(--clr-purple), ${getColor()})`,
                    }}
                >
                    <div className="progress-glow" />
                </div>
            </div>
            <div className="progress-stats">
                <span>
                    <span className="stat-num">{completed}</span> / {total} skills mastered
                </span>
                {pct === 100 && (
                    <span className="progress-badge">🏆 Complete!</span>
                )}
                {pct >= 50 && pct < 100 && (
                    <span className="progress-badge halfway">⚡ Halfway there!</span>
                )}
            </div>
        </div>
    );
}
