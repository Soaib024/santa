export function type(text, screen, next=''){
	//You have to check for lines and if the screen is an element
	if(!text || !text.length || !(screen instanceof Element)) {
		return;
	}
	
	//if it is not a string, you will want to make it into one
	if('string' !== typeof text) {
		text = text.join('\n');
	}
	
	//normalize newlines, and split it to have a nice array
	text = text.replace(/\r\n?/g,'\n').split('');
	
	//the prompt is always the last child
	var prompt = screen.lastChild;
	prompt.className = 'typing';
	
	var typer = function(){
		var character = text.shift();
		screen.insertBefore(
			//newlines must be written as a `<br>`
			character === '\n'
				? document.createElement('br')
				: document.createTextNode(character),
			prompt
		);
		
		//only run this again if there are letters
		if( text.length ) {
			setTimeout(typer, 100);
        } else {
            
            prompt.className = 'idle';
            setTimeout(() => window.location.href = next, 2000)
            
		}
	};
    setTimeout(typer, 100);
};

