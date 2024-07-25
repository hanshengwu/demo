module.exports.handler = async (event, context) => {
  const { name } = event.queryStringParameters
  const message = `Hello ${name || "world"}!`

  return {
    statusCode: 200,
    body: message
  }
}
