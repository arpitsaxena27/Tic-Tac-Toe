function isWinner(GameBoard)
{
    if(GameBoard[0]==GameBoard[1]&&GameBoard[1]==GameBoard[2]&&GameBoard[1]!="")
        return [0,1,2];
    if(GameBoard[3]==GameBoard[4]&&GameBoard[4]==GameBoard[5]&&GameBoard[4]!="")
        return [3,4,5];
    if(GameBoard[6]==GameBoard[7]&&GameBoard[7]==GameBoard[8]&&GameBoard[7]!="")
        return [6,7,8];
    if(GameBoard[0]==GameBoard[3]&&GameBoard[3]==GameBoard[6]&&GameBoard[3]!="")
        return [0,3,6];
    if(GameBoard[1]==GameBoard[4]&&GameBoard[4]==GameBoard[7]&&GameBoard[4]!="")
        return [1,4,7];
    if(GameBoard[2]==GameBoard[5]&&GameBoard[5]==GameBoard[8]&&GameBoard[5]!="")
        return [2,5,8];
    if(GameBoard[0]==GameBoard[4]&&GameBoard[4]==GameBoard[8]&&GameBoard[4]!="")
        return [0,4,8];
    if(GameBoard[2]==GameBoard[4]&&GameBoard[4]==GameBoard[6]&&GameBoard[4]!="")
        return [2,4,6];
    else return null;
}
export default isWinner;