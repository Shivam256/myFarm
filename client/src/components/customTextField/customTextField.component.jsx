import React from "react";
import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)(() => ({
  width: "100%",
  "& label": {
    color: "#fff !important",
  },
  "& MuiInputLabel-root": {
    color: "#fff",
  },
  "& MuiInputLabel-root.Mui-focused": {
    color: "#fff !important",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
  "& input": {
    color: "#fff",
  },
}));

const CustomTextField = ({ register, errors, name, ...props }) => {
  return (
    <div className="w-5/6">
      <StyledTextField {...props} {...register(name)} />
      <p className="text-xs text-white mt-1">{errors[name]?.message}</p>
    </div>
  );
};

export default CustomTextField;
