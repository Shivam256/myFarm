import React, { useState } from "react";

import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useFinancialHelp from "../../hooks/useFinancialHelp";

import CustomTextField from "../../components/customTextField/customTextField.component";
import CustomButton from "../../components/customButton/customButton.component";

const financialHelpSchema = yup.object({
  reason: yup.string().required("Reason is required"),
  amount: yup.number().required("Amount is requied!"),
  accountNo: yup.number(),
  ifscCode: yup.string(),
});

const PostFinancialHelp = () => {
  const [aaddharCardImage, setAadharCardImage] = useState(null);
  const [loanDocs, setLoanDocs] = useState([]);
  const [existingLoan, setExistingLoan] = useState("false");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(financialHelpSchema),
  });

  const { postFinancialHelp } = useFinancialHelp();

  const handleAadharUpload = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dx1ye2bro`,
        uploadPreset: `kp2gvmnk`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info);
          console.log(result.info.url);
          setAadharCardImage(result.info.url);
        }
      }
    );
    widget.open();
  };
  const handleLoanDocsUpload = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dx1ye2bro`,
        uploadPreset: `kp2gvmnk`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info);
          console.log(result.info.url);
          setLoanDocs((docs) => [...docs, result.info.url]);
        }
      }
    );
    widget.open();
  };

  const handlePostHelp = (data) => {
    console.log(data);
    const newData = {
      amount: data.amount,
      reason: data.reason,
      bankDetails: {
        accountNo: data.accountNo,
        ifscCode: data.ifscCode,
      },
      existingLoan: existingLoan == "true",
      aadharCard: aaddharCardImage,
      previousLoans: loanDocs,
    };

    postFinancialHelp(newData);
  };

  return (
    <div className="pt-5 w-screen pb-5">
      <h1 className="text-5xl font-bold">Need Financial Help?</h1>
      <form
        className="w-3/5 flex flex-col gap-4 mt-12"
        onSubmit={handleSubmit(handlePostHelp)}
      >
        <CustomTextField
          label="Amount"
          name="amount"
          register={register}
          errors={errors}
          inverted
        />
        <CustomTextField
          label="Reason"
          name="reason"
          register={register}
          errors={errors}
          inverted
          multiline
          rows={5}
        />
        <CustomTextField
          label="Bank Account Number"
          name="accountNo"
          register={register}
          errors={errors}
          inverted
        />{" "}
        <CustomTextField
          label="IFSC Code"
          name="ifscCode"
          register={register}
          errors={errors}
          inverted
        />
        <CustomButton onClick={handleAadharUpload}>
          UPLOAD AADHAR IMAGE
        </CustomButton>
        <div>
          <h1 className="text-2xl mt-3">Do you have any existing loan?</h1>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={existingLoan}
            onChange={(e) => setExistingLoan(e.target.value)}
          >
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
        </div>
        {existingLoan == "true" ? (
          <div className="mb-12">
            <h1 className="text-2xl my-3">Please upload the loan documents.</h1>
            <CustomButton onClick={handleLoanDocsUpload}>
              UPLOAD DOCUMENTS
            </CustomButton>
          </div>
        ) : null}
        <CustomButton type="submit">POST</CustomButton>
      </form>
    </div>
  );
};

export default PostFinancialHelp;
