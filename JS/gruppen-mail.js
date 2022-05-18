

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
        
        setTimeout(bdayChack, 500);
        setTimeout(osternCheck, 500);
        setTimeout(weihnCheck, 500);
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
        swal({
          text: rowObject[i]["Name"]+" hat keine Erlaubnis zum Mail Versenden gegeben!",
          icon: "success",
        });
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
        swal({
          text: "Die E-Mail(s) wurden versendet!",
          icon: "success",
        });
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
      var msg = document.querySelector('.msg').value;
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
  var btr = "Beste Geburtstags wünsche der DHBW";

  for ( let i= 0;rowObject.length; i++){
      if (rowObject[i]["Tag"] == currentDate.getDate() ){
          if (rowObject[i]["Monat"] == currentDate.getMonth() + 1 ){
              if(rowObject[i]["Erlaubnis"] == "Nein"){
                  swal({
                    text: rowObject[i]["Name"]+" hat heute Geburtstag hat aber keine Erlaubnis zum Mail Versenden gegeben!",
                    icon: "success",
                  });
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
                      Subject : btr,
                      Body : msg,
                  })
                  swal({
                    text: rowObject[i]["Name"]+" hat heute Geburtstag und hat eine E-Mail erhalten!",
                    icon: "success",
                  });                      
                }
          }else{
              console.log("Keiner hat Geburtstag")
          }
      }else{
          console.log("Keiner hat Geburtstag")
      }
  }
}

function osternCheck(){  
  let currentDate = new Date();
  var btr = "Beste Oster wünsche der DHBW";
  let osterDate = OsterSonntag();


  for ( let i= 0;rowObject.length; i++){
      if (osterDate.getDate() == currentDate.getDate()){
          if (osterDate.getMonth() == currentDate.getMonth() + 1 ){
            if (osterDate.getFullYear() == currentDate.getFullYear() ){
              if(rowObject[i]["Erlaubnis"] == "Nein"){
                  swal({
                    text: rowObject[i]["Name"]+" hat keine Erlaubnis zum Mail Versenden gegeben!",
                    icon: "success",
                  });   
                }else{
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
                  Email.send({
                      SecureToken : "d79a094d-0b62-483d-842c-fcdbc94e4e12",
                      To : rowObject[i]["E-Mail"],
                      From : "grusskartenanwendung@gmail.com",
                      Subject : btr,
                      Body : msg,
                  })
                  swal({
                    text: rowObject[i]["Name"]+" hat heute Geburtstag und hat eine E-Mail erhalten!",
                    icon: "success",
                  });                     
              
              } 
             }else{
                console.log("Keiner hat Geburtstag")
              }
          }else{
              console.log("Keiner hat Geburtstag")
          }
      }else{
          console.log("Keiner hat Geburtstag")
      }
  }
}

function OsterSonntag()
    { 

      let currentDate = new Date();
      let Jahr = currentDate.getFullYear();

        if ((Jahr < 1970) || (2099 < Jahr)) {  return "Datum muss zwischen 1970 und 2099 liegen"; }

       
        var a = Jahr % 19;
        var d = (19 * a + 24) % 30;
        var Tag = d + (2 * (Jahr % 4) + 4 * (Jahr % 7) + 6 * d + 5) % 7;
        if ((Tag == 35) || ((Tag == 34) && (d == 28) && (a > 10))) { Tag -= 7; }

        var OsterDatum = new Date(Jahr, 2, 22)
        OsterDatum.setTime(OsterDatum.getTime() + 86400000 * 0 + 86400000 * Tag)

        console.log(OsterDatum);
        return OsterDatum;

    } // -->

function weihnCheck(){  
  let currentDate = new Date();
  var btr = "Beste Weihnachtswünsche wünsche der DHBW";


  for ( let i= 0;rowObject.length; i++){
      if ("24" == currentDate.getDate()){
          if ("12" == currentDate.getMonth() + 1 ){
              if(rowObject[i]["Erlaubnis"] == "Nein"){
                    swal({
                      text: rowObject[i]["Name"]+" hat keine Erlaubnis zum Mail Versenden gegeben!",
                      icon: "success",
                    });     
                    
                }else{
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
                  Email.send({
                      SecureToken : "d79a094d-0b62-483d-842c-fcdbc94e4e12",
                      To : rowObject[i]["E-Mail"],
                      From : "grusskartenanwendung@gmail.com",
                      Subject : btr,
                      Body : msg,
                  })
                  swal({
                    text: rowObject[i]["Name"]+" hat heute Geburtstag und hat eine E-Mail erhalten!",
                    icon: "success",
                  });                          
              
              }
          }else{
              console.log("Keiner hat Geburtstag")
          }
      }else{
          console.log("Keiner hat Geburtstag")
      }
  }
}
