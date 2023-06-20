import CompanyPage from "./CompanyPage"

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <CompanyPage id={params.id}></CompanyPage>
  )
}

export default Page;