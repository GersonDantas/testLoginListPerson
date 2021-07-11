import React, { useContext, useState } from "react";
import {} from "date-fns";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import { Context } from "@store/context/ListiningContext";
import useStyles from "./UseStyles";
import ModalUpdate from "../ModalUpdate";
import { persons } from "src/types/index";
import { Grid } from "@material-ui/core";

interface Props {
  persons: persons;
  fullyear?: number;
}

const TableRows: React.FC<Props> = ({ persons, fullyear }) => {
  const { handleOpenUpdate, updateRows, setUpdateRows } = useContext(Context);
  const classes = useStyles();
  return (
    <>
      {!!persons.length ? (
        persons?.map((row) => (
          <>
            <ModalUpdate />
            <TableRow key={row.Id}>
              <TableCell>{`${row.Name} ${row.Surname}`}</TableCell>
              <TableCell>
                {`${
                  fullyear
                    ? fullyear -
                      parseInt(`${row.DateOfBirth?.substring(0, 4)}`, 10)
                    : "indisponível"
                } Anos
                `}
              </TableCell>
              <TableCell>{`${row.Height?.toFixed(2)} mt`}</TableCell>
              <TableCell>{`${row.Weigth} Kg`}</TableCell>
              <TableCell>
                {row.Weigth && row.Height
                  ? `${row.Weigth / (row.Height * row.Height)}`.substring(0, 5)
                  : NaN}
              </TableCell>
              <TableCell align="right" classes={{ root: classes.buttons }}>
                <IconButton onClick={handleOpenUpdate}>
                  <EditIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right" classes={{ root: classes.buttons }}>
                <IconButton>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          </>
        ))
      ) : (
        <Grid container classes={{ root: classes.empty }} >
          <Grid item>
            No persons
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default TableRows;
