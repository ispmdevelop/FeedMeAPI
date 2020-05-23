import { CategoryDto } from '../../shared/dto/category.dto';
import { CategoryRepository } from './category.repository';
import { CategoryEntity } from '../../persistance/entity/Category';
import { getRepository } from 'typeorm';

export class Categoryservice {
  categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository(getRepository(CategoryEntity));
  }

  public async getAllCategories(): Promise<Array<CategoryDto>> {
    return await this.categoryRepository.findAll(true);
  }

  public async getCategoryById(id: number): Promise<CategoryDto> {
    return await this.categoryRepository.findById(id);
  }

  public async postCategory(category: CategoryDto): Promise<CategoryDto> {
    return await this.categoryRepository.save(category);
  }

  public async putCategory(id: number, category: CategoryDto): Promise<number> {
    return await this.categoryRepository.update(id, category);
  }

  public deleteCategory(id: number): Promise<number> {
    return this.categoryRepository.delete(id);
  }
}
