import { ProductDto } from '../../shared/dto/product.dto';
import { HttpResponseModel } from '../../shared/models/httpResponseModel';

export class ProductQuery {
  getAllProducts(products: Array<ProductDto>): HttpResponseModel {
    if (products.length == 0) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: products };
  }

  getProduct(product: ProductDto): HttpResponseModel {
    if (product == null) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: product };
  }

  postProduct(product: ProductDto) {
    if (product == null) {
      return { code: 404, message: 'Not Created' };
    }
    return { code: 201, data: product };
  }

  putProduct(updated: number) {
    if (updated == 0) {
      return { code: 404, message: 'updatedFailed' };
    }
    return { code: 200, data: updated };
  }

  deleteProduct(deleted: number) {
    if (deleted == 0) {
      return { code: 404, message: 'deletedFailed' };
    }
    return { code: 200, data: deleted };
  }
}
