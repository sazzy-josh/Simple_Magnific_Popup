let container = document.getElementById('container');
let items = document.getElementById("items");
let remove = document.getElementById('remove');
let item = document.querySelectorAll('.item')
let overlay = document.getElementById('preview_overlay')



//loops through each items and add an event listener 

item.forEach((element)=> {
   element.addEventListener('click', (e)=>{
      let target = e.target.parentElement.parentElement
       overlay.querySelector('img').src = target.querySelector('img').src
       overlay.style.opacity = "1"
       overlay.style.zIndex = 9999
   })
})

// this function remove opacity and zIndex from preview layer
remove.addEventListener('click',()=>{
   overlay.style.opacity = "0"
   overlay.style.zIndex = "0" 
})






