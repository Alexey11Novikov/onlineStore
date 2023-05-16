import React from "react";
import { Button, Grid } from "@mui/material";
import http from "./http-common";

const Buttons = (props) => {
  const { selectId } = props;

  const add = () => {
    http
      .post("/createCustomer", {
        name: "Кузнецов А.М.",
        age: 23,
        email: "asdasd@asd.com",
        date_birthday: "01.11.1999",
      })
      .then((res) => console.log(res.data));
  };

  const change = (id, data) => {
    http.patch("/updateCustomer/" + id, { data: data }).then((res) => {
      console.log(res);
    });
  };

  const deleteRow = (id) => {
    http.delete("/deleteCustomer/" + id).then((res) => {
      console.log(res);
    });
  };

  return (
    <Grid container spacing={1} sx={{ marginBottom: "5px" }}>
      <Grid item>
        <Button variant="contained" onClick={add}>
          Добавить
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => change(selectId)}>
          Изменить
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => deleteRow(selectId)}>
          Удалить
        </Button>
      </Grid>
    </Grid>
  );
};

export default Buttons;
