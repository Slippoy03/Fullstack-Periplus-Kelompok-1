import {
  addProduct,
  getAllProducts,
  addCategory,
  deleteProduct,
  updateProduct,
} from "../controllers/adminController.js";

export default async (req, res) => {
  if (req.method === "GET") {
    await getAllProducts(req, res);
  } else if (req.method === "POST") {
    if (req.url.includes("/add-product")) {
      await addProduct(req, res);
    } else if (req.url.includes("/add-category")) {
      await addCategory(req, res);
    }
  } else if (req.method === "PUT" && req.url.includes("/products/")) {
    await updateProduct(req, res);
  } else if (req.method === "DELETE" && req.url.includes("/products/")) {
    await deleteProduct(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
