   // Show the current date at the top of the screen
   const currentDay = moment().format("MMMM Do, YYYY");
   $("#currentDay").text(currentDay);
   // Change the backgroundcolor based on the time of day
   const backgroundColor = () =>{
      let currentTime = moment().format("H");
      let timeSlot = [];
      let hourIds = document.querySelectorAll('.row');
      for(var i=0; i < hourIds.length; i++){
         timeSlot.push(hourIds[i].getAttribute('id'));
      }

      for(var i=0; i< timeSlot.length; i++){
      if (currentTime < timeSlot) {
         $(".description").removeClass('present');
         $(".description").removeClass('future');
         $(".description").addClass('past');
      } else if (currentTime > timeSlot) {
         $(".description").removeClass('past');
         $(".description").removeClass('present');
         $('.description').addClass("future");
      } else {
         $(".description").removeClass('past');
         $(".description").removeClass('future');
         $('.description').addClass("present");
      }}
      // console.log(timeSlot); 
      // console.log(currentTime);
   }
      backgroundColor();
// Post to local storage when user hits save button
 $(".saveBtn").on('click', function(){
    let task = $(this).siblings(".description").val();
    let hour = $(this).parent().attr("id");
   localStorage.setItem(hour, task);
   event.preventDefault();
   // console.log(task);
   
  
// Recall from local storage when page is reloaded
$(timeSlot[0).val(localStorage.getItem(hour, task));
$('#10 .description').val(localStorage.getItem('10', task));
$('#11 .description').val(localStorage.getItem('11', task));
$('#12 .description').val(localStorage.getItem('12', task));
$('#13 .description').val(localStorage.getItem('13', task));
$('#14 .description').val(localStorage.getItem('14', task));
$('#15 .description').val(localStorage.getItem('15', task));
$('#16 .description').val(localStorage.getItem('16', task));
$('#17 .description').val(localStorage.getItem('17', task));
});
