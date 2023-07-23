const  menu_collapse = document.querySelector(`.menu-navbar`)
$(document).ready(function(){
     
    $(window).scroll(function(){
        if($(this).scrollTop() > 40) {
            $('#scroll-up').fadeIn();  
        }else{
            $('#scroll-up').fadeOut();              
        }

        if(this.scrollY > 20){
            $('.nav-container').addClass("sticky");
            $('.sticky').fadeIn();
        }else{
            $('.nav-container').removeClass("sticky");  
            $('.sticky').fadeOut();
        }
    });

    $('#scroll-up').click(function(){
        $('html').animate({scrollTop: 0});
        
        menu_collapse.classList.remove(`show`)
    });

    $('.nav-container .menu-navbar li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

});

    // typing text animation script
    new Typed (".typing",{
        strings: ["Developer","Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    })


// darkmode
document.querySelector(`#btn-darkmode`).addEventListener(`click`,() => {
  
    document.body.classList.toggle(`darkmode`)  
    document.querySelector('.nav-container').classList.toggle(`darksticky`);
    
    
})



// hamburger
document.querySelector(`#hamburger`).addEventListener(`click`,() => {
  const  menu_collapse = document.querySelector(`.menu-navbar`)
    document.querySelector(`.menu-navbar`).classList.toggle(`show`);


})

    // navbar collapse

    document.querySelector(`.menu-navbar`).addEventListener(`click`,() => {

        if(menu_collapse.className.includes(`show`)){
            menu_collapse.classList.remove(`show`)
        }
    })
window.addEventListener(`resize`,() => {

   
    if(window.innerWidth > 901){
        $('.menu-navbar').removeClass("show");  
    }

})
