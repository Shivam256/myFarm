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
    const fRequests = await FinancialHelp.find({})
      .populate("author")
      .populate("response.author");
    return res.status(200).send({
      ok: true,
      message: "Successfully retrieved financial equests",
      fRequests,
    });
  } catch (err) {
    log(err);
  }
};

export const getUserFinancialRequests = async (req, res) => {
  try {
    const { userId } = req.params;
    const fRequests = await FinancialHelp.find({ author: userId })
      .populate("response.author")
      .populate("author")
    return res.status(200).send({
      ok: true,
      message: "Successfulluy retrieved requests",
      fRequests,
    });
  } catch (err) {
    console.log(err);
  }
};

export const respondToRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { text } = req.body;
    const newResponse = {
      text,
      author: req.user,
    };

    const fRequest = await FinancialHelp.findById(requestId);
    fRequest.response = [...fRequest.response, newResponse];
    await fRequest.save();

    return res
      .status(200)
      .send({
        ok: true,
        message: "Successfully responded to request",
        fRequest,
      });
  } catch (err) {
    console.log(err);
  }
};
