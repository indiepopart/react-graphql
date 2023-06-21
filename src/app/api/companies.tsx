import { AxiosError } from "axios";
import { backendAPI } from "./base";

export type CompaniesQuery = {
  page: number;
};

export type OwnerDTO = {
  name: string;
  id: string;
};

export type CompanyDTO = {
  name: string;
  SIC: string;
  id: string;
  companyNumber: string;
  category: string;
  countryOfOrigin: string;
  mortgagesOutstanding: number;
  status: string;
  controlledBy: OwnerDTO[];
};

export const CompanyApi = {
  getCompanies: async (params?: CompaniesQuery) => {
    try {
      console.log("get companies request");
      //await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await backendAPI.post("/graphql", {
        query: `{
        company(page: ${params?.page || 1}) {
          name,
          SIC,
          id,
          companyNumber,
          category
        }}`,
      });
      return response.data.data.company as CompanyDTO[];
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
          controlledBy {
            name,
            id
          },
        }
      }`,
      });
      return response.data.data.companyById as CompanyDTO;
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

  getCompanyByName: async (name: string) => {
    try {
      console.log("get company by name request");
      //await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await backendAPI.post("/graphql", {
        query: `{
        companyByName(name: "${name}") {
          name,
          SIC,
          id,
          companyNumber,
          category
        }
      }`,
      });

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
