 function ClearForm(){
    document.getElementById("fullname").value ='';
    document.getElementById("contactform").reset();
    }

    $(function(){
var pages = ['index','about','contact'];
var pathname = window.location.pathname;

$('.nav-link').each(function(item){
   if(pathname.includes(pages[item])){
      $(this).addclass('active');
      $(this).attr('aria-current','page');
   }
})
    });

    