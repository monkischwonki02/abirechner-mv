new Vue({
    el: "#app",
    data: {
        umrechnungKlausurNoten : [95,90,85,80,75,70,65,60,55,50,45,40,33,27,20,0],
        umrechnungSonstNoten : [98.67,97.33,96,90.67,85.33,80,73.33,66.67,60,55.33,46.67,40,33.33,26.67,20,0],
        punktzahl: "",
        mobileAgent: {
            Android() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS() {
                return navigator.userAgent.match(/iPhone|iPod/i);
            },
            Opera() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any() {
                return ((this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows()));
            }
        }
    },

    methods: {
        rechnen(umrechnung, punktzahl){
            let temp = []
            for (const i of umrechnung){
                let pktzahl = Math.round((punktzahl*i/100)*100)/100
                temp.push(pktzahl.toString().replace(".",",")) //Ersetzt das Dezimaltrennzeichen vom Punkt zum Komma
            }
            return temp
        },
        addState(punktzahl){
            let stateObj = { id: "100" }; 
              
            window.history.pushState(stateObj, 
                     "Punktzahl", "?punkte=" + punktzahl);
        }
    },

    computed: {
        klausurNotenRechner(){
            if (parseFloat(this.punktzahl.replace(",",".")) > 0 && typeof parseFloat(this.punktzahl) == "number"){
                this.addState(this.punktzahl)
                return this.rechnen(this.umrechnungKlausurNoten, parseFloat(this.punktzahl.replace(",", ".")))
            } else {
                return " ,".repeat(15).split(",")
            }
        },
        sonstNotenRechner(){
            if (parseFloat(this.punktzahl.replace(",",".")) > 0 && typeof parseInt(this.punktzahl) == "number"){
                this.addState(this.punktzahl)
            return this.rechnen(this.umrechnungSonstNoten, parseFloat(this.punktzahl.replace(",", ".")))
            } else {
                return " ,".repeat(15).split(",")
            }
        }
    },
    created(){
        let URLSearcher = new URLSearchParams(window.location.search)
        let toc = document.querySelector(".toc")

        if (URLSearcher.has("punkte")){
            this.punktzahl = URLSearcher.get("punkte")
        } else {
            this.punktzahl = ""
        }

        // Ueberprueft das Geraet, ob es ein Mobiles Endgeraet ist
        if (this.mobileAgent.any()){
            toc.style.display = 'block'
        } else {
            toc.style.display = 'none'
        }
    }


})