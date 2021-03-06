function getIdeas(){
  $.ajax({
    type: 'GET',
    url:  '/api/v1/ideas.json',
    success: function(ideas){
      var ideaElements = $.map(ideas, function(idea, index){
        var $ideaItem = $('<span><div></div></span>')
        .attr( 'class', 'idea')
        .attr( 'data-id', idea.id)
        .append("<h3 class='title'>"+idea.title+"</h3>")
        .append("<p class='body'>"+idea.body+"</p>")
        .append("<p>"+idea.quality+'</p>')
        .append("<button id='thumbs-up' class='btn btn-default btn-sm'><div class='glyphicon glyphicon-thumbs-up' aria-hidden='true'></div></button>")
        .append("<button id='thumbs-down' class='btn btn-default btn-sm'><div class='glyphicon glyphicon-thumbs-down' aria-hidden='true'></div></button></div>")
        .append("</p><button id='delete-idea' class='btn btn-default btn-m'>Delete Idea</button> ")
        .append("<button id='edit' type='button' class='btn btn-primary' data-toggle='modal' data-target='.bs-example-modal-lg'>Edit</button>");
        return $ideaItem;
      });
      $('#latest-ideas').html(ideaElements);
    }
  })
}
