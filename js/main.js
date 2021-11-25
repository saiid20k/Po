// Remove Active Class From List

let activeItem = document.querySelectorAll(".swit li a");

activeItem.forEach((a) => {
   
    a.addEventListener("click", removeActive);

});

function removeActive(){

    activeItem.forEach((a) => {

        a.classList.remove("Active");

        this.classList.add("Active");

    });
}

// 




let toggleBtn = document.getElementById("toggleBtn");

let links = document.getElementById("links");

toggleBtn.onclick = function () {
  
    links.classList.toggle("menu");
    // links.style.display ="none";
};



document.addEventListener("click", (e) => {

    if(e.target !== toggleBtn && e.target !== links){

        if(links.classList.contains("menu")){

            links.classList.toggle("menu");

        }

    } 
});

links.onclick = function (e) {

    e.stopPropagation();

}




// /////////////////////////////////////

let iconDark = document.getElementById("iconDark");

let logo = document.getElementById("logo");

let dark_light = document.getElementById("dark_light");

iconDark.onclick = function(){
    
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
    
        iconDark.src = "imgs/sun.png";

        logo.src ="imgs/logo-dark-removebg-preview.png";

        dark_light.innerHTML ="Light Mode";
    
    }
    
    else{
    
        iconDark.src ="imgs/moon.png"

        logo.src ="imgs/logo-light-1-removebg-preview.png";

        dark_light.innerHTML ="Dark Mode";
    
    }
}



///////////////////////////////////////////////


window.addEventListener("scroll", function(){
    
    let Header = document.querySelector("header");
    
    Header.classList.toggle("sticky", window.scrollY > 0);

})

// /////////////////////////////////////////////







// $('.skiilPar').each(function(){

//     var $this = $(this);

//     var per = $this.attr('per');

//     $this.css("width",per+'%');

//     $({animatedValue: 0}).animate({animatedValue: per},{
//         duration: 1000,
//         step: function(){
//             $this.attr('per',Math.floor(this.animatedValue));
//         },
//         complate: function(){
//             $this.attr('per',Math.floor(this.animatedValue) + '%');
//         }
    // });

// });



let SkiilsContainer = document.getElementById('Skiils');

let proBar = document.querySelectorAll('.skiil-progress .skiilPar');

window.onscroll = function(){

    if(window.scrollY >= SkiilsContainer.offsetTop - 430){
        
        proBar.forEach((skillPar) => {
        
            skillPar.style.width = skillPar.dataset.width;
       
        })

    }else{

        proBar.forEach((skillPar) => {
        
            skillPar.style.width = 0;
       
        })

    }
    
};










// End Animated Progress bar 


let more = document.getElementById("more");

let message = document.getElementById("message");

more.onclick = function(){

    message.innerHTML = "You Can Find More Projects in My Github Account!";

}



// ////////////////////////////





let switcherKey = document.querySelectorAll(".box button");

let element = document.querySelectorAll(".skiil");

switcherKey.forEach((button) => {

    button.addEventListener("click", RemoveActive);

    button.addEventListener("click", ManageSkiils);

});

function RemoveActive() {

    switcherKey.forEach((button) => {

        button.classList.remove("active");

        this.classList.add("active");

    });
}

function ManageSkiils() {
 
    element.forEach((element) => {
 
        element.style.display = "none";
 
    });
 
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
 
        el.style.display = "block";
 
    });

}


//


// function send(){

//     emailjs.send("service_z4m53ns","template_x7ztwwb",{
//         from_name: document.querySelector("name").value,
//         to_name: document.querySelector(".email").value,
//         message: document.querySelector(".msg").value,
//         });

// }
// document.getElementById("send").addEventListener("click", send);