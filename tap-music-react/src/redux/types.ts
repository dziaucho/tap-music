export interface SoundState {
  soundToSearch: string;
  totalPages: number;
  currentPage: number;
  soundsId: number[];
  soundsNames: string[];
  soundsPreviews: string[];
  isLoading: boolean;
  error: string | null;
}

export interface RootStateType {
  sounds: SoundState;
}
