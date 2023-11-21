

//获取标签
var user_name = document.getElementById("user-name")
var user_password = document.getElementById("user-password")
var happyy = document.getElementsByClassName("happy")[0]

const MYNAME = "张雅荷"
const MYPAD = "040705"
function login(){
    // 特殊
    // if(user_name.value === "")
    // {
    //     alert("我不知道你的生日，15秒后直接放行~")
    //     setTimeout(()=>{
    //         window.location.href = "./wxy/Platycodon-gradiflorus.html"
    //     },15000)
    //     return
    // }



    if(user_name.value == MYNAME)
        if(user_password.value == MYPAD)
        {
            console.log("user_name.value");
            window.location.href = "./wxy/Platycodon-gradiflorus.html"
        } 
        else{
            alert("生日不记得了？")
        }
    else if(user_name.value != MYNAME && user_name.value != 0)
    {
        if(user_name.value == "江开")
            alert("江开说他不需要。")
        else
            alert(user_name.value + "？没做你的。。 ^_^");
    }
    else if(user_name.value == 0)
        alert("Who are you ？")
}

function happy(){
    happyy.setAttribute("style","display:block")
}

//alert
window.alert = function(message) {
    var divv = document.createElement('div');
    divv.innerHTML = message;
    divv.style = 'position: absolute; \
        left: 51%; top: 44%;\
        transform: translate(-50%, -50%); \
        background-color: #fdfafa;\
        padding: 20px; \
        border: 1px solid gray;\
        border-radius: 15px;\
        width:327px;\
        height:66px;\
        color:#333';
    document.body.appendChild(divv);


    var s = document.createElement("span")
    s.innerHTML = "确认"
    s.style = "position: fixed; \
        left: 50%; top: 50%;\
        transform: translate(-50%, -50%); \
        left:327px;\
        top:77px;\
        color:rgb(0 103 255);\
        user-select:none"
    divv.appendChild(s)

    s.addEventListener("click",function(){
        divv.setAttribute("style","display:none")
        s.setAttribute("style","display:none")
    })
}
