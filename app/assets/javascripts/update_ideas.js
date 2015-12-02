function thumbsUp(){
  $('#latest-ideas').delegate('#thumbs-up', 'click', function(){
    var $id = $(this).closest(".idea").attr('data-id');
    var thumbsUp = { idea: { thumbs: 1 }}
    $.ajax({
      type: 'PUT',
      url:  '/api/v1/ideas/' + $id + '.json',
      data: thumbsUp,
      success: function(){
        getIdeas();
      },
      error: function(){
        console.log("Idea can't be thumbed up.");
      }
    })
  })
}

function thumbsDown(){
  $('#latest-ideas').delegate('#thumbs-down', 'click', function(){
    var $id = $(this).closest(".idea").attr('data-id');
    var thumbsDown = { idea: { thumbs: -1 }}
    $.ajax({
      type: 'PUT',
      url:  '/api/v1/ideas/' + $id + '.json',
      data: thumbsDown,
      success: function(){
        getIdeas();
      },
      error: function(){
        console.log("Idea can't be thumbed down.");
      }
    })
  })
}
