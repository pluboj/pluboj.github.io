(function() {
  
  function getRequest() {
    var search_param = $("#search_text").val();
    $("#output").empty();
    $.ajax({
      url: "http://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="+$.trim(search_param)+"&callback=?",
      dataType: 'json',
      type: 'GET',
      success: function(data) {     
        $.each(data.query.search, function(i,v) {
          if (v.hasOwnProperty('title')) {
            var content = [];
                content.push("<b>"+v.title+"</b> -<br />");
                content.push(v.snippet);
                content.push("...(<a href='https://en.wikipedia.org/wiki/"+v.title+"' target='_blank'>more</a>)");
                     
            var item = $("<div class='jumbotron'></div>").html(content.join(""));
            $('#output').append(item);
          }
        });
      },
      error: function (errorMessage) {
      }
    });
  }
    
  $("#search").on("click", getRequest);
})();