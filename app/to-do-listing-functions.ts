
$(document).ready(function() {

  // choose task category buttons
  $('.hobby-btn').click(function() {
    $('.workForm').hide();
    $('.homeForm').hide();
    $('.hobbyForm').toggle();
  })

  $('.work-btn').click(function() {
    $('.hobbyForm').hide();
    $('.homeForm').hide();
    $('.workForm').toggle();
  })

  $('.home-btn').click(function() {
    $('.workForm').hide();
    $('.hobbyForm').hide();
    $('.homeForm').toggle();
  })

  // hobby tasks form
  $('.hobbyForm').submit(function(event) {
    event.preventDefault();
    var hobbyDesc = $('.hobby-input').val();
    hobbyTodo.push(new ToDoList.HobbyTask(hobbyDesc));
    $('.hobby-input').val("");
    $('.hobby-list').append("<li>" + hobbyTodo[hobbyTodo.length-1].description +
                            "<ul><li>" + "Priority: " + hobbyTodo[hobbyTodo.length-1].priority + "</li></ul></li>");
  });

  // home tasks form
  $('.homeForm').submit(function(event) {
    event.preventDefault();
    var homeDesc = $('.homeForm .home-desc').val();
    // var duedate = $('.homeForm .due-date').val();
    var person = $('.homeForm .person-assigned option:selected').val();
    var priority = $('.homeForm input[name=priority]:checked').val();

    homeTodo.push(new ToDoList.HomeTask(homeDesc, priority, person));

    $('.home-input').val("");
    $('.home-list').append("<li>" + homeTodo[homeTodo.length-1].description +
                            "<ul><li>" + "Priority: " + homeTodo[homeTodo.length-1].priority + "</li>" +
                            "<li>" + "Assigned to: " +  homeTodo[homeTodo.length-1].assignedTo + "</ul></li>");
  });

  // work tasks form
  $('.workForm').submit(function(event) {
    event.preventDefault();
    var workDesc = $('.workForm .work-desc').val();
    var date = $('.workForm .due-date option:selected').val();
    var person = $('.workForm .person-assigned option:selected').val();
    var priority = $('.workForm input[name=priority]:checked').val();

    workTodo.push(new ToDoList.WorkTask(date, workDesc, priority, person));

    var tempArray = [highArray, medArray, lowArray];
    var highArray = [];
    var medArray = [];
    var lowArray = [];

    workTodo.forEach(function(work) {
      $('.work-list').empty();
      if (work.priority === "High") {
        highArray.push(work);
      } else if (work.priority === "Medium") {
        medArray.push(work);
      } else {
        lowArray.push(work);
      }
    });

    highArray.forEach(function(temp, i) {
      $('.work-list').append("<li>" + temp.description +
      "<ul><li>" + "Priority: " + temp.priority + "</li>" +
      "<li>" + "Assigned to: " +  temp.assignedTo + "</li>" +
      "<li>" + "Due Date: " + temp.dueDate + "</li></ul></li>");
    });
    medArray.forEach(function(temp, i) {
      $('.work-list').append("<li>" + temp.description +
      "<ul><li>" + "Priority: " + temp.priority + "</li>" +
      "<li>" + "Assigned to: " +  temp.assignedTo + "</li>" +
      "<li>" + "Due Date: " + temp.dueDate + "</li></ul></li>");
    });
    lowArray.forEach(function(temp, i) {
      $('.work-list').append("<li>" + temp.description +
      "<ul><li>" + "Priority: " + temp.priority + "</li>" +
      "<li>" + "Assigned to: " +  temp.assignedTo + "</li>" +
      "<li>" + "Due Date: " + temp.dueDate + "</li></ul></li>");
    });

  });
});
