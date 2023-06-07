export type NewsCard = {
  id: string;
  headline: string;
  pubDate: string;
  image: string;
  newsLink: string;
};

export const pressPageData = {
  getPressReleases: async (triggerError = false, startIndex = 0, endIndex = 10): Promise<{
    pressReleases: NewsCard[];
  }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (triggerError) {
          reject(new Error("Failed to fetch about data."));
        } else {
          
          console.log("startIndex", startIndex);

          const pressReleases: NewsCard[] = [
            {
              id: "1",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 14, 2022",
              image: "https://64.media.tumblr.com/344ac5f0b7e26fdc02f69bb81d8f0705/316a69fa4df719b9-1e/s1280x1920/8a4c004e72df4152566d7cf90c179a7347d6db64.png",
              newsLink: "/press/1",
            },
            {
              id: "2",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 15, 2022",
              image: "https://cdn.pixabay.com/photo/2023/01/29/12/19/modi-7753158_1280.jpg",
              newsLink: "/press/2",
            },
            {
              id: "3",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 16, 2022",
              image: "https://i.ytimg.com/vi/1gyzZn032UY/maxresdefault.jpg",
              newsLink: "/press/3",
            },
            {
              id: "4",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 17, 2022",
              image: "https://cdn.pixabay.com/photo/2023/03/06/21/27/ai-generated-7834506_1280.jpg",
              newsLink: "/press/4",
            },
            {
              id: "5",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 18, 2022",
              image: "https://mir-s3-cdn-cf.behance.net/projects/404/2164db169303439.Y3JvcCwxMDcyLDgzOCwwLDE5Mw.jpg",
              newsLink: "/press/5",
            },
            {
              id: "6",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 19, 2022",
              image: "https://img.freepik.com/premium-photo/generative-ai-hindu-god-shiva-colorful-indian-hindu-god-shiva-hand-holding-trident-god-shiva-epic-pose-with-trishula-magic-hand-tshirt-print-poster-hindu-religious-art_620624-7706.jpg?w=2000",
              newsLink: "/press/6",
            },
            {
              id: "7",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 19, 2022",
              image: "https://img.freepik.com/premium-photo/ravan-monster-angry-with-crown-multiple-head-generative-ai_849906-687.jpg",
              newsLink: "/press/7",
            },
            {
              id: "8",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 19, 2022",
              image: "https://cdn.pixabay.com/photo/2023/03/15/16/10/shiva-7854865_1280.jpg",
              newsLink: "/press/8",
            },
            {
              id: "9",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 19, 2022",
              image: "https://cdn.pixabay.com/photo/2022/07/12/12/51/river-7317319_1280.jpg",
              newsLink: "/press/9",
            },
            {
              id: "10",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 19, 2022",
              image: "https://static.vecteezy.com/system/resources/previews/022/311/463/large_2x/famous-hindu-goddess-kali-mata-generative-ai-photo.jpeg",
              newsLink: "/press/10",
            },
            {
              id: "11",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 19, 2022",
              image: "https://preview.redd.it/created-this-from-the-prompt-lord-shiva-creating-the-v0-z6i1adr5ddw91.jpg?width=640&crop=smart&auto=webp&s=bf3e8bd66e7aebf3f87fbb2a153128dc38ca477e",
              newsLink: "/press/11",
            },
            {
              id: "12",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 19, 2022",
              image: "https://cdn.pixabay.com/photo/2019/12/27/16/02/hinduism-4722748_1280.jpg",
              newsLink: "/press/12",
            },
            {
              id: "13",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 20, 2022",
              image: "https://cdn.pixabay.com/photo/2016/04/05/11/04/india-1309206_1280.jpg",
              newsLink: "/press/13",
            },
            {
              id: "14",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 21, 2022",
              image: "https://cdn.pixabay.com/photo/2019/03/10/08/58/lord-4045702_1280.jpg",
              newsLink: "/press/14",
            },
            {
              id: "15",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 22, 2022",
              image: "https://cdn.pixabay.com/photo/2012/07/09/07/04/temple-51967_1280.jpg",
              newsLink: "/press/15",
            },
            {
              id: "16",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 23, 2022",
              image: "https://cdn.pixabay.com/photo/2023/05/20/17/36/coffee-8006955_640.jpg",
              newsLink: "/press/16",
            },
            {
              id: "17",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 24, 2022",
              image: "https://cdn.pixabay.com/photo/2023/02/05/00/07/krishna-7768434_1280.jpg",
              newsLink: "/press/17",
            },
            {
              id: "18",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 25, 2022",
              image: "https://cdn.pixabay.com/photo/2023/05/28/13/15/helicopter-8023696_640.jpg",
              newsLink: "/press/18",
            },
            {
              id: "19",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 26, 2022",
              image: "https://cdn.pixabay.com/photo/2022/10/06/10/05/adiyogi-7502361_1280.jpg",
              newsLink: "/press/19",
            },
            {
              id: "20",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 27, 2022",
              image: "https://english.cdn.zeenews.com/sites/default/files/2023/04/16/1184611-gift2-2.jpg",
              newsLink: "/press/20",
            },
            {
              id: "21",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 28, 2022",
              image: "https://www.pillaicenter.com/blog/wp-content/uploads/2022/05/Benefits-of-worshipping-Shiva-2.jpg",
              newsLink: "/press/21",
            },
            {
              id: "22",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 29, 2022",
              image: "https://cdn.pixabay.com/photo/2023/05/29/16/55/pie-8026562_1280.jpg",
              newsLink: "/press/22",
            },
            {
              id: "23",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JUNE 30, 2022",
              image: "https://i.pinimg.com/736x/71/5c/b9/715cb975aef7ddd2ba7af57960bd5e8c.jpg",
              newsLink: "/press/23",
            },
            {
              id: "24",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 1, 2022",
              image: "https://cdn.pixabay.com/photo/2023/05/24/18/32/ladybug-8015502_1280.jpg",
              newsLink: "/press/24",
            },
            {
              id: "25",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 2, 2022",
              image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9f3147a-2773-4bd7-8a79-91ccf99e7f73/dfr4dh7-c15da498-a9fa-4c15-9716-7e05020b2aba.jpg/v1/fill/w_894,h_894,q_70,strp/ai_generated_art_of_lord_shiva_s_fierce_form_by_manishkirankumaar_dfr4dh7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2Y5ZjMxNDdhLTI3NzMtNGJkNy04YTc5LTkxY2NmOTllN2Y3M1wvZGZyNGRoNy1jMTVkYTQ5OC1hOWZhLTRjMTUtOTcxNi03ZTA1MDIwYjJhYmEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.J5lMBlor6kPR2hADpnR_3vUyGwvlYu8DzM75_fetlMo",
              newsLink: "/press/25",
            },
            {
              id: "26",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 3, 2022",
              image: "https://cdn.pixabay.com/photo/2018/09/21/10/31/ganesh-3692779_1280.jpg",
              newsLink: "/press/26",
            },
            {
              id: "27",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 4, 2022",
              image: "https://cdn.pixabay.com/photo/2020/02/09/02/44/art-4831772_1280.jpg",
              newsLink: "/press/27",
            },
            {
              id: "28",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 5, 2022",
              image: "https://cdn.pixabay.com/photo/2023/05/29/18/07/grasses-8026782_640.jpg",
              newsLink: "/press/28",
            },
            {
              id: "29",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 6, 2022",
              image: "https://sm.mashable.com/mashable_in/photo/default/ai-gods-copy_cx59.jpg",
              newsLink: "/press/29",
            },
            {
              id: "30",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 7, 2022",
              image: "https://t4.ftcdn.net/jpg/05/54/05/67/360_F_554056707_5ks7Zm1kk0tBrwqx5sdmkYzFUao7WgbY.webp",
              newsLink: "/press/30",
            },
            {
              id: "31",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 8, 2022",
              image: "https://cdn.pixabay.com/photo/2021/12/30/16/45/bell-6904302_1280.jpg",
              newsLink: "/press/31",
            },
            {
              id: "32",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 9, 2022",
              image: "https://cdn.pixabay.com/photo/2022/06/14/12/01/tower-7261732_1280.jpg",
              newsLink: "/press/32",
            },
            {
              id: "33",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 10, 2022",
              image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Fgoddess-durga-images-sitting-lion-image-generative-ai_42319513.htm&psig=AOvVaw1x2_SvB4aiD5bgk_FD2kum&ust=1686220554084000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjniJv7sP8CFQAAAAAdAAAAABAG",
              newsLink: "/press/33",
            },
            {
              id: "34",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 11, 2022",
              image: "https://pbs.twimg.com/media/FBEZubRVEAI-pK6.jpg",
              newsLink: "/press/34",
            },
            {
              id: "35",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 12, 2022",
              image: "https://storage.googleapis.com/pai-images/b0575a1faf7d4da59cfe571f432deeb9.png",
              newsLink: "/press/35",
            },
            {
              id: "36",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 13, 2022",
              image: "https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_640.jpg",
              newsLink: "/press/36",
            },
            {
              id: "37",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 14, 2022",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4VhB2vWdoRKDtjnj18H9dgDR4MjThLWgRMCjskGB8iFjkgKIUWm3czNRWZX69_77lmo&usqp=CAU",
              newsLink: "/press/37",
            },
            {
              id: "38",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 15, 2022",
              image: "https://storage.prompt-hunt.workers.dev/clg3w2lp30001kx08v85izc0v_1",
              newsLink: "/press/38",
            },
            {
              id: "39",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 16, 2022",
              image: "https://w0.peakpx.com/wallpaper/152/632/HD-wallpaper-temple-of-god-ai-art.jpg",
              newsLink: "/press/39",
            },
            {
              id: "40",
              headline: "IMS and SAMSUNG partner up to raise awareness of Tiger Conservation in Karnataka.",
              pubDate: "JULY 17, 2022",
              image: "https://static.vecteezy.com/system/resources/previews/024/065/114/original/majestic-portrait-of-hanuman-honoring-the-indian-monkey-god-s-courage-and-devotion-ai-generated-free-photo.jpg",
              newsLink: "/press/40",
            },
          ];

          const paginatedData = pressReleases.slice(startIndex, endIndex);
          resolve({ pressReleases: paginatedData });
        }
      }, 1000);
    });
  },
};