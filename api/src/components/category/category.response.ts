import { CategoryDto } from 'src/shared/dto/category.dto';
import { HttpResponseModel } from 'src/shared/models/httpResponseModel';

export class CategoryQuery {
  getAllCategories(categories: Array<CategoryDto>): HttpResponseModel {
    if (categories.length == 0) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: categories };
  }

  getCategory(category: CategoryDto): HttpResponseModel {
    if (category == null) {
      return { code: 404, message: 'Not Found' };
    }
    return { code: 200, data: category };
  }

  postCategory(category: CategoryDto) {
    if (category == null) {
      return { code: 404, message: 'Not Created' };
    }
    return { code: 201, data: category };
  }

  putCategory(updated: number) {
    if (updated == 0) {
      return { code: 404, message: 'updatedFailed' };
    }
    return { code: 200, data: updated };
  }

  deleteCategory(deleted: number) {
    if (deleted == 0) {
      return { code: 404, message: 'deletedFailed' };
    }
    return { code: 200, data: deleted };
  }
}
