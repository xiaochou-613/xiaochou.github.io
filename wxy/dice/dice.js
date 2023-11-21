var gif = [document.getElementById("g1"),
           document.getElementById("g2"),
           document.getElementById("g3"),
        //    document.getElementById("g4"),
        //    document.getElementById("g5"),
        //    document.getElementById("g6"),
        //    document.getElementById("g7"),
        //    document.getElementById("g8")
    ]
var btn4 = document.getElementsByClassName("btn4")[0]
//取一个区域的随机数
function getrandom(min,max){
    var result = Math.random()*(max-min)+min
    result = Math.floor(result)
    return result;
}
var thrownumber = 0
function put(){
    for(let i=0;i<gif.length;i++)
             gif[i].setAttribute("style","display:block")


    var liwushu = 0;
    for(let i = 0;i<3;i++){
        var ran1 = getrandom(1,7);
        liwushu += ran1;
        // liwushu=18;
        gif[i].src = "../../img/"+ ran1 +".gif"
    } 
    console.log(liwushu);

    if(liwushu==18)
    {
        var liwuwu = document.getElementsByClassName("liwuwu")[0]
        liwuwu.setAttribute("style","display:block")
    }
}