import { type } from "./type.js"


const text2 = `Since you have mentioned your area of interest as "Watching instagram reels"`

var text = [text2];
text.innerHTML = '<p></p>';

window.onload=function(){
	var screen = document.getElementById('screen-2');
    type(text, screen, "./finalPage.html");
};
