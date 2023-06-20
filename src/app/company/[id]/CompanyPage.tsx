'use client'


interface CompanyPageProperties {
  id: string,
}

const CompanyPage = (props: CompanyPageProperties) => {


  return (
    <>This is the company {props.id} page</>
  )
}

export default CompanyPage;