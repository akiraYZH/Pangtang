onload = function () {

    var aFl = document.querySelectorAll('.fade-in-l');
    var aFr = document.querySelectorAll('.fade-in-r');
    var aFt = document.querySelectorAll('.fade-in-t');
    var aFb = document.querySelectorAll('.fade-in-b');


    setFadeIn(aFl, 'left');
    setFadeIn(aFr, 'right');
    setFadeIn(aFt, 'top');
    setFadeIn(aFb, 'bottom');






    document.onscroll = function () {
        fadeIn(aFl);
        fadeIn(aFr);
        fadeIn(aFt);
        fadeIn(aFb);

    }



    function setFadeIn(arr, direction) {

        var offsetLeft = 0;
        var offsetRight = 0;
        var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // var browserWidth=document.body.offsetWidth;

        // alert(document.body.offsetWidth);
        for (i = 0; i < arr.length; i++) {

            // arr[i].style.position = 'relative';
            arr[i].style.opacity = 0;
            arr[i].style.filter = 'alpha(opacity:0)';
            arr[i].style.transition = '0s';

            offsetLeft = arr[i].offsetLeft;
            offsetRight = browserWidth - (arr[i].offsetLeft + arr[i].offsetWidth);



            switch (direction) {
                case 'left':
                    arr[i].style.transform = 'translate(' + (-offsetLeft) + 'px, 0)';
                    break;
                case 'right':
                    arr[i].style.transform = 'translate(' + offsetRight + 'px,0)';
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
            //         arr[i].style.transformOrigin = 'left';
            //         arr[i].style.transform = 'scale(0, 1)';
            //         break;
            //     case 'right':
            //         arr[i].style.transformOrigin = 'right';
            //         arr[i].style.transform = 'scale(0, 1)';
            //         break;
            //     case 'top':
            //         arr[i].style.transformOrigin = 'top';
            //         arr[i].style.transform = 'scale(1, 0)';
            //         break;
            //     case 'bottom':
            //         arr[i].style.transformOrigin = 'bottom';
            //         arr[i].style.transform = 'scale(1, 0)';
            //         break;
            //     default:
            //         break;

            // }





        }

        fadeIn(aFl);
        fadeIn(aFr);
        fadeIn(aFt);
        fadeIn(aFb);

    }

    function fadeIn(arr) {

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var browserHeight = window.innerWidth || document.documentElement.clientHeight || document.body.clientHeight;
        var triggerHeight = scrollTop + browserHeight / 2;


        console.log(scrollTop);
        for (i = 0; i < arr.length; i++) {
            if (triggerHeight > arr[i].offsetTop) {
                // arr[i].style.display='block';
                arr[i].style.transition = '1s'
                arr[i].style.transform = 'translate(0,0)';
                // arr[i].style.transform = 'scale(1, 1)';
                // arr[i].style.margin = '0'

                arr[i].style.opacity = '1';
                arr[i].style.filter = 'alpha(opacity:100)';





            }
        }
        return false;

    }

}