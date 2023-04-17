let input2 = document.querySelector(".input2")
let input = document.querySelector(".input")
let button2 = document.querySelector(".button2")
let result = document.querySelector('.result')
let img = document.querySelector(".img")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")
let img4 = document.querySelector(".img4")
button2.onclick = function(){
  let power = input.value
  let hero = input2.value
  console.log(power, hero)

if(power == 1 && hero == "Green Lantern"){
  result.innerHTML = "You are the chemical Lithium"
  img.style.display = "block"
}
  
else if(power == 2 && hero == "Aqualad"){
  result.innerHTML = "You are the chemical Helium"  
  img2.style.display = "block"
}
  else if(power == 1 && hero == "Aqualad"){
  result.innerHTML = "You are the chemical Hydrogen" 
    img3.style.display = "block"
}
    else if(power == 2 && hero == "Green Lantern"){
  result.innerHTML = "You are the chemical Neon"  
      img4.style.display = "block"
}
  else{
    result.innerHTML = "please pick the give power or number"
  }
}
