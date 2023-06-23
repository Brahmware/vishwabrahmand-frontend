import { default as brands } from "../data/brands.json";

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
          resolve({ brands });
        }
      }, 200);
    });
  },
};