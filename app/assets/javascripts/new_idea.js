function createIdea(){
  $('#create-idea').on('click', function(){
    var newTitle = $('#title').val()
    var newBody = $('#body').val()
    var postParams = { idea: {
      title: newTitle,
      body:  newBody
      }
    }

    $.ajax({
      type: 'POST',
      url: '/api/v1/ideas.json',
      data: postParams,
      success: function(){
        getIdeas();
      },
      error:  function(){
        console.log("Idea failed to be added");
      }
    })
  })
}
