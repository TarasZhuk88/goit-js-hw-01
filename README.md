# goit-js-hw-01
 Задача 1-1



Задача 1-2
Использование тернарного оператора
Напиши скрипт присвоения переменной message одной из двух строк в зависимости от количества товаров на складе с помощью тернарного оператора.

Есть переменные

stock = 100. Это количество товаров на складе.
invoice. Эта переменная - количество единиц товара в заказе. Переменной присваиваются только целые положительные числа (проверку на целые положительные числа делать не нужно). Рекомендуем рассмотреть поведение скрипта при трех значениях - 50 т.е. меньше чем stock, 100, т.е. равно stock и 150 - больше чем stock.
message. Это переменная для текста с ответом на запрос о покупке. Возможно два значения:
"На складе недостаточно товаров!" если в заказе указано число, превышающее количество товаров на складе.
"Заказ оформлен, с вами свяжется менеджер" в оставшихся случаях.

Задача 1-3
Использование if else
Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую надо будет записать одно из трех сообщений о результате:

const CANCELED_BY_USER = 'Отменено пользователем!'
const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!
Выбор одного из трех значений зависит от того, какое значение будет у переменной userPassword (данные, которые может передать пользователь). Возможны такие варианты:

const ADMIN_PASSWORD = 'jqueryismyjam'. При таком значении userPassword переменной message следует присвоить ACCESS_IS_ALLOWED.
null. При таком значении userPassword переменной message следует присвоить CANCELED_BY_USER.
Любая строка, кроме ADMIN_PASSWORD. При таком значении userPassword переменной message следует присвоить ACCESS_DENIED.
Используйте if else if else для написания скрипта.

Задача 1-4
Использование if else и арифметических операторов
Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.

Переменная credits хранит количество средств - 23580 кредитов.

Единица товара (дроида) стоит 3000 кредитов за штуку и это значение хранится в переменной pricePerDroid.

Переменная orderPieces принимает значения null (отказ от покупок) и целое положительное число (количество единиц товара).

Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:

const CANCELED_BY_USER = 'Отменено пользователем!'
Вы купили ${} дроидов, на счету осталось ${} кредитов
const ACCESS_DENIED = 'Недостаточно средств на счету!'
Используйте вспомогательную переменную totalPrice, которая принимает рассчитанную общую цену заказа.
Используйте вспомогательную переменную balanceCredit, которая принимает разницу между credits и totalPrice.
А также используйте if else для выбора значений переменной message.