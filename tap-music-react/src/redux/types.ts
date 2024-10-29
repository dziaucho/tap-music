export interface SoundState {
  soundToSearch: string;
  count: number;
  totalPages: number;
  currentPage: number;
  soundsId: number[];
  soundsNames: string[];
  soundsPreviews: string[];
  isLoading: boolean;
  error: string | undefined;
}

export interface RootStateType {
  sounds: SoundState;
}
