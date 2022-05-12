const  form = document.querySelector('.contact_form');
//function to send the message when click on button send


function sendMsg(email){

  const name = document.querySelector('.animateTransform'),
    btr = document.querySelector ('.btr')
  //const gewaehlteVorlage = getVorlage()

    var option = ["none", "ostern", "weihn", "bday"];
    
    var UserOption = document.getElementById('UserSelect').value;
    option[UserOption-1]

    if (option[UserOption-1] == "ostern"){
      msg = `
              <body>
                  <img src="../src/ostern.png" style="position: relative;width:950px">
                      <p style="
                          position: absolute;
                          top: 200;
                          left: 250;
                          width: 600px;
                          color: #455621;
                          font-family: Roboto;
                          line-height: 1.5;
                          text-align: justify;">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      </p>
                  </img>
              </body>
            `
      
    } else if (option[UserOption-1] == "weihn"){
      msg = `
              <body>
                <img src="../src/weihnachten_2.png" style="position: relative;width:950px">
                    <p style="
                        position: absolute;
                        top: 200;
                        left: 250;
                        width: 600px;
                        color: #455621;
                        font-family: Roboto;
                        line-height: 1.5;
                        text-align: justify;">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </img>
              </body>
            `
      
    } else if (option[UserOption-1] == "bday"){
      msg = `
              <body>
                  <img src="src/Bday_1.png" style="position: relative;width:950px">
                      <p style="
                          position: absolute;
                          top: 200;
                          left: 250;
                          width: 600px;
                          color: #455621;
                          font-family: Roboto;
                          line-height: 1.5;
                          text-align: justify;">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      </p>
                  </img>
              </body>
            ` 
      
    }else if (option[UserOption-1] == "none"){
      msg = document.querySelector('.msg');
      
    }


    /* if (gewaehlteVorlage = "ostern" ){
      var img = document.createElement("img");
      img.src = "../src/ostern.png";
      msg.appendChild(img);
      window.location.reload();
      //block.setAttribute("style", "text-align:center");
  
    }
    
    if (gewaehlteVorlage = "weihn" ){
      load("vorlageWeihnachten.html"); 
  
    } */
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

/* function getVorlage() {
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
 */
