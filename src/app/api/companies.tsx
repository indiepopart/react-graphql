import { AxiosError } from "axios";
import { backendAPI } from "./base";

export type CompaniesQuery = {
  page: number;
};

export type OwnerDTO = {
  name: string;
  id: string;
};

export type CompanyPropertyDTO = {
  id: string;
  address: string;
  county: string;
  district: string;
  titleNumber: string;
}

export type CompanyDTO = {
  name: string;
  SIC: string;
  id: string;
  companyNumber: string;
  category: string;
  countryOfOrigin: string;
  mortgagesOutstanding: number;
  status: string;
  incorporationDate: string;
};

export type CompanyDetailsDTO = CompanyDTO & {
  controlledBy: OwnerDTO[];
  owns: CompanyPropertyDTO[];
};



export const CompanyApi = {

  getCompanyCount: async () => {
    try {
      const response = await backendAPI.post("/graphql", {
        query: `{
        companyCount
      }`,
      });
      return response.data.data.companyCount as number;
    } catch (error) {
      console.log("handle get company count error", error);
      if (error instanceof AxiosError) {
        let axiosError = error as AxiosError;
        if (axiosError.response?.data) {
          throw new Error(axiosError.response?.data as string);
        }
      }
      throw new Error("Unknown error, please contact the administrator");
    }
  },


  getCompanyList: async (params?: CompaniesQuery) => {
    try {
      console.log("get companies request", params);
      //await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await backendAPI.post("/graphql", {
        query: `{
        companyList(page: ${params?.page || 1}) {
          name,
          SIC,
          id,
          companyNumber,
          category
        }}`,
      });
      return response.data.data.companyList as CompanyDTO[];
    } catch (error) {
      console.log("handle get companies error", error);
      if (error instanceof AxiosError) {
        let axiosError = error as AxiosError;
        if (axiosError.response?.data) {
          throw new Error(axiosError.response?.data as string);
        }
      }
      throw new Error("Unknown error, please contact the administrator");
    }
  },

  getCompanyById: async (id: string) => {
    try {
      console.log("get company by id request");
      const response = await backendAPI.post("/graphql", {
        query: `{
        companyById(id: "${id}") {
          name,
          SIC,
          id,
          companyNumber,
          category,
          countryOfOrigin,
          mortgagesOutstanding,
          status,
          incorporationDate,
          controlledBy {
            name,
            id
          },
          owns {
            address,
          }
        }
      }`,
      });
      return response.data.data.companyById as CompanyDetailsDTO;
    } catch (err) {
      console.log("handle get company by id error", err);
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
