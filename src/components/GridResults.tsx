import { FC } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "quantity", headerName: "Quantidade", width: 150 },
    { field: "name", headerName: "Descrição", width: 150 },
    { field: "time", headerName: "Uso Diário", width: 150 },
    { field: "power", headerName: "Potência", width: 150 },
    { field: "consumption", headerName: "KWh/mês", width: 150 },
    { field: "total", headerName: "Consumo/Total", width: 150 },
  ];

  const rowss: GridRowsProp = [
    { id: 1, name: "TV", power: 100, time: 5, quantity: 2 },
    { id: 2, name: "Rádio", power: 50, time: 2, quantity: 1 },
    { id: 3, name: "PC", power: 400, time: 10, quantity: 2 },
    { id: 4, name: "Aspirador de pó", power: 1200, time: 1, quantity: 1 },
  ];

const GridResults:FC<{rows?:GridRowsProp}> = ({rows = []}) => {
  return (
    <DataGrid rows={rowss} columns={columns} />
  )
}

export default GridResults