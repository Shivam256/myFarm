import Contact from "../models/contact.model.js";

export const postContactRequest = async (req, res) => {
  const { phone, email, reason } = req.body;

  try {
    const contact = new Contact({ phone, email, reason, author: req.user });
    await contact.save();

    return res.status(200).send({
      ok: true,
      message: "Successfully requested for contact!",
      contact,
    });
  } catch (err) {
    console.log(err);
    return res.send({ ok: false, message: "Something went wrong." });
  }
};

export const getAllContactRequests = async (req, res) => {
  try {
    const contacts = await Contact.find({}).populate("author");
    return res
      .status(200)
      .send({
        ok: true,
        message: "Successfully retrieved the contacts",
        contacts,
      });
  } catch (err) {
    console.log(err);
    return res.send({ ok: false, message: "Something went wrong!" });
  }
};
