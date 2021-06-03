const helper = require('../helpers/bmi.helper')
class BmiController {
    calculate = async (req, res) => {
        try {
            let params = req.fields;
            let jsonData = JSON.parse(params.data);
            let BmiData = helper.Bmi(jsonData);
            return res.status(200).json(helper.success('Bmi data calculated successfully',BmiData));
        } catch (e){
            return res.status(200).json(helper.error(400,e.message,[]));
        }

    };
}

module.exports = new BmiController();