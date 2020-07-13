'use strict'
// <!--   OOP HPMEWORK-->


const slides = document.querySelectorAll('.portfolioItem')
const sliderBg = document.querySelector('.slider__Bg')
const slideSize = document.querySelector('.portfolioItem')

const btnLeft = document.querySelector('.latestPortfolio__buttons--btn1')
const btnRight = document.querySelector('.latestPortfolio__buttons--btn2')

let range = 0;

class Slider{
    constructor(slides, sliderBg, slideSize, btnLeft, btnRight, range){
        this.slides = slides
        this.sliderBg = sliderBg
        this.slideSize = slideSize
        this.btnLeft = btnLeft
        this.btnRight = btnRight
        this.range = range
    }
}
const slider = new Slider(slides, sliderBg, slideSize, btnLeft, btnRight, range)

const sliderMethods = {
    
    
    right: function(){

        
        let _range = this.range
        let _slideSize = this.slideSize
        let _sliderBg = this.sliderBg
        

        this.btnRight.addEventListener('click', function(){
            
           
            _range -= _slideSize.offsetWidth
            
            if(_range <= -(_slideSize.offsetWidth * 4)) _range = 0
            
            console.log(_range)
            _sliderBg.style.cssText = `transform: translate(${_range}px, 0px);`
        })
    },
    left: function(){

        
        let _range = this.range
        let _slideSize = this.slideSize
        let _sliderBg = this.sliderBg

        this.btnLeft.addEventListener('click', function(){

            _range += _slideSize.offsetWidth
            
            if(_range > (_slideSize.offsetWidth * 0)) _range = -_slideSize.offsetWidth * 3
            
            console.log(_range)
            _sliderBg.style.cssText = `transform: translate(${_range}px, 0px);`
        })

    },
    infinitySwipes:function(){
        let _slides = this.slides
        let _range = this.range
        let _slideSize = this.slideSize
        let _sliderBg = this.sliderBg

        let timerId = setInterval(() => {

            _range -= _slideSize.offsetWidth
            if(_range <= -(_slideSize.offsetWidth * 4)) _range = 0
                
            
            _sliderBg.style.cssText = `transform: translate(${_range}px, 0px);`
            
         }, 2000);
         _slides.forEach(elem=>{
                elem.onmouseover = e => {
                    setTimeout(() => { clearInterval(timerId); console.log('interval stoped'); }, 50);  } 
        })

    },
    touches:function(){

        let _range = this.range
        let touchstartX = 0;
        let _slides = this.slides
        let touchendX = 0;
        let _slideSize = this.slideSize


        _slides.forEach(elem=>{
            
            elem.addEventListener('touchstart', function(event){
                //console.log(event);
                touchstartX = event.touches[0].clientX;
                
                
                })
                
                elem.addEventListener('touchend', function(event){
                //console.log(event);
                touchendX = event.changedTouches[0].clientX;  
                handleTouch(touchstartX,touchendX)
                
                })
            
            
        
        })

        function handleTouch(startX,endX ){
            //calculate the distance on x-axis and o y-axis. Check wheter had the great moving ratio.
            let xDist = endX - startX;
            

            _range -= xDist
            
            if(_range <= _slideSize.offsetWidth * 0) _range = 0
            else if (_range >= _slideSize.offsetWidth * 3) _range = _slideSize.offsetWidth * 3
            
            console.log(_range)
            sliderBg.style.cssText = `transform: translate(-${_range}px, 0px);`
            
            
        }
    }
}

slider.__proto__ = sliderMethods
slider.right()
slider.left()
slider.infinitySwipes()
slider.touches()























