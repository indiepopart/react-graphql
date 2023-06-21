"use client";

import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import CompanyTable from "./CompanyTable";
import { useRouter } from "next/navigation";
import { AsyncState, useAsync } from "@/app/hooks/useAsync";
import { CompanyApi } from "@/app/api/companies";
import { useEffect } from "react";

const CompanyTableContainer = () => {
  const router = useRouter();
  const { status, data, error, execute } = useAsync(CompanyApi.getCompanies);

  useEffect(() => {
    execute({ page: 10 });
  }, [execute]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "SIC", headerName: "SIC", width: 400, sortable: false },
    { field: "category", headerName: "Category", width: 200, sortable: false },
    {
      field: "companyNumber",
      headerName: "Company #",
      width: 100,
      sortable: false,
    },
    { field: "name", headerName: "Company Name", width: 600, sortable: false },
  ];

  const onRowClick: GridEventListener<"rowClick"> = (
    params,
    event,
    details
  ) => {
    router.push(`/company/${encodeURIComponent(params.id)}`);
  };

  return (
    <>
      {data && (
        <CompanyTable
          rows={data}
          columns={columns}
          onRowClick={onRowClick}
        ></CompanyTable>
      )}
    </>
  );
};

export default CompanyTableContainer;
