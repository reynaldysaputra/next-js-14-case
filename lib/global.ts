const url1 = "https://api.jikan.moe/v4/anime";

export const getMovies = async (query: string) => {
  try {
    const response = await fetch(`${url1}?limit=10&q=${query}`, {
      method: "GET",
      cache: "no-store",
    })

    return response.json();
  } catch (error) {
    return error;
  }
}