import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import CustomTextField from "../../components/customTextField/customTextField.component";
import CustomButton from "../../components/customButton/customButton.component";

import useQuery from "../../hooks/useQuery";

const querySchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

const PostQuery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(querySchema),
  });

  const {postQuery} = useQuery();

  const handlePost = (data) => {
    postQuery(data);
  };
  

  return (
    <div className="pt-5 w-screen">
      <h1 className="text-5xl font-bold">Post Query</h1>
      <form
        className="w-3/5 flex flex-col gap-4 mt-12"
        onSubmit={handleSubmit(handlePost)}
      >
        <CustomTextField
          label="Title"
          name="title"
          register={register}
          errors={errors}
          inverted
        />
        <CustomTextField
          label="Description"
          name="description"
          register={register}
          errors={errors}
          inverted
          multiline
          rows={5}
        />
        <CustomButton type="submit">POST</CustomButton>
      </form>
    </div>
  );
};

export default PostQuery;
