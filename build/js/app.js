var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocities.com"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
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
$(document).ready(function () {
    // choose task category buttons
    $('.hobby-btn').click(function () {
        $('.workForm').hide();
        $('.homeForm').hide();
        $('.hobbyForm').toggle();
    });
    $('.work-btn').click(function () {
        $('.hobbyForm').hide();
        $('.homeForm').hide();
        $('.workForm').toggle();
    });
    $('.home-btn').click(function () {
        $('.workForm').hide();
        $('.hobbyForm').hide();
        $('.homeForm').toggle();
    });
    // hobby tasks form
    $('.hobbyForm').submit(function (event) {
        event.preventDefault();
        var hobbyDesc = $('.hobby-input').val();
        hobbyTodo.push(new ToDoList.HobbyTask(hobbyDesc));
        $('.hobby-input').val("");
        $('.hobby-list').append("<li>" + hobbyTodo[hobbyTodo.length - 1].description +
            "<ul><li>" + "Priority: " + hobbyTodo[hobbyTodo.length - 1].priority + "</li></ul></li>");
    });
    // home tasks form
    $('.homeForm').submit(function (event) {
        event.preventDefault();
        var homeDesc = $('.homeForm .home-desc').val();
        // var duedate = $('.homeForm .due-date').val();
        var person = $('.homeForm .person-assigned option:selected').val();
        var priority = $('.homeForm input[name=priority]:checked').val();
        homeTodo.push(new ToDoList.HomeTask(homeDesc, priority, person));
        $('.home-input').val("");
        $('.home-list').append("<li>" + homeTodo[homeTodo.length - 1].description +
            "<ul><li>" + "Priority: " + homeTodo[homeTodo.length - 1].priority + "</li>" +
            "<li>" + "Assigned to: " + homeTodo[homeTodo.length - 1].assignedTo + "</ul></li>");
    });
    // work tasks form
    $('.workForm').submit(function (event) {
        event.preventDefault();
        var workDesc = $('.workForm .work-desc').val();
        var date = $('.workForm .due-date option:selected').val();
        var person = $('.workForm .person-assigned option:selected').val();
        var priority = $('.workForm input[name=priority]:checked').val();
        workTodo.push(new ToDoList.WorkTask(date, workDesc, priority, person));
        $('.work-input').val("");
        $('.work-list').append("<li>" + workTodo[workTodo.length - 1].description +
            "<ul><li>" + "Due Date: " + workTodo[workTodo.length - 1].dueDate + "</li>" +
            "<li>" + "Assigned to: " + workTodo[workTodo.length - 1].assignedTo + "</li>" +
            "<li>" + "Priority: " + workTodo[workTodo.length - 1].priority + "</li></ul></li>");
    });
});
