import { UserController } from '../components/user/user.controller';
import { InstitutionController } from '../components/institution/institution.controller';
import { SubscriptionController } from '../components/subscription/subscription.controller';
import { ProductController } from '../components/product/product.controller';
import { OrderController } from '../components/order/order.controller';
import { CategoryController } from '../components/category/category.controller';
import { CategoryProductController } from '../components/categoryProduct/categoryProduct.controller';

export class ControllersConfig {
  userController: UserController = new UserController();
  institutionController: InstitutionController = new InstitutionController();
  subscriptionController: SubscriptionController = new SubscriptionController();
  productController: ProductController = new ProductController();
  orderController: OrderController = new OrderController();
  categoryController: CategoryController = new CategoryController();
  categoryProductController: CategoryProductController = new CategoryProductController();

  getControllers() {
    return [
      this.userController,
      this.institutionController,
      this.subscriptionController,
      this.productController,
      this.orderController,
      this.categoryController,
      this.categoryProductController,
    ];
  }
}
