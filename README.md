# 🌳 SkillForge

**SkillForge** is a premium, gamified learning path tracker designed to help you visualize and master complex skills. Built with React and a focus on rich aesthetics, it turns your learning roadmap into an interactive journey.

![SkillForge Preview](C:\Users\AAA\.gemini\antigravity\brain\c01c84fd-2ee9-41a7-9e65-75c8ccfc3d9a\skillforge_final_state_1771613945871.png)

## ✨ Features

### 🕹 Gamified Progress
- **🚶 Journey Progress**: A dynamic "walking traveler" animation that tracks your growth across milestones (0% to 100%).
- **🔥 Daily Streak**: Stay motivated with a Duolingo-style fire streak that pulses as you maintain your consistency.
- **✨ XP System**: Earn 10 XP for every skill mastered. Watch your golden XP badge pulse and grow!
- **🏆 Completion Alerts**: Celebrate major milestones with fullscreen congratulatory overlays, trophy animations, and floating emoji bursts.

### 📚 Resource Management
- **📺 Video Integration**: Link YouTube or external course videos. YouTube links automatically show rich thumbnail previews.
- **📎 File Vault**: Upload and link PDFs, cheat sheets, or project files directly to specific skills for easy access.
- **🏷 Inline Icons**: Intelligent icon mapping (e.g., 🐍 for Python, 📊 for Data Science, 🎓 for Certifications) keeps your tree visually organized.

### 🗺 Advanced Navigation
- **🗂 Recursive Skill Tree**: Infinite nesting support with smooth expand/collapse and precise indentation.
- **🧭 Category Sidebar**: Filter your view by major domains (Frontend, Backend, DevOps, Data Science) with live per-category progress bars.
- **🗑 Smart Deletion**: Easily prune branches with an inline "Delete? Yes/No" confirmation flow.

## 🚀 Tech Stack
- **Frontend**: React 18 (Vite)
- **Styling**: Vanilla CSS with CSS Variables (Premium Dark Theme)
- **State**: React Hooks (useState, useMemo, useCallback)
- **Icons**: Emoji-based with centralized mapping logic

## 🛠 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd queless2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure
- `src/components/`: Modular UI components (SkillNode, Sidebar, JourneyProgress, etc.)
- `src/utils/`: Pure helper functions for tree recursion and icon mapping.
- `src/data/`: Initial state and curriculum definitions.
- `src/App.jsx`: Main application shell and state orchestrator.

---
*Created with ❤️ by the SkillForge Team.*
