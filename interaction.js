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
            shape.classList.add('animate__animated',`animate__${animations[animationSelected]}`, 'animate__infinite')
        })
    }else{
        console.log('aaaa');
        shapes.forEach(shape => {                 
            shape.classList.remove(...animations.map(item=>'animate__'+item))
        })
    }
}

const escapefromMouse = (e)=>{    
    if(escaping.checked){
        e.target.style.top= ( Math.random() * 300)+"px";
        e.target.style.left= ( Math.random() * 300)+"px";
    }
}


(()=>{ 
 shapes= document.querySelectorAll('.withtext') 
 title1 = document.querySelector('h1') 
 animate = document.querySelector('#cbox1')
 escaping = document.querySelector('#cbox2')
 animate.addEventListener('click',playAnimation) 
 shapes.forEach(shape => {     
     shape.addEventListener('click',showMessage)
     shape.addEventListener('mouseenter',escapefromMouse);
 })
})()

