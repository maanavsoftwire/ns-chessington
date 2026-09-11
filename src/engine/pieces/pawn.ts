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
        let moves = new Array(0);
        if (this.player === Player.WHITE) {
            if (board.getPiece(Square.at(piece.row + 1, piece.col)) === undefined) {
                const oneSquareUp = Square.at(piece.row + 1, piece.col);
                moves.push(oneSquareUp);
            }
            if (piece.row === 1 && board.getPiece(Square.at(piece.row + 2, piece.col)) === undefined) {
                const twoSquaresUp = Square.at(piece.row + 2, piece.col);
                moves.push(twoSquaresUp);
            }
        } else {
            if (board.getPiece(Square.at(piece.row - 1, piece.col)) === undefined) {
                const oneSquareDown = Square.at(piece.row - 1, piece.col);
                moves.push(oneSquareDown);
            }
            if (piece.row === 6 && board.getPiece(Square.at(piece.row - 2, piece.col)) === undefined) {
                const twoSquaresDown = Square.at(piece.row - 2, piece.col);
                moves.push(twoSquaresDown);
            }
        }
        return moves;
    }
}
