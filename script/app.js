(() => {
	// set up the puzzle pieces and boards
	
	// navButtons -> images at the bottom of the page 
	const navButtons = document.querySelectorAll('#buttonHolder img'),
		  puzzlePiece = document.querySelectorAll('.puzzle-pieces img'),
		  dropZones = document.querySelectorAll('.drop-zone')
	      puzzleBoard = document.querySelector('.puzzle-board');

	// const is a variable that will NEVER change

	const pieces = [ "topLeft", "topRight", "bottomLeft", "bottomRight"];


	function changeImageSet() {
			//change the thun=mbnail images on the left to match the button image

		pieces.forEach((piece, index) => {
			puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`;
			puzzlePiece[index].id =`${piece = this.dataset.puzzleindex}`;
			// and set a bkg image on the drop zone containers

		// add in an id to the images 
	});



		puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg)`;
	}

function dragStart(event) {
	console.log('started a drag');

	event.dataTransfer.setData("text/plain", this.id);
}


function allowDrag(event){
	event.preventDefault();
	console.log('you dragged something onto me!')
}

function allowDrop(event){
	console.log('you dropped something on me')

	let currentPiece = event.dataTransfer.getData("text/plain")

	event.traget.appendChild(document.querySelector(`#${currentPiece}`))
}
	// add some event handling for the navButtons
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));

//set up our drag event on our puzzle pieces	
	puzzlePiece.forEach(piece=> piece.addEventListener('dragstart', dragStart))


// set the drag over event for our drop zones
	dropZones.forEach(zone => zone.addEventListener('dragover', allowDrag))

    dropZones.forEach(zone => zone.addEventListener('drop', allowDrop))


// call, apply and bind are different ways to invoke  functions 
// you should know what call does -> reaserch it on MDN
changeImageSet.call(navButtons[0]);

})();
