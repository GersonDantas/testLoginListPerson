import React, { useContext } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Context } from "@store/context/ListiningContext";
import useStyles from "./UseStyles";
import ModalUpdate from "../ModalUpdate";

const TableRows: React.FC = () => {
  const { handleOpenUpdate, updateRows } = useContext(Context);
  const classes = useStyles();
  return (
    <>
      {updateRows.map((row) => (
        <>
          <ModalUpdate />
          <TableRow key={`${Math.random()}${row.id}`}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.height}</TableCell>
            <TableCell>{row.weight}</TableCell>
            <TableCell>{row.imc}</TableCell>
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
