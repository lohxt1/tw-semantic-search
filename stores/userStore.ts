import create from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserState {
  userId: string;
  setUserId: (val: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userId: null,
      setUserId: (val) => {
        set((state) => ({ userId: val }));
      },
    }),
    {
      name: "user",
      //   storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
