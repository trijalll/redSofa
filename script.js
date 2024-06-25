var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
});

var partTwoContainer = document.querySelector(".part2-container");
var partTwoImg = document.querySelector(".part2-img");
var partTwoText = document.querySelector(".part2-text");

partTwoContainer.addEventListener("mousemove",function(){
  partTwoImg.style.borderRadius = "5vw";
  partTwoText.style.borderRadius = "5vw";
})
partTwoContainer.addEventListener("mouseleave",function(){
  partTwoImg.style.borderRadius = "1vw 0vw 0vw 1vw";
  partTwoText.style.borderRadius = "0vw 1vw 1vw 0vw";
})

var partThreeCardOne = document.querySelector(".part3-card1");
var partThreeImgOne = document.querySelector(".part3-img1");
var partThreeContOne = document.querySelector(".part3-card-cont1");

partThreeCardOne.addEventListener("mousemove",function(){
  partThreeImgOne.style.borderRadius = "6vw";
  partThreeContOne.style.borderRadius = "6vw";
})
partThreeCardOne.addEventListener("mouseleave",function(){
  partThreeImgOne.style.borderRadius = "1.2vw 1.2vw 0vw 0vw";
  partThreeContOne.style.borderRadius = "0vw 0vw 1.2vw 1.2vw";
})

var partThreeCardTwo = document.querySelector(".part3-card2");
var partThreeImgTwo = document.querySelector(".part3-img2");
var partThreeContTwo = document.querySelector(".part3-card-cont2");

partThreeCardTwo.addEventListener("mousemove",function(){
  partThreeImgTwo.style.borderRadius = "6vw";
  partThreeContTwo.style.borderRadius = "6vw";
})
partThreeCardTwo.addEventListener("mouseleave",function(){
  partThreeImgTwo.style.borderRadius = "1.2vw 1.2vw 0vw 0vw";
  partThreeContTwo.style.borderRadius = "0vw 0vw 1.2vw 1.2vw";
})

var partThreeCardThree = document.querySelector(".part3-card3");
var partThreeImgThree = document.querySelector(".part3-img3");
var partThreeContThree = document.querySelector(".part3-card-cont3");

partThreeCardThree.addEventListener("mousemove",function(){
  partThreeImgThree.style.borderRadius = "6vw";
  partThreeContThree.style.borderRadius = "6vw";
})
partThreeCardThree.addEventListener("mouseleave",function(){
  partThreeImgThree.style.borderRadius = "1.2vw 1.2vw 0vw 0vw";
  partThreeContThree.style.borderRadius = "0vw 0vw 1.2vw 1.2vw";
})

var partSevenContainer = document.querySelector(".part7-container");
var partSevenImg = document.querySelector(".part7-img");
var partSevenCont = document.querySelector(".part7-cont");

partSevenContainer.addEventListener("mousemove",function(){
  partSevenImg.style.borderRadius = "6vw";
  partSevenCont.style.borderRadius = "6vw";
})
partSevenContainer.addEventListener("mouseleave",function(){
  partSevenImg.style.borderRadius = "1.2vw 1.2vw 0vw 0vw";
  partSevenCont.style.borderRadius = "0vw 0vw 1.2vw 1.2vw";
})


var partEightCardOne = document.querySelector(".part8-card1");
var partEightImgOne = document.querySelector(".part8-img1");
var partEightContOne = document.querySelector(".part8-card-cont1");

partEightCardOne.addEventListener("mousemove",function(){
  partEightImgOne.style.borderRadius = "6vw";
  partEightContOne.style.borderRadius = "6vw";
})
partEightCardOne.addEventListener("mouseleave",function(){
  partEightImgOne.style.borderRadius = "1.2vw 1.2vw 0vw 0vw";
  partEightContOne.style.borderRadius = "0vw 0vw 1.2vw 1.2vw";
})

var partEightCardTwo = document.querySelector(".part8-card2");
var partEightImgTwo = document.querySelector(".part8-img2");
var partEightContTwo = document.querySelector(".part8-card-cont2");

partEightCardTwo.addEventListener("mousemove",function(){
  partEightImgTwo.style.borderRadius = "6vw";
  partEightContTwo.style.borderRadius = "6vw";
})
partEightCardTwo.addEventListener("mouseleave",function(){
  partEightImgTwo.style.borderRadius = "1.2vw 1.2vw 0vw 0vw";
  partEightContTwo.style.borderRadius = "0vw 0vw 1.2vw 1.2vw";
})

var partEightCardThree = document.querySelector(".part8-card3");
var partEightImgThree = document.querySelector(".part8-img3");
var partEightContThree = document.querySelector(".part8-card-cont3");

partEightCardThree.addEventListener("mousemove",function(){
  partEightImgThree.style.borderRadius = "6vw";
  partEightContThree.style.borderRadius = "6vw";
})
partEightCardThree.addEventListener("mouseleave",function(){
  partEightImgThree.style.borderRadius = "1.2vw 1.2vw 0vw 0vw";
  partEightContThree.style.borderRadius = "0vw 0vw 1.2vw 1.2vw";
})

// -----part10--------

var floatOne = document.querySelector(".float1");
var floatOneImg = document.querySelector(".float1-img");
var floatOneText = document.querySelector(".float1-text");

floatOne.addEventListener("mousemove",function(){
floatOneImg.style.borderRadius = "5vw";
floatOneImg.style.zIndex = "3";
floatOneText.style.zIndex = "3"
floatOne.style.zIndex = "6";
floatOneText.style.borderRadius = "6vw";
floatOneText.style.bottom = "0%";
})
floatOne.addEventListener("mouseleave",function(){
floatOneImg.style.borderRadius = "1.5vw";
floatOneImg.style.zIndex = "2"
floatOneText.style.zIndex = "1"
floatOne.style.zIndex = "0"
floatOneText.style.bottom = "30%";
})

var floatTwo = document.querySelector(".float2");
var floatTwoImg = document.querySelector(".float2-img");
var floatTwoText = document.querySelector(".float2-text");

floatTwo.addEventListener("mousemove",function(){
floatTwoImg.style.borderRadius = "5vw";
floatTwoText.style.borderRadius = "6vw";
floatTwoText.style.zIndex = "3";
floatTwo.style.zIndex = "5"
floatTwoText.style.bottom = "0%";
})
floatTwo.addEventListener("mouseleave",function(){
floatTwoImg.style.borderRadius = "1.5vw";
floatTwoText.style.zIndex = "0";
floatTwoText.style.bottom = "30%";
})


var floatThree = document.querySelector(".float3");
var floatThreeImg = document.querySelector(".float3-img");
var floatThreeText = document.querySelector(".float3-text");

floatThree.addEventListener("mousemove",function(){
floatThreeImg.style.borderRadius = "5vw";
floatThreeText.style.borderRadius = "6vw";
floatThreeText.style.bottom = "0%";
floatThreeText.style.zIndex = "3"
floatThree.style.zIndex = "4"
})
floatThree.addEventListener("mouseleave",function(){
floatThreeImg.style.borderRadius = "1.5vw";
floatThreeText.style.bottom = "30%";
floatThreeText.style.zIndex = "0"
floatThree.style.zIndex = "1"
})

var floatFour = document.querySelector(".float4");
var floatFourImg = document.querySelector(".float4-img");
var floatFourText = document.querySelector(".float4-text");

floatFour.addEventListener("mousemove",function(){
floatFourImg.style.borderRadius = "5vw";
floatFour.style.zIndex = "5";
floatFourText.style.borderRadius = "6vw";
floatFourText.style.bottom = "0%";
})
floatFour.addEventListener("mouseleave",function(){
floatFourImg.style.borderRadius = "1.5vw";
floatFourText.style.bottom = "30%";
floatFour.style.zIndex = "0";
})

var floatFive = document.querySelector(".float5");
var floatFiveImg = document.querySelector(".float5-img");
var floatFiveText = document.querySelector(".float5-text");

floatFive.addEventListener("mousemove",function(){
floatFiveImg.style.borderRadius = "5vw";
floatFiveText.style.borderRadius = "6vw";
floatFiveText.style.zIndex = "3"
floatFiveText.style.bottom = "0%";
floatFive.style.zIndex = "4"
})
floatFive.addEventListener("mouseleave",function(){
floatFiveImg.style.borderRadius = "1.5vw";
floatFiveText.style.bottom = "30%";
floatFiveText.style.zIndex = "1"
})

var floatSix = document.querySelector(".float6");
var floatSixImg = document.querySelector(".float6-img");
var floatSixText = document.querySelector(".float6-text");

floatSix.addEventListener("mousemove",function(){
floatSixImg.style.borderRadius = "5vw";
floatSixText.style.borderRadius = "6vw";
floatSixText.style.bottom = "0%";
})
floatSix.addEventListener("mouseleave",function(){
floatSixImg.style.borderRadius = "1.5vw";
floatSixText.style.bottom = "30%";
})


var floatSeven = document.querySelector(".float7");
var floatSevenImg = document.querySelector(".float7-img");
var floatSevenText = document.querySelector(".float7-text");

floatSeven.addEventListener("mousemove",function(){
floatSevenImg.style.borderRadius = "5vw";
floatSevenText.style.borderRadius = "6vw";
floatSevenText.style.bottom = "0%";
})
floatSeven.addEventListener("mouseleave",function(){
floatSevenImg.style.borderRadius = "1.5vw";
floatSevenText.style.bottom = "50%";
})


var floatEight = document.querySelector(".float8");
var floatEightImg = document.querySelector(".float8-img");
var floatEightText = document.querySelector(".float8-text");

floatEight.addEventListener("mousemove",function(){
floatEightImg.style.borderRadius = "5vw";
floatEight.style.zIndex = "4";
floatEightText.style.borderRadius = "6vw";
floatEightText.style.bottom = "0%";
})
floatEight.addEventListener("mouseleave",function(){
floatEightImg.style.borderRadius = "1.5vw";
floatEight.style.zIndex = "0";
floatEightText.style.bottom = "30%";
floatEight.style.zIndex = "0";
})

var floatNine = document.querySelector(".float9");
var floatNineImg = document.querySelector(".float9-img");
var floatNineText = document.querySelector(".float9-text");

floatNine.addEventListener("mousemove",function(){
floatNineImg.style.borderRadius = "5vw";
floatNineText.style.borderRadius = "6vw";
floatNineText.style.bottom = "0%";
floatNine.style.zIndex = "3"
})
floatNine.addEventListener("mouseleave",function(){
floatNineImg.style.borderRadius = "1.5vw";
floatNineText.style.bottom = "30%";
})


var floatTen = document.querySelector(".float10");
var floatTenImg = document.querySelector(".float10-img");
var floatTenText = document.querySelector(".float10-text");

floatTen.addEventListener("mousemove",function(){
floatTenImg.style.borderRadius = "5vw";
floatTenText.style.borderRadius = "6vw";
floatTenText.style.bottom = "0%";
floatTen.style.zIndex = "3";
})
floatTen.addEventListener("mouseleave",function(){
floatTenImg.style.borderRadius = "1.5vw";
floatTenText.style.bottom = "30%";
floatTen.style.zIndex = "2";
})

var floatEleven = document.querySelector(".float11");
var floatElevenImg = document.querySelector(".float11-img");
var floatElevenText = document.querySelector(".float11-text");

floatEleven.addEventListener("mousemove",function(){
floatElevenImg.style.borderRadius = "5vw";
floatElevenText.style.borderRadius = "6vw";
floatElevenText.style.bottom = "0%";
floatEleven.style.zIndex = "3";
})
floatEleven.addEventListener("mouseleave",function(){
floatElevenImg.style.borderRadius = "1.5vw";
floatElevenText.style.bottom = "30%";
floatEleven.style.zIndex = "1";
})

var floatTwelve = document.querySelector(".float12");
var floatTwelveImg = document.querySelector(".float12-img");
var floatTwelveText = document.querySelector(".float12-text");

floatTwelve.addEventListener("mousemove",function(){
floatTwelveImg.style.borderRadius = "5vw";
floatTwelveText.style.borderRadius = "6vw";
floatTwelveText.style.bottom = "0%";
floatTwelve.style.zIndex = "3";
})
floatTwelve.addEventListener("mouseleave",function(){
floatTwelveImg.style.borderRadius = "1.5vw";
floatTwelveText.style.bottom = "30%";
floatTwelve.style.zIndex = "1";
})

var floatThirteen = document.querySelector(".float13");
var floatThirteenImg = document.querySelector(".float13-img");
var floatThirteenText = document.querySelector(".float13-text");

floatThirteen.addEventListener("mousemove",function(){
floatThirteenImg.style.borderRadius = "5vw";
floatThirteenText.style.borderRadius = "6vw";
floatThirteenText.style.bottom = "0%";
floatThirteen.style.zIndex = "3";
})
floatThirteen.addEventListener("mouseleave",function(){
floatThirteenImg.style.borderRadius = "1.5vw";
floatThirteenText.style.bottom = "30%";
floatThirteen.style.zIndex = "1";
})

// ---mouse animation---

document.addEventListener("mousemove", function(details){
document.querySelectorAll(".mouse").forEach((elem) => {
  const position= elem.getAttribute("value");
  const x = (window.innerWidth - details.clientX*position)/90;
  const y = (window.innerHeight - details.clientY*position)/90;

  elem.style.transform = `translateX(${x}px) translateY(${y}px)`
})
});
// ---mouse animation---
// -----part10--------

var part1Strip = gsap.timeline({scrollTrigger:{
trigger: ".part1__strip",
start: "20% 90%",
end: "80% 35%",
scrub: true,
// markers: true,s
duration: 1,
}})
part1Strip.to(".part1__strip1",{
marginLeft: "0vw",
}, 'strip')
part1Strip.to(".part1__strip2",{
marginLeft: "-68vw",
}, 'strip')

// -------Responsive------

// var navIcon = document.querySelector(".nav__menu__icon");
// var menuPage = document.querySelector(".navbar__responsive__menu");

// navIcon.addEventListener("click", function(){
//   value = manuPage.style.top;
//   if(value == "0vh"){
//     manuPage.style.top = "-150vh";
//   }
//   else{
//     manuPage.style.top = "0vh";
//   }
// })