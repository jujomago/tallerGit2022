let shapes,title1,animate;
const showMessage = (e) => {    
    console.log(title1);
    title1.innerText=e.target.innerText;
}
const playAnimation = (e)=>{
    const animations = ['bounce','wooble','heartBeat','rubberBand','hinge','jackInTheBox','bounceOut']
    if(animate.checked){
        shapes.forEach(shape => {     
            const animationSelected= Math.floor(Math.random() * animations.length);
            shape.classList.add(`animate__${animations[animationSelected]}`)
        })
    }
}

(()=>{ 
 shapes= document.querySelectorAll('.withtext') 
 title1 = document.querySelector('h1') 
 animate = document.querySelector('#cbox1')
 animate.addEventListener('click',playAnimation)
 shapes.forEach(shape => {     
     shape.addEventListener('click',showMessage)
 })
})()

