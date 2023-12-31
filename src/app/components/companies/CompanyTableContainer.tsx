"use client";

import {
  GridColDef,
  GridEventListener,
  GridPaginationModel,
} from "@mui/x-data-grid";
import CompanyTable from "./CompanyTable";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AsyncState, useAsync } from "@/app/hooks/useAsync";
import { CompanyApi } from "@/app/services/companies";
import { useEffect } from "react";

interface CompanyTableProperties {
  page?: number;
}

const CompanyTableContainer = (props: CompanyTableProperties) => {
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const pathName = usePathname();
  const page = props.page ? props.page : 1;

  const { status, data, error, execute } = useAsync(CompanyApi.getCompanyList);
  const {
    status: statusCount,
    data: count,
    error: errorCount,
    execute: executeGetCount,
  } = useAsync(CompanyApi.getCompanyCount);

  useEffect(() => {
    // Only refresh when the page changes
    execute({ page: page });
  }, [page]);

  useEffect(() => {
    executeGetCount({});
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "companyNumber",
      headerName: "Company #",
      width: 100,
      sortable: false,
    },
    { field: "name", headerName: "Company Name", width: 600, sortable: false },
    { field: "category", headerName: "Category", width: 200, sortable: false },
    { field: "SIC", headerName: "SIC", width: 400, sortable: false },
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
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pagination.page.toString());
    router.push(pathName + "?" + params.toString());
  };

  const isFetchSuccess =
    status === AsyncState.SUCCESS &&
    statusCount === AsyncState.SUCCESS &&
    data &&
    count;
  const isFetchError =
    status === AsyncState.ERROR || statusCount === AsyncState.ERROR;
  const isFetchPending =
    status === AsyncState.PENDING || statusCount === AsyncState.PENDING;

  return (
    <>
      {isFetchPending && <div>Loading...</div>}
      {isFetchError && <div>Error</div>}

      {isFetchSuccess && (
        <CompanyTable
          pagination={{ page: page, pageSize: 10 }}
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
