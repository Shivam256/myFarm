import React from "react";
import CustomButton from "../../components/customButton/customButton.component";
import CustomTextField from "../../components/customTextField/customTextField.component";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuth from "../../hooks/useAuth";

const loginSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = ({ setMode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const {login} = useAuth();

  const onSubmit = (data) => {
    // console.log(data);
    login(data);
  };
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="mb-10">
        {/* <h1 className="text-5xl font-bold text-white">Already have an account?</h1> */}
        <h1 className="text-5xl font-bold text-white">
          Log into your account!
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full items-center"
      >
        <CustomTextField
          label="Email/Phone no"
          errors={errors}
          register={register}
          name="email"
        />
        <CustomTextField
          label="Password"
          errors={errors}
          register={register}
          name="password"
        />
        <CustomButton invert type="submit">
          LOGIN
        </CustomButton> 
      </form>

      <div>
        <span className="text-white text-xl">Dount have an account?</span>{" "}
        <span
          className="text-white text-xl font-bold cursor-pointer"
          onClick={() => {
            setMode("signup");
          }}
        >
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default Login;
