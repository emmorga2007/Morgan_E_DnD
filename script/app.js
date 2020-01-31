(() => {
	// set up the puzzle pieces and boards
	
	// navButtons -> images at the bottom of the page 
	const navButtons = document.querySelectorAll('#buttonHolder img'),
		  puzzlePiece = document.querySelectorAll('.puzzle-pieces img'),
	      puzzleBoard = document.querySelector('.puzzle-board');
	// const is a variable that will NEVER change

	const pieces = [ "topLeft", "topRight", "bottomLeft", "bottomRight"];


	function changeImageSet() {
			//change the thun=mbnail images on the left to match the button image

		pieces.forEach((piece, index) => puzzlePiece[index].src=`images/${piece+this.dataset.puzzleindex}.jpg`);
			// and set a bkg image on the drop zone containers

		puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg)`;
	}

	// add some event handling for the navButtons

	navButtons.forEach(button => button.addEventListener('click', changeImageSet));
})();
