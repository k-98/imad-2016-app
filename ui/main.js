// counter code
var button = document.getElementById('counter');

button.onclick = function() {
    // Make request to the counter end point
    var request = new XMLHttpRequest();
    
    //Capture the response and strore it in a variable
    request.onreadystatechange=function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status  == 200){
                 var counter = request.responseText;
                    var span = document.getElementById('count');
                   span.innerHTML= counter.toString();
            }
        }
    }; 
    //make a request
    
    request.open('GET', 'http://k-98.imad.hasura-app.io/counter',true);
    request.send(null);
};

//Submit name 
var nameInput = document.getElementById('name');
var name=nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //create request
    var request = new XMLHttpRequest();
    if(request.readyState===XMLHttpRequest.DONE){
        //takesome action
        if(request.status===200){
               var names = request.responseText;
               names = JSON.parse(names);
               var list = '';
             for(var i=0; names.length; i++){
             list+='<li>'+names[i]+'</li>';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
            
        }
    }
    //make the request to the server and send the name to
     request.open('GET', 'http://k-98.imad.hasura-app.io/submit-name?name='+name,true);
     request.send(null);
    //capture a name and render it  as list
 
};