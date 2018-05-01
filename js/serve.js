$(function () {
  $.ajax({
    type:"GET",
    url:"http://localhost:3000/servicepro",
    dataType:"json",
    success:function (data) {
      for(var i = 0; i<data.servicepro.length; i++){
        $(".content_list")
          .append("<li class='picture_i'>" +
            "<a href='comments.html'><img src="+data.servicepro[i].imgUrl+"><p class='name_t'><img src="+data.servicepro[i].iconUrl+">" +
            "<span>"+data.servicepro[i].name+"</span></p><p class='comments'>已接单"+data.servicepro[i].order+"单" +
            "<span>好评"+data.servicepro[i].estimate+"%</span></p></a></li>")
      }
    },
    error:function(data){
      alert("您请求数据失败了，请检查您的请求格式以及地址！");
    }
  })
})