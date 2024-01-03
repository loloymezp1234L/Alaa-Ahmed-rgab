function anser()
{
    var t=0;
    if(document.getElementById("y1").checked==true)
    {
        t+=1
    }
    if(document.getElementById("y2").checked==true)
    {
        t+=1
    }
    if(document.getElementById("y3").checked==true)
    {
        t+=1
    }
    alert("tolal of yes"+""+t);
    location.replace("home.html")
}