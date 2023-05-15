import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import http from './http-common';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const OrderTable = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    http.get("/getOrder").then((res) => {
      if (res) {
        setRowData(res.data.row[0])
      }
    })
  }, []);

  const [columnDefs] = useState([
    { field: 'name' },
    { field: 'customerid' },
    { field: 'quantity' }
  ])

  return (
    <div className="ag-theme-alpine" style={{ height: 300 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}>
      </AgGridReact>
    </div>
  );
};

export default OrderTable;