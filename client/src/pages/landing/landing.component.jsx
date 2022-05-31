import React, { useState, useEffect } from "react";
import { styled } from "@mui/material";
import Vec1 from "../../assets/images/Vector 1.png";
import Lottie from "react-lottie";
import FarmerLottie from "../../assets/lotties/farmer.json";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import CustomButton from "../../components/customButton/customButton.component";
import SignUp from "./signup.component";
import Login from "./login.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BackgroundBox = styled("div")(({ src }) => ({
  backgroundImage: `url('${src}')`,
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingRight: "100px",
  alignItems: "end",
}));

const WelcomeComponent = ({ setMode }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div>
        <h1 className="text-5xl font-bold text-white">Welcome to MyFarm</h1>
        <h1 className="text-2xl text-white">A place for all farmers</h1>
      </div>
      <CustomButton
        invert
        onClick={() => {
          setMode("signup");
        }}
      >
        GET STARTED
      </CustomButton>
    </div>
  );
};

const LandingPage = () => {
  const [mode, setMode] = useState("landing");
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: FarmerLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  let item;
  if (mode === "landing") {
    item = <WelcomeComponent setMode={setMode} />;
  } else if (mode == "signup") {
    item = <SignUp setMode={setMode} />;
  } else {
    item = <Login setMode={setMode} />;
  }

  useEffect(() => {
    if (isLoggedIn) {
      if (user.isAdmin) {
        navigate("/admin/dashboard");
      } else {
        navigate("/client/home");
      }
    }
  }, [isLoggedIn]);

  return (
    <div className="flex h-screen">
      <div className="w-full fixed top-2 h-12 flex px-5 py-2 items-center gap-5">
        <Logo width="40px" height="40px" />
        <h1 className="text-2xl">MyFarm</h1>
      </div>
      <div className="w-2/5 h-full grid place-items-center overflow-visible">
        <Lottie options={defaultOptions} height="60%" width="90%" />
      </div>
      <div className="w-3/5 h-full ">
        <BackgroundBox src={Vec1}>{item}</BackgroundBox>
      </div>
    </div>
  );
};

export default LandingPage;
