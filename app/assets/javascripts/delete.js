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
