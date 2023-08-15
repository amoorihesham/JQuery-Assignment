$(document).ready(function () {
  //Handle The Spinner And Loading Screen
  $(".loading").fadeOut(750,()=>{
    $('body').css("overflow","auto")
  });

  //Handle The Tabs Content Toggler
  $(".opt1").click(() => {
    $(".opt1 p ").slideToggle(500);
  });
  $(".opt2").click(() => {
    $(".opt2 p ").slideToggle(500);
  });
  $(".opt3").click(() => {
    $(".opt3 p ").slideToggle(500);
  });
  $(".opt4").click(() => {
    $(".opt4 p ").slideToggle(500);
  });

  // Handle The SideBar Show/Hide Toggler
  $(".options").click(() => {
    $(".sidebar").animate({ left: "0" }, 750);
    $(".options").fadeOut(500);
  });
  $(".sidebar #closeBtn").click(() => {
    $(".sidebar").animate({ left: "-250px" }, 750);
    $(".options").fadeIn(1000);
  });

  // Handle The CountDown
  let date = new Date("31 Dec 2023 23:59:59").getTime();
  let timer = setInterval(() => {
    let dateNow = new Date().getTime();
    let remainTime = date - dateNow;
    let days = Math.floor(remainTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minuts = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
    let secounds = Math.floor((remainTime % (1000 * 60)) / 1000);
    $(".days").text(`${days < 10 ? "0" + days : days} D`);
    $(".hours").text(`${hours < 10 ? "0" + hours : hours} H`);
    $(".minutes").text(`${minuts < 10 ? "0" + minuts : minuts} M`);
    $(".secounds").text(`${secounds < 10 ? "0" + secounds : secounds} S`);

    if (remainTime <= 0) {
      $(".days").text(`00`);
      $(".hours").text(`00`);
      $(".minutes").text(`00`);
      $(".secounds").text(`00`);
      clearInterval(timer);
    }
  }, 1000);

  // Handle TextArea Events And Input Process
  let maxCharSet = $(".join textarea").attr("maxlength");
  let spanShow = $(".join span.remChar");
  spanShow.text(`${maxCharSet} Character Remainig`);
  $(".join textarea").keyup(() => {
    let charInInput = $(".join textarea").val().length;
    let remChar = maxCharSet - charInInput;
    spanShow.text(`${remChar} Character Remainig`);
    if (remChar == 0) {
      spanShow.removeClass("text-success");
      spanShow.addClass("text-danger");
    } else {
      spanShow.removeClass("text-danger");
      spanShow.addClass("text-success");
    }
  });
  console.log(maxCharSet);
});
