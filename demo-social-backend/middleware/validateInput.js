const HttpError = require("../common/httpError");

const validateInput = (schema, property) => {
  return (req, res, next) => {
    const input = req[property];

    const { error } = schema.validate(input)
    const valid = !error
    if (valid) {
      next()
    } else {
      const { details } = error;
      const message = details.map(i => i.message).join(', ')
      throw new HttpError(message, 500)
    }
  }
}

module.exports = validateInput