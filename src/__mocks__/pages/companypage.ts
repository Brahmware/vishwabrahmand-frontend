export type DataDisplayType = "block" | "list";

export type AboutDatum = {
  displayType: DataDisplayType,
  paragraphTitle: string,
  paragraphBody?: string,
  paragraphList?: string[],
};

export type AboutData = AboutDatum[];

export const companyPageData = {
  getAboutData: async (triggerError = false) => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        if (triggerError) {
          reject(new Error("Failed to fetch about data."));
        } else {
          const aboutData: AboutData = [
            {
              displayType: "block",
              paragraphTitle: "Empowering humanity towards sustainable innovation and development",
              paragraphBody: "Vishwa Brahmand is a visionary organisation dedicated to advancing humanity towards sustainable innovation and development. With the firm idea that every living organism deserves equal treatment and opportunity, we aspire to build a world in which every entity's needs are satisfied in a sustainable and responsible manner. Our dedication to global responsibility, innovation, and social service is vital to our goal. The organisation is committed to being a leader in implementing efficient and responsible approaches in everyday living and production. We think that everything is interconnected, and as such, the company's efforts are focused on establishing a sustainable world for all living things. We have chosen communication, transportation, energy, space exploration, and biological engineering as major areas in which we can make a significant contribution to attaining our objectives."
            },
            {
              displayType: "block",
              paragraphTitle: "Vision",
              paragraphBody: "Becoming the organisation responsible for safeguarding human existence in the process of altering the direction of human evolution towards constructive development and radical innovation."
            },
            {
              displayType: "list",
              paragraphTitle: "Mission",
              paragraphList: [
                "Being and developing globally responsible individuals who make a difference.", 
                "Providing its residents with a sustainable world in which every organism's needs are treated and met equitably. Starting the development process that will ensure that humanity does not fail as a civilization. We believe it is all connected.", 
                "To be the best in terms of Social Values and Social Service; to help every existing entity recognise their full potential, to cultivate an endearing network of associates, and to establish mutual respect.", 
                "To become the world's foundational organisation in terms of using efficient and responsible approaches in daily life and production."
              ],
            },
          ];
          resolve(aboutData);
        }
      }, 1500); // Simulating a delay of 2 seconds
    });
  }
};
