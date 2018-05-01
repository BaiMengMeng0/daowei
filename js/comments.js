$(function () {
  $.ajax({
    type:"GET",
    url:"http://localhost:3000/comment",
    dataType:"json",
    success:function (data) {
      for(var i = 0; i<data.comment.length; i++){
        $(".comment_user")
          .append("<div class='conmentss'>" +
            "<img src="+data.comment[i].iconUrl+" width='40px' height='40px'><ul><li>"+data.comment[i].nick+"</li>" +
            "<li class='commentdetail'>"+data.comment[i].comment+"</li>" +
            "<li class='commentposition'><img src='images/position.jpg' width='9px' height='11px' style='margin-top: -2px'>"+data.comment[i].city+" "+data.comment[i].area+"</li></ul></div>")
      }
    },
    error:function(data){
      alert("您请求数据失败了，请检查您的请求格式以及地址！");
    }
  })
})