import { FC } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridRowsProp, GridColDef, GridApi, GridCellValue } from "@mui/x-data-grid";

import { useAppContext } from '../providers/AppProvider';

const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "name", headerName: "Equipamento", width: 150 },
    { field: "quantity", headerName: "Quantidade", width: 150 },
    { field: "time", headerName: "Tempo", width: 150 },
    { field: "power", headerName: "Potência", width: 150 },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e:React.MouseEvent<HTMLElement>) => {
          e.stopPropagation(); // don't select this row after clicking
  
          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};
  
          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
  
          return alert(JSON.stringify(thisRow, null, 4));
        };
  
        return <Button onClick={onClick}><DeleteIcon color='primary'/></Button>;
      }
    },
  ];

const GridDevices:FC<{rows?:GridRowsProp}> = ({rows = []}) => {
  const {devices} = useAppContext();
  return (
    <DataGrid rows={devices} columns={columns} />
  )
}

export default GridDevices