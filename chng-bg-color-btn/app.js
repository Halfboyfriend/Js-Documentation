var color = ["white","red","blue","pink","yellow","grey"];
var i = 0;

document.querySelector("button").addEventListener("click", function(){
    i = i < color.length ? ++i : 0;
    {
        document.querySelector("body").style.background = color[i - 1];

        if(color[1]){
            document.querySelector("body").style.color = color[4];
        }
        else if(color[0])
        {
            document.querySelector("body").style.color = color[5];
        }
    }
        

    
  
})