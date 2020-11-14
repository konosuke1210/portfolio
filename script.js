$(function() {
  

   //ハンバーガーメニュー
$(".hamburger-btn").click(function () {
  $(this).toggleClass("active");

  if ($(this).hasClass("active")) {
    $(".hamburger-nav").toggleClass("active");
    $('.burger-musk').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
    $('body').toggleClass('noscroll'); //ハンバーガーメニューを開いたときにスクロールしないようにする
  } else {
    $(".hamburger-nav").toggleClass("active");
    $('.burger-musk').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
    $('body').toggleClass('noscroll'); //ハンバーガーメニューを開いたときにスクロールしないようにする
  }
});
$(".hamburger__list").click(function () {
  $(".hamburger,.hamburger-btn").removeClass("active");
});


  AOS.init({
    offset: 120,
    delay: 0,
    duration: 1000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });
  
});

