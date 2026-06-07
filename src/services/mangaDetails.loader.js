// Libraries;
import axios from "axios";

export const mangaDetails = async ({ params }) => {
  const { id } = params;

  try {
    const { data: response } = await axios(
      `https://api.jikan.moe/v4/manga/${id}`,
    );

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
