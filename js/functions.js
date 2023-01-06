// Adds unit to project site
const addUnitButton = document.getElementById('add-unit');

addUnitButton.addEventListener('click', () => {
    addUnit();
    //return id of new unit tile
});
 
function addUnit() {
    const unitTileTemplate = document.querySelector('#unit-tile-template');
    const newUnitTile = unitTileTemplate.cloneNode(true);
    newUnitTile.setAttribute('id','2');
    const unitTileContainer = document.querySelector('#unit-tiles-container');
    unitTileContainer.appendChild(newUnitTile);
};