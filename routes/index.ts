import express from "express";

//User Routes
import userRouter from "../api/user/routes";
import createUser from "../api/user/routes";
import loginUser from "../api/user/routes";
import editUser from "../api/user/routes";
import deleteUser from "../api/user/routes";

//Product Routes
import productRouter from "../api/product/routes";
import createProduct from "../api/product/routes";
import editProduct from "../api/product/routes";
import deleteProduct from "../api/product/routes";

//Cart Routes
import cartRouter from "../api/cart/routes";

const router = express.Router();

//User
router.use("/users", userRouter);
router.post("/register", createUser);
router.put("/editUser/:id", editUser);
router.post("/login", loginUser);
router.delete("/deleteUser/:id", deleteUser);

//Product
router.use("/products", productRouter);
router.post("/addProduct", createProduct);
router.put("/editProduct", editProduct);
router.delete("/deleteProduct/:id", deleteProduct);

//Cart
router.use("/cart", cartRouter);

export default router;
