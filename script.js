var player;
var moves = 0;
var winCheck = new Array(9);
var win = true;
var tie = 0;
var player1 = 0;
var player2 = 0;

clearBoxes()


document.getElementById("0").onclick = () => movCount("0");            // when clicked on a box calles the movecount increment function
document.getElementById("1").onclick = () => movCount("1");
document.getElementById("2").onclick = () => movCount("2");
document.getElementById("3").onclick = () => movCount("3");
document.getElementById("4").onclick = () => movCount("4");
document.getElementById("5").onclick = () => movCount("5");
document.getElementById("6").onclick = () => movCount("6");
document.getElementById("7").onclick = () => movCount("7");
document.getElementById("8").onclick = () => movCount("8");
document.getElementById("Reload").onclick = reloadPage => location.reload();
//  document.getElementById("next").onclick = write => rematch();

function movCount(box)                                  // this function increases the move count
{
    let textInBox = document.getElementById(box).innerHTML  
    if(textInBox===" ")                     //only continue if the boxes are empty as done by the clearBoxes function
    {
        if(!(moves%2))                      //even moves r for the player x
        {
            player = "X";
            updateTurn(player);      
        }
        else if ( moves <9)                 //odd moves and also less than 9 are for player o
        {
            player = "O"; 
            updateTurn(player);
        }        
        document.getElementById(box).innerHTML=player;                 // increase move count ans mark bpx
        console.log ("Moves are "+moves+"Players "+player)
        moves++;
        winArray(box, player);
  
    }    
}
function winArray(arrayIndex, boxElement)
{
    arrayIndex=parseFloat(arrayIndex)
    console.log(typeof arrayIndex + arrayIndex)
    winCheck[arrayIndex]=boxElement;
    console.log(winCheck);  
    if (win)
    { 
    winLogic();
    }
}
function clearBoxes() 
{
    document.getElementById("0").innerHTML=" ";
    document.getElementById("1").innerHTML=" ";
    document.getElementById("2").innerHTML=" ";
    document.getElementById("3").innerHTML=" ";
    document.getElementById("4").innerHTML=" ";
    document.getElementById("5").innerHTML=" ";
    document.getElementById("6").innerHTML=" ";
    document.getElementById("7").innerHTML=" ";
    document.getElementById("8").innerHTML=" ";

}
function updateTurn (turn)                  //updates html test for turn of payer
{
    if (turn==="X")
    {
        document.getElementById("turn").innerHTML=`It is Player O turn`;
    }
    else
    {
        document.getElementById("turn").innerHTML=`It is Player X turn`;
    }
}
function winLogic()
{
    console.log("WINLOGIC X")
    if (winCheck[0]==="X"&&winCheck[1]==="X"&&winCheck[2]==="X")
    {
        document.getElementById("result").innerHTML=`Player X WON!!!`;
        win = false;
        scoreCount("X");
    }else if(winCheck[3]==="X"&&winCheck[4]=="X"&&winCheck[5]==="X")
    {
        document.getElementById("result").innerHTML=`Player X WON!!!`;
        win = false;
        scoreCount("X");
    }else if (winCheck[6]==="X"&&winCheck[7]==="X"&&winCheck[8]==="X")
    {
        document.getElementById("result").innerHTML=`Player X WON!!!`;
        win = false;
        scoreCount("X");
    }else if (winCheck[0]==="X"&&winCheck[3]==="X"&&winCheck[6]==="X")
    {
        document.getElementById("result").innerHTML=`Player X WON!!!`;
        win = false;
        scoreCount("X");
    }else if (winCheck[1]==="X"&&winCheck[4]==="X"&&winCheck[7]==="X")
    {
        document.getElementById("result").innerHTML=`Player X WON!!!`;
        win = false;
        scoreCount("X");
    }else if (winCheck[2]==="X"&&winCheck[5]==="X"&&winCheck[8]==="X")
    {
        document.getElementById("result").innerHTML=`Player X WON!!!`;
        win = false;
        scoreCount("X");
    }else if (winCheck[0]==="X"&&winCheck[4]==="X"&&winCheck[8]==="X")
    {
        document.getElementById("result").innerHTML=`Player X WON!!!`;
        win = false;
        scoreCount("X");
    }else if (winCheck[2]==="X"&&winCheck[4]==="X"&&winCheck[6]==="X")
    {
        document.getElementById("result").innerHTML=`Player X WON!!!`;
        win = false;
        scoreCount("X");
    }else if (winCheck[0]==="O"&&winCheck[1]==="O"&&winCheck[2]==="O")
    {
        document.getElementById("result").innerHTML=`Player O WON!!!`;
        win = false;
        scoreCount("O");
    }else if(winCheck[3]==="O"&&winCheck[4]=="O"&&winCheck[5]==="O")
    {
        document.getElementById("result").innerHTML=`Player 0 WON!!!`;
        win = false;
        scoreCount("O");
    }else if (winCheck[6]==="O"&&winCheck[7]==="O"&&winCheck[8]==="O")
    {
        document.getElementById("result").innerHTML=`Player O WON!!!`;
        win = false;
        scoreCount("O");
    }else if (winCheck[0]==="O"&&winCheck[3]==="O"&&winCheck[6]==="O")
    {
        document.getElementById("result").innerHTML=`Player O WON!!!`;
        win = false;
        scoreCount("O");
    }else if (winCheck[1]==="O"&&winCheck[4]==="O"&&winCheck[7]==="O")
    {
        document.getElementById("result").innerHTML=`Player O WON!!!`;
        win = false;
        scoreCount("O");
    }else if (winCheck[2]==="O"&&winCheck[5]==="O"&&winCheck[8]==="O")
    {
        document.getElementById("result").innerHTML=`Player O WON!!!`;
        win = false;
        scoreCount("O");
    }else if (winCheck[0]==="O"&&winCheck[4]==="O"&&winCheck[8]==="O")
    {
        document.getElementById("result").innerHTML=`Player O WON!!!`; 
        win = false;
        scoreCount("O");      
    }else if (winCheck[2]==="O"&&winCheck[4]==="O"&&winCheck[6]==="O")
    {
        document.getElementById("result").innerHTML=`Player O WON!!!`;
        win = false;
        scoreCount("O");
    }
    // else{
    //     scoreCount("tie");
    // }
}

function scoreCount(score)
{
    if (score==="tie")
    {
        tie++;
    }
    else if (score==='X')
    {
        player1=player1+1;  
        console.log(`player 1 ${player1}`)
    }
    else if (score==="O")
    {
        player2++;
        console.log(`player 1 ${player2}`)
    }
}
// function rematch()
// {

//     clearBoxes()
//     winCheck[0,0,0,0,0,0,0,0,0]
    
// }