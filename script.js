var flag = true;
function btnclick(control) {
    if (control.id == 'o') {
        flag = false;
    }
    document.getElementById(control.id).style = 'background: green';
}
var count = 0;
function clicked(box) {
    if(document.getElementById(box.id).innerText!=''){
        return;
    }
        if (flag) {
            document.getElementById(box.id).innerText = 'X';
        }
        else {
            document.getElementById(box.id).innerText = 'O';
        }
        count++;
        if (win('box1', 'box2', 'box3') || win('box4', 'box5', 'box6') || win('box7', 'box8', 'box9') || win('box1', 'box5', 'box9') || win('box3', 'box5', 'box7') || win('box1', 'box4', 'box7') || win('box2', 'box5', 'box8') || win('box3', 'box6', 'box9')) {
            if (count % 2 != 0) {
                alert('Player1 Win the Game');
            }
            else {
                alert('Player2 Win the Game')
            }
            location.reload();
        }
        if(count==9){
            alert('Match Draw');
            location.reload();
        }
        flag = !flag;
}
function win(id1, id2, id3) {
    if (document.getElementById(id1).innerText != '' && document.getElementById(id2).innerText != '' && document.getElementById(id3).innerText != '' && document.getElementById(id1).innerText == document.getElementById(id2).innerText && document.getElementById(id3).innerText == document.getElementById(id1).innerText) {
        return true;
    }
    else {
        return false;
    }
}