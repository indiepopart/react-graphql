'use client'

import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import CompanyTable from "./CompanyTable";
import { useRouter } from 'next/navigation'
import { AsyncState, useAsync } from "@/app/hooks/useAsync";
import { CompanyApi } from "@/app/api/companies";
import { useEffect } from "react";

const CompanyTableContainer = () => {
  const router = useRouter()
  const { status, data, error, execute } = useAsync(CompanyApi.getCompanyByName);

  useEffect(() => {
    execute({name: "CFOR DEVELOPMENTS LTD"});
  }, [execute]);




  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70,  },
    { field: "SIC", headerName: "SIC", width: 90, sortable: false },
    { field: "category", headerName: "Category", width: 100, sortable: false },
    { field: "companyNumber", headerName: "Company #", width: 90, sortable: false },
    { field: "name", headerName: "Company Name", width: 140, sortable: false },
  ];


  let rows = [
    {
      id: "1",
      SIC: "6499",
      category: "Private Limited Company",
      companyNumber: "04179322",
      name: "CURO TRANSATLANTIC LIMITED",
    },
    {
      id: "2",
      SIC: "6499",
      category: "Private Limited Company",
      companyNumber: "04179322",
      name: "CURO TRANSATLANTIC LIMITED",
    },
    {
      id: "3",
      SIC: "6499",
      category: "Private Limited Company",
      companyNumber: "04179322",
      name: "CURO TRANSATLANTIC LIMITED",
    },
    {
      id: "4",
      SIC: "6499",
      category: "Private Limited Company",
      companyNumber: "04179322",
      name: "CURO TRANSATLANTIC LIMITED",
    },
    {
      id: "5",
      SIC: "6499",
      category: "Private Limited Company",
      companyNumber: "04179322",
      name: "CURO TRANSATLANTIC LIMITED",
    },
    {
      id: "6",
      SIC: "6499",
      category: "Private Limited Company",
      companyNumber: "04179322",
      name: "CURO TRANSATLANTIC LIMITED",
    },
    {
      id: "7",
      SIC: "6499",
      category: "Private Limited Company",
      companyNumber: "04179322",
      name: "CURO TRANSATLANTIC LIMITED",
    },
  ]

  status === AsyncState.SUCCESS && data && rows.push(data);

  console.log(rows);

  const onRowClick: GridEventListener<'rowClick'> = (params, event, details) => {
    console.log(event, details, params);
    router.push(`/company/${encodeURIComponent("1")}`);
  }

  return (
    <>
      <CompanyTable rows={rows} columns={columns} onRowClick={onRowClick}></CompanyTable>
    </>
  );
};

export default CompanyTableContainer;
