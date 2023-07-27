import Category from "../models/category.js";
import { categorySchema } from "../schemas/category.js";

export const getAll = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      return res.status(400).json({
        messenger: "Danh sách category trống",
        data: [],
      });
    }
    return res.status(200).json({
      message: "Lay danh sach danh muc thanh cong!",
      data: categories,
    });
  } catch (err) {
    return res.status(500).json({ message: "Loi server" });
  }
};

export const getDetail = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({
        messenger: "Không tìm thấy category",
        data: [],
      });
    }
    return res.status(200).json({
      message: "Tim danh muc san pham thanh cong!",
      data: category,
    });
  } catch (err) {
    return res.status(500).json({ message: "Loi server", data: [] });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const category = await Category.create(req.body);
    if (!category) {
      return res.status(400).json({
        messenger: "Thêm category không thành công",
      });
    }
    return res.status(200).json({
      message: "Them danh muc san pham thanh cong!",
      data: category,
    });
  } catch (err) {
    return res.status(500).json({ message: "Loi server", data: [] });
  }
};

export const remove = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    console.log(category)
    if (!category) {
      return res.status(400).json({
        message: "Xoa category khong thanh cong!",
        data: [],
      });
    }
    return res.status(200).json({
      message: "Category đã được xóa thành công",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
      data: [],
    });
  }
};

export const update = async (req, res) => {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const category = await Category.findByIdAndUpdate(req.params.id, req.body);
    if (!category) {
      return res.status(400).json({
        messenger: "Update category không thành công",
      });
    }
    return res.status(200).json({
      message: "Update category thanh cong!",
      data: category,
    });
  } catch (err) {
    return res.status(500).json({ message: "Loi server" });
  }
};
