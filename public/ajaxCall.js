///////////////////////////////////////////////////////////////////////////
///////////////////////////musixmatch/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


$(function(){

  $('input').keydown(function(event){
    if(event.keyCode === 13){
   event.preventDefault();
   var value = $(this).val()

  var promise = $.ajax({
    type: "GET",
    data: {
        apikey:"8e4e4eb3217feb2d32349a43faae4584",
        q_lyrics: value,
        format:"jsonp",
        callback:"jsonp_callback"
    },
    url: "http://api.musixmatch.com/ws/1.1/track.search",
    dataType: "jsonp",
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    success: function(data) {
        console.log("SUCCESS YOU DID IT!!!");
        console.log("==================================");
        console.log(data.message.body.track_list);
        console.log("==================================");
        console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("FAILURE");
        console.log("==================================");
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    }
  });

  promise.done(function (data) {

          $('.data').empty();

          for (i = 0; i < 10; i++){
            if (data.message.body.track_list[i].track.track_spotify_id !== "" ){

              $('.data').append('<div class="track">' + '<iframe src="https://embed.spotify.com/?uri=spotify:track:' + data.message.body.track_list[i].track.track_spotify_id + '" width="300" height="380" frameborder="0" allowtransparency="true"></iframe><h3>' + data.message.body.track_list[i].track.track_name + '</h3> by </br> ' +  data.message.body.track_list[i].track.artist_name + '</br></div>')


            }
          }

      });

      promise.error(function (err) {
          console.log(err)
      });


 }});

});
