const { VITE_BASE_URL, VITE_ENV, VITE_API_KEY } = import.meta.env;

class NewsApi {
  constructor({ baseURL, authorizationKey }) {
    this._baseURL = baseURL;
    this._authorizationKey = authorizationKey;
  }

  async getNews({ keywords, lastWeek, today }) {
    try {
      const res = await fetch(
        `${this._baseURL}q=${keywords}&from=${lastWeek}&to=${today}&pageSize=100`,
        {
          method: 'GET',
          headers: {
            Authorization: `${this._authorizationKey}`,
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
  authorizationKey: VITE_API_KEY,
});
