$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url:  '/api/v1/ideas.json',
    success: function(ideas){
      var ideaElements = $.map(ideas, function(idea, index){
        var $ideaItem = $('<div></div>')
        .attr( 'class', 'idea')
        .attr( 'data-id', idea.id)
        .append('<h3>'+idea.title+'</h3>')
        .append('<p>'+idea.body+'</p>')
        .append('<p>'+idea.quality+'</p>')
        .append("</p><button id='delete-idea' class='btn btn-default btn-xs'>Delete</button>")
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

  deletePost();
})

function deletePost(){
  $('#latest-ideas').delegate('#delete-idea', 'click', function(){
    var $post = $(this).closest(".idea")
    console.log($post.attr('data-id'));
  })
}
