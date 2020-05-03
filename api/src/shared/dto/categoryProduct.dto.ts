import { CategoryDto } from './category.dto';
import { ProductDto } from './product.dto';

export interface CategoryProductDto {
  id: number;
  categoryId: number;
  productId: number;
  category: CategoryDto;
  product: ProductDto;
}
