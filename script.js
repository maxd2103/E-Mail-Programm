const  form = document.querySelector('.contact_form');
//function to send the message when click on button send
function sendMsg(e){
    e.preventDefault();
 
        const name = document.querySelector('.animateTransform'),
            email = document.querySelector('.email'),
            msg = document.querySelector('.msg');

//8BA998CE5243F82CB8770DCC2F757E5602EB   smtp.elasticemail.com   Port: 2525
//E-Mail Senden Funktion:

    Email.send({
   
    SecureToken : "7e5179d7-9022-4250-b0ed-8fa46a72f667",
    To : email.value,
    From : "grusskartenanwendung@gmail.com",
    Subject : "Test",
    Body : msg.value
}).then(
message => alert(message)
);
    }
    
//add the event listener submit
form.addEventListener('submit', sendMsg);