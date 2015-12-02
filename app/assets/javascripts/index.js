$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url:  '/api/v1/ideas.json',
    success: function(ideas){
      var ideaElements = $.map(ideas, function(idea, index){
        var $ideaItem = $('<li></li>')
        .attr( 'id', 'idea' + idea.id)
        .append('<h3>'+idea.title+'</h3>')
        .append('<p>'+idea.body+'</p>')
        .append('<p>'+idea.quality+'</p>')
        return $ideaItem;
      });
      $('#latest-ideas').html(ideaElements);
    }
  })

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
      data: postParams
    })
  })
})
