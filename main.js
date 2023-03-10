function a(){
    link="https://rishith-maker-1.github.io/lms";
    document.getElementById('IFRAME').src = link;
    document.getElementById('s2').style.display='block'; //to show
    document.getElementById('s1').style.display='none'; //to hide
    document.getElementById('Name').innerHTML='LEGO Marvel Superheroes';
    document.getElementById('photo').src='https://image.api.playstation.com/cdn/EP1018/CUSA00258_00/O1gpT9zRh5UZFbeDWwTJ24DHyyarDjAC.png';
}
function b(){
    link="https://rishith-maker-1.github.io/lb2";
    document.getElementById('IFRAME').src = link;
    document.getElementById('s2').style.display='block'; //to show
    document.getElementById('s1').style.display='none'; //to hide
    document.getElementById('Name').innerHTML='LEGO Batman 2';
    document.getElementById('photo').src='https://sm.ign.com/t/ign_ap/cover/l/lego-batma/lego-batman-2-dc-super-heroes_abpu.128.jpg';
}
function c(){
    link="https://rishith-maker-1.github.io/pc";
    document.getElementById('IFRAME').src = link;
    document.getElementById('s2').style.display='block'; //to show
    document.getElementById('s1').style.display='none'; //to hide
    document.getElementById('Name').innerHTML='LEGO Pirates of the Caribbean';
    document.getElementById('photo').src='https://savegame.pro/wp-content/uploads/2019/09/lego-pirates-of-the-caribbean-the-video-game-cover.jpg';
}
function d(){
    link="https://rishith-maker-1.github.io/hp1-4";
    document.getElementById('IFRAME').src = link;
    document.getElementById('s2').style.display='block'; //to show
    document.getElementById('s1').style.display='none'; //to hide
    document.getElementById('Name').innerHTML='LEGO Harry Potter Years 1-4';
    document.getElementById('photo').src='https://assets-prd.ignimgs.com/2022/12/13/legopotterportable-1670974030603.jpg';
}
function e(){
    link="https://rishith-maker-1.github.io/hp5-7";
    document.getElementById('IFRAME').src = link;
    document.getElementById('s2').style.display='block'; //to show
    document.getElementById('s1').style.display='none'; //to hide
    document.getElementById('Name').innerHTML='LEGO Harry Potter Years 5-7';
    document.getElementById('photo').src='https://assets-prd.ignimgs.com/2022/01/07/lego-harry-potter-years-5-7-button-1641594071231.jpg';
}
function f(){
    link="https://rishith-maker-1.github.io/lij-toa";
    document.getElementById('IFRAME').src = link;
    document.getElementById('s2').style.display='block'; //to show
    document.getElementById('s1').style.display='none'; //to hide
    document.getElementById('Name').innerHTML='LEGO Indiana Jones-The Original Adventures';
    document.getElementById('photo').src='https://images.g2a.com/1024x768/1x1x0/lego-indiana-jones-the-original-adventures-steam-key-global-i10000049189002/59ea2a025bafe308220ba553';
}
function g(){
    link="https://rishith-maker-1.github.io/lij2-tac";
    document.getElementById('IFRAME').src = link;
    document.getElementById('s2').style.display='block'; //to show
    document.getElementById('s1').style.display='none'; //to hide
    document.getElementById('Name').innerHTML='LEGO Indiana Jones 2-The Adventure Continues';
    document.getElementById('photo').src='https://savegame.pro/wp-content/uploads/2019/08/lego-indiana-jones-2-the-adventure-continues-cover.jpg';
}
function h(){
    link="https://rishith-maker-1.github.io/llotr";
    document.getElementById('IFRAME').src = link;
    document.getElementById('s2').style.display='block'; //to show
    document.getElementById('s1').style.display='none'; //to hide
    document.getElementById('Name').innerHTML='LEGO Lord Of The Rings';
    document.getElementById('photo').src='https://assets-prd.ignimgs.com/2022/01/07/lego-lord-of-the-rings-crop-1641594935870.jpg';
}
function i(){
    link="https://rishith-maker-1.github.io/lsw3";
    document.getElementById('IFRAME').src = link;
    document.getElementById('s2').style.display='block'; //to show
    document.getElementById('s1').style.display='none'; //to hide
    document.getElementById('Name').innerHTML='LEGO Star Wars 3-The Clone Wars';
    document.getElementById('photo').src='https://brator.org/images/1/Lego_Star_Wars_3_The_Clone_Wars_1.jpg';
}
function j(){
    link="https://rishith-maker-1.github.io/lsw-tcs";
    document.getElementById('IFRAME').src = link;
    document.getElementById('s2').style.display='block'; //to show
    document.getElementById('s1').style.display='none'; //to hide
    document.getElementById('Name').innerHTML='LEGO Star Wars-The Complete Saga';
    document.getElementById('photo').src='https://assets-prd.ignimgs.com/2022/01/07/lego-star-wars-complete-button-crop-1641594760270.jpg';
}
function k(){
    link="https://rishith-maker-1.github.io/lb1";
    document.getElementById('IFRAME').src = link;
    document.getElementById('s2').style.display='block'; //to show
    document.getElementById('s1').style.display='none'; //to hide
    document.getElementById('Name').innerHTML='LEGO Batman-The Videogame';
    document.getElementById('photo').src='https://styles.redditmedia.com/t5_6mw359/styles/communityIcon_wn974778a8991.png';
}
function goback(){
    document.getElementById('s1').style.display='block'; //to show
    document.getElementById('s2').style.display='none'; //to hide
}
function notphone(){
    
}
window.onload = function() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.getElementById('s2').style.display='none';
        document.getElementById('s1').style.display='none';
        document.getElementById('s3').style.display='block';
    }
} 
