const  form = document.querySelector('.contact_form');
//function to send the message when click on button send

function sendMsg(email){

  const name = document.querySelector('.animateTransform'),
    btr = document.querySelector ('.btr'),
    msg = document.querySelector('.msg');
    const gewaehlteVorlage = getVorlage()

    if (gewaehlteVorlage = "ostern" ){
      var img = document.createElement("img");
      img.src = "../src/ostern.png";
      msg.appendChild(img);
      window.location.reload();
      //block.setAttribute("style", "text-align:center");
  
    }
    
    if (gewaehlteVorlage = "weihn" ){
      load("vorlageWeihnachten.html"); 
  
    }
  //8BA998CE5243F82CB8770DCC2F757E5602EB   smtp.elasticemail.com   Port: 2525
  //E-Mail Senden Funktion:

  Email.send({
    SecureToken : "d79a094d-0b62-483d-842c-fcdbc94e4e12",
    To : email,
    From : "grusskartenanwendung@gmail.com",
    Subject : btr.value,
    Body : msg.value,
  }).then(
    message => alert(message)
    );
    clear();
}


function sendMultiMail(e) {
  e.preventDefault();
  let email = document.querySelector('.email').value.split(",");
  email.forEach(sendMsg);

  alert("Die E-Mail(s) wurden versendet!");
  window.location.reload();
}

//add the event listener submit
form.addEventListener('submit', sendMultiMail);

function getVorlage() {
  const selectElement = document.querySelector('.box-6');
  const  vorlage= selectElement.options[selectElement.selectedIndex].value;
  return vorlage;
}

function includeVorlage(){

  const gewaehlteVorlage = getVorlage()

  if (gewaehlteVorlage = ostern ){
    var img = document.createElement("img");
    img.src = "../src/ostern.png";
    msg.appendChild(img);
    //block.setAttribute("style", "text-align:center");

  }
  
  if (gewaehlteVorlage = weihn ){
    load("vorlageWeihnachten.html"); 

  }


}
