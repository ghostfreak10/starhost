/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


// scroll reveal animation 
const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true, //animation repeat
})

sr.reveal(`.home__title`)
// sr.reveal(`.home__title span:nth-child(1)`,{origin:'left',opacity:1})
// sr.reveal(`.home__title span:nth-child(3)`,{origin:'right',opacity:1})
// sr.reveal(`.home__tooltip , .home__button .model__button`,{origin:'bottom'})
// sr.reveal(`.about__data`,{origin:'left'})
// sr.reveal(`.about__img , .model__tooltip`,{origin:'right'})
// sr.reveal(`.about__data`,{origin:'left'})
sr.reveal(`.leaf`,{origin:'right'})
sr.reveal(`.beans11`,{origin:'right'})
sr.reveal(`.beans22`,{origin:'left'})
sr.reveal(`.beans33`,{origin:'left'})
sr.reveal(`#caramel`,{origin:'left'})
sr.reveal(`#tea`,{origin:'right'})




const tl=gsap.timeline({scrollTrigger:{
    trigger:".flavour",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})

tl.to("#starbucks",{
    top:"95%",
    left:"5%"
},'star')

tl.to(".leaf",{
    top:"110%",
    left:"-10%"

},'star')

tl.to(".beans11",{
    top:"130%",
    left:"8%"
},'star')

tl.to(".beans33",{
    top:"170%",
    left:"13%"
},'star')

tl.to(".beans22",{
    top:"150%",
    left:"30%"
},'star')

var tl2=gsap.timeline({scrollTrigger:{
    trigger: ".order",
    start: "0% 95%",
    end: "20% 50%",
    scrub:true,
    // markers:true,
}})


tl2.to("#starbucks",{
    top: "180%",
    left: "33%",
    width:"35%",
},'ca')

tl2.to(".leaf",{
    top: "198%",
    left: "52%",
    
},'ca')

tl2.to(".beans11",{
    top: "215%",
    left: "52%",
    // width:"35%"
},'ca')
tl2.to(".beans22",{
    top: "240%",
    left: "37%",
    
    // width:"35%",
},'ca')

tl2.to(".beans33",{
    top: "210%",
    left: "37%",
    
    // width:"35%",
},'ca')


