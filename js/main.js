$( document ).ready(function() {
    $( "a.delete" ).on( "click", function( event) {
  		event.preventDefault(); 
  		var tr = $(this).closest('tr');
  		var id = tr.children('td:first').html();
      var data = {'del':id};
  		$.getJSON('ajax-request.php?',
        data,
        function(res){
          console.log(res);
          tr.fadeOut('slow', function() {
            if (res.status == 'success') {
              $('#info').html(res.message);
            };
            $(this).remove();
          });
        });
    });
});