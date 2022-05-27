import React from "react";
import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)(({ inverted }) => ({
  width: "100%",
  "& label": {
    color: inverted ? "#4CAF50 !important" : "#fff !important",
  },
  "& MuiInputLabel-root": {
    color: inverted ? "#4CAF50" : "#fff",
  },
  "& MuiInputLabel-root.Mui-focused": {
    color: inverted ? "#4CAF50 !important" : "#fff !important",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: inverted ? "#4CAF50" : "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: inverted ? "#4CAF50" : "#fff",
    },
    "&:hover fieldset": {
      borderColor: inverted ? "#4CAF50" : "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: inverted ? "#4CAF50" : "#fff",
    },
  },
  "& input": {
    color: inverted ? "#000" : "#fff",
  },
}));

const CustomTextField = ({ register, errors, name, inverted, ...props }) => {
  return (
    <div className="w-5/6">
      <StyledTextField inverted={inverted} {...props} {...register(name)} />
      <p className={`text-xs ${inverted?'text-red-400':'text-white'} mt-1`}>{errors[name]?.message}</p>
    </div>
  );
};

export default CustomTextField;
