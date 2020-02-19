document.addEventListener("DOMContentLoaded", () => {
    
    const input = document.getElementById("punkte")
    const sonstNoten = document.querySelectorAll("td.sonstNoten")
    const klausurNoten = document.querySelectorAll("td.klausurNoten")
    const umrechnungKlausurNoten = [95,90,85,80,75,70,65,60,55,50,45,40,33,27,20,0]
    const umrechnungSonstNoten = [98.67,97.33,96,90.67,85.33,80,73.33,66.67,60,55.33,46.67,40,33.33,26.67,20,0]
   
    input.addEventListener("keyup", () => {
        const punkte = input.value;
        const sonstNoten_ = []
        const klausurNoten_ = []
        if (punkte===""){

            // Leeres Element in die Zeile schreiben
            for (const i in sonstNoten){
                sonstNoten[i].innerText = ""
            }
            
            for (const i in klausurNoten){
                klausurNoten[i].innerText = ""
            }
        }
        else {

            // Werte ausrechnen
            for (const i of umrechnungSonstNoten){
                sonstNoten_.push(Math.round((punkte*i/100)))
            }

            for (const i of umrechnungKlausurNoten){
                klausurNoten_.push(Math.round((punkte*i/100)))
            }

            // Werte in die Tabelle Schreiben
            for (const i in sonstNoten){
                sonstNoten[i].innerText = sonstNoten_[i]
            }
            
            for (const i in klausurNoten){
                klausurNoten[i].innerText = klausurNoten_[i]
            }
        }
	
    })  

})