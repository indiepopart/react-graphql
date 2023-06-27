import { CompanyApi } from "@/app/services/companies";
import { AsyncState, useAsync } from "@/app/_hooks/useAsync";
import { useEffect } from "react";
import CompanyView from "./CompanyView";

interface CompanyViewProperties {
  id: string;
}

const CompanyViewContainer = (props: CompanyViewProperties) => {
  const { status, data, error, execute } = useAsync(CompanyApi.getCompanyById);

  useEffect(() => {
    execute(props.id);
  }, [execute]);

  status === AsyncState.PENDING && <div>Loading...</div>;
  status === AsyncState.ERROR && <div>{error}</div>;

  let company = data && {
    id: data.id,
    name: data.name,
    category: data.category,
    companyNumber: data.companyNumber,
    SIC: data.SIC,
    countryOfOrigin: data.countryOfOrigin,
    mortgagesOutstanding: data.mortgagesOutstanding,
    status: data.status,
    incorporationDate: data.incorporationDate,
    controlledBy: data.controlledBy,
    owns: data.owns
  };

  return company && <CompanyView company={company}></CompanyView>;
};

export default CompanyViewContainer;
