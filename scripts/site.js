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



    <script>
function showPlan() {
    // Hide all plans
    const plans = document.querySelectorAll('.plan-form');
    plans.forEach(plan => plan.style.display = 'none');

    // Get selected plan
    const selected = document.getElementById('study-plan').value;
    if(selected) {
        const formToShow = document.getElementById(selected);
        formToShow.style.display = 'block';
    }
}
</script>

    

    