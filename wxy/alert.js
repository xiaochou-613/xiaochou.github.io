
window.alert = function(message) {
    var divv = document.createElement('div');
    divv.innerHTML = message;
    divv.style = 'position: fixed; \
        left: 50%; top: 50%;\
        transform: translate(-50%, -50%); \
        background-color: #fdfafa;\
        padding: 20px; \
        border: 1px solid gray;\
        border-radius: 15px;\
        width:327px;\
        height:66px;\
        color:#333;\
        focus';
    document.body.appendChild(divv);


    var s = document.createElement("span")
    //添加id
    var id = document.createAttribute("id")
        id.value = 'root'
    s.setAttributeNode(id)

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

        divv.remove();
    })
}