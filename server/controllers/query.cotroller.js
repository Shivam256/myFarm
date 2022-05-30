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
    const queries = await Query.find({}).populate("author").populate("response.author");
    return res.status(200).send({
      ok: true,
      message: "Successfully retrieved all the queries",
      queries,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUserQueries = async (req, res) => {
  try {
    const { userId } = req.params;
    const queries = await Query.find({ author: userId }).populate("author").populate("response.author");
    return res
      .status(200)
      .send({ ok: true, message: "Successfulluy retrieved queries", queries });
  } catch (err) {
    console.log(err);
  }
};

export const respondToQuery = async (req, res) => {
  try {
    const { queryId } = req.params;
  const { text } = req.body;
    const newResponse = {
      text,
      author: req.user,
    };

    const query = await Query.findById(queryId);
    query.response = [...query.response, newResponse];
    await query.save();

    return res
      .status(200)
      .send({ ok: true, message: "Successfully responded to query", query });
  } catch (err) {
    console.log(err);
  }
};
