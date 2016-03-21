
$(document).ready(function() {

  $('.hobbyForm').submit(function(event) {
    event.preventDefault();
    var hobbyDesc = $('.hobby-input').val();
    hobbyTodo.push(new ToDoList.HobbyTask(hobbyDesc));
    $('.hobby-input').val("");
    $('.hobby-list').append("<li>" + hobbyTodo[hobbyTodo.length-1].description + "</li>");
  })



});
