import IProduct from '../interfaces/IProduct';
import connection from '../models/connection';
import ProductModel from '../models/productModel';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async addProduct(product: IProduct) {
    console.log('SERVICE');
    const result = await this.model.addProduct(product);
    return result;
  }

  public async listAllProducts(): Promise<IProduct[]> {
    const result = await this.model.listAllProducts();
    return result as IProduct[];
  }
}