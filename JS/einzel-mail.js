

const  form = document.querySelector('.contact_form');
//function to send the message when click on button send



function sendMsg(email){

  const name = document.getElementById('name').value,
    btr = document.querySelector ('.btr');
  var anR = document.getElementById('anR').value;
  //const gewaehlteVorlage = getVorlage()

    var option = ["none", "ostern", "weihn", "bday"];
    
    var UserOption = document.getElementById('UserSelect').value;
    
    option[UserOption-1]

    console.log(name)

    if (option[UserOption-1] == "ostern"){
      var msg = `
              <body style="background-image: url('https://i.ibb.co/MM9SkHR/ostern.png');">
               `+ anR + name + ` 

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
      //Das Bild einfügen funktioniert noch nicht, ich denke irgendwas mit der Verlinkung klappt nicht? --> Bilder hochgeladen auf: https://de.imgbb.com/
    } else if (option[UserOption-1] == "weihn"){
      var msg = `
              <body style="background-image: url('https://i.ibb.co/0Vhpy8K/weihnachten-2.png');">
                `+ anR + name + `  

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
      var msg = `
              <body style="background-image: url('https://i.ibb.co/WW8nLJ8/Bday-1.png');">
              `+ anR + name + `  

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
      var msg = anR + name + `<br>` + document.querySelector('.msg').value;
    }
    

  Email.send({
    SecureToken : "d79a094d-0b62-483d-842c-fcdbc94e4e12",
    To : email,
    From : "grusskartenanwendung@gmail.com",
    Subject : btr.value,
    Body : msg,
  })

}


function sendMultiMail(e) {
  e.preventDefault();
  let email = document.querySelector('.email').value.split(",");
  email.forEach(sendMsg);

  alert("Die E-Mail(s) wurden versendet!");
  setTimeout (reload, 500);
}

function reload(){
  window.location.reload();
}

//add the event listener submit
form.addEventListener('submit', sendMultiMail);


function vorschau (){

  var name = document.getElementById('name').value;
  var anR = document.getElementById('anR').value;

  var vorschau = document.querySelector('#vorschau');

  var option = ["none", "ostern", "weihn", "bday"];
  
  var UserOption = document.getElementById('UserSelect').value;
  option[UserOption-1]


  if (option[UserOption-1] == "ostern"){
    var msg = `
              <div style="background-image: url('https://i.ibb.co/MM9SkHR/ostern.png')" width="100%" height="100%">
                `+ anR + name + ` 

              <p style="
                       
                        width: 400px;
                        height: auto;
                        color: #455621;
                        font-family: Roboto;
                        line-height: 1.5;
                        text-align: justify;">                  
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
            </div>
          `
    //Das Bild einfügen funktioniert noch nicht, ich denke irgendwas mit der Verlinkung klappt nicht? --> Bilder hochgeladen auf: https://de.imgbb.com/
  } else if (option[UserOption-1] == "weihn"){
    var msg = `
              <div style="background-image: url('https://i.ibb.co/0Vhpy8K/weihnachten-2.png');">
              `+ anR + name + `  

                     <p style="
                      width: 400px;
                      height: auto;
                      color: #455621;
                      font-family: Roboto;
                      line-height: 1.5;
                      text-align: justify;">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
            </div>
          `
                
  } else if (option[UserOption-1] == "bday"){
    var msg = `
            <div style="background-image: url('https://i.ibb.co/WW8nLJ8/Bday-1.png')">
             `+ anR + name + `  

                    <p style="
                        width: 400px;
                        height: auto;
                        color: #455621;
                        font-family: Roboto;
                        line-height: 1.5;
                        text-align: justify;">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </img>
            </div>
          ` 
                
  }else if (option[UserOption-1] == "none"){
    var msg = anR + name + `<br>` + document.querySelector('.msg').value;
  }

  vorschau.innerHTML=msg
}

function updateInterface(){
      vorschau();

      setTimeout(updateInterface, 500); 
}

updateInterface();