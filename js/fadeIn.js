onload = function () {

    var aFl = document.querySelectorAll('.fade-in-l');
    var aFr = document.querySelectorAll('.fade-in-r');
    var aFt = document.querySelectorAll('.fade-in-t');
    var aFb = document.querySelectorAll('.fade-in-b');
    

    setFadeIn(aFl, 'left');
    setFadeIn(aFr, 'right');
    setFadeIn(aFt, 'top');
    setFadeIn(aFb, 'bottom');

    

        
    fadeIn(aFl);
    fadeIn(aFr);
    fadeIn(aFt);
    fadeIn(aFb);

    document.onscroll = function(){
        fadeIn(aFl);
        fadeIn(aFr);
        fadeIn(aFt);
        fadeIn(aFb);

    }
    


    function setFadeIn(arr, direction) {

        
        document.body.style.height = document.body.offsetHeight;
        document.body.style.width = document.body.offsetWidth;
        // document.body.style.overflow='hidden'

        for (i = 0; i < arr.length; i++) {
            // arr[i].style.position = 'relative';
            arr[i].style.opacity = 0;
            arr[i].style.filter = 'alpha(opacity:0)';
            arr[i].style.transition = '0s';

            switch (direction) {
                case 'left':
                    arr[i].style.transform = 'translate(-50px,0)';
                    break;
                case 'right':
                    arr[i].style.transform = 'translate(50px,0)';
                    break;
                case 'top':
                    arr[i].style.transform = 'translate(0,-50px)';
                    break;
                case 'bottom':
                    arr[i].style.transform = 'translate(0, 50px)';
                    break;
                default:
                    break;

            }
            // switch (direction) {
            //     case 'left':
            //         arr[i].style.margin = '0 0 0 -100px';
            //         break;
            //     case 'right':
            //         arr[i].style.margin = '0 -100px 0 0';
            //         break;
            //     case 'top':
            //         arr[i].style.margin = '-100px 0 0 0';
            //         break;
            //     case 'bottom':
            //         arr[i].style.margin = '0 0 -100px 0';
            //         break;
            //     default:
            //         break;

            // }
            
            



        }

    }

    function fadeIn(arr) {
        
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var browserHeight = window.innerWidth || document.documentElement.clientHeight || document.body.clientHeight;
        var triggerHeight = scrollTop + browserHeight/2;


        console.log(scrollTop);
        for (i = 0; i < arr.length; i++) {
            if (triggerHeight > arr[i].offsetTop) {
                // arr[i].style.display='block';
                arr[i].style.transform = 'translate(0,0)';
                // arr[i].style.margin = '0'
                arr[i].style.transition = '1s'
                arr[i].style.opacity = '1';
                arr[i].style.filter = 'alpha(opacity:100)';
                
            }
        }
        return false;
    
    }

}



