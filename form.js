var users=[{username:"alaa",password:"loly"}];

function signup()
{
    var n =document.getElementById("nameup").value;
    var p =document.getElementById("passup").value;
    var ph =document.getElementById("fonup").value;
    var age =document.getElementById("ageup").value;
    var r =/^(?=.*[-\!\@\%\&\#\\*])(?=.*[a-zA-Z])(?=.*\d).{8,15}$/;
    for(var i=0;i<users.length;i++)
    {
        if(users[i].username==n)
        {
            alert("thes name is oredy exesst");
            return false;
        }
    }

     if(!p.match(r))
     {
        alert("the pass is rong");
        return false;
     }
     
   else if(age<18||age>60)
    {
        alert("you are so old ro so small");
        return false;
    }
    else if(ph.length!==11)
    {
        alert("the phone num is rong");
        return false;
    }
    else
    {
     users.push({
         username:n,
         password:p
     })
     alert("saved")
    }
   
    console.log(users);
}

function signin()
{
    var na =document.getElementById("namein").value;
    var pa =document.getElementById("passin").value;
    for(var i=0;i<users.length;i++)
    {
        if(users[i].username==na&&users[i].password==pa)
        {
            alert("login sucssefully");
            alert("hi"+"  "+na);
           location.replace("q.html")
        }
    }

}

function forget()
{
    var fn =document.getElementById("namen").value;
    var fp =document.getElementById("passn").value;
    for(var i=0;i<users.length;i++)
    {
        if(users[i].username==fn)
        {
            users[i].password=fp
            alert("changed");
          
        }
    } 
    console.log(users)
}