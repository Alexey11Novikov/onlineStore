import React, { useEffect, useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import http from "./http-common";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const CustomerTable = (props) => {
  const { setSelectID, setSelectedData } = props;;
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    http.get("/getCustomer").then((res) => {
      if (res) {
        setRowData(res.data.row[0]);
      }
    });
  }, []);

  const [columnDefs] = useState([
    { field: "name" },
    { field: "age" },
    { field: "email" },
    { field: "date_birthday" },
  ]);

  const getSelectedRows = () => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    if (selectedRows) {
      setSelectedData(selectedRows[0]);
      setSelectID(selectedRows[0].id);
    }
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 300 }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection={"single"}
        onSelectionChanged={getSelectedRows}
      ></AgGridReact>
    </div>
  );
};

export default CustomerTable;
