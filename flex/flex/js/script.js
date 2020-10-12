'use strict';



let money = ("Ваш бюджет на месяц?", ''),
let time = ("Выберете дату в формате YYYY-MM-DD",'');
let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savingn: false
}

let a1 = prompt("Введите обязательную статью расходов в этом месяце",''),
a2 = prompt("Во сколько обойдётся?",''),
a3 = prompt("Введите обязательную статью расходов в этом месяце",''),
a4 = prompt("Во сколько обойдётся?",'');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget /30);
