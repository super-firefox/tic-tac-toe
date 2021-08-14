class TicTacToe {
    constructor() {
        this.count = 0;
        this.rows = 3;
        this.storage = [];
        for (let i = 0; i < this.rows; i++) {
            this.storage.push([].fill(0));
        }
    }

    getCurrentPlayerSymbol() {
        if (this.count % 2 === 0) {
            return 'x'
        }
        return 'o'
    }

    nextTurn(rowIndex, columnIndex) {
        if (
            rowIndex >= this.rows ||
            rowIndex < 0 ||
            columnIndex >= this.rows ||
            columnIndex < 0 ||
            !!this.storage[rowIndex][columnIndex]) {
            return;
        }
        this.storage[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.count++;
    }

    isFinished() {
        if(!!this.getWinner() || this.noMoreTurns()){
            return true;
        }
        return false;
    }

    isWinRow() {
        let saveSymbolRow, leftNeighbor, rightNeighbor;
        for (let i = 0; i < this.rows; i++) {
            saveSymbolRow = this.storage[i][1];
            leftNeighbor = this.storage[i][0];
            rightNeighbor = this.storage[i][2];
            if (
                !!saveSymbolRow &&
                saveSymbolRow === leftNeighbor &&
                saveSymbolRow === rightNeighbor) {
                return saveSymbolRow;
            }
        }
        return null;
    }

    isWinCol() {
        let saveSymbolCol, upNeighbor, downNeighbor;
        for (let i = 0; i < this.rows; i++) {
            saveSymbolCol = this.storage[1][i];
            upNeighbor = this.storage[0][i];
            downNeighbor = this.storage[2][i];
            if (
                !!saveSymbolCol &&
                saveSymbolCol === upNeighbor &&
                saveSymbolCol === downNeighbor) {
                return saveSymbolCol;
            }
        }
        return null;
    }

    isWinDiagonal() {
        //* header diagonal
        let saveSymbol = this.storage[0][0];
        if (
            !!saveSymbol &&
            saveSymbol === this.storage[1][1] &&
            saveSymbol === this.storage[2][2]) {
            return saveSymbol;
        }

        //* second diagonal
        saveSymbol = this.storage[0][2]
        if (
            !!saveSymbol &&
            saveSymbol === this.storage[1][1] &&
            saveSymbol === this.storage[2][0]) {
            return saveSymbol;
        }

        return null;
    }

    getWinner() {
        if (this.count > 4) {
            return this.isWinRow() || this.isWinCol() || this.isWinDiagonal() || null;
        }
        return null;
    }

    noMoreTurns() {
        return this.count == Math.pow(this.rows, 2);
    }

    isDraw() {
        if (!this.noMoreTurns() || !!this.getWinner()) {
            return false;
        } else if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if (!this.storage[rowIndex][colIndex]) {
            return null;
        }
        return this.storage[rowIndex][colIndex];
    }

    toString() { return this.storage };
}

module.exports = TicTacToe;
