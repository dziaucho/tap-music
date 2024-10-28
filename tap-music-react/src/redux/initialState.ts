import { SoundState } from "./types";

export const initialState: SoundState = {
  soundToSearch: "",
  totalPages: 0,
  currentPage: 1,
  soundsId: [],
  soundsNames: [],
  soundsPreviews: [],
  isLoading: false,
  error: null,
};
