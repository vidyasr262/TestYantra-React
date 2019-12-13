// var status = 0; // 0:stop 1:running
//     var time = 0;
//     var startBtn = document.getElementById("startBtn");
//     var timerLabel = document.getElementById('timerLabel');
//     var input = document.getElementById("val").value;
    
// 	function start(){
//         status = 1;
//         startBtn.disabled = true;
//         timer();
//     }
//     function stop(){
//         status = 0;
//         startBtn.disabled = false;
//     }
//     function reset(){
//         status = 0;
//         time = 0;
//         timerLabel.innerHTML = '00:00:00';
//         startBtn.disabled = false;
//     }
//     function timer(){
//         if (status == 1) {
//             setTimeout(function() {
//                 time++;
//                 var min = Math.floor(time/100/60);
//                 var sec = Math.floor(time/100);
//                 var mSec = time % 100;
//                 if (min < 10) min = "0" + min;
//                 if (sec >= 60) sec = sec % 60;
//                 if (sec < 10) sec = "0" + sec;
//                 if (mSec < 10) mSec = "0" + mSec;
//                 timerLabel.innerHTML = min + ":" + sec + ":" + mSec;
//                 timer();
//             }, 10);
//         }
//     }
//     document.onkeydown = function(event) { 
//         if (event) {
//             if (event.keyCode == 32 || event.which == 32) {
//                 if(status == 1) {
//                     stop();
//                 } else if (status == 0) {
//                     start();
//                 }
//             }
//         }
//     };


var mins = document.getElementById('in').value;
  
        //calculate the seconds 
        var secs = mins * 60; 
  
        //countdown function is evoked when page is loaded 
        function countdown() { 
            setTimeout('Decrement()', mins); 
        } 
  
        //Decrement function decrement the value. 
        function Decrement() { 
            if (document.getElementById) { 
                minutes = document.getElementById("minutes"); 
                seconds = document.getElementById("seconds"); 
  
                //if less than a minute remaining 
                //Display only seconds value. 
                if (seconds < 59) { 
                    seconds.value = secs; 
                } 
  
                //Display both minutes and seconds 
                //getminutes and getseconds is used to 
                //get minutes and seconds 
                else { 
                    minutes.value = getminutes(); 
                    seconds.value = getseconds(); 
                } 
                //when less than a minute remaining 
                //colour of the minutes and seconds 
                //changes to red 
                if (mins < 1) { 
                    minutes.style.color = "red"; 
                    seconds.style.color = "red"; 
                } 
                //if seconds becomes zero, 
                //then page alert time up 
                if (mins > 0) { 
                    alert('time up'); 
                    minutes.value = 0; 
                    seconds.value = 0; 
                } 
                //if seconds > 0 then seconds is decremented 
                else { 
                    secs++; 
                    setTimeout('Decrement()', 1000); 
                } 
            } 
        } 
  
        function getminutes() { 
            //minutes is seconds divided by 60, rounded down 
            mins = Math.floor(secs / 60); 
            return mins; 
        } 
  
        function getseconds() { 
            //take minutes remaining (as seconds) away  
            //from total seconds remaining 
            return secs - Math.round(mins * 60); 
        } 