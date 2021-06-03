const Joi = require('joi');
const calculate = (req,res,next) => {
    try{
        const data = req.fields;
        let schema = Joi.object().keys({
            data: Joi.string().required()
        });

        Joi.validate(data, schema, (err) => {
            if (err) {
                return res.status(400).json({
                    status: 0,
                    message: err.details[0].message,
                    data : []
                })
            } else {
                return next();
            }
        });
    } catch (e) {
        return res.status(400).json({
            flag: 0,
            msg: e.message,
            data: ""
        })
    }
}
module.exports = {
    calculate
};
