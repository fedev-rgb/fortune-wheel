# Dyvo Gaming Test Assignment (Wheel Game)

## How to run locally (IMPORTANT)

To properly review the project, you need to download it locally and run the production preview build.

### 1. Clone the repository

```bash
git clone https://github.com/fedev-rgb/fortune-wheel.git
cd fortune-wheel
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the project

```bash
npm run build
```

### 4. Run development mode

```bash
npm run dev
```

### 5. Run production preview

```bash
npm run preview
```

Then open the URL shown in the terminal (usually `http://localhost:4173`).

**This is the correct mode to evaluate the project. Please do not use `dev` mode for review.**

---

## Description

Create a simple wheel game in **TypeScript** using the provided project as a basis.

- Please implement animations using the **Canvas API (not CSS)**.
- You may use the provided assets and sounds (you don't have to use all of them).
- Send us a ZIP file containing the source code or a link to your GitHub repository.
- The game should meet the requirements listed below.

---

## Game Requirements

### UI / Flow

A simple UI (credit balance, play button, and win amount fields) is updated during gameplay.

A game title and a play button that triggers the transition to the bonus screen.

### Bonus Screen

The bonus screen consists of:

- **"Press to spin"** message

- **The Wheel itself:**
  - consists of 8 segments
  - each segment displays a possible "Win amount"
  - the wheel stop position is determined by below weights:

| Win amount | Weight |
|------------|--------|
| 2.00       | 200    |
| 50.00      | 76     |
| 500.00     | 12     |
| 2.00       | 200    |
| 100.00     | 62     |
| 50.00      | 81     |
| 2.00       | 200    |
| 75.00      | 74     |

- The wheel stop animation
- The win presentation (**"You won {x}"** message)

### Win State

The balance in the UI is incremented by the amount won.

### Navigation

A simple transition back to the first (base) screen.

---

## Notes

- You are free to add any extra features, such as particle animations, tweens, etc.
- Feel free to change or rewrite any part of the base project.
- The goal is to show us how you structure your project and animate the wheel.
```