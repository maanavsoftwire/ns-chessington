import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves = new Array(0);
        const piece = board.findPiece(this);
        for (let i = 0; i < 8; i++) {
            if (i !== piece.row) {
                moves.push(Square.at(i, piece.col));
            }
            if (i !== piece.col) {
                moves.push(Square.at(piece.row, i));
            }
        }
        return moves;
    }
}
