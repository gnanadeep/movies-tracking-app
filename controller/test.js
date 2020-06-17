const test = async (request, response) => {
  response.status(200).send({message: true});
};

module.exports = {
  test,
};
