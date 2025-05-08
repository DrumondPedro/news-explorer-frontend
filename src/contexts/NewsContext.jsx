import { createContext, useState } from 'react';

import { newsClient } from '../utils/NewsApi';

export const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [newsData, setNewsData] = useState([]);

  async function handleNewsResearch(keywords) {
    const today = new Date();
    const lastWeek = new Date(today - 604800000);
    const todayISOS = today.toISOString().substring(0, 10);
    const lastWeekISOS = lastWeek.toISOString().substring(0, 10);

    try {
      const data = await newsClient.getNews({
        keywords,
        lastWeek: lastWeekISOS,
        today: todayISOS,
      });
      setNewsData(data.articles);
    } catch (error) {
      console.error('GET - /newsapi -', error);
      setNewsData([]);
    }
  }

  return (
    <NewsContext.Provider
      value={{
        newsData,
        handleNewsResearch,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
