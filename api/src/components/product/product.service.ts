import { ProductDto } from '../../shared/dto/product.dto';
import { ProductRepository } from './product.repository';
import { ProductEntity } from '../../persistance/entity/Product';
import { getRepository } from 'typeorm';

export class ProductService {
  productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository(getRepository(ProductEntity));
  }

  public async getAllProducts(): Promise<Array<ProductDto>> {
    return await this.productRepository.findAll(true, ['categories', 'categories.category']);
  }

  public async getProductById(id: number): Promise<ProductDto> {
    return await this.productRepository.findById(id);
  }

  public async postProduct(product: ProductDto): Promise<ProductDto> {
    return await this.productRepository.save(product);
  }

  public async putProduct(id: number, product: ProductDto): Promise<number> {
    return await this.productRepository.update(id, product);
  }

  public deleteProduct(id: number): Promise<number> {
    return this.productRepository.delete(id);
  }
}
