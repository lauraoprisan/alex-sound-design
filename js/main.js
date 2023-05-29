//preloader
window.addEventListener('load',function(){
    document.querySelector('.preloader-wrapper').classList.add('no-preloader') 
  });
  
//smooth scrollUp
const scrollUp = document.querySelector(".button-scroolUp")
scrollUp.addEventListener('click', function(e){
    e.preventDefault();
    window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
    });
})

//smooth scroll to each section
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        })
    })
})

//la click pe poza ar trebui sa imi ia printr-un api url-ul care trebuie si sa il insereze in src pt iframe. in acelasi timp sa dea si scroll incat sa intre videoul acolo si sa inceapa automat ca sa nu mai existe inca un click

let videoImgOne = document.querySelector('.project1')
let videoImgTwo = document.querySelector('.project2')
let videoImgThree = document.querySelector('.project3')
let videoImgFour = document.querySelector('.project4')
let videoImgFive = document.querySelector('.project5')
let videoImgSix = document.querySelector('.project6')
let videoImgSeven = document.querySelector('.project7')
let videoImgEight = document.querySelector('.project8')
let videoImgNine = document.querySelector('.project9')
let projectVideo = document.querySelector(".projectVideo")
videoImgOne.addEventListener("click", getToVideoOne)
videoImgTwo.addEventListener("click", getToVideoTwo)
videoImgThree.addEventListener("click", getToVideoThree)
videoImgFour.addEventListener("click", getToVideoFour)
videoImgFive.addEventListener("click", getToVideoFive)
videoImgSix.addEventListener("click", getToVideoSix)
videoImgSeven.addEventListener("click", getToVideoSeven)
videoImgEight.addEventListener("click", getToVideoEight)
videoImgNine.addEventListener("click", getToVideoNine)



function getToVideoOne(){
    projectVideo.src="https://www.youtube.com/embed/G2kUBXxUgVs"
    }

function getToVideoTwo(){
    projectVideo.src="https://www.youtube.com/embed/r0B4j7YHJS0"
    }

function getToVideoThree(){
    projectVideo.src="https://www.youtube.com/embed/7I-EdpKp4TI"
    }

function getToVideoFour(){
    projectVideo.src="https://www.youtube.com/embed/au_5dIoV2P0"
    }

function getToVideoFive(){
    projectVideo.src="https://www.youtube.com/embed/sDTEPpitDGU"
    }

function getToVideoSix(){
    projectVideo.src="https://www.youtube.com/embed/Emh8XkaWalI"
    }

function getToVideoSeven(){
    projectVideo.src="https://www.youtube.com/embed/Wjy39nN7WzM"
    }

function getToVideoEight(){
    projectVideo.src="https://www.youtube.com/embed/_AlVhOF2z4c"
    }

function getToVideoNine(){
    projectVideo.src="https://www.youtube.com/embed/cWDFPKRUZBA"
    }



//scroll to project video

let videoImg = document.querySelectorAll(".image")
videoImg[0].addEventListener("click", goToVideo)
videoImg[1].addEventListener("click", goToVideo)
videoImg[2].addEventListener("click", goToVideo)
videoImg[3].addEventListener("click", goToVideo)
videoImg[4].addEventListener("click", goToVideo)
videoImg[5].addEventListener("click", goToVideo)
videoImg[6].addEventListener("click", goToVideo)
videoImg[7].addEventListener("click", goToVideo)
videoImg[8].addEventListener("click", goToVideo)
function goToVideo(e){
    Array.from(videoImg)
    e.preventDefault();
    document.querySelector("#projectVideo").scrollIntoView({
        behavior:"smooth",
        block:"center",
        incline:"center"
    })
}



// $(document).ready(function(){
//     $(".item").click(function(){
//         let youtube_id=$(this).children("img").attr("data-id");
//         console.log(youtube_id)
//     })
// })


// let videoImg = document.querySelectorAll('.project-img')
// let projectVideo = document.querySelector(".projectVideo")
// let arrayProjectImg = (Array.from(videoImg); 
// videoImg.addEventListener("click", getToVideoOne){
//     arrayProjectImg.forEach((item,index) =>{
//         if (arrayProjectImg[index].classList.contains("projectOne"))
//     })
// }

// function getToVideoOne(){
//     projectVideo.src="https://www.youtube.com/embed/r0B4j7YHJS0"
//     }


// detecting direction of scroll (up or down)

let lastScrollTop = 0;


window.addEventListener("scroll", function(){ 
   let currentPoint = window.pageYOffset || document.documentElement.scrollTop; 
   if (currentPoint < lastScrollTop){
    document.querySelector("nav").style.transition="0s";
   } else {
    document.querySelector("nav").style.transition="0.5s";
   }
   lastScrollTop = currentPoint <= 0 ? 0 : currentPoint; // For Mobile or negative scrolling
}, false);


//Fixed menu on scroll

window.addEventListener('scroll', function(){
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 200);
})

//Highlight menu button while scrolling

const sections = document.querySelectorAll(".highlight-section");
const navLi =document.querySelectorAll("nav ul li");

window.addEventListener("scroll", ()=>{
    let current = '';
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY > (sectionTop - sectionHeight /5)){
            current = section.getAttribute("id");
        };
    })
    navLi.forEach(li => {
        li.classList.remove("active");
        if(li.classList.contains(current)){
            li.classList.add("active")
        }
    }) 
})

//HAMBURGER MENU
const hamburgerButton = document.querySelector(".hamburger")
const menuMobileButtons = document.querySelectorAll("nav li")
const projectImg = document.querySelectorAll('.image')

hamburgerButton.addEventListener("click", mobileMenu)
menuMobileButtons.forEach(button=> button.addEventListener("click", resetHamburger))

function mobileMenu(){
    document.querySelector(".mobileMenu").classList.toggle("show-none");

    projectImg.forEach(item => item.classList.add("no-hover-effect"))
}

function resetHamburger(){
    document.querySelector(".mobileMenu").classList.add("show-none");
    projectImg.forEach(item => item.classList.remove("no-hover-effect"))
}

//videoreel popup model

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const videoReelIframe = document.querySelector('.videoReelIframe')
const url='https://www.youtube.com/embed/1Y0QpZu_4JE?'
let closedOnce = false;

openModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)

    })  
})

overlay.addEventListener('click', () =>{
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
        if(closedOnce==false){
            document.querySelector('.comment-1').classList.remove('no-display')
            document.querySelector('.comment-2').classList.remove('no-display')
        }
        closedOnce=true;
    })
})

closeModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal')
        closeModal(modal)
        if(closedOnce==false){
            document.querySelector('.comment-1').classList.remove('no-display')
            document.querySelector('.comment-2').classList.remove('no-display')
        }
        closedOnce=true;
       console.log(closedOnce)
        
    })  
})



function openModal(modal){
    if(modal ==null)
        return
    modal.classList.add('active')
    overlay.classList.add('active')
    videoReelIframe.src =`${url}autoplay=1`;
}

function closeModal(modal){
    if(modal ==null)
        return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    videoReelIframe.src =url;
    
}
//remove the hover battle function



//SHOW PLAY TEXT
const playMainBtn = document.querySelector('.videoreel-btn')
const textPlay = document.querySelector('.text-play')

playMainBtn.addEventListener('mouseover', showText)
function showText(){
    textPlay.classList.add('show-text');
}

playMainBtn.addEventListener('mouseout', hideText)
function hideText(){
    textPlay.classList.remove('show-text');
}

//CHANGE HAMBURGER MENU COLOR

            // $(document).ready(function() {
            //     if (window.location.pathname+window.location.hash == '../index.html#projects') {
            //         console.log('Viewing contact form');
            //     }
            // });

            // const target = document.querySelector("#projects");

            // function callback(entries) {
            //   console.log("this is section one");
            // }

            // const observer = new IntersectionObserver(callback);

            // observer.observe(target);

            // const projectsSection = document.querySelector('#projects');
            // projectsSection.addEventListener("scroll", event =>{
            //     console.log(projectsSection.scrollTop)
            // },{passive:true});

            // window.addEventListener('scroll', (event)=>{
            //     let scroll=this.scrollY;
            //     console.log(scroll)
            // })








const projectsSection = document.querySelector('#projects');

document.addEventListener('scroll', getPositionOfProjects)
function getPositionOfProjects(){
    const root = document.querySelector(":root")
    const projectsPosition = projectsSection.getBoundingClientRect();
    const projectsTop= projectsPosition.y;
    const projectsBottom = projectsPosition.bottom;
    if(projectsTop<=0){
        root.style.setProperty("--pseudo-backgroundcolor", '#112732')
        } else{
            root.style.setProperty("--pseudo-backgroundcolor", 'white')
        }

    if(projectsBottom<=50){
        root.style.setProperty("--pseudo-backgroundcolor", 'white')
    }
}











//change video depending on viewport width

window.addEventListener('resize', changeVideoSrc)
function changeVideoSrc(){
    if(window.innerWidth < 550){
        document.querySelector('video').src="video/mic.mp4" ;
  
    } else{
        document.querySelector('video').src="video/mare.mp4" ;
 
    }
}
changeVideoSrc()

//change about photo depending on viewport
let imgAboutSrc = document.querySelector('.img-about')
function changeImgSrc(){
    if(window.innerWidth > 2030){
        imgAboutSrc.src = "img/alexbizet-mare.jpg";
    } else{
        imgAboutSrc.src = "img/alexbizet-mic.jpg";
    }
}
changeImgSrc()

//change project photo depending on viewport

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 1920){
        document.querySelector('.project1-mare').src ="img/project1.jpg"
        document.querySelector('.project2-mare').src ="img/project2-mare.jpg"
        document.querySelector('.project3-mare').src ="img/project3-mare.jpg"
        document.querySelector('.project4-mare').src ="img/project4-mare.jpg"
        document.querySelector('.project5-mare').src ="img/project5-mare.jpg"
        document.querySelector('.project6-mare').src ="img/project6-mare.jpg"
        document.querySelector('.project7-mare').src ="img/project7-mare.jpg"
        document.querySelector('.project8-mare').src ="img/project8-mare.jpg"
        document.querySelector('.project9-mare').src ="img/project9-mare.jpg"
    } else{
        document.querySelector('.project1-mare').src ="img/project1.jpg"
        document.querySelector('.project2-mare').src ="img/project2.jpg"
        document.querySelector('.project3-mare').src ="img/project3.jpg"
        document.querySelector('.project4-mare').src ="img/project4.jpg"
        document.querySelector('.project5-mare').src ="img/project5.jpg"
        document.querySelector('.project6-mare').src ="img/project6.jpg"
        document.querySelector('.project7-mare').src ="img/project7.jpg"
        document.querySelector('.project8-mare').src ="img/project8.jpg"
        document.querySelector('.project9-mare').src ="img/project9.jpg"
    }
  
})

//AUDIO CIRCLES


let audioCircles= document.querySelectorAll('.main-circle')
audioCircles.forEach(circle =>  circle.addEventListener("mouseover", ()=>{
    const audio = document.querySelector(`.${circle.dataset.key}`)
    audio.play()
    document.querySelector('.comment-1').classList.add('no-display')
    document.querySelector('.comment-2').classList.add('no-display')
  
}))

// let audioCircless= document.querySelectorAll('.main-circle')
// audioCircless.forEach(circle =>  circle.addEventListener('mouseover', ()=>{
//     alert('hei')
// }))



