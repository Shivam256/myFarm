import FinancialHelp from "../models/financialHelp.model.js";

export const postFinancialHelp = async (req, res) => {
  const {
    amount,
    reason,
    bankDetails,
    aadharCard,
    existingLoan,
    previousLoans,
  } = req.body;

  try {
    const fRequest = new FinancialHelp({
      amount,
      reason,
      bankDetails,
      aadharCard,
      existingLoan,
      previousLoans,
      author: req.user,
    });
    await fRequest.save();

    return res
      .status(200)
      .send({ ok: true, message: "Successsfully sent request!", fRequest });
  } catch (err) {
    console.log(err);
    res.send({
      ok: false,
      message: "Someghing went wrong. Could not post request",
    });
  }
};

export const getAllFinancialRequests = async (req, res) => {
  try {
    const fRequests = await FinancialHelp.find({}).populate("author");
    return res.status(200).send({
      ok: true,
      message: "Successfully retrieved financial equests",
      fRequests,
    });
  } catch (err) {
    log(err);
  }
};
