// api/users.js
import {
  getUserInformations,
  getAllProducts,
  addToCart,
  addToWishlist,
  getUserCart,
  updateCart,
  getUserWishlist,
} from "../controllers/userController.js";

export default async (req, res) => {
  if (req.method === "GET") {
    if (req.url.includes("/products")) {
      await getAllProducts(req, res);
    } else if (req.url.includes("/carts")) {
      await getUserCart(req, res);
    } else if (req.url.includes("/wishlists")) {
      await getUserWishlist(req, res);
    } else if (req.url.includes("/users")) {
      await getUserInformations(req, res);
    }
  } else if (req.method === "POST") {
    if (req.url.includes("/products-carts")) {
      await addToCart(req, res);
    } else if (req.url.includes("/products-wishlists")) {
      await addToWishlist(req, res);
    }
  } else if (req.method === "PUT") {
    if (req.url.includes("/products-carts")) {
      await updateCart(req, res);
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
