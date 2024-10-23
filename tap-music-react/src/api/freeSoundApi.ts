import { Composition, ApiResponse } from "../types/types";

class FreesoundAPI {
  private apiKey: string;
  private baseUrl: string;
  private currentPage: number;

  constructor(apiKey: string, baseUrl: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.currentPage = 1;
  }

  async fetch(
    query: string,
    page: number = this.currentPage,
    pageSize: number = 5
  ): Promise<ApiResponse> {
    const url = `${this.baseUrl}?query=${encodeURIComponent(
      query
    )}&page=${page}&page_size=${pageSize}&token=${this.apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      return {
        sounds: [],
        count: 0,
      };
    }
    const data = await response.json();
    const soundsWithPreviews: Composition[] = [];
    for (const sound of data.results) {
      const details = await this.fetchSoundDetails(sound.id);
      if (details.previews && details.previews["preview-hq-mp3"]) {
        soundsWithPreviews.push(details);
      }
    }
    return {
      sounds: soundsWithPreviews,
      count: data.count,
    };
  }

  getTotalPages(totalCount: number, itemsPerPage: number = 5): number {
    return Math.ceil(totalCount / itemsPerPage);
  }

  private async fetchSoundDetails(soundId: number): Promise<Composition> {
    const url = `https://freesound.org/apiv2/sounds/${soundId}/?token=${this.apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`error: ${response.status}`);
      }
      const soundDetails = await response.json();
      return soundDetails;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  setPage(page: number): void {
    this.currentPage = page;
  }
}

export default FreesoundAPI;
