"use client";

import { GridColDef, GridEventListener, GridPaginationModel } from "@mui/x-data-grid";
import CompanyTable from "./CompanyTable";
import { useRouter } from "next/navigation";
import { AsyncState, useAsync } from "@/app/hooks/useAsync";
import { CompanyApi } from "@/app/api/companies";
import { useEffect, useState } from "react";

const CompanyTableContainer = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { status, data, error, execute } = useAsync(CompanyApi.getCompanies);
  const { status: statusCount, data: count, error: errorCount, execute: execute2 } = useAsync(CompanyApi.getCompanyCount);

  useEffect(() => {
    execute({ page: page });
  }, [execute, page])

  useEffect(() => {
    execute2({});
  }, [execute2]);

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

  const onPageChange = (pagination: GridPaginationModel) => {
    console.log("page change", pagination);
    setPage(pagination.page);
  };

  return (
    <>
      {data && count && (
        <CompanyTable
          pagination={ {page: page, pageSize: 10 }}
          rowCount={count}
          rows={data}
          columns={columns}
          onRowClick={onRowClick}
          onPageChange={onPageChange}
        ></CompanyTable>
      )}
    </>
  );
};

export default CompanyTableContainer;
