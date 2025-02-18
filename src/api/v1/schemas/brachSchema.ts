import Joi from 'joi';

export const branchSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    address: Joi.string().required(),
    phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).required()
});
