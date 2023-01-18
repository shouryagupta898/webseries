import axios from "axios";
import { Cast } from "./models/Cast";
import { Show } from "./models/Show";

export const getShows = async () => {
  const resp = await axios.get<{ show: Show }[]>(
    "https://api.tvmaze.com/search/shows?q=witch"
  );
  return resp.data.map((items) => items.show);
};

export const getQuerySearch = async (keyword: string) => {
  const resp = await axios.get<{ show: Show }[]>(
    "https://api.tvmaze.com/search/shows?q=" + keyword
  );
  return resp.data.map((items) => items.show);
};
//   const shows = resp.data.map((items) => items.show);
//   const castShows = [];
//   for (let i = 0; i < shows.length; i++) {
//     castShows.push(getCast(shows[i]));
//   }
//   return Promise.all(castShows);
// };

// export const getCast = async (show: Show) => {
//   const resp = await axios.get(
//     " https://api.tvmaze.com/shows/" + show.id + "/cast"
//   );
//   const cast = resp.data.map((c: any) => c.person);
//   return { show, cast };
// };
export const getShowDetail = async (id: number) => {
  const resp = await axios.get("https://api.tvmaze.com/shows/" + id);
  return resp.data;
};

export const getCast = async (id: number) => {
  const resp = await axios.get<{ cast: Cast }[]>(
    " https://api.tvmaze.com/shows/" + id + "/cast"
  );
  return resp.data.map((c) => c.cast);
};
