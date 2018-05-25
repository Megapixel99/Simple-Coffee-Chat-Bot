function Send() {
  $("#messages").append("<li id='userMessages'>" + $("#text").val() + "</li>");

$.ajax({
  url: "/botresponse",
  type: "POST",
  data: {message: $("#text").val()},
  success: function(data){
    if(!data)
      alert("NO ITEMINFO");
    else{
      if (data.Response[1] == "text")
      {
       $("#send").prop('disabled', false); 
       $("#text").prop('disabled', false); 
       $("#num").prop('disabled', true); 
      }
      else if (data.Response[1] == "boolean")
      {
       $("#messages").append("<li id='userMessages'>" + 
       for(var i = 2; i < data.length; i++) 
        { 
          + "<input id='" + data.Response[i] +"' type='button' value='" + data.Response[i] +"'/>" + 
        } 
       + "</li>"); 
       $("#send").prop('disabled', true);
       $("#num").prop('disabled', true);
       $("#text").prop('disabled', true); 
      }
      else if (data.Response[1] == "number")
      {
       $("#num").prop('disabled', false);
       $("#text").prop('disabled', true); 
       $("#send").prop('disabled', true); 
      }
      $("#messages").append("<li id='botMessages'>" + data.Response[0] + "</li>");
    }
  } ,
  dataType: "json"
});
}
$.ajax({
  url: "/botresponse",
  type: "POST",
  success: function(data){
    if(!data)
      alert("NO ITEMINFO");
    else{
      $("#messages").append("<li id='botMessages'>" + data.Response[0] + "</li>");
    }
  } ,
  dataType: "json"
});
