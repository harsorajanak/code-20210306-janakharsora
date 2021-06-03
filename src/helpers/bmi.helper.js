class BmiHelper {
    success = (message,data) => {
        return {
            status : true,
            message: message,
            data : data
        }
    }
    error = (errcd,message,data) => {
        return {
            status : false,
            message: message,
            data : data,
            err_code: errcd
        }
    }
    BmiCalc = (HeightCm,WeightKg) => {
        let height =  parseFloat(HeightCm) / 100;
        let weight =  parseFloat(WeightKg);
        let bmi = Math.round(weight / (height * height), 2);
        return parseFloat(bmi);
    }
    BmiCategory = (BmiVal) => {
        let category = "";
        if(BmiVal < 18.5){
            category = "Underweight"
        } else if(BmiVal >= 18.5 && BmiVal <= 24.9){
            category = "Normal Weight"
        } else if(BmiVal >= 25 && BmiVal <= 29.9){
            category = "Overweight"
        } else if(BmiVal >= 30 && BmiVal <= 34.9){
            category = "Moderately obese"
        } else if(BmiVal >= 35 && BmiVal <= 39.9){
            category = "Severely obese"
        } else {
            category = "Very severely obese"
        }
        return category;
    }
    BmiHealthRisk = (BmiVal) => {
        let HealthRisk = "";
        if(BmiVal < 18.5){
            HealthRisk = "Malnutrition risk"
        } else if(BmiVal >= 18.5 && BmiVal <= 24.9){
            HealthRisk = "Low risk"
        } else if(BmiVal >= 25 && BmiVal <= 29.9){
            HealthRisk = "Enhanced risk "
        } else if(BmiVal >= 30 && BmiVal <= 34.9){
            HealthRisk = "Medium risk"
        } else if(BmiVal >= 35 && BmiVal <= 39.9){
            HealthRisk = "High risk"
        } else {
            HealthRisk = "Very high risk"
        }
        return HealthRisk;
    }
    Bmi = (array) => {
        let data = [];
        for(let val of array){
            let bmiVal  =  this.BmiCalc(val.HeightCm,val.WeightKg);
            let bmiCat  =  this.BmiCategory(bmiVal)
            let bmiHealthRisk  =  this.BmiHealthRisk(bmiVal)
            let object = {
                HeightCm:val.HeightCm,
                WeightKg:val.WeightKg,
                Gender: val.Gender,
                BodyMassIndex: bmiVal,
                BmiCategory:bmiCat,
                HealthRisk: bmiHealthRisk
            }
            data.push(object);
        }
        return data;
    }
}
module.exports = new BmiHelper();