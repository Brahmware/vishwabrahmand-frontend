import {default as about} from "../data/about.json";
import {default as leaders} from "../data/leaders.json";
import {default as allies} from "../data/allies.json";
import {default as documents} from "../data/documents.json";

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
          const aboutData: any = about;

          const leadersData: Leaders = leaders;

          const alliesData: Allies = allies;
          
          const keyDocumentsData: KeyDocuments = documents;

          resolve({ aboutData, leadersData, alliesData, keyDocumentsData });
        }
      }, 1500); // Simulating a delay of 2 seconds
    });
  },
};
