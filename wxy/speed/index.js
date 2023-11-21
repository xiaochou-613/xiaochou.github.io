
var count = 0;
var name1 = 0
var countt = document.getElementsByClassName("count")[0]
var inp = document.getElementsByClassName("inp")[0]
var name2= document.getElementsByClassName("name")[0]
var btn7 = document.getElementsByClassName("btn7")[0]

btn7.addEventListener("click",function(){
    count++
    countt.innerHTML = count
    countt.setAttribute("style","display:block")
    if(count>=10)countt.setAttribute("style","left:394px;display:block")
})

var flag = true
function love(){
    
    if(flag)
    {
        flag = !flag ;
        setTimeout(function(){
            if(count<25){
                window.alert("次数不够呀，加油再试试^_^")
                count = 0;
                flag = true
                countt.innerHTML = 0;
            }
        
            else if(count>=25&&count<33){
                window.alert("玩玩小游戏，争取下次过33哦 ^_^")
                var s = document.getElementById("root");
                count = 0;
                flag = true
                console.log("@author:江开");
                s.addEventListener("click",function(){
                    btn7.disabled = true;
                    window.location.href ="https://hextris.io/";
                })
            }    
        
            else if(count>=33){
                window.alert("再没有奖励咯，除非你点到100下^_^");
                name2.setAttribute("style","display:block")
                count = 0;
                flag = true
                inp.oninput = function(e){
                    var btn3 = document.getElementsByClassName("btn3")[0]
                    btn3.setAttribute("style","display:block")
                    name1 = e.target.value
                }
            }
        
            else if(count>60){
                alert("开挂没奖励^_^")
            }
        },5200)
    }
}

function jump(){
    window.location.href ="https://www.bilibili-codeart.site/?"+ name1
}