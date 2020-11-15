new Vue({
    el: "#app",
    data: {
        selectedlk1: "",
        selectedlk2: "",
        selectedgk3: "",
        selectedgk4: "", 
        selectedgk5: "",
        blockI: 0,
        blockII: 0,
        onefs: 1,
        warning: false,
        nw: ["Chemie", "Biologie", "Physik"],
        gw: ["Geschichte", "Geografie", "Sozialkunde", "Wirtschaft"],
        gw2: ["Religion", "Philosophie"],
        fs: ["Englisch", "Französisch", "Spanisch", "Latein"],
        blockIPflicht: 0, 
        hjleft: 0,

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
        changeLK(){
            let lk1 = document.querySelector("#lk1")
            let lk2 = document.querySelector("#lk2")
            this.selectedlk1 = lk1.options[lk1.selectedIndex].value
            if (lk2.options[lk2.selectedIndex].value != this.selectedlk1){
                this.selectedlk2 = lk2.options[lk2.selectedIndex].value
                this.warning = false
                this.blockIPflicht = document.querySelectorAll(".blockI-pflicht").length
                this.hjleft = 36-this.blockIPflicht
            } else if (this.selectedlk1 == ""){
                this.selectedlk2 = lk2.options[lk2.selectedIndex].value
                this.warning = false
                this.blockIPflicht = document.querySelectorAll(".blockI-pflicht").length
                this.hjleft = 36-this.blockIPflicht
            } else {
                this.selectedlk2 = lk2.options[lk2.selectedIndex].value
                this.warning = true
                this.blockIPflicht = document.querySelectorAll(".blockI-pflicht").length
                this.hjleft = 36-this.blockIPflicht
            }
            
        },
        changeOneFs(event){
            this.onefs = event.target.value
            this.blockIPflicht = document.querySelectorAll(".blockI-pflicht").length
            this.hjleft = 36-this.blockIPflicht
        },
        changePF(){
            let gk3 = document.querySelector("#gk3")
            let gk4 = document.querySelector("#gk4")
            let gk5 = document.querySelector("#gk5")
            this.selectedgk3 = gk3.options[gk3.selectedIndex].value
            this.selectedgk4 = gk4.options[gk4.selectedIndex].value
            this.selectedgk5 = gk5.options[gk5.selectedIndex].value
            this.blockIPflicht = document.querySelectorAll(".blockI-pflicht").length
            this.hjleft = 36-this.blockIPflicht
        },
        calculateBlock1(){
            let lk = document.querySelectorAll(".markLK")
            let gk = document.querySelectorAll(".markGK")
            let sum = 0
            for (element of lk){
                if (parseInt(element.value) == NaN){
                    sum += 0
                    continue
                } 
                sum += 2*parseInt(element.value)
                
            }
            for (element of gk){
                if (parseInt(element.value) == NaN){
                    sum += 0
                    continue
                } 
                sum += parseInt(element.value)
            }
            this.blockI = sum
            delete lk, gk, sum
        },
        calculateBlock2(){
            let pf = document.querySelectorAll(".markPF")
            let sum = 0
            for (element of pf){
                sum += 4*parseInt(element.value)
            }
            this.blockII = sum
        }

    },



})