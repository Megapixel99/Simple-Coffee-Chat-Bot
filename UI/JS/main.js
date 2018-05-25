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
