import React, { useState } from "react";
import { Button, Grid, Alert } from "@mui/material";
import { deleteRow } from './request';

const Buttons = (props) => {
    const { selectId, setOpenModal, setBtnName } = props;
    const [isAlert, setIsAlert] = useState(false);
    const onClickAction = (nameBtn) => {
        setBtnName(nameBtn);
        setOpenModal(true);
    }

    const onClickActionChange = (nameBtn) => {
        if (selectId === undefined) {
            setIsAlert(true);
            setTimeout(function() {
                setIsAlert(false);
            }, 3000);
        } else {
            setBtnName(nameBtn);
            setOpenModal(true);
        }
    }

    return (
        <>
            <Grid container spacing={1} sx={{ marginBottom: "5px" }}>
                <Grid item>
                    <Button variant="contained" onClick={() => onClickAction("Добавить", true)}>
                        Добавить
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={() => onClickActionChange("Изменить", true)}>
                        Изменить
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={() => deleteRow(selectId)}>
                        Удалить
                    </Button>
                </Grid>
            </Grid>
            {isAlert ? <Alert variant="filled" severity="error">
                Запись не выбрана! Выберите запись
            </Alert> : ""}
        </>
    );
};

export default Buttons;
