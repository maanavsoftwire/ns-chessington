import Piece from './piece';
import Player from '../player';
import Board from '../board';
import piece from './piece';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const piece = board.findPiece(this);
        if (this.player === Player.WHITE) {
            if (board.getPiece(Square.at(piece.row + 1, piece.col)) === undefined) {
                const oneSquareUp = Square.at(piece.row + 1, piece.col);
                return [oneSquareUp];
            }
        } else {
            if (board.getPiece(Square.at(piece.row - 1, piece.col)) === undefined) {
                const oneSquareUp = Square.at(piece.row - 1, piece.col);
                return [oneSquareUp];
            }
        }
        return new Array(0);
    }
}
