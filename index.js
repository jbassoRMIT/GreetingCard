// Capture form input value and name dispaly section
const name=document.querySelector("#fName");
const favColor1=document.querySelector("#favColor1");
const favColor2=document.querySelector("#favColor2");
const backgroundType=document.querySelector("#backgroundType");
const bday=document.querySelector("#birthday");
const nameDisplay=document.querySelector(".formDisplay");
const birthdayUpdate=document.querySelector(".birthdayUpdate");
const refresh=document.querySelector("#resetButton");
const body=document.querySelector("body");

//target form
const form=document.querySelector("form");

//Write a function to calculate date difference
const dateDifference=function(birthDate){
    const today=new Date();
    
    //split the birthday to extract just month and day
    const birthdayArray=birthDate.split("-");
    const birthMonth=birthdayArray[1];
    const birthDay=birthdayArray[2];
    console.log(birthMonth);
    console.log(birthDay);

    //create new date object of birthday this year
    //obtain current year
    const currentYear=today.getFullYear();

    //create birthday in current year, adjusting month to match Today()
    const birthdayCurrentYear=new Date(currentYear,birthMonth-1,birthDay);
    
    //calculate time difference in milliseconds
    const timeDelta=birthdayCurrentYear-today;
    
    //convert from milliseconds to days
    let timeDeltaDays=Math.ceil(timeDelta/(1000*3600*24));

    //if timeDelta negative, subtract from 365
    if(timeDeltaDays<0){
        timeDeltaDays=365+timeDeltaDays;
    }

    return timeDeltaDays
}

console.log(form);

//add event listener for the form
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    //update textContent of nameDisplay
    nameDisplay.innerHTML=`Hello ${name.value}`;
    nameDisplay.style.backgroundColor=favColor1.value;
    console.log(bday.value);
    const daysUntilBirthday=dateDifference(bday.value);
    birthdayUpdate.innerHTML=`${daysUntilBirthday} sleeps until your birthday`;
    console.log(backgroundType.value);

    //Set background based off backgroundType value
    if(backgroundType.value=="linear"){
        body.style.background=`linear-gradient(to bottom right, ${favColor1.value}, ${favColor2.value})`;
    }
    else if(backgroundType.value=="radial"){
        body.style.background=`radial-gradient(${favColor1.value}, white, ${favColor2.value})`;
    }
    else if(backgroundType.value=="conic"){
        body.style.background=`conic-gradient(${favColor1.value}, white, ${favColor2.value})`;
    }

    console.log(body.style.background);
    
    
})

refresh.addEventListener("click",function(){
    //set value of all inputs to empty string
    name.value="";
    favColor1.value="#000000";
    favColor2.value="#00000";
    bday.value="";
    nameDisplay.innerHTML="";
    birthdayUpdate.innerHTML="";
    body.style.background="white";
    console.log(body.style.background);
})