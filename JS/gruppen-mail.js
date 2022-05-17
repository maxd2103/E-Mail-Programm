
type="text/javascript"
src="https://cdnjs.cloudfare.com/ajax/libs/xlsx/0.15.3/xlsx.full.min.js"
src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js%22%3E"
src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js%22%3E"

var selectedFile;
var rowObject;

    // UI-Events erst registrieren wenn das DOM bereit ist!
document.addEventListener("DOMContentLoaded", function() {
    // Falls neue Eingabe, neuer Aufruf der Auswahlfunktion
    document.getElementById('fileUpload').addEventListener('change', dateiauswahl, false);
});

  function dateiauswahl(evt) {
    // FileList-Objekt des input-Elements auslesen, auf dem 
    // das change-Event ausgelöst wurde (event.target)
    selectedFile = evt.target.files[0];
  }

document.getElementById('uploadExcel')
.addEventListener('click',function() {

        var fileReader = new FileReader();
        fileReader.onload = function(event){
            var data = event.target.result;
            var workbook = XLSX.read(data, {
                type: "binary"
            });
            workbook.SheetNames.forEach(sheet => {
                rowObject = XLSX.utils.sheet_to_row_object_array(
                    workbook.Sheets[sheet]
                );
                let jsonObject = JSON.stringify(rowObject);
                //document.getElementById("jsonData").innerHTML = jsonObject;
                console.log(jsonObject);
                //console.log(rowObject);
                    
                console.log(rowObject[0]["E-Mail"])

                //so müsste das dann ungefähr aussehen
                for(i= 0; i < rowObject.length; i++){

                        emailJson= rowObject[i]["E-Mail"]
                        nameJson= rowObject[i]["Name"]
                        console.log(rowObject[i]["E-Mail"])
                        console.log(rowObject[i]["Name"])

                }
            });
        };
        fileReader.readAsBinaryString(selectedFile); 
        bdayChack()
});

        

const  form = document.querySelector('.contact_form');
function sendMsg(){ 

    var option = ["none", "ostern", "weihn", "bday"];
    var UserOption = document.getElementById('UserSelect').value;
    option[UserOption-1]
    const btr = document.querySelector ('.btr');
        var msg = document.querySelector('.msg');
         
    for (i= 0; rowObject.length; i++){
      if(rowObject[i]["Erlaubnis"] == "Nein"){
        alert(rowObject[i]["Name"]+" hat keine Erlaubnis zum Mail Versenden gegeben!")
      }else{
        if (option[UserOption-1] == "ostern"){
            var msg = `
                    <body style="background-image: url('https://i.ibb.co/MM9SkHR/ostern.png');">
                     
                      `+ rowObject[i]["Begrüßung"]+rowObject[i]["Name"] +`
      
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
      
                    `+ rowObject[i]["Begrüßung"]+rowObject[i]["Name"] +`
      
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
      
                        `+ rowObject[i]["Begrüßung"]+rowObject[i]["Name"] +` 
      
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
            var msg = document.querySelector('.msg');
          }
        
            

        Email.send({
            SecureToken : "d79a094d-0b62-483d-842c-fcdbc94e4e12",
            To : rowObject[i]["E-Mail"],
            From : "grusskartenanwendung@gmail.com",
            Subject : btr.value,
            Body : msg,
        })
        alert("Die E-Mail wurden versendet an "+rowObject[i]["Name"]+"!");
      }
    }
}

form.addEventListener('submit', sendMsg);

function vorschau (){

    var vorschau = document.querySelector('#vorschau');

    var option = ["none", "ostern", "weihn", "bday"];
    
    var UserOption = document.getElementById('UserSelect').value;
    option[UserOption-1]

    if (option[UserOption-1] == "ostern"){
      var msg = `
              <div style="background-image: url('https://i.ibb.co/MM9SkHR/ostern.png')" width="100%" height="100%">
                `+ rowObject[1]["Begrüßung"]+rowObject[1]["Name"] + ` 

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

              `+ rowObject[1]["Begrüßung"]+rowObject[1]["Name"] + `  

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

                  `+ rowObject[1]["Begrüßung"]+rowObject[1]["Name"] + `  

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

function bdayChack(){  
  let currentDate = new Date();
  let cDay = currentDate.getDate()
  let cMonth = currentDate.getMonth() + 1

  for (i= 0; rowObject.length; i++){
      if (rowObject[i]["Tag"] == cDay ){
          if (rowObject[i]["Monat"] == cMonth ){
              if(rowObject[i]["Erlaubnis"] == "Nein"){
                  alert(rowObject[i]["Name"]+"hat heute Geburtstag hat aber keine Erlaubnis zum Mail Versenden gegeben!")
                }else{
                  var msg = `
                          <body style="background-image: url('https://i.ibb.co/WW8nLJ8/Bday-1.png');">
          
                              `+ rowObject[i]["Begrüßung"]+rowObject[i]["Name"] +` 
          
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
                  Email.send({
                      SecureToken : "d79a094d-0b62-483d-842c-fcdbc94e4e12",
                      To : rowObject[i]["E-Mail"],
                      From : "grusskartenanwendung@gmail.com",
                      Subject : btr.value,
                      Body : msg,
                  })
                  alert(rowObject[i]["Name"]+" hat heute Geburtstag und hat eine E-Mail erhalten!");                      
                }
          }else{
              console.log("Keiner hat Geburtstag")
          }
      }else{
          console.log("Keiner hat Geburtstag")
      }
  }
}