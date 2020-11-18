/**
 * Crée une instance de Cellule (subdivision d'une grille)
 * 
 * @constructor
 * @this {Cell_}
 * @param {number} x abscisse de la cellule dans la grille.
 * @param {number} y ordonnée de la cellule dans la grille.
 * @param {HTMLElement} $htmlElt élément du DOM représentant la cellule dans la page.
 * @param {boolean} isEmpty si la case est vide ou non.
 */
class Cell_ {
    constructor(x, y, $ctnr, xNbr, yNbr) {
        this.x = x;
        this.y = y;
        this.$htmlElt;
        this.isEmpty = true;
        this.content;

        this.createDomElt($ctnr, xNbr, yNbr);
    }
    // Création et ajout dans la grille de l'élément html
    createDomElt($ctnr, xNbr, yNbr){
        this.$htmlElt = document.createElement('div');
        this.$htmlElt.className = 'grid-cell';
        // chaque cellule de la grille à la même width et la même height
        // de façon à ce que la grile occupe l'intégralité de la page
        this.$htmlElt.style.width = `${100 / xNbr}vw`;
        this.$htmlElt.style.height = `${100 / yNbr}vh`;
        $ctnr.appendChild(this.$htmlElt);
    }
    
}


/**
 * Crée une instance de Grille
 * 
 * @constructor
 * @this {Grid_}
 * @param {[[Cell_]]} cells tableau global composé de un ou plusieurs tableaux(rangées) de cellules.
 */
class Grid_ {
    constructor(xNbr, yNbr, selector) {
        this.cells = [];
        const $mainGrid = document.querySelector(selector);
        // dans une boucle for (A), on crée autant de rangées que voulues (yNbr)
        for(let y = 0; y < yNbr; y++) {
            const $row = document.createElement('div');
            // les cellules seront alignées horizontalement dans chaque rangée
            $row.className = 'grid-row';
            $mainGrid.appendChild($row);
            
            this.cells.push([]);
            // dans une boucle for interne (B), à chaque tour de (A),
            // on crée et ajoute xNbr cellules qui constitueront la rangée
            for(let x = 0; x < xNbr; x++) {
                this.cells[y].push(new Cell_(x, y, $row, xNbr, yNbr));
            }
        } 
    }
}

/**
 * Crée une instance de Grille spécifique au besoin du level1 (spécificités de fonctionnement)
 * 
 * @constructor
 * @this {Player_}
 * @param {Cell_}  cell première cellule qui constituera le 'corps' du joueur.
 */
class Player_ {
    constructor(cell) {
        this.trail = [cell];
        cell.$htmlElt.style.backgroundColor = 'red';
        cell.content = 'player';
    }

     // déplacement du joueur vers une nouvelle case
     move(newCell) {
        // newCell : nouvelle case sur laquelle le joueur veut se déplacer
        // si la case n'existe pas, le déplacement est annulé
        if(!newCell || newCell.content === 'player') { return; }

        if(newCell.content !== 'block') {
            const lastCell = this.trail[0];
            lastCell.$htmlElt.style.backgroundColor = null;
            lastCell.content = null;
            this.trail.shift();
        }

        newCell.$htmlElt.style.backgroundColor = 'red';
        newCell.content = 'player';
        this.trail.push(newCell);
    }


}


/**
 * Crée une instance de Grille spécifique au besoin du level1 (spécificités de fonctionnement)
 * 
 * @constructor
 * @this {Grid_level1}
 * @param {Player_} player joueur à positionner dans la grille.
 */
class Grid_level1 extends Grid_ {
    constructor(xNbr, yNbr, selector){
        super(xNbr, yNbr, selector);
        this.player;
        this.placePlayer(xNbr, yNbr);
        this.placeBlocks(xNbr, yNbr);
        this.addKeyListener();
    }

    // disposition du joueur dans la grille (en son centre)
    placePlayer(xNbr, yNbr) {
        const yPlayer = Math.floor(yNbr / 2);
        const xPlayer = Math.floor(xNbr / 2);
        const cell = this.cells[yPlayer][xPlayer];
        this.player = new Player_(cell);
    }

    placeBlocks(xNbr, yNbr) {
        let i = 1;
        while(i <= 4) {
            const randX = Math.floor(Math.random() * xNbr);
            const randY = Math.floor(Math.random() * yNbr);
            const cell = this.cells[randY][randX];
            if(cell.content) {
                i--;
            } else {
                cell.content = 'block';
                cell.$htmlElt.style.backgroundColor = 'black';
            }
            i++;
        }
    }

    // initialisation des eventlisteners du clavier
    addKeyListener() {
        document.addEventListener('keyup', e => {
            let newCell;
            const y = this.player.trail[this.player.trail.length - 1].y;
            const x = this.player.trail[this.player.trail.length - 1].x;
            switch(e.code) {
                case "ArrowUp" : 
                newCell = this.cells[y - 1] && this.cells[y - 1][x];
                break;
                case "ArrowDown" : 
                newCell = this.cells[y + 1] && this.cells[y + 1][x];
                break;
                case "ArrowLeft" : 
                newCell = this.cells[y][x - 1];
                break;
                case "ArrowRight" : 
                newCell = this.cells[y][x + 1];
                break;
                default: alert('Vous devez cliquer sur les flèches.');
            }

            this.player.move(newCell);
            
        });
    }

}

const grid = new Grid_level1(15, 15, "#main-grid");


