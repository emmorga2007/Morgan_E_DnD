(() => {
	// set up the puzzle pieces and boards
	
	// navButtons -> images at the bottom of the page 
	const navButtons = document.querySelectorAll('#buttonHolder img');
	// const is a variable that will NEVER change
	function changeImageSet() {
			//change the thun=mbnail images on the left to match the button image
			// and set a bkg image on the drop zone containers

		debugger;
	}

	// add some event handling for the navButtons

	navButtons.forEach(button => button.addEventListener('click', changeImageSet));
})();
