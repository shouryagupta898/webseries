import axios from "axios";
import { Show } from "./models/Show";

export const getShows = () => {
  return axios
    .get<{ show: Show }[]>("https://api.tvmaze.com/search/shows?q=witch")
    .then((resp) => resp.data.map((items) => items.show));
};

export const getShowsSearch = (keyword: string) => {
  return axios
    .get<{ show: Show }[]>("https://api.tvmaze.com/search/shows?q=" + keyword)
    .then((resp) => resp.data.map((items) => items.show));
};
