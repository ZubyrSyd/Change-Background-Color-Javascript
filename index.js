document.querySelector("button").addEventListener("click",
function(){ 
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    document.querySelector("body").style.background = `${color}`;
    document.getElementById("hexcode_text").innerHTML = color;
        })

