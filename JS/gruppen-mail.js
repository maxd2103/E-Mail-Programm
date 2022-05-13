
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
    
    });

        

const  form = document.querySelector('.contact_form');
function sendMsg(){ 
    const btr = document.querySelector ('.btr');
        var msg = document.querySelector('.msg');
         
    for (i= 0; rowObject.length; i++){
        
            

        Email.send({
            SecureToken : "d79a094d-0b62-483d-842c-fcdbc94e4e12",
            To : rowObject[i]["E-Mail"],
            From : "grusskartenanwendung@gmail.com",
            Subject : btr.value,
            Body : msg,
        })
    }
}

form.addEventListener('submit', sendMsg);