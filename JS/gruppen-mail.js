
type="text/javascript"
src="https://cdnjs.cloudfare.com/ajax/libs/xlsx/0.15.3/xlsx.full.min.js"
src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js%22%3E"
src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js%22%3E"

var selectedFile;

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
                let rowObject = XLSX.utils.sheet_to_row_object_array(
                    workbook.Sheets[sheet]
                );
                let jsonObject = JSON.stringify(rowObject);
                //document.getElementById("jsonData").innerHTML = jsonObject;
                console.log(jsonObject);
                //console.log(rowObject);
                    
                console.log(rowObject[0]["e-mail"])

                //so müsste das dann ungefähr aussehen
                for(i= 0; i < rowObject.length; i++){

                        email= rowObject[i]["e-mail"]
                        console.log(rowObject[i]["e-mail"])
                }
            });
        };
        fileReader.readAsBinaryString(selectedFile); 
    
    });
