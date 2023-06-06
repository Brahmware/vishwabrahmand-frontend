export type NewsCard = {
  id: string;
  headline: string;
  pubDate: string;
  image: string;
  newsLink: string;
};

export const pressPageData = {
  getPressReleases: async (triggerError = false): Promise<{
    pressReleases: NewsCard[];
  }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (triggerError) {
          reject(new Error("Failed to fetch about data."));
        } else {
          resolve({
            pressReleases: [
              {
                id: "1",
                headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
                pubDate: "JUNE 14, 2022",
                image: "https://picsum.photos/200",
                newsLink: "/press/1",
              },
              {
                id: "2",
                headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
                pubDate: "JUNE 15, 2022",
                image: "https://picsum.photos/200",
                newsLink: "/press/2",
              },
              {
                id: "3",
                headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
                pubDate: "JUNE 16, 2022",
                image: "https://picsum.photos/200",
                newsLink: "/press/3",
              },
              {
                id: "4",
                headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
                pubDate: "JUNE 17, 2022",
                image: "https://picsum.photos/200",
                newsLink: "/press/4",
              },
              {
                id: "5",
                headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
                pubDate: "JUNE 18, 2022",
                image: "https://picsum.photos/200",
                newsLink: "/press/5",
              },
              {
                id: "6",
                headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
                pubDate: "JUNE 19, 2022",
                image: "https://picsum.photos/200",
                newsLink: "/press/6",
              },
              {
                id: "7",
                headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
                pubDate: "JUNE 19, 2022",
                image: "https://picsum.photos/200",
                newsLink: "/press/7",
              },
              {
                id: "8",
                headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
                pubDate: "JUNE 19, 2022",
                image: "https://picsum.photos/200",
                newsLink: "/press/8",
              },
              {
                id: "9",
                headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
                pubDate: "JUNE 19, 2022",
                image: "https://picsum.photos/200",
                newsLink: "/press/9",
              },
              {
                id: "10",
                headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
                pubDate: "JUNE 19, 2022",
                image: "https://picsum.photos/200",
                newsLink: "/press/10",
              },
              {
                id: "11",
                headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
                pubDate: "JUNE 19, 2022",
                image: "https://picsum.photos/200",
                newsLink: "/press/11",
              },
              {
                id: "12",
                headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
                pubDate: "JUNE 19, 2022",
                image: "https://picsum.photos/200",
                newsLink: "/press/12",
              },
            ],
          });
        }
      }, 1000);
    });
  },
};