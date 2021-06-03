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
      console.log(timeSlot); 
      console.log(currentTime);
   }
      backgroundColor();
// Post to local storage when user hits save button
 $(".saveBtn").on('click', function(){
    let task = $(this).siblings(".description").val();
    let hour = $(this).parent().attr("id");
   localStorage.setItem(hour, task);
   console.log(task);
   });
  
// Recall from local storage when page is reloaded
$('#9 .description').val(localStorage.getItem('#9'));
$('#10 .description').val(localStorage.getItem('#10'));
$('#11 .description').val(localStorage.getItem('#11'));
$('#12 .description').val(localStorage.getItem('#12'));
$('#13 .description').val(localStorage.getItem('#13'));
$('#14 .description').val(localStorage.getItem('#14'));
$('#15 .description').val(localStorage.getItem('#15'));
$('#16 .description').val(localStorage.getItem('#16'));
$('#17 .description').val(localStorage.getItem('#17'));
