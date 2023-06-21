'use client'

import CompanyViewContainer from "@/app/components/companies/CompanyViewContainer";


interface CompanyPageProperties {
  id: string,
}

const CompanyPage = (props: CompanyPageProperties) => {
  return (
    <CompanyViewContainer id={props.id}></CompanyViewContainer>
  );
}

export default CompanyPage;