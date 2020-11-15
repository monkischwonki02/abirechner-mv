new Vue({
    el: "#app",
    data: {
        umrechnungKlausurNoten : [95,90,85,80,75,70,65,60,55,50,45,40,33,27,20,0],
        umrechnungSonstNoten : [98.67,97.33,96,90.67,85.33,80,73.33,66.67,60,55.33,46.67,40,33.33,26.67,20,0],
        parentMessage: 'Parent',
        semester: {leistungskurs0: "", leistungskurs1: "", leistungskurs2: "", leistungskurs3: "", leistungskurs4: "", leistungskurs5: "", leistungskurs6: "", leistungskurs7: "",
                    ma0: "", ma1: "", ma2: "", ma3: "",
                    de0: "", de1: "", de2: "", de3: "",
                    ge0: "", ge1: "", ge2: "", ge3: "",
                    km0: "", km1: "", km2: "", km3: "",
                    pr0: "", pr1: "", pr2: "", pr3: "",
                    in0: "", in1: "", in2: "", in3: "",
                    fs0: "", fs1: "", fs2: "", fs3: "", fs4: "", fs5: "", fs6: "", fs7: "",
                    nw0: "", nw1: "", nw2: "", nw3: "", nw4: "", nw5: "", nw6: "", nw7: "", nw8: "", nw9: "", nw10: "", nw11: "",
                    gw0: "", gw1: "", gw2: "", gw3: "", gw4: "", gw5: "", gw6: "", gw7: "", gw8: "", gw9: "", gw10: "", gw11: "",
                  },
        pruefungsfaecher= {pf0: "", pf1: "", pf2: "", pf3: ""},
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
        rechnenblockI(semester){
          for (const i of semester) {

          }
        },
        rechnen(umrechnung, leistungskurs00){
            let temp = []
            for (const i of umrechnung){
                let pktzahl = Math.round((leistungskurs00*i/100)*100)/100
                temp.push(pktzahl.toString().replace(".",",")) //Ersetzt das Dezimaltrennzeichen vom Punkt zum Komma
            }
            return temp
        },
        addState(leistungskurs0){
            let stateObj = { id: "100" }; 
              
            window.history.pushState(stateObj, 
                     "leistungskurs0", "?LF11=" + leistungskurs0);
        }
    },

    computed: {
        klausurNotenRechner(){
            if (parseFloat(this.leistungskurs0.replace(",",".")) > 0 && typeof parseFloat(this.leistungskurs0) == "number"){
                this.addState(this.leistungskurs0)
                return this.rechnen(this.umrechnungKlausurNoten, parseFloat(this.leistungskurs00.replace(",", ".")))
            } else {
                return " ,".repeat(15).split(",")
            }
        },
        sonstNotenRechner(){
            if (parseFloat(this.leistungskurs0.replace(",",".")) > 0 && typeof parseInt(this.leistungskurs0) == "number"){
                this.addState(this.leistungskurs0)
            return this.rechnen(this.umrechnungSonstNoten, parseFloat(this.leistungskurs00.replace(",", ".")))
            } else {
                return " ,".repeat(15).split(",")
            }
        }
    },
    created(){
        let URLSearcher = new URLSearchParams(window.location.search)
        let toc = document.querySelector(".toc")

        if (URLSearcher.has("punkte")){
            this.leistungskurs0 = URLSearcher.get("punkte")
        } else {
            this.leistungskurs0 = ""
        }

        // Ueberprueft das Geraet, ob es ein Mobiles Endgeraet ist
        if (this.mobileAgent.any()){
            toc.style.display = 'block'
        } else {
            toc.style.display = 'none'
        }
    }


})