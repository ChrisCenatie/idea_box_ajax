$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url:  '/api/v1/ideas.json',
    success: function(ideas){
      $.each(ideas, function(index, idea){
        $('#latest-ideas').append(
          "<div class='idea"+ idea.id +"'><p>"
          + idea.title
          + idea.body
          + idea.quality
          + "</p></div>"
        )
      })
    }
  })
})
// <!-- <ul>
//   <% @ideas.each do |idea| %>
//     <li class="idea<%= idea.id %>">
//       <%= idea.title %>
//       <ul>
//         <li class="body<%= idea.id %>"><strong>Body:</strong> <%= idea.body %></li>
//         <li class="quality<%= idea.id %>"><strong>Quality:</strong> <%= idea.quality %></li>
//       </ul>
//     </li>
//   <% end %>
// </ul> -->
