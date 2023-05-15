import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import http from './http-common';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const OrderTable = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    http.get("/getOrder").then((res) => setRowData(res.data[0]))
  }, []);

  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ])

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}>
      </AgGridReact>
    </div>
  );
};

export default OrderTable;