const invoice = 100; 
const stock = 100;

if (invoice===stock) {message = 'Заказ оформлен, с вами свяжется менеджер';}
else if (invoice<=stock) {message = 'Заказ оформлен, с вами свяжется менеджер';}
else if (invoice>stock) {message =  'На складе недостаточно товаров!';}

console.log(message);