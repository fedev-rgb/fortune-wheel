export enum Screen {
  MAIN,
  BONUS,
  RESULT,
}

export interface GameState {
  screen: Screen;
  balance: number;
  lastWin: number;
  spinning: boolean;
}
