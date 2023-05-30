export type DataDisplayType = "block" | "list";

export type AboutDatum = {
  displayType: DataDisplayType;
  paragraphTitle: string;
  paragraphBody?: string;
  paragraphList?: string[];
};

export type AboutData = AboutDatum[];

export type Leader = {
  name: string;
  designation: string;
  imageURL: string;
  socialHandles: {
    facebook: string;
    twitter: string;
    youtube: string;
    instagram: string;
  };
};

export type Leaders = Leader[];

export type Ally = {
  name: string;
  imageURL: string;
  areaOfService: string;
  socialHandles: {
    facebook: string;
    twitter: string;
    youtube: string;
    instagram: string;
  };
};

export type Allies = Ally[];

type KeyDocument = {
  documentName: string;
  documentURL: string;
};

export type KeyDocuments = KeyDocument[];

export const companyPageData = {
  getAboutData: async (triggerError = false):
    Promise<{
      aboutData: AboutData;
      leadersData: Leaders;
      alliesData: Allies;
      keyDocumentsData: KeyDocuments;
    }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (triggerError) {
          reject(new Error("Failed to fetch about data."));
        } else {
          const aboutData: AboutData = [
            {
              displayType: "block",
              paragraphTitle: "Empowering humanity towards sustainable innovation and development",
              paragraphBody: "Vishwa Brahmand is a visionary organisation dedicated to advancing humanity towards sustainable innovation and development. With the firm idea that every living organism deserves equal treatment and opportunity, we aspire to build a world in which every entity's needs are satisfied in a sustainable and responsible manner. Our dedication to global responsibility, innovation, and social service is vital to our goal. The organisation is committed to being a leader in implementing efficient and responsible approaches in everyday living and production. We think that everything is interconnected, and as such, the company's efforts are focused on establishing a sustainable world for all living things. We have chosen communication, transportation, energy, space exploration, and biological engineering as major areas in which we can make a significant contribution to attaining our objectives.",
            },
            {
              displayType: "block",
              paragraphTitle: "Vision",
              paragraphBody: "Becoming the organisation responsible for safeguarding human existence in the process of altering the direction of human evolution towards constructive development and radical innovation.",
            },
            {
              displayType: "list",
              paragraphTitle: "Mission",
              paragraphList: [
                "Being and developing globally responsible individuals who make a difference.",
                "Providing its residents with a sustainable world in which every organism's needs are treated and met equitably. Starting the development process that will ensure that humanity does not fail as a civilization. We believe it is all connected.",
                "To be the best in terms of Social Values and Social Service; to help every existing entity recognize their full potential, to cultivate an endearing network of associates, and to establish mutual respect.",
                "To become the world's foundational organisation in terms of using efficient and responsible approaches in daily life and production.",
              ],
            },
          ];

          const leadersData: Leaders = [
            {
              name: "Jane Smith",
              designation: "CTO",
              imageURL: "https://images.unsplash.com/photo-1628107861770-88bb123e5388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1996&q=80",
              socialHandles: {
                facebook: "janesmith_facebook",
                twitter: "janesmith_twitter",
                youtube: "janesmith_youtube",
                instagram: "janesmith_instagram",
              },
            },
            {
              name: "Michael Johnson",
              designation: "CFO",
              imageURL: "https://images.unsplash.com/photo-1558440762-817cf5f0dbd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
              socialHandles: {
                facebook: "michaeljohnson_facebook",
                twitter: "michaeljohnson_twitter",
                youtube: "michaeljohnson_youtube",
                instagram: "michaeljohnson_instagram",
              },
            },
            {
              name: "Mary Johnson",
              designation: "CMO",
              imageURL: "https://images.unsplash.com/photo-1684272672218-49205e315a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              socialHandles: {
                facebook: "maryjohnson_facebook",
                twitter: "maryjohnson_twitter",
                youtube: "maryjohnson_youtube",
                instagram: "maryjohnson_instagram",
              },
            },
            {
              name: "Jennifer Lee",
              designation: "COO",
              imageURL: "https://images.unsplash.com/photo-1520604049744-5501828d30bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
              socialHandles: {
                facebook: "jenniferlee_facebook",
                twitter: "jenniferlee_twitter",
                youtube: "jenniferlee_youtube",
                instagram: "jenniferlee_instagram",
              },
            },
            {
              name: "Emily Wilson",
              designation: "CIO",
              imageURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
              socialHandles: {
                facebook: "emilywilson_facebook",
                twitter: "emilywilson_twitter",
                youtube: "emilywilson_youtube",
                instagram: "emilywilson_instagram",
              },
            },
            {
              name: "John Doe",
              designation: "CEO",
              imageURL: "https://images.unsplash.com/photo-1524666041070-9d87656c25bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
              socialHandles: {
                facebook: "johndoe_facebook",
                twitter: "johndoe_twitter",
                youtube: "johndoe_youtube",
                instagram: "johndoe_instagram",
              },
            },
            {
              name: "Jessica Davis",
              designation: "CSO",
              imageURL: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
              socialHandles: {
                facebook: "jessicadavis_facebook",
                twitter: "jessicadavis_twitter",
                youtube: "jessicadavis_youtube",
                instagram: "jessicadavis_instagram",
              },
            },
            {
              name: "Sarah Anderson",
              designation: "CDO",
              imageURL: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1944&q=80",
              socialHandles: {
                facebook: "sarahanderson_facebook",
                twitter: "sarahanderson_twitter",
                youtube: "sarahanderson_youtube",
                instagram: "sarahanderson_instagram",
              },
            },
          ];

          const alliesData: Allies = [
            {
              name: "Brahmware",
              areaOfService: "Technology Development",
              imageURL: "https://www.svgrepo.com/show/233209/circle-oval.svg",
              socialHandles: {
                facebook: "janesmith_facebook",
                twitter: "janesmith_twitter",
                youtube: "janesmith_youtube",
                instagram: "janesmith_instagram",
              },
            },
            {
              name: "Brahmcast",
              areaOfService: "Studio",
              imageURL: "https://www.svgrepo.com/show/233264/circle-oval.svg",
              socialHandles: {
                facebook: "michaeljohnson_facebook",
                twitter: "michaeljohnson_twitter",
                youtube: "michaeljohnson_youtube",
                instagram: "michaeljohnson_instagram",
              },
            },
            {
              name: "Indian Media Syndicate",
              areaOfService: "Media Production Network",
              imageURL: "https://www.svgrepo.com/show/233238/circle-oval.svg",
              socialHandles: {
                facebook: "maryjohnson_facebook",
                twitter: "maryjohnson_twitter",
                youtube: "maryjohnson_youtube",
                instagram: "maryjohnson_instagram",
              },
            },
          ];
          
          const keyDocumentsData: KeyDocuments = [
            {
              documentName: "Investor Report",
              documentURL: "https://www.svgrepo.com/show/233209/circle-oval.svg",
            },
            {
              documentName: "Sustainability Report",
              documentURL: "https://www.svgrepo.com/show/233264/circle-oval.svg",
            },
            {
              documentName: "Annual Financial Report",
              documentURL: "https://www.svgrepo.com/show/233264/circle-oval.svg",
            },
            {
              documentName: "Global Inclusion Report",
              documentURL: "https://www.svgrepo.com/show/233264/circle-oval.svg",
            },
            {
              documentName: "Social Impact Report",
              documentURL: "https://www.svgrepo.com/show/233264/circle-oval.svg",
            },
          ];

          resolve({ aboutData, leadersData, alliesData, keyDocumentsData });
        }
      }, 1500); // Simulating a delay of 2 seconds
    });
  },
};
