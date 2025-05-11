import { createContext, useState } from 'react';

import { newsClient } from '../utils/NewsApi';

export const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [newsData, setNewsData] = useState([]);

  const [isSent, setIsSent] = useState(false);
  const [isWaitingReply, setIsWaitingReply] = useState(false);
  const [isNewsError, setIsNewsError] = useState(false);

  async function handleNewsResearch(keywords) {
    setIsSent(true);
    setIsWaitingReply(true);
    setIsNewsError(false);

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
      setIsNewsError(true);
      setNewsData([]);
    } finally {
      setIsWaitingReply(false);
    }
  }

  return (
    <NewsContext.Provider
      value={{
        newsData,
        isSent,
        isWaitingReply,
        isNewsError,
        setNewsData,
        handleNewsResearch,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
