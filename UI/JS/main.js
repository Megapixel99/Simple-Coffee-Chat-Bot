
$.ajax({
  url: "/botresponse",
  type: "POST",
  success: function(data){
    if(!data)
      alert("NO ITEMINFO");
    else{
    $("#messages").append("<li id='botMessages' class='" + data.Response[0] + "'>" + data.Response[0] + "</li>");
        if (data.Response[1] == "text" || data.Response[1] == "number")
        {
         $("#submit").prop('disabled', false);
         $("#text").prop('disabled', false);
        }
        else if (data.Response[1] == "boolean")
        {
        var options = "";
         for(var i = 2; i < data.Response.length; i++)
          {
            options += "<input id='botMessages' onclick={ClickButton('" + data.Response[i] + "')} type='button' class='bot' value='" + data.Response[i] +"'/>";
          }
         $("#messages").append( "<li>" + options + "</li>" );
         $("#submit").prop('disabled', true);
         $("#text").prop('disabled', true);
    }
  }
  } ,
  dataType: "json"
});
function Send() {
  $("#messages").append("<li id='userMessages'>" + $("#text").val() + "</li>");
  NormRes($("#text").val());
}
function ClickButton(butval) {
  $("#messages").append("<li id='userMessages'>" + butval + "</li>");
  NormRes(butval);
}
function NormRes(msg) {
  $.ajax({
    url: "/botresponse",
    type: "POST",
    data: {message: msg},
    success: function(data){
      if(!data)
        alert("NO ITEMINFO");
      else{
      $("#messages").append("<li id='botMessages' class='" + data.Response[0] + "'>" + data.Response[0] + "</li>");
        if (data.Response[1] == "text" || data.Response[1] == "number")
        {
         $("#submit").prop('disabled', false);
         $("#text").prop('disabled', false);
        }
        else if (data.Response[1] == "boolean")
        {
        var options = "";
         for(var i = 2; i < data.Response.length; i++)
          {
            options += "<input id='botMessages' onclick={ClickButton('" + data.Response[i] + "')} type='button' class='bot' value='" + data.Response[i] +"'/>";
          }
         $("#messages").append( "<li>" + options + "</li>" );
         $("#submit").prop('disabled', true);
         $("#text").prop('disabled', true);
        }
      }
    },
    dataType: "json"
  });
}
