import { CategoryProductDto } from '../../shared/dto/categoryProduct.dto';
import { CategoryProductRepository } from './categoryProduct.repository';
import { CategoryProductEntity } from '../../persistance/entity/CategoryProduct';
import { getRepository } from 'typeorm';

export class CategoryProductService {
  categoryProductRepository: CategoryProductRepository;

  constructor() {
    this.categoryProductRepository = new CategoryProductRepository(getRepository(CategoryProductEntity));
  }

  public async getAllCategoryProducts(): Promise<Array<CategoryProductDto>> {
    return await this.categoryProductRepository.findAll();
  }

  public async getCategoryProductById(id: number): Promise<CategoryProductDto> {
    return await this.categoryProductRepository.findById(id);
  }

  public async postCategoryProduct(categoryProduct: CategoryProductDto): Promise<CategoryProductDto> {
    return await this.categoryProductRepository.save(categoryProduct);
  }

  public async putCategoryProduct(id: number, categoryProduct: CategoryProductDto): Promise<number> {
    return await this.categoryProductRepository.update(id, categoryProduct);
  }

  public deleteCategoryProduct(id: number): Promise<number> {
    return this.categoryProductRepository.delete(id);
  }
}
