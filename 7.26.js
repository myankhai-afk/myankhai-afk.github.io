var div1 = document.getElementById("div1")
var div2 = document.getElementById("div2")
var div3 = document.getElementById("div3")
var x = 1
function swappingColor(){
    var temp1 = div1.className
    var temp2 = div2.className
    var temp3 = div3.className

    div3.className=temp2
    div1.className=temp3
    div2.className=temp1
    // if(x==1){
    //     div1.className="div3"
    //     div2.className="div1"
    //     div3.className="div2"
    //     x++
    // }else if(x==2){
    //     div1.className="div2"
    //     div2.className="div3"
    //     div3.className="div1"
    //     x++
    // }else if(x==3){
    //     div1.className="div1"
    //     div2.className="div2"
    //     div3.className="div3"
    //     x=y-1;
    // }

}
function visible(){
    if(x==1){
        div1.style.visibility="hidden";
        x++
    }else if(x==2){
        div1.style.visibility="visible";
        div2.style.visibility="hidden"
        x++
    }else if(x==3){
        div2.style.visibility="visible"
        div3.style.visibility="hidden"
        x++
    }else if(x==4){
        div3.style.visibility="visible"
        x=1
    }
}