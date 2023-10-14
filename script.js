
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let darkbtn = document.getElementById("dark-btn")

let menuitem = document.getElementsByClassName("media")





function openatab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
      //every item of items 
      // here we are removing the tab-links when uset  clicking on the active-link
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab")
      // here we are removing the tabcontents when user click on the active tab
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
    // in the tabname it pushes the id's square ,circle ,circle1
  }




function move(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
  
    if(localStorage.getItem("theme") == "light"){
      localStorage.setItem("theme", "dark");
    }
    else{
      localStorage.setItem("theme" ,"light");
    }
  
  }
  if(localStorage.getItem("theme") == "light"){
      darkbtn.classList.remove("dark-btn-on");
      darkbtn.classList.remove("dark-theme");
    }
    else if(localStorage.getItem("theme") == "dark"){
      darkbtn.classList.add("dark-btn-on");
      darkbtn.classList.add("dark-theme");
    }
    else{
      localStorage.setItem("theme", "light");
    }
  
    console.log(localStorage.getItem("theme"))








// here we are applying the dark theeme , light theme by using the local storage ,even if the user refresh , close the browser the website will not applied any changes.


function togglemenu(){
   
    alert("your good" )
}h