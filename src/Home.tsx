import {
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCampeonatos, ICampeonato } from "./backend";
import { TableCampeonato } from "./TableCampeonato";

export const Home = () => {
  const [yearSelected, setYearSelected] = useState("2003");
  const [campeonato, setCampeonato] = useState<ICampeonato[]>([]);

  async function fetchData() {
    const response = await getCampeonatos(yearSelected);
    setCampeonato(response.slice(0, 11));
  }

  useEffect(() => {
    fetchData();
  }, [yearSelected]);

  return (
    <div className="App">
      {" "}
      <header>
        <div className="bg-gray-600 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            react-campeonato-brasil
          </h1>
        </div>
      </header>
      <Box display="flex" justifyContent="center">
        <Box width="50%">
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Selecione o ano
            </InputLabel>
            <NativeSelect
              id="demo-simple-select"
              value={yearSelected}
              onChange={(e) => setYearSelected(e.target.value)}
            >
              <option key={"2003"} value={"2003"}>
                2003
              </option>
              <option key={"2004"} value={"2004"}>
                2004
              </option>
              <option key={"2005"} value={"2005"}>
                2005
              </option>
              <option key={"2006"} value={"2006"}>
                2006
              </option>
              <option key={"2007"} value={"2007"}>
                2007
              </option>
              <option key={"2008"} value={"2008"}>
                2008
              </option>
              <option key={"2009"} value={"2009"}>
                2009
              </option>
              <option key={"2010"} value={"2010"}>
                2010
              </option>
              <option key={"2011"} value={"2011"}>
                2011
              </option>
              <option key={"2012"} value={"2012"}>
                2012
              </option>
              <option key={"2013"} value={"2013"}>
                2013
              </option>
              <option key={"2014"} value={"2014"}>
                2014
              </option>
              <option key={"2015"} value={"2015"}>
                2015
              </option>
            </NativeSelect>
          </FormControl>
          <Box mt={6}>
            <Typography>Campeonato do ano de {yearSelected}</Typography>
            <TableCampeonato campeonato={campeonato} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};
