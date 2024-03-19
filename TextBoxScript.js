

let text = document.getElementById("text");
let textinfo = document.getElementById("textInfo");
let noOfSpclSybl = 0;
let clr ;
	// console.log(text.value);


function tranformUpperCase()
{
	console.log(text.value);
	text.value = text.value.toUpperCase();
}


function tranformLowerCase()
{
	text.value = text.value.toLowerCase();
}


function changeColor(clr="red")
{
	// clr = prompt("Enter you favorit color");

	text.style.color = clr;
}


function searchText(){
	clr = "green";
	let srchText = prompt("Enter your text");
	if(text.value.includes(srchText))
	{
		// alert(`Search text <bold>"${srchText}"</bold> is present.`).style.fontcolor(clr);
		alert(`Search text "${srchText}" is present.`).style.color("green");
	}else{
		clr = "red";
		// let txtAlrt = `Search text ${srchText} is not present.`.style.color = "red";
		alert(txtAlrt.fontcolor("clr"));
		// alert(txtAlrt.fontcolor("red"));
	}
}


function updateTextInfo(){
	let numOfWords = text.value.trim().split(" ").length;
	if(numOfWords!=0)
	{
		// console.log(numOfWords);
		textinfo.innerHTML = `The text-area contains ${numOfWords} Words and ${text.value.length} Characters.`;
	}
}


function spclSyboll(){
	// const spcSymb = "/[^A-Za-z0-9]/";
	var spcSymb = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

	// console.log(spcSymb)
	if (spcSymb.test(text)){
		// console.log(spcSymb)
		text.innerHTML = `Total Special Characters ${noOfSpclSybl++}.`
	}
	if (spcSymb.test(text)){
		// console.log(txt1.value);
		// document.write(format.test(txt1) + "<br/>");
		spclSyboll.innerHTML=`My-with(some%text)`;
		// spclSybl.innerHTML = `Total Special = ${spcSymb}.`
	}
		
}


function copyText(){
	navigator.clipboard.writeText(text.value);
}


function underline(){
	clr = "black";
	// text.style.textDecoration =`underline 3px wavy ${clr}`;
	text.style.textDecoration =`underline 3px dashed ${clr}`;
}
