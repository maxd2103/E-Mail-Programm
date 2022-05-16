function vorschau (){

    const name = document.querySelector('.name');

    var vorschau = document.querySelector('#vorschau');

    var option = ["none", "ostern", "weihn", "bday"];
    
    var UserOption = document.getElementById('UserSelect').value;
    option[UserOption-1]

    var nameString = name.textContent;

    if (option[UserOption-1] == "ostern"){
      var msg = `
              <div style="background-image: url('https://i.ibb.co/MM9SkHR/ostern.png')" width="100%" height="100%">
                <p style="
                    width: 400px;
                    heigt: auto;
                    color: #455621;
                    font-family: Roboto;
                    line-height: 1.5;
                    text-align: justify;"> Hallo </p> `+ nameString + ` 

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

              <p style="
              width: 400px;
              height: auto;
              color: #455621;
              font-family: Roboto;
              line-height: 1.5;
              text-align: justify;"> Hallo </p> `+ nameString + `  

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

                  <p style="
                    width: 400px;
                    height: auto;
                    color: #455621;
                    font-family: Roboto;
                    line-height: 1.5;
                    text-align: justify;"> Hallo </p> `+ nameString + `  

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
      var msg = document.querySelector('.msg');
    }

    vorschau.innerHTML=msg
}

function updateInterface(){
        vorschau();

        setTimeout(updateInterface, 500); 
}

updateInterface();