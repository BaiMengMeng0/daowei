$(function(){
    $.ajax({
      type:"GET",
      url:"http://localhost:3000/service",
      dataType:"json",
      success:function(data) {
        for(var i = 0; i<data.serve1.length; i++){
          $(".item1").append("<a class='serve_shop_link' href='detail.html'><div class='serve_shop'><img src="+data.serve1[i].imgUrl+" ><div class='serve_name'>"+data.serve1[i].name+"</div><div class='serve_description'>"+data.serve1[i].description+"</div><div class='price'>"+data.serve1[i].price+"</div></div></a>");
        }
        for(var i = 0; i<data.serve2.length; i++){
          $(".item2").append("<a class='serve_shop_link' href='detail.html'><div class='serve_shop'><img src="+data.serve2[i].imgUrl+" ><div class='serve_name'>"+data.serve2[i].name+"</div><div class='serve_description'>"+data.serve2[i].description+"</div><div class='price'>"+data.serve2[i].price+"</div></div></a>");
        }
        for(var i = 0; i<data.serve3.length; i++){
          $(".item3").append("<a class='serve_shop_link' href='detail.html'><div class='serve_shop'><img src="+data.serve3[i].imgUrl+" ><div class='serve_name'>"+data.serve3[i].name+"</div><div class='serve_description'>"+data.serve3[i].description+"</div><div class='price'>"+data.serve3[i].price+"</div></div></a>");
        }
        for(var i = 0; i<data.serve4.length; i++){
          $(".item4").append("<a class='serve_shop_link' href='detail.html'><div class='serve_shop'><img src="+data.serve4[i].imgUrl+" ><div class='serve_name'>"+data.serve4[i].name+"</div><div class='serve_description'>"+data.serve4[i].description+"</div><div class='price'>"+data.serve4[i].price+"</div></div></a>");
        }
        for(var i = 0; i<data.serve5.length; i++){
          $(".item5").append("<a class='serve_shop_link' href='detail.html'><div class='serve_shop'><img src="+data.serve5[i].imgUrl+" ><div class='serve_name'>"+data.serve5[i].name+"</div><div class='serve_description'>"+data.serve5[i].description+"</div><div class='price'>"+data.serve5[i].price+"</div></div></a>");
        }
        for(var i = 0; i<data.serve6.length; i++){
          $(".item6").append("<a class='serve_shop_link' href='detail.html'><div class='serve_shop'><img src="+data.serve6[i].imgUrl+" ><div class='serve_name'>"+data.serve6[i].name+"</div><div class='serve_description'>"+data.serve6[i].description+"</div><div class='price'>"+data.serve6[i].price+"</div></div></a>");
        }
        for(var i = 0; i<data.serve7.length; i++){
          $(".item7").append("<a class='serve_shop_link' href='detail.html'><div class='serve_shop'><img src="+data.serve7[i].imgUrl+" ><div class='serve_name'>"+data.serve7[i].name+"</div><div class='serve_description'>"+data.serve7[i].description+"</div><div class='price'>"+data.serve7[i].price+"</div></div></a>");
        }
        for(var i = 0; i<data.serve8.length; i++){
          $(".item8").append("<a class='serve_shop_link' href='detail.html'><div class='serve_shop'><img src="+data.serve8[i].imgUrl+" ><div class='serve_name'>"+data.serve8[i].name+"</div><div class='serve_description'>"+data.serve8[i].description+"</div><div class='price'>"+data.serve8[i].price+"</div></div></a>");
        }
        for(var i = 0; i<(data.partner.length/2); i++){
          $(".partner_list").append("<div><img src="+data.partner[i].imgUrl+"></div>");
        }

      },
      error:function(data){
        alert("您请求数据失败了，请检查您的请求格式以及地址！");
      }
    });
})