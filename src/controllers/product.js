import Product from "../models/product.js";
import Category from "../models/category.js";
import { productSchema } from "../schemas/product.js";
export const getAll = async (req, res) => {
  try {

    const products = await Product.find().populate("categoryId");
    
    if (products.length === 0) {
      
      res.send({
        messenger: "Danh sách sản phẩm trống",
      });
    }
    return res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const getDetail = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryId"
    );
    if (!product) {
      res.send({
        messenger: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const product = await Product.create(req.body);
    const productId = product._id;
    const categoryId = req.body.categoryId;
    const category = await Category.findById(categoryId);
   
    category.products.push(productId); 
    console.log(category);
    console.log(product)
    await category.save();
    if (!product) {
      res.send({
        messenger: "Thêm sản phẩm không thành công",
      });
    }
    return res.json(product);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const remove = async (req, res) => {
  try {
      console.log(req.params.id)
    const product = await Product.findByIdAndDelete(req.params.id);
    // 
    return res.status(200).json({
      message: "Sản phẩm đã được xóa thành công",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) {
      res.send({
        messenger: "Update sản phẩm không thành công",
      });
    }
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};
