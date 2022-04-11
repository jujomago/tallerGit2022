const showMessage = (e) => {
    alert(e.target.innerText);
}

(()=>{ 
 const shapes= document.querySelectorAll('.withtext') 
 shapes.forEach(shape => {     
     shape.addEventListener('click',showMessage)
 })
})()

