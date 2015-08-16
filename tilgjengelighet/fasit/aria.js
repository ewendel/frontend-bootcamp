function add() {
    var val = $("#number").val();
    $("#number").val(parseInt(val) + 10);

}

function substract() {
    var val = $("#number").val();
    $("#number").val(parseInt(val) - 10);

}

function toggleColor() {
    $("#color").toggleClass('highlight');
}
