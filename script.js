document.addEventListener('DOMContentLoaded', function(){
    const container = document.querySelector('.container');

    function displayGrid() {
        for (let i=0; i<16; i++) {
            for (let j=0; j<16; j++) {
                const cell = document.createElement('div');
                container.appendChild(cell);
            }
        }
    }
    displayGrid();
});
