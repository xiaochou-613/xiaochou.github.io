//礼物购物车
var unmber = 0;
var btn2 = document.getElementsByClassName("btn2")[0]
var cart = document.getElementsByTagName("i")
for(let i = 0;i<cart.length;i++){
    cart[i].addEventListener("click",function () {
            //可以获取CSS样式表设置的样式属性，而style.color只能获取页面内嵌的
        if(window.getComputedStyle(cart[i]).color=="rgb(255, 103, 0)"){ //已选择
            this.innerHTML = "&#xe502;";
            this.setAttribute("style","color: #d82854;") 
            unmber++;
            if(unmber>=2){
            alert("选这么多，你想让我吃土吗？")
            this.innerHTML = "&#xe622;";
            this.setAttribute("style","color: #ff6700;")
            unmber--;
            }
            btn2.setAttribute("style","display:block")
        }
        
        else if(window.getComputedStyle(cart[i]).color=="rgb(216, 40, 84)"){  //取消选择
            unmber=0;
            btn2.setAttribute("style","display:none")
            this.innerHTML = "&#xe622;";
            this.setAttribute("style","color: #ff6700;")
        }
    })
}