(function init(){
	var handledKeys = {
		'p': true, // Go to next content
		'o': true, // Go to previous content
		'q': true, // Move right
		'a': true, // Move left
		'w': true, // Move down
		's': true, // Move up
		'u': true, // Zoom in
		' ': true, // Zoom out
		'i': true, // Decrease block width
		'e': true, // Increase block width
		'y': true, // Increase word spacing
		'r': true, // Decrease word spacing
		't': true, // Generate PDF
		'n': true, // Shuffle font
		'b': true, // Shuffle color
		'm': true, // Rotate clockwise
		'l': true, // Rotate counterclockwise
		'h': true, // Decrease stroke width
		'j': true, // Increase stroke width
		'c': true, // Decrease opacity
		'v': true  // Increase opacity
	};

	// KEY PRESS EVENTS
	$(document).on('keydown', function(e){
		var key = e.key;

		if(!key){
			var fallbackCode = e.which || e.keyCode;
			// fallback for legacy browsers that don't expose e.key
			key = fallbackCode ? String.fromCharCode(fallbackCode) : '';
		}

		key = key.toLowerCase();
		console.log(key);

		var isHandledKey = !!handledKeys[key];

		// CALL FUNCTION YOU NEED HERE 
		// CHANGE THE KEYPRESS CODE IN EACH FUNCTION
		changeBlock(key);
		moveBlock(key);
		zoomBlock(key);
		wordSpacing(key);
		changeBlockSize(key);
		changeFont(key);
		//changeColor(key);
		rotateBlock(key);
		textStrokeWidth(key);
		changeOpacity(key);
		
		generatePDF(key);

		
		if(isHandledKey){
			e.preventDefault(); // prevent the default action (scroll / move caret)
		}
	});


})();



// PJ EVENTS FUNCTION
	function changeBlock(key){
		// press "p" to go to next block, press "o" to do to previous block
		var nextKey = 'p';
		var prevKey = 'o'; 

		var direction ; 
		if(key == nextKey){
			direction = "next";
		}

		if(key == prevKey){
			direction = "prev";
		}


		sendEvent('changeBlock', direction);

	}

	function moveBlock(key){

		//press "q" to move image on the right
		var right = 'q';
		//press "a" to move image on the left
		var left = 'a'; 
		//press "w" to move image down
		var down = 'w';
		//press "s" to move image up
		var up = 's';

		var direction; 
		if(key == right){
			direction = "right";
		}
		if(key == left){
			direction = "left";
		}
		if(key == up){
			direction = "up";
		}
		if(key == down){
			direction = "down";
		}
		
		if(key == right || key == left ||key == up ||key == down ){
			sendEvent('moveBlock', direction);
		}
	}

	function zoomBlock(key){
		//zoomIn press "u"
		var zoomInKey = 'u'; 
		//zoomOut press "space"
		var zoomOutKey = ' '; 
		var zoom; 

		if(key == zoomInKey){
			zoom = "zoomin";
		}
		
		if(key == zoomOutKey){
			zoom = "zoomout";
		}
		if(key == zoomInKey || key == zoomOutKey){
			sendEvent('zoomBlock', zoom);
		}
	}

	function changeBlockSize(key){
		// press 'i' to make Block Size smaller
		var decreaseSize = 'i';
		// press 'e' to make Block Size larger
		var increaseSize = 'e';
		var direction;

		if(key == decreaseSize){
			direction = "decreaseSize";
		}
		
		if(key == increaseSize){
			direction = "increaseSize";
		}

		if(key == decreaseSize || key == increaseSize){
			sendEvent('changeBlockSize', direction);
		}
	}

	function wordSpacing(key){

		//press "y" to add space between each words
		var increaseKey = 'y';
		//press "r" to decrease space between each words
		var decreaseKey = 'r';
		var direction;

		if(key == decreaseKey){
			direction = "decreaseSpacing";
		}
		
		if(key == increaseKey){
			direction = "increaseSpacing";
		}

		if(key == decreaseKey || key == increaseKey){
			sendEvent('changeWordSpacing', direction);

		}
	}

	function generatePDF(key){

		// press "t" to generate pdf
		var pdf = 't';
		var currentUrl = window.location.href ; 

		if(key == pdf){
			socket.emit('generate', {
				"currentUrl": currentUrl,
				"currentProject" : currentProject
			});							
		}
		
	}



// Additional functions you could use
	function changeFont(key){

		var fonts = ["blocus", "bluu", "gulax", "hyperscrypt", "resistance", "roboto", "solidemirage", "sportinggrotesque", "trickster"];
		
		// press "n" to shuffle fonts
		var shuffle = 'n';
		var randomFont;

		if(key == shuffle){
			randomFont = fonts[Math.floor(Math.random() * fonts.length)];
		
			sendEvent('changeFont', randomFont);
		}
	}

	function changeColor(key){

		// press "b" to shuffle fonts
		var shuffle = 'b';

		// variable for generating random colors
		var letters = '0123456789ABCDEF';
	  var color = '#';
	  

	  if(key == shuffle){
	  	for (var i = 0; i < 6; i++) {
	    	color += letters[Math.floor(Math.random() * 16)];
	  	}
	  	sendEvent('changeColor', color);

	  }

	}

	function rotateBlock(key){

		//press "m" to rotate clockwise
		var rotateRight = 'm';
		//press "l" to rotate counterclockwise
		var rotateLeft = 'l';
		var direction;

		if(key == rotateRight){
			direction = "clockwise";
		}
		
		if(key == rotateLeft){
			direction = "counterclockwise";
		}

		if(key == rotateLeft || key == rotateRight){
			sendEvent('rotateBlock', direction);

		}

	}

	function textStrokeWidth(key){

		//press "h" to decrease text stroke width
		var decreaseStroke = 'h';
		//press "j" to increase text stroke width
		var increaseStroke = 'j';
		var direction;

		if(key == decreaseStroke){
			direction = "decrease";
		}
		
		if(key == increaseStroke){
			direction = "increase";
		}

		if(key == decreaseStroke || key == increaseStroke){
			sendEvent('textStrokeWidth', direction);

		}

	}

	function changeOpacity(key){

		//press "c" to decrease opacity
		var decreaseOp = 'c';
		//press "v" to increase opacity
		var increaseOp = 'v';
		var direction;

		if(key == decreaseOp){
			direction = "decrease";
		}
		
		if(key == increaseOp){
			direction = "increase";
		}

		if(key == decreaseOp || key == increaseOp){
			sendEvent('changeOpacity', direction);

		}

	}


	
