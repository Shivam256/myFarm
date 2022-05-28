import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FinancialHelpSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  bankDetails: {
    accountNo: Number,
    ifscCode: String,
  },
  aadharCard: {
    type: String,
  },
  existingLoan: {
    type: Boolean,
  },
  previousLoans: [
    {
      type: String,
    },
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: "USER",
    required: true,
  },
});

const FinancialHelp = mongoose.model("FINANCIAL_HELP", FinancialHelpSchema);

export default FinancialHelp;
