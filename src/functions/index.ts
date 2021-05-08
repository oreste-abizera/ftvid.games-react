import axios from "axios";
import url from "../utils/url";

export async function loadVideos(page: Number) {
  let response = await axios.get(`${url}/videos?page=${page}`);
  if (response) {
    if (response.data) {
      return response.data.matches;
    }
  }
  return [];
}
