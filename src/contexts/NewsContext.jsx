import { createContext, useState } from 'react';

import { news } from '../../cards-test';

export const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [newsData, setNewsData] = useState(news);

  return (
    <NewsContext.Provider
      value={{
        newsData,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
