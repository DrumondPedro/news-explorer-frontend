const { VITE_BASE_URL, VITE_ENV, API_KEY } = import.meta.env;

class NewsApi {
  constructor({ baseURL }) {
    this._baseURL = baseURL;
  }

  async getNews({ keywords, lastWeek, today }) {
    try {
      const res = await fetch(
        `${this._baseURL}q=${keywords}&from=${lastWeek}&to=${today}&pageSize=100`,
        {
          method: 'GET',
          headers: {
            Authorization: `${API_KEY}`,
          },
        }
      );

      if (res.status !== 200) {
        throw new Error(`${res.status} - ${res.type}`);
      }

      return res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export const newsClient = new NewsApi({
  baseURL: `${
    VITE_ENV === 'production'
      ? VITE_BASE_URL
      : 'https://newsapi.org/v2/everything?'
  }`,
});
