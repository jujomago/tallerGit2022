let shapes,title1;
const showMessage = (e) => {    
    console.log(title1);
    title1.innerText=e.target.innerText;
}

(()=>{ 
 shapes= document.querySelectorAll('.withtext') 
 title1 = document.querySelector('h1') 
 shapes.forEach(shape => {     
     shape.addEventListener('click',showMessage)
 })
})()

