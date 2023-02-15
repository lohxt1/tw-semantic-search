import create from "zustand";

interface ModeState {
  darkMode: boolean;
  toggleMode: () => void;
}

export const useModeStore = create<ModeState>((set) => ({
  darkMode: false,
  toggleMode: () => {
    set((state) => ({ darkMode: !state.darkMode }));
  },
}));
