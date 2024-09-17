document.addEventListener('DOMContentLoaded', function(){
    const container = document.querySelector(".container");
    const clear = document.querySelector("#clear");
    const resize = document.querySelector("#resize");

    function createCell(size) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `calc(100% / ${size})`;
        cell.style.height = `calc(100% / ${size})`;
        cell.addEventListener("mouseover", function() {
            changeCellColor(cell);
        });
        return cell;
    }

    function changeCellColor(cell) {
        cell.style.backgroundColor = "#212123";
    }

    function displayGrid(size) {
        container.innerHTML = '';

        for (let i = 0; i < size * size; i++) {
            const cell = createCell(size);
            container.appendChild(cell);
        }
    }

    function clearDraw() {
        const cells = document.querySelectorAll(".cell");
        cells.forEach(function(cell) {
            cell.style.backgroundColor = "#dad4c9";
        });
    }

    clear.addEventListener("click", clearDraw);

    resize.addEventListener("click", function() {
        let size = +prompt("Enter the new grid size: ");
        if (size > 0) {
            displayGrid(size);
        } else {
            alert("Enter a valid number");
        }
    });

    displayGrid(16);
});
