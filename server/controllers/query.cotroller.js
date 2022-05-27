import Query from "../models/query.model.js";

export const postQuery = async (req, res) => {
  const { title, description } = req.body;

  try {
    const query = new Query({ title, description, author: req.user });
    await query.save();

    return res
      .status(200)
      .send({ ok: true, message: "Query successfully posted!", query });
  } catch (err) {
    console.log(err);
    res.send({
      ok: false,
      message: "Something went wrong! Cound not post query.",
    });
  }
};

export const getAllQueries = async (req, res) => {
  try {
    const queries = await Query.find({}).populate('author');
    return res
      .status(200)
      .send({
        ok: true,
        message: "Successfully retrieved all the queries",
        queries,
      });
  } catch (err) {
    console.log(err);
  }
};
