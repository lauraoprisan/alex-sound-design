<?php include 'config.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <title>Sound design for video games</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    
</head>
<body>
     <!--preloader-->
     <div class="preloader-wrapper">
        <div class="preloader">
            <div class="loader-circle"></div>
            <div class="loader-circle1"></div>
        </div>
    </div>
    <!--/preloader-->
    <header class="header-container">
        <span>Alexandru Oprisan</span>
        <nav class="">
            <button class="hamburger" id="hamburger">
                <div class="hamburger-btn"></div>
            </button>
            <ul class="mobileMenu show-none">
                <li class="active videoReel"><a href="#videoReel">Sound design reel</a></li>
                <li class="about"><a href="#about">About</a></li>
                <li class="projects"><a href="#projects">Projects</a></li>
                <li class="contact"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main id="videoReel" class="container main-bg videoDemoReel highlight-section">
        <video autoplay muted loop class="bg-video">
            <source class="video-src" src="video/" type="video/mp4">
        </video>
        <h1>Sound design for video games</h1>
        <div class="main-btn-outside-wrapper">
            <p class="text-play">Play sound design reel</p>
            <button data-modal-target="#modal" class="videoreel-btn main-btn-wrapper">
                <div class="main-btn-play"></div>
            </button>
        </div>
        
       
        
        <div class="circles-content">
            <div data-key="empty-big" class="main-circle circle-1 "></div>
            <div class="hover-battle-wrapper-2"> 
                <div data-key="empty-var-2" class="main-circle circle-2 small "></div>
                <span class="comment-2 no-display">No, hover me!</span>
            </div>
            <div data-key="fill-var-1" class="main-circle circle-3 "></div>
            <div data-key="empty-var-1" class="main-circle circle-4 "></div>
            <div data-key="empty-small" class="main-circle circle-5 small "></div>
            <div data-key="fill-big" class="main-circle circle-6 "></div>
            <div data-key="fill-var-2" class="main-circle circle-7 small "></div>
            <div data-key="empty-small" class="main-circle circle-8 small"></div>
            <div class="hover-battle-wrapper-1"> 
                <div data-key="fill-big" class="main-circle circle-9 "></div>   
                <span class="comment-1 no-display">Hover me!</span>    
            </div>
            <div data-key="fill-small" class="main-circle circle-10 small"></div>

            <audio class="empty-big" src="sounds/empty-big.mp3"></audio>
            <audio class="empty-small" src="sounds/empty-small.mp3"></audio>
            <audio class="fill-big" src="sounds/fill-big.mp3"></audio>
            <audio class="fill-small" src="sounds/fill-small.mp3"></audio>

            <audio class="empty-var-1" src="sounds/empty-var-1.mp3"></audio>
            <audio class="empty-var-2" src="sounds/empty-var-2.mp3"></audio>
            <audio class="fill-var-1" src="sounds/fill-var-1.mp3"></audio>
            <audio class="fill-var-2" src="sounds/fill-var-2.mp3"></audio>
        </div>
    </main>
    <section class="modal container main-bg videoDemoReel highlight-section" id="modal">
        <div class="modal-header">
            <h2 class="title">Sound design reel</h2>
            <button data-close-button class="close-button">&times</button>
        </div>
        <div  class="iframeContainer modal-body">
            <iframe class="videoReelIframe" width="560" height="315" src="https://www.youtube.com/embed/1Y0QpZu_4JE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>
    <div id="overlay"></div>
    <section id="about" class="container about-section highlight-section">
        <h2>Who I am</h2>
        <div class="flex-row">
            <section class="about-left">
                <img class="img-about" src="img/alexbizet-mic.jpg" width="670px" alt="Alexandru Oprisan">
                <a href="doc/alexandru-oprisan-CV.pdf" target="_blank">
                    <button class="downloadCV desktop">
                        Download CV
                    </button>
                </a>
            </section>
            <section class="about-text">
               <p>
                    Hello! My name is Alexandru and I'm a Sound Designer based in Tampere, Finland. 
               </p> 
               <p>
                     From a young age, I've been passionate about sound, music, video games, and technology. I think some of the key moments were my father getting a radio player that allowed me to record over cassettes and the exhilaration of going out of Tristam for the first time in Diablo 2. Now it's all about DAWs, Wwise, game engines, and the neverending creative pursuit.
               </p>
               <p>
                     After I finished a degree in psychology while working in a music store in my hometown, Bucharest, Romania, I felt the need to develop myself further as a music producer and sound designer. I applied to Tampere University of Applied Sciences (TAMK) where I am currently a third-year student. 
               </p>
               <p>
                    During these years I developed my technical skills, worked on student projects, released music, joined game jams, and developed a clearer taste for audio direction.
               </p>
               <p>
                     Some of my favorite games and films sound-wise are: Control, Inside, and God of War(PS4); Arrival, Dunkirk, and Bladerunner 2049. 
               </p>
               <p>
                     I am really excited to collaborate with passionate teams and help your vision come to life.
               </p>
               <p>
                    Feel free to contact me through whatsapp, e-mail, or social media.
               </p>
               <a class="btn-tablet-download tablet" href="doc/alexandru-oprisan-CV.pdf" target="_blank">
                    <button class="downloadCV">
                            Download CV
                    </button>
                </a>
            </section>
        </div>

    </section>
    <section class="container skills">
        <h2>What I can do</h2>
        <section class="horizontal-circles">
            <div>
                <div class="circle icon-1"></div>
                <h3>Asset creation</h3>
                <p>All the sounds<br> your game needs</p>
            </div>
            <div>
                <div class="circle icon-2"></div>
                <h3>DAWs</h3>
                <p>Studio One/ Reaper /Protools</p>
            </div>
            <div>
                <div class="circle icon-3"></div>
                <h3>Mixing  </h3>
                <p>Stereo to object-based mixing</p>
            </div>
           
        </section>
        <section class="horizontal-circles">
            <div>
                <div class="circle icon-4">
                </div>
                <h3>Game Engines</h3>
                <p>Unity/Unreal</p>
            </div>
            <div>
                <div class="circle icon-5"></div>
                <h3>Integration </h3>
                <p>C#/Blueprints</p>
            </div>
            <div>
                <div class="circle icon-6"></div>
                <h3>Audio Middleware</h3>
                <p>Wwise</p>
            </div>
            
        </section>
    </section>
    <section id="projects" class="container projects-section highlight-section">
        <h2>Projects</h2>
        <section class="videoDemoReel project-video" id="projectVideo">
            <div class="iframeContainer">
                <iframe class="projectVideo" width="560" height="315" src="https://www.youtube.com/embed/G2kUBXxUgVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/kRQmCEfN1JY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            </div>     
        </section>



        <section class="galerie-video">


            <div class="image project1">
                <div class="play-project"></div>
                <img data-key= "project1-mare" class="project-img project1-mare" src="img/project1.jpg" alt="Project 1 - I made a 3D video game as a sound designer">
                <div class="overlay-effect ">
                    <p>I made a 3D video game as a sound designer</p>
                </div>
            </div>
            <div class="image project2">
                <div class="play-project"></div>
                <img data-key= "project2-mare" class="project-img project2-mare" src="img/project2.jpg" alt="Project 2 - I made a video game to become a better sound designer">
                <div class="overlay-effect ">
                    <p>I made a video game to become a better sound designer</p>
                </div>
            </div>
            <div class="image project3">
                <div class="play-project"></div>
                <img data-key= "project3-mare" class="project-img project3-mare" src="img/project3.jpg" alt="Project 3 - Elden Ring - Margit the Fell Omen Battle (Sound Redesign)">
                <div class="overlay-effect ">
                    <p>Elden Ring - Margit the Fell Omen Battle (Sound Redesign)</p>
                </div>
            </div>
            <div class="image project4">
                <div class="play-project"></div>
                <img data-key= "project4-mare" class="project-img project4-mare" src="img/project4.jpg" alt="Project 4 - Elden Ring - Margit the Fell Omen Battle (Sound Redesign)" >
                <div class="overlay-effect">
                    <p>Game Jam Reel 2022</p>
                </div>
            </div>
            <div class="image project5">
                <div class="play-project"></div>
                <img data-key= "project5-mare" class="project-img project5-mare" src="img/project5.jpg" alt="Project 5 - Combo system in Wwise and Unity">
                <div class="overlay-effect ">
                    <p>Combo system in Wwise and Unity</p>
                </div>
            </div>
            <div class="image project6">
                <div class="play-project"></div>
                <img data-key= "project6-mare" class="project-img project6-mare" src="img/project6.jpg" alt="Project 6 - The lords of the fallen trailer sound redesign">
                <div class="overlay-effect">
                    <p>The lords of the fallen trailer sound redesign</p>
                </div>
            </div>
            <div class="image project7">
                <div class="play-project"></div>
                <img data-key= "project7-mare" class="project-img project7-mare" src="img/project7.jpg" alt="Project 7 - Ghostwire: Tokyo - Abstract Sound Redesign">
                <div class="overlay-effect">
                    <p>Ghostwire: Tokyo - Abstract Sound Redesign</p>
                </div>
            </div>
            <div class="image project8">
                <div class="play-project"></div>
                <img data-key= "project8-mare" class="project-img project8-mare" src="img/project8.jpg" alt="Project 8 - Interruptible dialogue system in Wwise + Unity">
                <div class="overlay-effect">
                    <p>Interruptible dialogue system in Wwise + Unity</p>
                </div>
            </div>
            <div class="image project9">
                <div class="play-project"></div>
                <img data-key= "project9-mare" class="project-img project9-mare " src="img/project9.jpg" alt="Project 9 - League of Legends Sejuani & Taliyah (sound redesign)">
                <div class="overlay-effect">
                    <p>League of Legends Sejuani & Taliyah (sound redesign)</p>
                </div>
            </div>
          
        </section>
    </section>
    <section id="contact" class="container contact-section highlight-section">
        <h2>Contact</h2>
        <p>I would love to get in touch to discuss your project or anything sound design or music related! If you are a fellow sound designer don't hesitate to say "hi" on Twitter or Youtube. Let's continue building up this amazing community!
        </p>
        <div class="horizontal-contact">
            <a class="contact-button" href="tel:+40746013626" >
                <div class="phone"></div>
                    <span>Call</span>
            </a>
            <a class="contact-button" href="mailto:oprisanandreialexandru@gmail.com">
                <div class="email"></div>
                    <span>E-mail</span>
            </a>
            <a class="contact-button" href="https://wa.me/+40730100445" target="_blank">
                    <!-- <img src="img/icons/whatsapp.png" width="50px"   alt=""> -->
                    <div class="whatsapp"></div>
                    <span>Whatsapp</span>
            </a>
        </div>
    </section>
    <footer class="container">
        <ul class="socialmedia-widget">
            <a href="https://twitter.com/AlexOprisan1" target="_blank">
                <li class="socialmedia twitter"></li>
            </a>
            <a href="https://www.youtube.com/user/Axelman04" target="_blank">
                <li class="socialmedia youtube"></li>
            </a>
            <a href="https://www.linkedin.com/in/alexandru-oprisan-782098139/" target="_blank">
                <li class="socialmedia linkedin"></li>
            </a>
<!--            
            <li class="socialmedia "><a href="https://www.youtube.com/user/Axelman04" target="_blank"></a></li>
            <li class="socialmedia "><a href="" target="_blank"></a></li> -->
        </ul>
        <div class="footer-row">
            <div>
                <span>Alexandru Oprisan</span>
                <span class="copyright"> &copy; 2022 All rights reserved</span>
                <a class="credits" href="credits/">Credits</a>
            </div>
            <a href="" class="button-scroolUp"></a>
        </div>
    </footer>
    <script src="js/main.js?v=<?=$version?>"></script>
</body>
</html>