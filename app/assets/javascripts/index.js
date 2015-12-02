$(document).ready(function(){
  getIdeas();
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
  thumbsUp();
})

function getIdeas(){
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
        .append("<p>"+idea.quality+'</p>')
        .append("<button id='thumbs-up' class='btn btn-default btn-sm'><span class='glyphicon glyphicon-thumbs-up' aria-hidden='true'></span></button>")
        .append("<button id='thumbs-down' class='btn btn-default btn-sm'><span class='glyphicon glyphicon-thumbs-down' aria-hidden='true'></span></button></div>")
        .append("</p><button id='delete-idea' class='btn btn-default btn-m'>Delete Idea</button>")
        return $ideaItem;
      });
      $('#latest-ideas').html(ideaElements);
    }
  })
}

function deletePost(){
  $('#latest-ideas').delegate('#delete-idea', 'click', function(){
    var $post = $(this).closest(".idea")

    $.ajax({
      type: 'DELETE',
      url:  '/api/v1/ideas/' + $post.attr('data-id') + '.json',
      success: function(){
        $post.remove()
      },
      error: function(){
        $post.remove()
        console.log('The post was already deleted.')
      }
    })
  })
}

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
    })
  })
}

// function quality(idea){
//   var qualities = { swill: 0, plausible: 1, genius: 3 };
//   return qualities[idea]
// }
