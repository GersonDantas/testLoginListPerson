import React, { useContext, useEffect } from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import { Context } from "@store/context/ListiningContext";
import useStyles from "./UseStyles";
import ModalUpdate from "../ModalUpdate";
import { ListiningPersons } from "@services/persons";

const TableRows: React.FC = () => {
  const { handleOpenUpdate, updateRows, setUpdateRows } = useContext(Context);
  const classes = useStyles();
  useEffect(() => {
    (async () => {
      const persons = await ListiningPersons();
      console.log(persons);
      await setUpdateRows(persons);
    })();
  }, []);
  return (
    <>
      {updateRows.map((row) => (
        <>
          <ModalUpdate />
          <TableRow key={row.Id}>
            <TableCell>{`${row.Name} ${row.Surname}`}</TableCell>
            <TableCell>{row.DateOfBirth}</TableCell>
            <TableCell>{row.Height}</TableCell>
            <TableCell>{row.Weigth}</TableCell>
            <TableCell>
              {
              row.Weigth && row.Height
                ? `${row.Weigth / (row.Height * row.Height)}`.substring(0,5)
                : NaN
              }
            </TableCell>
            <TableCell align="right" className={classes.buttons}>
              <IconButton onClick={handleOpenUpdate}>
                <EditIcon />
              </IconButton>
            </TableCell>
            <TableCell align="right" className={classes.buttons}>
              <IconButton>
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        </>
      ))}
    </>
  );
};

export default TableRows;
