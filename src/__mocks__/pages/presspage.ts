import {default as news} from "../data/news.json";

export type NewsCard = {
  id: string;
  headline: string;
  pubDate: string;
  image: string;
  newsLink: string;
};

export const pressPageData = {
  getPressReleases: async (triggerError = false, startIndex = 0, endIndex = 36): Promise<{
    pressReleases: NewsCard[];
  }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (triggerError) {
          reject(new Error("Failed to fetch about data."));
        } else {
          
          const pressReleases: NewsCard[] = news;

          const paginatedData = pressReleases.slice(startIndex, endIndex);
          resolve({ pressReleases: paginatedData });
        }
      }, 200);
    });
  },
};