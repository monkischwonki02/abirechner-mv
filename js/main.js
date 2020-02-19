    function getValues()
  {
    var punkte = document.getElementById('punkte').value;
    var N15 = 0;
    var N14 = 0;
    var N13 = 0;
	var N12 = 0;
    var N11 = 0;
    var N10 = 0;
	var N09 = 0;
    var N08 = 0;
    var N07 = 0;
	var N06 = 0;
    var N05 = 0;
    var N04 = 0;
	var N03 = 0;
    var N02 = 0;
    var N01 = 0;
	var N00 = 0;
	
	var KN15 = 0;
    var KN14 = 0;
    var KN13 = 0;
	var KN12 = 0;
    var KN11 = 0;
    var KN10 = 0;
	var KN09 = 0;
    var KN08 = 0;
    var KN07 = 0;
	var KN06 = 0;
    var KN05 = 0;
    var KN04 = 0;
	var KN03 = 0;
    var KN02 = 0;
    var KN01 = 0;
	var KN00 = 0;
  
    if (punkte=="")
    {
      
    }
    else
    {
      N15 = punkte * 98.67 / 100;
	  N14 = punkte * 97.33 / 100;
	  N13 = punkte * 96 / 100;
	  N12 = punkte * 90.67 / 100;
	  N11 = punkte * 85.33 / 100;
	  N10 = punkte * 80 / 100;
	  N09 = punkte * 73.33 / 100;
	  N08 = punkte * 66.67 / 100;
	  N07 = punkte * 60 / 100;
	  N06 = punkte * 53.33 / 100;
	  N05 = punkte * 46.67 / 100;
	  N04 = punkte * 40 / 100;
	  N03 = punkte * 33.33 / 100;
	  N02 = punkte * 26.67 / 100;
	  N01 = punkte * 20 / 100;
	  N00 = punkte * 0 / 100;
	  
	  N15 = Math.round(N15 * 100) / 100
	  N14 = Math.round(N14 * 100) / 100
	  N13 = Math.round(N13 * 100) / 100
	  N12 = Math.round(N12 * 100) / 100
	  N11 = Math.round(N11 * 100) / 100
	  N10 = Math.round(N10 * 100) / 100
	  N09 = Math.round(N09 * 100) / 100
	  N08 = Math.round(N08 * 100) / 100
	  N07 = Math.round(N07 * 100) / 100
	  N06 = Math.round(N06 * 100) / 100
	  N05 = Math.round(N05 * 100) / 100
	  N04 = Math.round(N04 * 100) / 100
	  N03 = Math.round(N03 * 100) / 100
	  N02 = Math.round(N02 * 100) / 100
	  N01 = Math.round(N01 * 100) / 100
	  N00 = Math.round(N00 * 100) / 100
	  
	  
	  
	  
	  
	  
	  KN15 = punkte * 95 / 100;
	  KN14 = punkte * 90 / 100;
	  KN13 = punkte * 85 / 100;
	  KN12 = punkte * 80 / 100;
	  KN11 = punkte * 75 / 100;
	  KN10 = punkte * 70 / 100;
	  KN09 = punkte * 65 / 100;
	  KN08 = punkte * 60 / 100;
	  KN07 = punkte * 55 / 100;
	  KN06 = punkte * 50 / 100;
	  KN05 = punkte * 45 / 100;
	  KN04 = punkte * 40 / 100;
	  KN03 = punkte * 33 / 100;
	  KN02 = punkte * 27 / 100;
	  KN01 = punkte * 20 / 100;
	  KN00 = punkte * 0 / 100;
	  
	  KN15 = Math.round(KN15 * 100) / 100
	  KN14 = Math.round(KN14 * 100) / 100
	  KN13 = Math.round(KN13 * 100) / 100
	  KN12 = Math.round(KN12 * 100) / 100
	  KN11 = Math.round(KN11 * 100) / 100
	  KN10 = Math.round(KN10 * 100) / 100
	  KN09 = Math.round(KN09 * 100) / 100
	  KN08 = Math.round(KN08 * 100) / 100
	  KN07 = Math.round(KN07 * 100) / 100
	  KN06 = Math.round(KN06 * 100) / 100
	  KN05 = Math.round(KN05 * 100) / 100
	  KN04 = Math.round(KN04 * 100) / 100
	  KN03 = Math.round(KN03 * 100) / 100
	  KN02 = Math.round(KN02 * 100) / 100
	  KN01 = Math.round(KN01 * 100) / 100
	  KN00 = Math.round(KN00 * 100) / 100
	  
    }
    document.getElementById("NP15").innerHTML = N15;
	document.getElementById("NP14").innerHTML = N14;
	document.getElementById("NP13").innerHTML = N13;
	document.getElementById("NP12").innerHTML = N12;
	document.getElementById("NP11").innerHTML = N11;
	document.getElementById("NP10").innerHTML = N10;
	document.getElementById("NP09").innerHTML = N09;
	document.getElementById("NP08").innerHTML = N08;
	document.getElementById("NP07").innerHTML = N07;
	document.getElementById("NP06").innerHTML = N06;
	document.getElementById("NP05").innerHTML = N05;
	document.getElementById("NP04").innerHTML = N04;
	document.getElementById("NP03").innerHTML = N03;
	document.getElementById("NP02").innerHTML = N02;
	document.getElementById("NP01").innerHTML = N01;
	document.getElementById("NP00").innerHTML = N00;
	
	
	
	document.getElementById("KNP15").innerHTML = KN15;
	document.getElementById("KNP14").innerHTML = KN14;
	document.getElementById("KNP13").innerHTML = KN13;
	document.getElementById("KNP12").innerHTML = KN12;
	document.getElementById("KNP11").innerHTML = KN11;
	document.getElementById("KNP10").innerHTML = KN10;
	document.getElementById("KNP09").innerHTML = KN09;
	document.getElementById("KNP08").innerHTML = KN08;
	document.getElementById("KNP07").innerHTML = KN07;
	document.getElementById("KNP06").innerHTML = KN06;
	document.getElementById("KNP05").innerHTML = KN05;
	document.getElementById("KNP04").innerHTML = KN04;
	document.getElementById("KNP03").innerHTML = KN03;
	document.getElementById("KNP02").innerHTML = KN02;
	document.getElementById("KNP01").innerHTML = KN01;
	document.getElementById("KNP00").innerHTML = KN00;
	
  }