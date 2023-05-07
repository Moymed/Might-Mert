const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);


// Logo hover
const navbarLogo = document.getElementById('navbar__logo');
const navbarLogoMert = document.getElementById('navbar__logo--mert');

navbarLogo.addEventListener('mouseover', () => {
  navbarLogoMert.classList.add('hover');
});

navbarLogo.addEventListener('mouseleave', () => {
  navbarLogoMert.classList.remove('hover');
});

navbarLogoMert.addEventListener('mouseover', () => {
  navbarLogo.classList.add('hover');
});

navbarLogoMert.addEventListener('mouseleave', () => {
  navbarLogo.classList.remove('hover');
});

// splashscreen
$(document).ready(function() {
  $(document).on('click keydown', function handleSplashScreen(e) {
    if (e.type === 'click' || e.keyCode !== undefined) {
      $('#splashscreen').slideToggle(700, function() {
        $(document).off('click keydown', handleSplashScreen);
      });
    }
  });
});


  $(document).ready(function() {
    $('.line').addClass('animated');
    $('.line2').addClass('animated');
    $('.line4').addClass('animated');
    $('.line3').addClass('animated');
    
    setTimeout(function() {
        $('#splashscreen img, #splashscreen h3, #splashscreen h4, #splashscreen h5, #splashscreen a').addClass('animated');
    }, 3000);

    setTimeout(function(){
        $('#splashscreen h2').addClass('animated');
    }, 500)
});

menu.addEventListener('click', mobileMenu);

// Scroll Drop Down
const dropdownMenu = () => {
    const dropdownContainer = document.querySelector('#dropdown-cont');
    const scrollDistance = 1500; // Set the scroll distance here
    const scrollDistance2 = 4645; // Scroll distance end
    const windowWidth = 768; // minimum window width
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollDistance && window.scrollY < scrollDistance2 && window.screen.width > windowWidth) {
        dropdownContainer.classList.add('open');
      } else{
        dropdownContainer.classList.remove('open');
      }
    });
  };
  
  dropdownMenu();

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const navLogo = document.querySelector('#navbar__logo')
    const navMertLogo = document.querySelector('#navbar__logo--mert')
    const aboutMenu = document.querySelector('#about-page')

    const portfolioMenu = document.querySelector('#portfolio-page')
    const dropdownAbyss = document.querySelector('#abyss')
    const dropdownPortraits = document.querySelector('#portraits')
    const dropdownEnvironments = document.querySelector('#environments')
    const dropdownSketches = document.querySelector('#sketches')
    const dropdownOld = document.querySelector('#old')

    const contactMenu = document.querySelector('#contact-page')
    let scrollPos = window.scrollY
    //console.log(scrollPos);

    //adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 300){
        navMertLogo.classList.add('highlight')
        navLogo.classList.add('highlight')                 //logo highlight
        aboutMenu.classList.remove('highlight')
        portfolioMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;

    } else if(window.innerWidth > 960 && scrollPos < 1400) { //about highlight
        aboutMenu.classList.add('highlight');
        portfolioMenu.classList.remove('highlight');
        navMertLogo.classList.remove('highlight');
        navLogo.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;

    } else if (window.innerWidth > 960 && scrollPos < 2400) { //abyss
        dropdownAbyss.classList.add('highlight');
        portfolioMenu.classList.add('highlight');
        dropdownPortraits.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        navMertLogo.classList.remove('highlight');
        navLogo.classList.remove('highlight');
        return;

    } else if (window.innerWidth > 960 && scrollPos < 3200) { //portraits
        dropdownPortraits.classList.add('highlight');
        dropdownAbyss.classList.remove('highlight');
        dropdownEnvironments.classList.remove('highlight');
        portfolioMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        navMertLogo.classList.remove('highlight');
        navLogo.classList.remove('highlight');
        return;

    } else if (window.innerWidth > 960 && scrollPos < 3800) { //environments
        dropdownEnvironments.classList.add('highlight');
        dropdownPortraits.classList.remove('highlight');
        dropdownOld.classList.remove('highlight');
        dropdownSketches.classList.remove('highlight');
        dropdownAbyss.classList.remove('highlight');
        portfolioMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        navMertLogo.classList.remove('highlight');
        navLogo.classList.remove('highlight');
        return;

    } else if (window.innerWidth > 960 && scrollPos < 4200) { //sketches
        dropdownSketches.classList.add('highlight');
        dropdownEnvironments.classList.remove('highlight');
        dropdownPortraits.classList.remove('highlight');
        dropdownOld.classList.remove('highlight');
        dropdownAbyss.classList.remove('highlight');
        portfolioMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        navMertLogo.classList.remove('highlight');
        navLogo.classList.remove('highlight');
        return;

    } else if (window.innerWidth > 960 && scrollPos < 4745) { //old
        dropdownOld.classList.add('highlight');
        dropdownSketches.classList.remove('highlight');
        dropdownEnvironments.classList.remove('highlight');
        dropdownPortraits.classList.remove('highlight');
        dropdownAbyss.classList.remove('highlight');
        portfolioMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        navMertLogo.classList.remove('highlight');
        navLogo.classList.remove('highlight');
        return;    

    } else if(window.innerWidth > 960 && scrollPos < 4745) { //Portfolio
        portfolioMenu.classList.add('highlight');
        dropdownAbyss.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;

    } else if(window.innerWidth > 960 && scrollPos < 5545) { //contact highlight
        contactMenu.classList.add('highlight');
        dropdownAbyss.classList.remove('highlight');
        portfolioMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } 
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    } 
}

const linkHighlights = () =>{
    const navLogo = document.querySelector('#navbar__logo');
    const navMertLogo = document.querySelector('#navbar_logo--mert');

    if(navLogo = '.navbar__links:hover'){
        navMertLogo.classList.add('.navbar__links:hover');
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
