import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './useCases/categories/listCategories';
import { createCategory } from './useCases/categories/createCategory';
import { listProducts } from './useCases/products/listProducts';
import { createProduct } from './useCases/products/createProduct';
import { listProductsByCategories } from './useCases/categories/listProductsByCategories';
import { listOrders } from './useCases/orders/listOrders';
import { createOrders } from './useCases/orders/createOrders';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { cancelOrder } from './useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  })
})

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProduct);

// Get product Bby category
router.get('/categories/:categoryId/products', listProductsByCategories);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrders);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
