import { GameState, Screen } from "@game/GameState";

export class UI {
  private root = document.createElement("div");

  constructor(
    private onStart: () => void,
    private onSpin: () => void,
    private onBack: () => void,
  ) {
    document.body.appendChild(this.root);

    Object.assign(this.root.style, {
      position: "absolute",
      top: "20px",
      left: "20px",
      color: "white",
      fontFamily: "sans-serif",
      zIndex: "10",
    });
  }

  render(state: GameState) {
    this.root.innerHTML = "";

    const add = (text: string) => {
      const div = document.createElement("div");
      div.textContent = text;
      this.root.appendChild(div);
    };

    add(`Balance: ${state.balance.toFixed(2)}`);
    add(`Win: ${state.lastWin.toFixed(2)}`);

    if (state.screen === Screen.MAIN) {
      add("Wheel Game");

      const btn = this.button("Play", this.onStart);
      this.root.appendChild(btn);
    }

    if (state.screen === Screen.BONUS) {
      add("Press to spin");

      const btn = this.button(
        state.spinning ? "Spinning..." : "Spin",
        this.onSpin,
      );

      btn.disabled = state.spinning;
      this.root.appendChild(btn);
    }

    if (state.screen === Screen.RESULT) {
      add(`You won ${state.lastWin.toFixed(2)}`);

      const btn = this.button("Back", this.onBack);
      this.root.appendChild(btn);
    }
  }

  private button(label: string, action: () => void) {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.onclick = action;
    btn.style.marginTop = "10px";
    return btn;
  }
}
