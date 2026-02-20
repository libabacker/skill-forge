import { useEffect } from "react";
import "./CompletionAlert.css";

const PARTICLES = ["🎉", "⭐", "✨", "🏆", "🌟", "💫", "🎊", "🔥"];

export default function CompletionAlert({ topicName, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="ca-overlay" onClick={onClose}>
            {/* Floating particles */}
            {Array.from({ length: 14 }).map((_, i) => (
                <span
                    key={i}
                    className="ca-particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 1.5}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                        fontSize: `${18 + Math.random() * 20}px`,
                    }}
                >
                    {PARTICLES[i % PARTICLES.length]}
                </span>
            ))}

            <div className="ca-card" onClick={(e) => e.stopPropagation()}>
                <div className="ca-glow-ring" />
                <div className="ca-trophy">🏆</div>
                <h2 className="ca-title">Topic Mastered!</h2>
                <p className="ca-topic">
                    <span className="ca-topic-name">{topicName}</span>
                </p>
                <p className="ca-subtitle">
                    You've completed all skills in this branch.<br />
                    Keep up the incredible momentum!
                </p>
                <div className="ca-xp-burst">+100 XP BONUS</div>
                <button className="ca-btn" onClick={onClose}>
                    Continue Journey →
                </button>
                <p className="ca-auto">Auto-closes in 5 seconds</p>
            </div>
        </div>
    );
}
