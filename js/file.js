$(document).ready(function(){  
    var container = document.getElementById("slide_container");
    var pic_list = document.getElementById("slide_pic");
    var prev = document.getElementById("leftmove");
    var next = document.getElementById("rightmove");

    function animate(offset) {
        var newleft = parseInt(pic_list.style.left) + offset;
        var time = 800;
        var inteval = 10;
        var speed = offset/(time/inteval);

        function go(){
            if ( (speed < 0 && parseInt(pic_list.style.left) > newleft) || (speed > 0 && parseInt(pic_list.style.left) < newleft)) {
                pic_list.style.left = parseInt(pic_list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                pic_list.style.left = newleft + 'px';
                if(parseInt(pic_list.style.left) > 0) {
                    pic_list.style.left = -1588 + 'px'; 
                }
                if(parseInt(pic_list.style.left) < -1588) {
                    pic_list.style.left = 0 + 'px';
                }
            }
            
        }
        go();

    }

    var timer;
    function play() {
        timer = setInterval(function(){
            next.onclick();
        },3000);
    }

   
    function stop() {
        clearInterval(timer);
    }

    play();
    // container.onmouseover = stop;
    // container.onmouseout = play;
    next.onclick = function() {
        animate(-397);
    }
    
    prev.onclick = function() {
        animate(397);
    }
});
