import { default as news } from "../data/news.json";

export type NewsCard = {
  id: string;
  headline: string;
  keywords?: string[];
  pubDate: string;
  image: string;
  newsLink: string;
  lang?: string;
  contentLink?: string;
  downlodable?: {
    fileName: string;
    file: string;
  };
};

const sortDESC = (a: NewsCard, b: NewsCard) => {
  const dateA = new Date(a.pubDate);
  const dateB = new Date(b.pubDate);
  return dateB.getTime() - dateA.getTime();
};

const sortASC = (a: NewsCard, b: NewsCard) => {
  const dateA = new Date(a.pubDate);
  const dateB = new Date(b.pubDate);
  return dateA.getTime() - dateB.getTime();
};

export interface GetNewsReleasesArgs {
  triggerError?: boolean;
  startIndex?: number;
  endIndex?: number;
  sort?: "ASC" | "DESC";
}

export const newsPageData = {
  getNewsReleases: async (
    {
      triggerError = false,
      startIndex = 0,
      endIndex = 36,
      sort = "DESC",
    }: GetNewsReleasesArgs
  ): Promise<{
    newsReleases: NewsCard[];
  }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (triggerError) {
          reject(new Error("Failed to fetch about data."));
        } else {

          const newsReleases: NewsCard[] = news;

          if (sort === "ASC") {
            newsReleases.sort(sortASC)
          } else {
            newsReleases.sort(sortDESC);
          }

          const paginatedData = newsReleases.slice(startIndex, endIndex);
          resolve({ newsReleases: paginatedData });
        }
      }, 200);
    });
  },
};

export const getSpecificNewsRelease = async (id: string): Promise<NewsCard> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newsReleases: NewsCard[] = news;
      const newsRelease = newsReleases.find((newsRelease) => newsRelease.id === id);
      if (newsRelease) {
        resolve(newsRelease);
      } else {
        reject(new Error("Failed to fetch about data."));
      }
    }, 200);
  });
};