var color = ['yellow', 'black', 'blue', 'green'];
var i = 0;
document.querySelector("button").addEventListener("click",
function(){
    i = i < color.length - 1 ? ++i : 0; 
    document.querySelector("body").style.background = color[i]
    })

