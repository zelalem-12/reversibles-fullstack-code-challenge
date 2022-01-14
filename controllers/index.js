const { reversibleNumbers } = require('../utils')

const getReversibleNumbers = (req, res) => {
    const number = parseInt(req.query.number);
    if (!number) {
        return res.status(400).send({ message: 'Please use valid integer number' })
    }
    const reversibles = reversibleNumbers(number);
    res.status(200).send(reversibles)

}


module.exports = {
    getReversibleNumbers
}