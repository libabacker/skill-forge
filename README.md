<p align="center">
  <img src="C:\Users\AAA\.gemini\antigravity\brain\c01c84fd-2ee9-41a7-9e65-75c8ccfc3d9a\skillforge_final_state_1771613945871.png" alt="Project Banner" width="100%">
</p>

# SkillForge 

## Basic Details

### Team Name: pinkpixels

### Team Members
- Member 1: LIBA - College OF ENGINEERING KALLOOPARA
- Member 2: GOURI SANEESH- College OF ENGINEERING KALLOOPARA

### Hosted Project Link
[Local Hosted Link: https://skill-forge-kohl.vercel.app/

### Project Description
SkillForge is a premium, gamified learning path tracker that transforms your educational roadmap into an interactive journey. It features a recursive skill tree, resource management, and a delightful reward system including a walking traveler progress animation and a Duolingo-style streak counter.

### The Problem statement
Students and self-learners often find it difficult to visualize the vastness of a new domain (like Frontend or Data Science) and lose motivation when progress feels static or invisible. Traditional checklists are boring and don't provide the "gamified" feedback loop necessary for long-term consistency.

### The Solution
SkillForge solves this by providing:
1.  **Visual Roadmap**: A deep, nested tree that shows EXACTLY where you are and what's next.
2.  **Gamified Feedback**: A traveler emoji that literally "walks" towards your goal as you complete skills, combined with a flickering streak badge for daily consistency.
3.  **One-Stop Resources**: Every skill node doubles as a vault for course videos (with thumbnails) and uploaded study materials.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: JavaScript (ES6+), CSS3, HTML5
- Frameworks used: React 18 (Vite)
- Libraries used: React Hooks, Lucide-style emojis, CSS Animations
- Tools used: VS Code, Git, Antigravity AI, npm

---

## Features

List the key features of your project:
- **🚶 Journey Progress**: A dynamic "walking traveler" animation that tracks your growth across milestones (0% to 100%).
- **🔥 Daily Streak**: Stay motivated with a Duolingo-style fire streak that pulses as you maintain your consistency.
- **📚 Resource Vault**: Attach YouTube links (with auto-thumbnails) and upload local files (PDFs, images) to any skill node.
- **🏆 Completion Alerts**: Celebrate category mastery with a fullscreen animated trophy overlay and floating emoji particles.
- **🧭 Category Sidebar**: Quickly filter the curriculum by domains (Frontend, Backend, DevOps, Data Science, Certifications) with live progress mini-bars.
- **🗑 Smart Deletion**: Recursive branch deletion with a safe inline "Delete? Yes/No" confirmation flow.

---

## Implementation

### For Software:

#### Installation
```bash
git clone <repository-url>
cd queless2
npm install
```

#### Run
```bash
npm run dev
```

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Sidebar & Filtering](C:\Users\AAA\.gemini\antigravity\brain\c01c84fd-2ee9-41a7-9e65-75c8ccfc3d9a\feature1_sidebar_filtered_1771615530265.png)
*The Category Sidebar allows for quick navigation and filtering of complex curricula.*

![Resources Panel](C:\Users\AAA\.gemini\antigravity\brain\c01c84fd-2ee9-41a7-9e65-75c8ccfc3d9a\feature2_resources_saved_1771615575684.png)
*Each skill has a dedicated vault for YouTube videos and uploaded course files.*

![Mastery Alert](C:\Users\AAA\.gemini\antigravity\brain\c01c84fd-2ee9-41a7-9e65-75c8ccfc3d9a\feature4_completion_alert_1771615723543.png)
*Completing a major topic triggers a celebratory fullscreen overlay and XP bonus.*

#### Diagrams

**System Architecture:**

SkillForge uses a **Component-Based Architecture** in React:
- **State Mgmt**: Centralized in `App.jsx` using `useState` and `useMemo` for derived progress stats.
- **Recursive Tree**: `SkillNode.jsx` recursively renders itself to support infinite depth.
- **Logic Separation**: `treeHelpers.js` handles pure recursive transformations (counting, toggling, deleting).
- **Icons**: `iconHelpers.js` provides centralized name-to-emoji mapping logic.

**Application Workflow:**
1. **Explore**: User lands on "All Skills" and browses the tree.
2. **Filter**: User clicks a Sidebar category (e.g., DevOps) to focus.
3. **Learn**: User clicks 📚 to view course videos or download resources.
4. **Achieve**: User completes a skill; the **Journey Traveler** walks forward, and **XP** updates.
5. **Celebrate**: On topic completion, a **Mastery Alert** fires.

---

## AI Tools Used (Optional - For Transparency Bonus)

**Tool Used:** Antigravity (Gemini-powered)

**Purpose:**
- Architected the recursive tree data structure and helper functions.
- Designed the premium glassmorphism UI and CSS animations (Walking Traveler, Fire Streak).
- Implemented core features like the Resources Panel and Category Filtering.
- Debugged state synchronization issues across nested components.

**Key Prompts Used:**
- "Create a recursive skill tree with expand/collapse and progress tracking."
- "Replace the progress bar with a child walking animation that grows until the ending."
- "Add a streak representing a fire like in duolingo."
- "Create a resources panel for YouTube thumbnails and file uploads."

**Percentage of AI-generated code:** ~95%

**Human Contributions:**
- Feature ideation and creative direction.
- Logic verification and UX fine-tuning.
- Category data definition (Skills and Certifications).

---

## Team Contributions

- LIBA: Project Lead, Creative Direction, Data Curation.
- GOURI SANEESH: UI/UX Development, Recursive Logic, Feature Implementation, Documentation.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ at TinkerHub
