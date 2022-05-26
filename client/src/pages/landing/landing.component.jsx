import React from "react";
import {styled} from '@mui/material';
import Vec1 from '../../assets/images/Vector 1.png';

const BackgroundBox = styled("div")(({src})=>({
  backgroundImage:`url('${src}')`,
  width:'100%',
  height:"100%",
  backgroundPosition:'center',
  backgroundSize:'cover'
}))


const LandingPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-2/5 bg-red-500 h-full">image</div>
      <div className="w-3/5 h-full ">
        <BackgroundBox src={Vec1} >
          <div>
            hello
          </div>
        </BackgroundBox>
      </div>
    </div>
  );
};

export default LandingPage;
