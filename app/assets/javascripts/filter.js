 function filterIdeas(){
   $( "#filter" ).keypress(function() {
     var interval = setInterval(function (){
        $('span:not(:contains(' + $('#filter').val() + '))').hide();
        if( $('#filter').val() === "" ) {
          $('span').show();
          clearInterval(interval);
        }
      }, 1000);
   });
  }
