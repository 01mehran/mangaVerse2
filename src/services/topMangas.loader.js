// Libraries;
import axios from "axios";

export const topMangaList = async ({ url }) => {
  const page = url.searchParams.get("page") || 1;

  try {
    const { data: response } = await axios(
      `https://api.jikan.moe/v4/top/manga?page=${page}&limit=24`,
    );
    return { topMangas: response.data, pagination: response.pagination };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
