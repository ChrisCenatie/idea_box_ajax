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

function openEdit(){
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
