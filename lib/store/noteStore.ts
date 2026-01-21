import { create } from "zustand";

interface NoteDraft {
  title: string;
  content: string;
  tag: string;
}

interface NoteState {
  noteDraft: NoteDraft;
  updateDraft: (update: Partial<NoteDraft>) => void;
  resetDraft: () => void;
}

const initialDraft: NoteDraft = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useNoteStore = create<NoteState>((set) => ({
  noteDraft: initialDraft,

  updateDraft: (update) =>
    set((state) => ({
      noteDraft: { ...state.noteDraft, ...update },
    })),

  resetDraft: () => set({ noteDraft: initialDraft }),
}));
