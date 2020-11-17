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

$(".hamburger-nav__lists-list").click(function () {
  $(".hamburger-nav,.hamburger-btn").removeClass("active");
  $('.burger-musk').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
  $('body').toggleClass('noscroll');
});

$("h2").textillate();

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

