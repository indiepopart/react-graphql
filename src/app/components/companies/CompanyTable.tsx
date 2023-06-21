'use client'

import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";

export interface CompanyData {
  id: string,
  name: string,
  category: string,
  companyNumber: string,
  SIC: string
}

export interface CompanyTableProps {
  rows: CompanyData[],
  columns: GridColDef[],
  onRowClick?: GridEventListener<"rowClick">

}

const CompanyTable = (props: CompanyTableProps) => {

  return (
    <>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        disableColumnMenu={true}
        disableRowSelectionOnClick={true}
        disableColumnFilter={true}
        disableDensitySelector={true}
        pageSizeOptions={[10, 20]}
        onRowClick={props.onRowClick}
      />
    </>
  );
};

export default CompanyTable;



