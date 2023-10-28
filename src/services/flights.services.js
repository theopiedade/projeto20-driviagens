import Joi from "joi";

export function formatData(data) {
    var parts = data.split("-");
    
    var day  = parts[0];
    var month  = parts[1];
    var year  = parts[2];
  
    return year + '-' + ("0"+month).slice(-2) + '-' + ("0"+day).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}


export function validateDate(data) { 
    const schema = Joi.date().iso().greater('now').required();
    return schema.validate(data);
}

