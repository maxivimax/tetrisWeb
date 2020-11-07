function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function moveBlock(idBlock, idBlock2){
	var ot = document.getElementById(idBlock);
	// alert(ot.style.cssText);
	// 	document.getElementById(idBlock2).style="background-color: white;"
	// return "It's pixel don't закрашен!"	
	if(ot.style.cssText != "background-color: red;"){
		return "It's pixel don't закрашен!"
	} else {
		document.getElementById(idBlock).style="background-color: white;"
		document.getElementById(idBlock2).style="background-color: red;"

		return "Done!"
	}
		
}

function moveBlockDown(one, two){
	var idBlock = "a" + one + two;
	var ot = document.getElementById(idBlock);

	var twoo = two + 1;
	var idBlock2 = "a" + one + twoo;
	var ott = document.getElementById(idBlock2);


	if(one > 6) {
		return "!STOP! DOWN"
	} else {
		if(ott.style.cssText != "background-color: red;"){
			if(ot.style.cssText != "background-color: red;"){
				return "It's pixel don't закрашен!"
			} else {

				document.getElementById(idBlock).style="background-color: white;"
				document.getElementById(idBlock2).style="background-color: red;"

				return "Done!"
			}
		} else {
			return "!STOP! DOWN IS BLOCK"
		}
	}	
}

function delayBlockDown(one, two){
	alert(one);
	moveBlockDown(one, two);
	var two2 = two + 1;
	sleep(1000);

	moveBlockDown(one, two2);
	var two3 = two2 + 1;
	sleep(1000);

	moveBlockDown(one, two3);
	var two4 = two3 + 1;
	sleep(1000);

	moveBlockDown(one, two4);
	var two5 = two4 + 1;
	sleep(1000);

	moveBlockDown(one, two5);
	var two6 = two5 + 1;
	sleep(1000);

	moveBlockDown(one, two6);
	var two7 = two6 + 1;
	sleep(1000);

	moveBlockDown(one, two7);
		
}


function createBlock(idBlock){
	document.getElementById(idBlock).style="background-color: red;"

	return "Done!"
		
}
