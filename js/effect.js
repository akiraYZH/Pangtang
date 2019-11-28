onload= function(){
    document.querySelector('.preload').classList.remove('preload');


    new Carousel('#carousel');
    new Carousel('#carousel')

    


    var aFl = document.querySelectorAll('.fade-in-l');
    var aFr = document.querySelectorAll('.fade-in-r');
    var aFt = document.querySelectorAll('.fade-in-t');
    var aFb = document.querySelectorAll('.fade-in-b');
    
    var timer = null;


    setFadeIn(aFl, 'left');
    setFadeIn(aFr, 'right');
    setFadeIn(aFt, 'top');
    setFadeIn(aFb, 'bottom');


    var onScroll = true;

    setInterval(function(){
        onScroll = true;
    }, 200)

    document.onscroll = function () {

        if(onScroll){
            fadeIn(aFl);
            fadeIn(aFr);
            fadeIn(aFt);
            fadeIn(aFb);
            onScroll=false;
        }
        

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


            // alert(arr[i].offsetLeft);
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



function getStyle(obj, name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj, false)[name];
	}
}







// Start of Carousel js///////////////////////////////////////

function Carousel(id){

    if(!document.querySelector(id)){
        return;
    }
    this.obj = document.querySelector(id);
    this.oDotList = this.obj.querySelector('#dot');
    this.oCarousel_bar= this.obj.querySelector('#carousel_bar');
    this.oCarousel_bar.style.left=0;
    
    this.oCarousel_frame=this.obj.querySelector('#carousel_frame');
    this.timer = null;
    this.frame_width=this.oCarousel_frame.offsetWidth;
    this.index=0;


    var _this=this;
    for(i=0; i < this.oDotList.children.length; i++){


        this.oDotList.children[i].index = i;

        this.oDotList.children[i].onclick = function(){
            _this.switch(this.index);

        }
    }

    this.timer = setInterval(function(){
        _this.play();

    },2000)

    this.oCarousel_frame.onmouseover= function(){
        clearInterval(_this.timer);
    }

    this.oCarousel_frame.onmouseout= function(){
        _this.timer= setInterval(function(){
            _this.play();
    
        },2000)
    }

    window.onresize = function(){
        _this.switch(0);
    }

}



Carousel.prototype.switch =function(index){


    this.frame_width = this.oCarousel_frame.offsetWidth;
    // alert(this.frame_width);
    this.oCarousel_bar.style.transition = '0.3s';
    this.oCarousel_bar.style.left = -(this.frame_width * index) + 'px';

    for(i=0; i < this.oDotList.children.length; i++){
        this.oDotList.children[i].classList.remove('active');
    }
    this.oDotList.children[index].classList.add('active')

    

}

Carousel.prototype.play = function(){
    // alert(this.index);
        
        if(this.index>this.oDotList.children.length-1){
            this.index=0
        }
        
        this.switch(this.index);
        this.index++;
}

// End of carousel js///////////////////////////////////////////



