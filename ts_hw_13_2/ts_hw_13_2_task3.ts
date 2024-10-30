// Создайте систему типов и интерфейсов для управления заказами в интернет-магазине.

// Создайте интерфейсы для:

//     - Product: товар с полями id (число), name (строка), price (число), и опциональным полем discount (число).
//     - Customer: клиент с полями id (число), name (строка), и email (строка).
//     - OrderItem: элемент заказа с полями product (тип Product), quantity (число).
//     - Order: заказ с полями id (число), customer (тип Customer), 
//       items (массив типа OrderItem), и опциональным полем status (литерал типа 'pending' | 'shipped' | 'delivered').
  
// Напишите функцию calculateTotal, которая принимает объект типа Order 
// и возвращает общую сумму заказа с учетом возможных скидок.

// Если у товара есть скидка, то она должна учитываться при расчете суммы.
// Сумма заказа вычисляется как сумма цен всех товаров, умноженная на количество каждого товара в заказе.

interface IProduct {
    id: number;
    name: string;
    price: number;
    discount?: number
};

interface ICustomer {
    id: number;
    name: string;
    email: string;    
};

interface IOrderItem {
    product: IProduct;
    quantity: number
};

interface IOrder {
    id: number;
    customer: ICustomer;
    items: IOrderItem[];
    status: 'pending' | 'shipped' | 'delivered'
}

const order1: IOrder = {
    id: 1,
    customer: {
        id: 101,
        name: "John Doe",
        email: "johndoe@example.com"
    },
    items: [
        {
            product: {
                id: 1,
                name: "Laptop",
                price: 1200,
                discount: 10 // скидка в процентах
            },
            quantity: 1
        },
        {
            product: {
                id: 2,
                name: "Smartphone",
                price: 800
                // без скидки
            },
            quantity: 2
        },
        {
            product: {
                id: 3,
                name: "Headphones",
                price: 150,
                discount: 5
            },
            quantity: 3
        }
    ],
    status: 'pending'
};

function calculateTotal(object: IOrder):number{
    const total = object.items.reduce((acc, item) => {
        const discount = item.product.discount || 0;
        const discountPrice = item.product.price * (1 - discount / 100)
        return acc + discountPrice * item.quantity
    },0)    
    return total
};

console.log(calculateTotal(order1));
