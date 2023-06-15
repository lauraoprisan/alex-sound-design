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


//change project video URL depending on the clicked project and scroll to the project video

const videoImgElements = document.querySelectorAll('.project');
const projectVideo = document.querySelector('.projectVideo');

videoImgElements.forEach((element) => {
  element.addEventListener('click', () => {
        projectVideo.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
        const videoUrl = element.dataset.videoUrl;
        projectVideo.src = videoUrl;
  });
});

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

//CHANGE HAMBURGER MENU COLOR (DEPENDING ON THE SECTIONS' BG COLOR)

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

//change photo from about section depending on viewport
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

const projects = [
    "project2",
    "project3",
    "project4",
    "project5",
    "project6",
    "project7",
    "project8",
    "project9",
  ];
  
  const updateProjectPhotos = () => {
    const isLargeViewport = window.innerWidth > 1920;
    const imageSuffix = isLargeViewport ? "-mare" : "";
  
    projects.forEach((project) => {
      const imageElement = document.querySelector(`.${project}${imageSuffix}`);
      imageElement.src = `img/${project}${imageSuffix}.jpg`;
    });
  };
  
  window.addEventListener("resize", updateProjectPhotos);

//AUDIO CIRCLES
let audioCircles= document.querySelectorAll('.main-circle')
audioCircles.forEach(circle =>  circle.addEventListener("mouseover", ()=>{
    const audio = document.querySelector(`.${circle.dataset.key}`)
    audio.play()
    document.querySelector('.comment-1').classList.add('no-display')
    document.querySelector('.comment-2').classList.add('no-display')
  
}))



