import { ProductInOrder } from "./productInOrder";

export class Order {
    orderId: number;
    buyerEmail: string;
    buyerUsername: string;
    buyerPhone: string;
    buyerAddress: string;
    orderAmount: string;
    orderStatus: string;
    createTime: string;
    updateTime: string;
    products?: ProductInOrder[];

}
