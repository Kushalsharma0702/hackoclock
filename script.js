const gridContainer = document.querySelector('.grid-container');
    const colors = ['#FBCC43', '#4285F4', '#0F9D58', '#EA4335', '#FFFFFF'];
    // const colors = ['#FFFFFF'];

    function createGrid() {
      gridContainer.innerHTML = ''; // Clear previous grid
      const cellSize = 20; // Adjust size for better visibility
      const rows = Math.floor(window.innerHeight / cellSize);
      const cols = Math.floor(window.innerWidth / cellSize);
      gridContainer.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
      gridContainer.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;

      for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        gridContainer.appendChild(cell);

        // Hover effect: Change color
        cell.addEventListener('mouseenter', () => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          cell.style.backgroundColor = randomColor;
        });

        // Reset color after 500ms
        cell.addEventListener('mouseleave', () => {
          setTimeout(() => {
            cell.style.backgroundColor = 'transparent';
          }, 500);
        });
      }
    }

    createGrid();
    window.addEventListener('resize', createGrid);
    



    const carousel = document.getElementById("carousel");
    const dotsContainer = document.getElementById("dots");
    let currentIndex = 0;
    const tiles = document.querySelectorAll(".tile");
    const visibleTiles = 3;
  
    function updateDots() {
      dotsContainer.innerHTML = "";
      for (let i = 0; i < tiles.length - visibleTiles + 1; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === currentIndex) {
          dot.classList.add("active");
        }
        dotsContainer.appendChild(dot);
      }
    }
  
    function updateTiles() {
      tiles.forEach((tile, index) => {
        tile.classList.remove("active", "faded");
        if (index === currentIndex + 1) {
          tile.classList.add("active");
        } else if (index === currentIndex || index === currentIndex + 2) {
          tile.classList.add("faded");
        }
      });
      carousel.style.transform = `translateX(-${currentIndex * (tiles[0].offsetWidth + 10)}px)`;
      updateDots();
    }
  
    function moveLeft() {
      if (currentIndex > 0) {
        currentIndex--;
        updateTiles();
      }
    }
  
    function moveRight() {
      if (currentIndex < tiles.length - visibleTiles) {
        currentIndex++;
        updateTiles();
      }
    }
  
    setInterval(() => {
      if (currentIndex >= tiles.length - visibleTiles) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateTiles();
    }, 5000);
  
    updateDots();
    updateTiles();
