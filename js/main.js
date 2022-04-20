$(".page_ex").on("click", function () {
  $(".container1").addClass("on");
  $(".container2").removeClass("on");
  $(".container3").removeClass("on");
  $(".container4").removeClass("on");
});

$(".layer_ex").on("click", function () {
  $(".container1").removeClass("on");
  $(".container2").removeClass("on");
  $(".container3").addClass("on");
  $(".container4").removeClass("on");
});

$(".popup_ex").on("click", function () {
  $(".container1").removeClass("on");
  $(".container2").addClass("on");
  $(".container3").removeClass("on");
  $(".container4").removeClass("on");
});

$(".alert_ex").on("click", function () {
  $(".container1").removeClass("on");
  $(".container2").removeClass("on");
  $(".container3").removeClass("on");
  $(".container4").addClass("on");
});


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px -50rem`);

window.addEventListener('resize', function(){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px -50rem`)
})