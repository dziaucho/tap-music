import axios from "axios";

const API_KEY = "qVQelC7P3hEJ5xqbKQdWY38YXfnxtRx5vzgsUx4u";
const SEARCH_URL = "https://freesound.org/apiv2/search/text/";
const SOUNDS_URL = "https://freesound.org/apiv2/sounds/";

const apiSearch = axios.create({
  baseURL: SEARCH_URL,
});

interface resultInterface {
  id: number;
  name: string;
}

export async function getSounds(
  query: string,
  page: number,
): Promise<[number, number[], string[]]> {
  return apiSearch
    .get("", {
      params: {
        query: query,
        page: page,
        page_size: 5,
        token: API_KEY,
      },
    })
    .then((response) => {
      const soundsId: number[] = [];
      const soundsNames: string[] = [];

      response.data.results.forEach((result: resultInterface) => {
        soundsId.push(result.id);
        soundsNames.push(result.name);
      });

      return [response.data.count, soundsId, soundsNames];
    });
}

const apiSounds = axios.create({
  baseURL: SOUNDS_URL,
});

export async function getSoundInfo(soundId: number): Promise<string> {
  const url = `${soundId}/`;

  return apiSounds
    .get(url, {
      params: {
        token: API_KEY,
      },
    })
    .then((response) => {
      return response.data.previews["preview-hq-mp3"];
    });
}
