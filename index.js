/// <reference types="./@types/jquery" />



$(document).ready(function () {

   $('#loading').fadeOut(2000, function () {
      $('body').css({ overflow: 'auto' })
   });



   let count1 = document.querySelector('.count1');
   let count2 = document.querySelector('.count2');
   let count3 = document.querySelector('.count3');
   let count4 = document.querySelector('.count4');



   let Interval = setInterval(counter, 0.1);


   function counter() {

      let count = count1.innerHTML;

      count++;

      if (count >= 450) {
         clearInterval(Interval);
      }

      count1.innerHTML = count;
   }

   // ======================================================

   let Interval2 = setInterval(counter2, 75);

   function counter2() {

      let count = count2.innerHTML;

      count++;

      if (count >= 25) {
         clearInterval(Interval2);
      }

      count2.innerHTML = count;
   }

   // ======================================================

   let Interval3 = setInterval(counter3, 0.75);

   function counter3() {

      let count = count3.innerHTML;

      count++;

      if (count >= 550) {
         clearInterval(Interval3);
      }

      count3.innerHTML = count;
   }

   // ======================================================

   let Interval4 = setInterval(counter4, 32.5);

   function counter4() {

      let count = count4.innerHTML;

      count++;

      if (count >= 48) {
         clearInterval(Interval4);
      }

      count4.innerHTML = count;
   }


   // ============================================================

   /* btn up Scroll */

   let HomeHeight = $('.home').outerHeight();
   console.log(HomeHeight);


   $(document).on('scroll', function () {

      let documentScroll = $(document).scrollTop();
      console.log(documentScroll);

      if (documentScroll > HomeHeight - 50) {
         $('#btn-up').show(1000);
      }
      else {
         $('#btn-up').hide(1000);
      }

   })

   $('#btn-up').on('click', function () {

      $('body , html').animate({
         scrollTop: 0
      }, 1500)
   })

   /* navbar Scroll */

   $('.navbar .nav-link').on('click', function (e) {

      let clickNavbar = $(e.target).attr('href');
      console.log(clickNavbar);

      let OffTop = $(clickNavbar).offset().top;

      $('body , html').animate({
         scrollTop: `${OffTop}px`
      }, 1500)

   })

   /* optional Box */

   $('.option li').eq(0).css({ backgroundColor: 'red' });
   $('.option li').eq(1).css({ backgroundColor: 'tomato' });
   $('.option li').eq(2).css({ backgroundColor: 'blue' });
   $('.option li').eq(3).css({ backgroundColor: 'green' });
   $('.option li').eq(4).css({ backgroundColor: 'gray' });


   $('.parent-option i').on('click', function () {

      let x = $('.option').outerWidth();
      console.log(x);

      let leftValue = $('.parent-option').css('left');
      console.log(leftValue);

      if (leftValue == '0px') {

         $('.parent-option').animate({ 'left': `-${x}px` }, 1500);
      }
      else {

         $('.parent-option').animate({ 'left': `0px` }, 1500);
      }

   })


   $('.option li').on('click', function (e) {

      let clickColor = $(e.target).css('backgroundColor');
      $('h3, h2, i').css({ color: clickColor })
      console.log(clickColor);
   })


   $('.option img').on('click', function (e) {

      let clickImg = $(e.target).attr('src');
      console.log(clickImg);

      $('.bg-home').css({
         backgroundImage: `URL(${clickImg})`,
      })
   })


})


