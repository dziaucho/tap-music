import { SoundState } from "./types";

export const initialState: SoundState = {
  soundToSearch: "",
  count: 0,
  totalPages: 0,
  currentPage: 1,
  soundsId: [],
  soundsNames: [],
  soundsPreviews: [],
  isLoading: false,
  error: undefined,
};
