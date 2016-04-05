$( "#searchForm" ).submit(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();
 
  // Get some values from elements on the page:
  var $form = $( this ),
    term = $form.find( "input[name='s']" ).val(),
    url = $form.attr( "action" );
 
  // Send the data using post
  var posting = $.post( url, { s: term } );
 
  // Put the results in a div
  posting.done(function( data ) {
    // console.log( data.result );
    if( data.result == "" ){
      $( "#result" ).empty().append( "查無報名資料" );
    }else{
      $( "#result" ).empty().append( data.result + " 同學 報名成功！" );
      $( "#result" ).append( "<br>" );
      $( "#result" ).append( "敬請期待暑假的電機營！" );
    }
  });
});
