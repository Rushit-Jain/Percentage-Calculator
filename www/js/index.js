var a = 0;
var b = 0;
var flag = parseInt(a);
var e = parseFloat(a);
var f = parseFloat(b);

document.getElementById("calc").addEventListener("click",calculate);
document.getElementById("add").addEventListener("click",addval);
document.getElementById("reset").addEventListener("click",reset);

function addval()
{
    var g = document.getElementById("num").value;
    var h = document.getElementById("deno").value;
    var q = parseFloat(g);
    var w = parseFloat(h);
    if(g.length == 0 || h.length == 0)
        {
            window.alert("input field empty ENTER VALUE PLEASE");
            flag=1;
            reset();
        }
    else{
    if(w!=0)
        {
         if(q<=w)
             {
                 if(q>=0&&w>0)
                     { 
                         e = q + e; 
            f = w + f;
        document.getElementById("ans").innerHTML=
        ("values added are -\n numerator : "+q + "   denominator : "+w); 
                     }
                else
                {
                    window.alert("negative number not allowed");
                    flag=1;
                    reset();
                }
             }
            else{
                window.alert("numerator cant be greater than denominator");
                flag=1;
                reset();
            }
        }
    else{
        window.alert("denominator cannot be set to zero");
        flag=1;
        reset();
    }
    }
    
}
function calculate()
{
     var c = ((e/f)*100);
    document.getElementById("ans").innerHTML="percentage =  "+c + " %";
}
function reset()
{
    e = 0.0 ;
    f = 0.0 ;
    if(flag==1)
        {
            flag = 0 ;
            document.getElementById("ans").innerHTML=
                " INVALID PREVIOUS INPUT CALC RESET"; 
            
        }
    else
        {
    document.getElementById("ans").innerHTML=" Successfully reset done!";  
        }
}