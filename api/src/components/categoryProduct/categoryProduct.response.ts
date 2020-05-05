import { CategoryProductDto } from '../../shared/dto/categoryProduct.dto';
import { HttpResponseModel } from '../../shared/models/httpResponseModel';

export class CategoryProductQuery {
  getAllCategoryProducts(categoryProducts: Array<CategoryProductDto>): HttpResponseModel {
    if (categoryProducts.length == 0) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: categoryProducts };
  }

  getCategoryProduct(categoryProduct: CategoryProductDto): HttpResponseModel {
    if (categoryProduct == null) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: categoryProduct };
  }

  postCategoryProduct(categoryProduct: CategoryProductDto) {
    if (categoryProduct == null) {
      return { code: 404, message: 'Not Created' };
    }
    return { code: 201, data: categoryProduct };
  }

  putCategoryProduct(updated: number) {
    if (updated == 0) {
      return { code: 404, message: 'updatedFailed' };
    }
    return { code: 200, data: updated };
  }

  deleteCategoryProduct(deleted: number) {
    if (deleted == 0) {
      return { code: 404, message: 'deletedFailed' };
    }
    return { code: 200, data: deleted };
  }
}
