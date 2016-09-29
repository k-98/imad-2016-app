// counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    // Make request to the counter end point
    
    //Capture the response and strore it in a variable
    
    //renderthe variable in the correct span
    counter =counter+1;
    var span = document.getElementById('count');
    span.innerHTML= counter.toString();
    
};