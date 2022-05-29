import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ButtonBase, Grid } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import ContactModal from "../../components/contact/contactModal.component";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  const [showContactModal, setShowContactModal] = useState(false);

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  return (
    <div className="pt-5">
      <Slider {...settings}>
        <div className="w-fit h-fit rounded-xl overflow-hidden px-3 outline-none">
          <img
            src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-full h-96 rounded-xl overflow-hidden object-fill"
            alt=""
          />
        </div>
        <div className="w-fit h-fit rounded-xl overflow-hidden px-3 outline-none">
          <img
            src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-full h-96 rounded-xl overflow-hidden object-fill"
            alt=""
          />
        </div>{" "}
        <div className="w-fit h-fit rounded-xl overflow-hidden px-3 outline-none">
          <img
            src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-full h-96 rounded-xl overflow-hidden object-fill"
            alt=""
          />
        </div>
      </Slider>
      <Grid
        container
        spacing={5}
        sx={{
          marginTop: "10px",
        }}
      >
        <Grid item md={3}>
          <Link to="/client/postQuery">
            <div className='className="w-full h-52 bg-white shadow-xl rounded-lg hover:shadow-2xl flex flex-col items-center justify-center'>
              <Icon
                icon="bi:question-circle-fill"
                width="100px"
                height="100px"
                color="#00AA80"
              />
              <p className="text-2xl text-[#00AA80] mt-8 font-medium">
                POST QUERY
              </p>
            </div>
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link to="/client/postFinancialHelp">
            <div className='className="w-full h-52 bg-white shadow-xl rounded-lg hover:shadow-2xl flex flex-col items-center justify-center'>
              <Icon
                icon="bx:rupee"
                width="100px"
                height="100px"
                color="#FF8D39"
              />
              <p className="text-2xl text-[#FF8D39] mt-8 font-medium">
                FINANCIAL HELP
              </p>
            </div>
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link to="/client/explore">
            <div className='className="w-full h-52 bg-white shadow-xl rounded-lg hover:shadow-2xl flex flex-col items-center justify-center'>
              <Icon
                icon="ic:baseline-explore"
                width="100px"
                height="100px"
                color="#6C63FF"
              />
              <p className="text-2xl text-[#6C63FF] mt-8 font-medium">
                EXPLORE
              </p>
            </div>
          </Link>
        </Grid>
        <Grid item md={3}>
          <ButtonBase sx={{width:"100%"}} onClick={toggleContactModal} >
            <div className='w-full h-52 bg-white shadow-xl rounded-lg hover:shadow-2xl flex flex-col items-center justify-center'>
              <Icon
                icon="bxs:phone"
                width="100px"
                height="100px"
                color="#009688"
              />
              <p className="text-2xl text-[#009688] mt-8 font-medium">
                CONTACT
              </p>
            </div>
          </ButtonBase>
        </Grid>
      </Grid>
      <ContactModal state={showContactModal} toggleModal={toggleContactModal} />
    </div>
  );
};

export default Home;
