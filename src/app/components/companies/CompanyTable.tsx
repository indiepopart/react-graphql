'use client'

import { DataGrid, GridColDef, GridEventListener, GridPaginationModel } from "@mui/x-data-grid";


export interface CompanyData {
  id: string,
  name: string,
  category: string,
  companyNumber: string,
  SIC: string
}

export interface CompanyTableProps {
  rowCount: number,
  rows: CompanyData[],
  columns: GridColDef[],
  pagination: GridPaginationModel,
  onRowClick?: GridEventListener<"rowClick">
  onPageChange?: (pagination: GridPaginationModel) => void,

}

const CompanyTable = (props: CompanyTableProps) => {

  return (
    <>
      <DataGrid
        rowCount={props.rowCount}
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: { page: props.pagination.page, pageSize: props.pagination.pageSize },
          },
        }}
        disableColumnMenu={true}
        disableRowSelectionOnClick={true}
        disableColumnFilter={true}
        disableDensitySelector={true}
        paginationMode="server"
        onRowClick={props.onRowClick}
        onPaginationModelChange={props.onPageChange}
      />
    </>
  );
};

export default CompanyTable;



