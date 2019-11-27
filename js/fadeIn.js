FadeIn();



function FadeIn(){

    var aFadeIn = new Array();
    // var 
    aFadeIn.push(document.querySelectorAll('.fadeInL'));
    aFadeIn.push(document.querySelectorAll('.fadeInR'));
    aFadeIn.push(document.querySelectorAll('.fadeInT'));
    aFadeIn.push(document.querySelectorAll('.fadeInB'));
    // alert(aFadeIn.length);
    
        for(i=0;i<aFadeIn.length;i++){
            aFadeIn[i].style.position='relative';
            
            aFadeIn[i].style.opacity=0;
            aFadeIn[i].style.filter='alpha(opacity:0)'
            aFadeIn[i].style.transition = '1s';
            alert(aFadeIn.direction)
            
        }

        // if()
        // aFadeIn[i].style.left= -200+'px';
    
} 