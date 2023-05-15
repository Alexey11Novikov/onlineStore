import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import http from './http-common';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const CustomerTable = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    http.get("/getCustomer").then((res) => {
      if (res) {
        setRowData(res.data.row[0])
      }
    })
  }, []);

  // const [rowData] = useState([
  //   { make: "Toyota", model: "Celica", price: 35000 },
  //   { make: "Ford", model: "Mondeo", price: 32000 },
  //   { make: "Porsche", model: "Boxster", price: 72000 }
  // ]);

  const [columnDefs] = useState([
    { field: 'name' },
    { field: 'age' },
    { field: 'email' },
    { field: 'date_birthday' }
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

export default CustomerTable;