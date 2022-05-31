import React, { useState } from "react";
import useCropRates from "../../hooks/useCropRates";
import { Select, MenuItem, FormControl, InputLabel, Grid } from "@mui/material";
import CustomButton from "../../components/customButton/customButton.component";
import { states, districts } from "../../utils/data";
import RecordOverview from "../../components/recordOverview/recordOverview.component";

const CropRates = () => {
  const [state, setState] = React.useState("Andhra Pradesh");
  const [district, setDistrict] = useState("");
  const [records, setRecords] = useState([]);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const { getCropRates } = useCropRates();

  const handleClick = () => {
    if (district == "") {
      getCropRates(state).then((res) => {
        console.log(res);
        setRecords(res);
      });
    } else {
      getCropRates(state, district).then((res) => {
        console.log(res);
        setRecords(res);
      });
    }
  };

  return (
    <div className="pt-5">
      <h1 className="text-3xl font-bold mb-5">Get realtime crop rates!</h1>
      <div className="flex flex-col gap-4">
        <FormControl sx={{ width: "30vw" }}>
          <InputLabel id="demo-simple-select-label">Select State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state}
            label="state"
            onChange={handleChange}
          >
            {states.map((state) => (
              <MenuItem value={state}>{state}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "30vw" }}>
          <InputLabel id="demo-label">Select District</InputLabel>
          <Select
            labelId="demo-label"
            id="demo-simple-select"
            value={district}
            label="district"
            onChange={handleDistrictChange}
          >
            {districts[state].map((d) => (
              <MenuItem value={d}>{d}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <CustomButton onClick={handleClick}>FETCH DATA</CustomButton>

        <div>
          {records.length === 0 ? (
            <div className="text-2xl mt-5">
              There are no markets present in the region you selected. Please
              select another region!
            </div>
          ) : (
            <Grid container>
              {records.map((rcrd) => (
                <Grid item md={3}>
                  <RecordOverview record={rcrd} />
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropRates;
