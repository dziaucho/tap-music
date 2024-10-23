export interface Composition {
  id: number;
  name: string;
  previews?: {
    "preview-hq-mp3": string;
  };
}

export interface ApiResponse {
  sounds: Composition[];
  count: number;
}

export interface SoundState {
  sounds: Composition[];
  loading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
}
