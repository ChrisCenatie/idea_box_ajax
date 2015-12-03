function getIdeas(){
  $.ajax({
    type: 'GET',
    url:  '/api/v1/ideas.json',
    success: function(ideas){
      var ideaElements = $.map(ideas, function(idea, index){
        var $ideaItem = $('<div></div>')
        .attr( 'class', 'idea')
        .attr( 'data-id', idea.id)
        .append("<h3 class='title'>"+idea.title+"</h3>")
        .append("<p class='body'>"+idea.body+"</p>")
        .append("<p>"+idea.quality+'</p>')
        .append("<button id='thumbs-up' class='btn btn-default btn-sm'><span class='glyphicon glyphicon-thumbs-up' aria-hidden='true'></span></button>")
        .append("<button id='thumbs-down' class='btn btn-default btn-sm'><span class='glyphicon glyphicon-thumbs-down' aria-hidden='true'></span></button></div>")
        .append("</p><button id='delete-idea' class='btn btn-default btn-m'>Delete Idea</button> ")
        .append("<button id='edit' type='button' class='btn btn-primary' data-toggle='modal' data-target='.bs-example-modal-lg'>Edit</button>");
        return $ideaItem;
      });
      $('#latest-ideas').html(ideaElements);
    }
  })
}

function editIdea(){
  $('#latest-ideas').delegate('#edit', 'click', function(){
    var $id = $(this).closest(".idea").attr('data-id');

    $.ajax({
      type: 'GET',
      url:  '/api/v1/ideas/' + $id + '.json',
      success: function(idea){
        $('.modal-content').attr('idea-id', $id)
        .append("<h3 id='edit-id'>" + idea.id + "</h3>")
        .append("<h4>Title:</h4>")
        .append("<textarea id='edit-title' rows='1' cols='100'>" + idea.title + "</textarea>")
        .append("<h4>Body:</h4>")
        .append("<textarea id='edit-body' rows='3' cols='100'>" + idea.body + "</textarea><br>")
        .append("<button id='edit-idea' type='submit'>Update</button>")
        .append("<button id='cancel-edit' type='submit'>Cancel</button>")
      }
    })
  })
}

function updateIdea(){
  $(document).on('click', "#edit-idea", function(){
    var id = $('#edit-id').text();
    var editTitle = $('#edit-title').val();
    var editBody = $('#edit-body').val();
    var putParams = { idea: {
      title: editTitle,
      body:  editBody
      }
    }

    $.ajax({
      type: 'PUT',
      url: '/api/v1/ideas/' + id + '.json',
      data: putParams,
      success: function(){
        $('.modal-content').removeAttr('idea-id').empty();
        getIdeas();
      },
      error:  function(){
        console.log("Idea failed to be updated");
      }
    })
  })
  cancelEdit();
}

function cancelEdit(){
   $(document).on('click', "#cancel-edit", function(){
     $('.modal-content').removeAttr('idea-id').empty();
   })
 }
