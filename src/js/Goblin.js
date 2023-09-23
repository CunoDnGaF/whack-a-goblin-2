export default class Goblin {
    constructor(elem) {
      this.cell = elem.querySelectorAll(".board-cell");
      this.icon = elem.querySelector(".icon");
      this.position = Math.floor(Math.random() * (this.cell.length - 1));
      this.scoreCounter = 0;
      this.missCounter = 0;
    }

    startGame() {
      this.initPosition();
      this.getRandomPosition();
      this.onCellClick();

    }
  
    initPosition() { 
      this.cell[this.position].appendChild(this.icon);
    }
    
    getRandomPosition() {
      let position = Math.floor(Math.random() * (this.cell.length - 1));
  
      setInterval(() => {
        while (this.position === position) {
            this.position = Math.floor(Math.random() * (this.cell.length - 1));
        }
  
        position = this.position;
        this.cell[this.position].appendChild(this.icon);
      }, 1000);
    }

    onCellClick(){
      this.scoreCounter = document.querySelector(".score-counter");
      this.missCounter = document.querySelector(".miss-counter");
      
      for (let i = 0; i < this.cell.length; i++) {
        this.cell[i].addEventListener('click', () => {
          if (this.cell[i].contains(this.icon)) {
            this.cell[i].removeChild(this.icon);
            this.scoreCounter.textContent = +this.scoreCounter.textContent + 1;
          } else {
            this.missCounter.textContent = +this.missCounter.textContent + 1;
            if(this.missCounter.textContent === '5'){
              alert('Вы проиграли, ваш результат: ' + this.scoreCounter.textContent);
              this.scoreCounter.textContent = 0;
              this.missCounter.textContent = 0;
            }
          }
        });
      }
    }
  }