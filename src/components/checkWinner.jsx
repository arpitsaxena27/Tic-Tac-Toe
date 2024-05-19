function isWinner(GameBoard)
{
    if(GameBoard[0]==GameBoard[1]&&GameBoard[1]==GameBoard[2]&&GameBoard[1]!="")
        return true;
    if(GameBoard[3]==GameBoard[4]&&GameBoard[4]==GameBoard[5]&&GameBoard[4]!="")
        return true;
    if(GameBoard[6]==GameBoard[7]&&GameBoard[7]==GameBoard[8]&&GameBoard[7]!="")
        return true;
    if(GameBoard[0]==GameBoard[3]&&GameBoard[3]==GameBoard[6]&&GameBoard[3]!="")
        return true;
    if(GameBoard[1]==GameBoard[4]&&GameBoard[4]==GameBoard[7]&&GameBoard[4]!="")
        return true;
    if(GameBoard[2]==GameBoard[5]&&GameBoard[5]==GameBoard[8]&&GameBoard[5]!="")
        return true;
    if(GameBoard[0]==GameBoard[4]&&GameBoard[4]==GameBoard[8]&&GameBoard[4]!="")
        return true;
    if(GameBoard[2]==GameBoard[4]&&GameBoard[4]==GameBoard[6]&&GameBoard[4]!="")
        return true;
    else return false;
}
export default isWinner;