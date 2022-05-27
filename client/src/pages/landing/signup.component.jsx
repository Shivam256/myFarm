import React from "react";
import CustomButton from "../../components/customButton/customButton.component";
import CustomTextField from "../../components/customTextField/customTextField.component";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuth from "../../hooks/useAuth";

const signUpSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
  cpassword: yup
    .string()
    .required("Confirm password is required")
    .test("password-test", "Passwords must match", function (val) {
      return this.parent.password === val;
    }),
});
const SignUp = ({ setMode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const {registerClient} = useAuth();

  const onSubmit = (data) => {
    // console.log(data);
    registerClient(data);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="mb-10">
        {/* <h1 className="text-5xl font-bold text-white">
          New to MyFarm?  
        </h1> */}
        <h1 className="text-5xl font-bold text-white">Create a new account!</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full items-center"
      >
        <CustomTextField
          label="Name"
          name="name"
          register={register}
          errors={errors}
        />
        <CustomTextField
          label="Email/Phone no"
          name="email"
          register={register}
          errors={errors}
        />
        <CustomTextField
          label="Password"
          name="password"
          register={register}
          errors={errors}
        />
        <CustomTextField
          label="Confirm Password"
          name="cpassword"
          register={register}
          errors={errors}
        />
        <CustomButton invert type="submit">
          SIGN UP
        </CustomButton>
      </form>

      <div>
        <span className="text-white text-xl">Already a member?</span>{" "}
        <span
          className="text-white text-xl font-bold cursor-pointer"
          onClick={() => {
            setMode("login");
          }}
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default SignUp;
