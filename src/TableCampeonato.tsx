import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ICampeonato } from "./backend";

interface IMyProps {
  campeonato: ICampeonato[];
}

export const TableCampeonato = ({ campeonato }: IMyProps) => {
  // console.log(campeonato);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right">P</TableCell>
            <TableCell align="right">V</TableCell>
            <TableCell align="right">E</TableCell>
            <TableCell align="right">D</TableCell>
            <TableCell align="right">GP</TableCell>
            <TableCell align="right">GC</TableCell>
            <TableCell align="right">S</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campeonato.map((row: ICampeonato, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <img
                  src={require(`./img/${row.image}`)}
                  alt="oi"
                  width="30"
                  height="30"
                ></img>
              </TableCell>

              <TableCell component="th" scope="row">
                {row.teamName}
              </TableCell>
              <TableCell align="right">{row.total_pontos}</TableCell>
              <TableCell align="right">{row.total_vitorias}</TableCell>
              <TableCell align="right">{row.total_empates}</TableCell>
              <TableCell align="right">{row.total_derrotas}</TableCell>
              <TableCell align="right">{row.total_gols_marcados}</TableCell>
              <TableCell align="right">{row.total_gols_sofridos}</TableCell>
              <TableCell align="right">
                {row.total_gols_marcados - row.total_gols_sofridos}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
