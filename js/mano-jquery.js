
$(function () {
    let elementas = $('#demo');

    elementas.hide();

    let m1 = $('body >button:first-of-type');
    let m2 = $('body >button:last-of-type');


    m1.click(function () {
        elementas.toggle();
    });
   // m2.click(function () {
       // elementas.show();
   // });
})
//let element =document.querySelector('body >button:last-of-type');

   // element.addEventListener('click', function (){
    //divas.style.display = 'block';
//});
  // function rodyti(){
   //     document.getElementById('demo').style.display='block';}

//let divas = document.getElementById('#demo')
