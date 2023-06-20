import { AxiosError } from "axios";
import { backendAPI } from "./base";

export type CompaniesQuery = {
  page: number;
}

export type CompanyByNameQuery = {
  name: string;
};

export type CompanyDTO = {
  name: string;
  SIC: string;
  id: string;
  companyNumber: string;
  category: string;
};

export const CompanyApi = {
  getCompanies: async (params?: CompaniesQuery) => {

      console.log("get companies request");
      //await new Promise((resolve) => setTimeout(resolve, 1000));
  },


  getCompanyByName: async (params: CompanyByNameQuery) => {
    try {
      console.log("get company by name request");
      //await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await backendAPI.post('/graphql', { query: `{\
        companyByName(name: "${params.name}") {\
          name,\
          SIC,\
          id,\
          companyNumber,\
          category\
        }\
      }`});
      console.log("get company by name response", response)
      return response.data.data.companyByName as CompanyDTO;
    } catch (err) {
      console.log("handle get company by name error", err);
      if (err instanceof AxiosError) {
        let axiosError = err as AxiosError;
        if (axiosError.response?.data) {
          throw new Error(axiosError.response?.data as string);
        }
      }
      throw new Error("Unknown error, please contact the administrator");
    }
  },

};
