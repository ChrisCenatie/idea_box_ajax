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
