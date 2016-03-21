/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />

var people = ToDoList.people;

var homeTodo = [];
var hobbyTodo = [];
var workTodo = [];

homeTodo.push(new ToDoList.HomeTask("Do the dishes.", "High"));
homeTodo.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
homeTodo.push(new ToDoList.HomeTask("Wash the laundry.", "High"));

hobbyTodo.push(new ToDoList.HobbyTask("Practice origami."));
hobbyTodo.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

workTodo.push(new ToDoList.WorkTask(today, "Update website.", "High", people.diane));
workTodo.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
workTodo.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));

console.log(hobbyTodo);
