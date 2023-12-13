import { type } from "./type.js"

const text1 = "Hey, Hi Aayush 😎"

var text = [text1];
text.innerHTML = '<p></p>';

window.onload=function(){
	var screen = document.getElementById('screen-1');
    type(text, screen, "./secondPage.html");
};
