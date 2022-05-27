import React from "react";
import { Button,styled } from "@mui/material";

const CustomButtonConainer = styled(Button)(({inverted})=>({
    width:'fit-content',
    height:'fit-content',
    backgroundColor:inverted?'#fff':'#4CAF50',
    color:inverted?'#4CAF50':'#fff',
    padding:'5px 20px',
    fontWeight:700,
    letterSpacing:2,
    '&:hover':{
        backgroundColor:inverted?'#fff':'#4CAF50',
        color:inverted?'#4CAF50':'#fff', 
    }

}))

const CustomButton = ({ children,invert, ...props }) => {
  return <CustomButtonConainer {...props} inverted={invert}>{children}</CustomButtonConainer>;
};

export default CustomButton;
