const container = document.getElementById("container")
let giveNumber =0

const inputNumber= document.getElementById("number")
inputNumber.value=""
const add= document.getElementById("add")
add.addEventListener("click",addNumber)
function time(h1,h2 ,m1,m2){
    let h;
    let m;
    if(h2>h1){
        h=h2-h1;
        m2=(h*60)+(m2);
        m=m2-m1;
        return m;
    }
    return m2-m1;
}

function fixWidth(n){
    while(n>60){
        n=n-60;
    }
    return n
}




//create screen
function creatScreen(n=0){
    for(let i=0 ; i<n; i++){
    //create divice
    let divice = document.createElement("div")
    divice.classList.add("divice")
    divice.id= "divice"
    //create screen
    let screen = document.createElement("div")
    screen.innerHTML=i+1
    screen.classList.add("screen")
    screen.id= "screen"
    //create inner
    let inner = document.createElement("div")
    inner.id= "inner"
    //start button
    let start =document.createElement("button")
    start.addEventListener("click", startTime)
    start.classList.add("start")
    start.id="start"
    start.innerHTML="start"
    //end button
    let end = document.createElement("button")
    end.addEventListener("click", endTime)
    end.classList.add("end")
    end.id="end"
    end.innerHTML="end"
    //btn div
    let btn = document.createElement("div")
    btn.classList.add("btn")
    btn.id="btn"   
    // add buttons to btn 
    btn.appendChild(start)
    btn.appendChild(end)
    //
    screen.appendChild(inner)
    //add screen to divice
    divice.appendChild(screen)
    divice.appendChild(btn)
    // number of divce 
    container.appendChild(divice)
}
}

function addNumber(){     
    giveNumber =inputNumber.value
    window.localStorage.setItem("n",giveNumber)
    location.reload(); 
    creatScreen(giveNumber)
    }

if(window.localStorage.getItem("n")){

    giveNumber = window.localStorage.getItem("n")
    inputNumber.value= giveNumber
    creatScreen(giveNumber)
    inputNumber.style.color="green"
     
 }else{
     inputNumber.style.borderColor="red"
     
 }
 function startTime(e){
    const d = new Date();
    let inner= document.getElementById("inner")
    
    let text = e.target.parentElement.parentElement.innerText;
    let id=text.split('')[0];

    value=window.localStorage.getItem(id)
    if(!value){
    inner.classList.add("inner")       
    let id=text.split('')[0];
    let hour = d.getHours().toString();
    let minutes = d.getMinutes().toString();
    let value= id+":"+hour+":"+minutes
    window.localStorage.setItem(id,value)
    

    }
    else{

        window.alert("الجهاز محجوز مسبقا الرجاء ايقافه ثم اعادة الحجز")
    }
 }
 function endTime(e){
    const d = new Date();
    let hourEnd = d.getHours();
    let minutesEnd = d.getMinutes();
    let text = e.target.parentElement.parentElement.innerText;
    let id=text.split('')[0];
    value=window.localStorage.getItem(id)
    if(value){   
        value = value.split(":")
        let inner= document.getElementById("inner")
        inner.classList.remove("inner")
        id = value[0]   
        hourStart= parseFloat(value[1])
        minutesStart= parseFloat(value[2])
        window.localStorage.removeItem(id)
        let price =time(hourStart,hourEnd,minutesStart,minutesEnd)*(3500/60) 
        window.alert("ان حساب الجهاز "+id +" هو "+ price)
        
    }else{
    window.alert("لم تقم بحجز هذا الجهاز")
 }


}





