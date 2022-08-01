import IOrderArr from '../interfaces/IOrderArr';
import IOrder from '../interfaces/IOrders';

class Refactor {
  private convertInArray = (order: IOrder): IOrderArr => {
    const newOrder: any = { ...order };
    newOrder.productsIds = [newOrder.productsIds];
    return newOrder as IOrderArr;
  };

  public order = (orders: IOrder[]) => (
    orders.reduce((acc: IOrderArr[], order: IOrder, index: number): IOrderArr[] => {
      if (index === 0) {
        const newOrde = this.convertInArray(order);
        acc.push(newOrde);
        return acc;
      }

      const isIgual = acc.some(({ id }) => id === order.id);
      
      if (isIgual) {
        acc[acc.length - 1].productsIds.push(order.productsIds);
      } else {
        const newOrde = this.convertInArray(order);
        acc.push(newOrde); 
      }

      return acc;
    }, [])
  );
}

export default Refactor;