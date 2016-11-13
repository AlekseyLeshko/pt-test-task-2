Test task #2 for Positive Technologies
=

В магазине покупатель выбрал 4 товара со следующими ценами.
В результате сформировалась корзина,
```
const selectedCart = [{
  price: 20
}, {
  price: 45
}, {
  price: 67
}, {
  price: 1305
}];
```
Магазин в котором совершается покупка интернациональный и каждый клиент может выбрать любую валюту, с помощью которой будет осуществлять оплату.
Список доступных валют:
rubles, euros, dollars, pounds, yens(базовой валютой является dollar)

Цель: рассчитать общую цену для каждого типа валюты, получив объект вида:
```
  const totalCartPrice = {
    rubles: number,
    euros: number,
    dollars: number,
    pounds: number,
    yens: number
  };
```
