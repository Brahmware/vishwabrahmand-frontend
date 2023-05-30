export type Brand = {
  id: string;
  name: string;
  description: string;
  image: string;
  website: string;
};

export const brandsPageData = {
  getBrands: async (triggerError = false): Promise<{
    brands: Brand[];
  }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (triggerError) {
          reject(new Error("Failed to fetch about data."));
        } else {
          resolve({
            brands: [
              {
                id: "1",
                name: "Brahmware",
                description: "Brahmware, the digital and information technology wing of Vishwa Brahmand, plays a crucial role in driving innovation and efficiency across all brands and daughter companies within the Vishwa Brahmand ecosystem. With a strong commitment to using technology for the betterment of society, Brahmware creates and maintains unified technologies that enable seamless collaboration and digital advancements. Beyond serving internal stakeholders, Brahmware also develops public products on a non-profit basis, leveraging technology to address societal challenges and foster positive change. Join us as we harness the power of technology to transform the world and create a more inclusive and sustainable future for all.",
                image: "https://picsum.photos/200",
                website: "https://www.google.com",
              },
              {
                id: "2",
                name: "Brahmcast",
                description: "Welcome to Brahmcast, the pioneering platform that is set to redefine the landscape of media production. Designed to bring creators, studios, and employers together, Brahmcast provides a dynamic space for individuals and businesses to showcase their talents, collaborate on projects, and unlock unparalleled opportunities. Our cutting-edge technology enables creators to sell their skills, studios to rent out their assets, and employers to connect with top-tier talent. With a strong focus on innovation and community-building, Brahmcast is poised to make India the global hub of media production. Join us on this exciting journey and be a part of the revolution at Brahmcast.",
                image: "https://picsum.photos/200",
                website: "https://www.google.com",
              },
              {
                id: "3",
                name: "Indian Media Syndicate",
                description: "Indian Media Syndicate envisions a new era of scientific storytelling and exploration, unearthing Global history, groundbreaking research, and technological advancements. Our dedication to universal intellect breaks linguistic barriers, fostering a global community fueled by curiosity and innovation. We bridge academia, industry, and the public, showcasing India's scientific contributions. Advanced language processing and translation technologies ensure no brilliant idea is lost. By empowering scientists, researchers, and explorers through our media channels, we reshape the future of scientific media. This is a transformative revolution, to rewrite narratives, and propel India toward a future where science and innovation thrive!",
                image: "https://picsum.photos/200",
                website: "https://www.google.com",
              },
              {
                id: "4",
                name: "Indian Media Syndicate",
                description: "Indian Media Syndicate envisions a new era of scientific storytelling and exploration, unearthing Global history, groundbreaking research, and technological advancements. Our dedication to universal intellect breaks linguistic barriers, fostering a global community fueled by curiosity and innovation. We bridge academia, industry, and the public, showcasing India's scientific contributions. Advanced language processing and translation technologies ensure no brilliant idea is lost. By empowering scientists, researchers, and explorers through our media channels, we reshape the future of scientific media. This is a transformative revolution, to rewrite narratives, and propel India toward a future where science and innovation thrive!",
                image: "https://picsum.photos/200",
                website: "https://www.google.com",
              },
              {
                id: "5",
                name: "Indian Media Syndicate",
                description: "Indian Media Syndicate envisions a new era of scientific storytelling and exploration, unearthing Global history, groundbreaking research, and technological advancements. Our dedication to universal intellect breaks linguistic barriers, fostering a global community fueled by curiosity and innovation. We bridge academia, industry, and the public, showcasing India's scientific contributions. Advanced language processing and translation technologies ensure no brilliant idea is lost. By empowering scientists, researchers, and explorers through our media channels, we reshape the future of scientific media. This is a transformative revolution, to rewrite narratives, and propel India toward a future where science and innovation thrive!",
                image: "https://picsum.photos/200",
                website: "https://www.google.com",
              },
              {
                id: "6",
                name: "Indian Media Syndicate",
                description: "Indian Media Syndicate envisions a new era of scientific storytelling and exploration, unearthing Global history, groundbreaking research, and technological advancements. Our dedication to universal intellect breaks linguistic barriers, fostering a global community fueled by curiosity and innovation. We bridge academia, industry, and the public, showcasing India's scientific contributions. Advanced language processing and translation technologies ensure no brilliant idea is lost. By empowering scientists, researchers, and explorers through our media channels, we reshape the future of scientific media. This is a transformative revolution, to rewrite narratives, and propel India toward a future where science and innovation thrive!",
                image: "https://picsum.photos/200",
                website: "https://www.google.com",
              },
              {
                id: "7",
                name: "Indian Media Syndicate",
                description: "Indian Media Syndicate envisions a new era of scientific storytelling and exploration, unearthing Global history, groundbreaking research, and technological advancements. Our dedication to universal intellect breaks linguistic barriers, fostering a global community fueled by curiosity and innovation. We bridge academia, industry, and the public, showcasing India's scientific contributions. Advanced language processing and translation technologies ensure no brilliant idea is lost. By empowering scientists, researchers, and explorers through our media channels, we reshape the future of scientific media. This is a transformative revolution, to rewrite narratives, and propel India toward a future where science and innovation thrive!",
                image: "https://picsum.photos/200",
                website: "https://www.google.com",
              },
              {
                id: "8",
                name: "Indian Media Syndicate",
                description: "Indian Media Syndicate envisions a new era of scientific storytelling and exploration, unearthing Global history, groundbreaking research, and technological advancements. Our dedication to universal intellect breaks linguistic barriers, fostering a global community fueled by curiosity and innovation. We bridge academia, industry, and the public, showcasing India's scientific contributions. Advanced language processing and translation technologies ensure no brilliant idea is lost. By empowering scientists, researchers, and explorers through our media channels, we reshape the future of scientific media. This is a transformative revolution, to rewrite narratives, and propel India toward a future where science and innovation thrive!",
                image: "https://picsum.photos/200",
                website: "https://www.google.com",
              },
              {
                id: "9",
                name: "Indian Media Syndicate",
                description: "Indian Media Syndicate envisions a new era of scientific storytelling and exploration, unearthing Global history, groundbreaking research, and technological advancements. Our dedication to universal intellect breaks linguistic barriers, fostering a global community fueled by curiosity and innovation. We bridge academia, industry, and the public, showcasing India's scientific contributions. Advanced language processing and translation technologies ensure no brilliant idea is lost. By empowering scientists, researchers, and explorers through our media channels, we reshape the future of scientific media. This is a transformative revolution, to rewrite narratives, and propel India toward a future where science and innovation thrive!",
                image: "https://picsum.photos/200",
                website: "https://www.google.com",
              },
              {
                id: "10",
                name: "Indian Media Syndicate",
                description: "Indian Media Syndicate envisions a new era of scientific storytelling and exploration, unearthing Global history, groundbreaking research, and technological advancements. Our dedication to universal intellect breaks linguistic barriers, fostering a global community fueled by curiosity and innovation. We bridge academia, industry, and the public, showcasing India's scientific contributions. Advanced language processing and translation technologies ensure no brilliant idea is lost. By empowering scientists, researchers, and explorers through our media channels, we reshape the future of scientific media. This is a transformative revolution, to rewrite narratives, and propel India toward a future where science and innovation thrive!",
                image: "https://picsum.photos/200",
                website: "https://www.google.com",
              },
              {
                id: "11",
                name: "Indian Media Syndicate",
                description: "Indian Media Syndicate envisions a new era of scientific storytelling and exploration, unearthing Global history, groundbreaking research, and technological advancements. Our dedication to universal intellect breaks linguistic barriers, fostering a global community fueled by curiosity and innovation. We bridge academia, industry, and the public, showcasing India's scientific contributions. Advanced language processing and translation technologies ensure no brilliant idea is lost. By empowering scientists, researchers, and explorers through our media channels, we reshape the future of scientific media. This is a transformative revolution, to rewrite narratives, and propel India toward a future where science and innovation thrive!",
                image: "https://picsum.photos/200",
                website: "https://www.google.com",
              },
              {
                id: "12",
                name: "Indian Media Syndicate",
                description: "Indian Media Syndicate envisions a new era of scientific storytelling and exploration, unearthing Global history, groundbreaking research, and technological advancements. Our dedication to universal intellect breaks linguistic barriers, fostering a global community fueled by curiosity and innovation. We bridge academia, industry, and the public, showcasing India's scientific contributions. Advanced language processing and translation technologies ensure no brilliant idea is lost. By empowering scientists, researchers, and explorers through our media channels, we reshape the future of scientific media. This is a transformative revolution, to rewrite narratives, and propel India toward a future where science and innovation thrive!",
                image: "https://picsum.photos/200",
                website: "https://www.google.com",
              },
            ],
          });
        }
      }, 1000);
    });
  },
};