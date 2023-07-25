import Joi from "joi";

export const productSchema = Joi.object({
  _id: Joi.string(),
  title: Joi.string().required().min(3),
  github: Joi.string(),
  description: Joi.string(),
  images: Joi.array().items(Joi.string()),
  categoryId: Joi.array().items(Joi.string()).required(),
});
