function Send() {
  $("#messages").append("<li id='userMessages'>" + $("#text").val() + "</li>");
  NormRes();
}
function ClickButton(butval) {
  $("#messages").append("<li id='userMessages'>" + $("#text").val() + "</li>");
  NormRes();
}
function NormRes() {
  $.ajax({
    url: "/botresponse",
    type: "POST",
    data: {message: $("#text").val()},
    success: function(data){
      if(!data)
        alert("NO ITEMINFO");
      else{
      $("#messages").append("<li id='botMessages' class='bot'>" + data.Response[0] + "</li>");
        if (data.Response[1] == "text")
        {
         $("#send").prop('disabled', false);
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
        else if (data.Response[1] == "number")
        {
         $("#text").prop('disabled', false);
         $("#send").prop('disabled', false);
        }
      }
    },
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
