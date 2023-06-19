'use client'

import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";

export interface CompanyTableProps {
  rows: any[],
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
            paginationModel: { page: 0, pageSize: 2 },
          },
        }}
        disableColumnMenu={true}
        disableRowSelectionOnClick={true}
        disableColumnFilter={true}
        disableDensitySelector={true}
        pageSizeOptions={[2, 4]}
        onRowClick={props.onRowClick}
      />
    </>
  );
};

export default CompanyTable;



