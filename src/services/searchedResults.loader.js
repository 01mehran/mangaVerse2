import axios from "axios";

export const searchedMangasResults = async ({ url }) => {
  const query = url.searchParams.get("q") || "";
  const page = url.searchParams.get("page") || 1;

  try {
    const { data: response } = await axios(
      `https://api.jikan.moe/v4/manga?q=${query}&page=${page}&limit=24`,
    );

    return { searchedManga: response.data, pagination: response.pagination };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
