export function searchString(word)
{
    
}
public static void traverseBoard(Tile board2[][], int row, int col, String w)
{
    stackcount++;
    Tile board[][] = new Tile[4][4];
    
    clone2dArray(board, board2);
    String word = w + board[row][col].c;
    if(board[row][col].used || word.length() > 6)
        return;

    board[row][col].used = true;

    if(search(word) && word.length() > 3)
    {
        //System.out.println(word);
        finalwords.add(word);
    }

    if(row - 1 >= 0)
        traverseBoard(board, row - 1, col, word);
    if(row + 1 < 4)
        traverseBoard(board, row + 1, col, word);
    if(col - 1 >= 0)
        traverseBoard(board, row, col - 1, word);
    if(col + 1 < 4)
        traverseBoard(board, row, col + 1, word);
    if(row - 1 >= 0 && col - 1 >= 0)
        traverseBoard(board, row - 1, col - 1, word);
    if(row - 1 >= 0 && col + 1 < 4)
        traverseBoard(board, row - 1, col + 1, word);
    if(row + 1 < 4 && col - 1 >= 0)
        traverseBoard(board, row + 1, col - 1, word);
    if(row + 1 < 4 && col + 1 < 4)
        traverseBoard(board, row + 1, col + 1, word);

}