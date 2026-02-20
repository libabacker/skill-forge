const CATEGORY_ICONS = {
    "1": "🖥",
    "2": "⚙️",
    "3": "🚀",
    "4": "📊",
    "5": "🎓",
};

export function getIcon(id, name) {
    if (CATEGORY_ICONS[id]) return CATEGORY_ICONS[id];
    const n = name.toLowerCase();
    if (n.includes("python")) return "🐍";
    if (n.includes("front")) return "🖥";
    if (n.includes("back")) return "⚙️";
    if (n.includes("dev")) return "🚀";
    if (n.includes("design")) return "🎨";
    if (n.includes("data")) return "📊";
    if (n.includes("mobile")) return "📱";
    if (n.includes("security")) return "🔒";
    if (n.includes("cert") || n.includes("course") || n.includes("degree")) return "🎓";
    return null;
}
