// let spotsArr = [[0,'H1'],[0,'H2'],['F1',0],[0,0],[0,'F2'],['C',0]]
const rooms = [['none', 'none'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['none', 'none']];

// const objcts = ['C', 'F', 'F', 'H1', 'H2'];
const objcts = ['#000', '#d96b18', '#d96b18', '#0c7805', '#04438f'];


function Randomize() {
    //shuffle objects
    var tmpobj = JSON.parse(JSON.stringify(objcts));
    var tmpRooms = JSON.parse(JSON.stringify(rooms));

    let shuffledObj = shuffle(tmpobj);
    console.log(shuffledObj);

    let randId = Math.floor(Math.random() * 6);

    for (let i = 0; i < 6; i += 1) {
        if (i !== randId) {
            tmpRooms[i][Math.floor(Math.random() * 2)] = shuffledObj.pop();
        }
    }

    var flattenArr = [];
    for (var i = 0; i < tmpRooms.length; i++) {
        flattenArr = flattenArr.concat(tmpRooms[i]);
    }
    // console.log(flattenArr);

    resetColour();

    $(".container .spot").each(function (index) {
        console.log(flattenArr[index]);
        $(this).css("background-color", flattenArr[index]); //reset
        // d96b18
    });
    $(".base").text(Math.floor(Math.random() * 2) +1);


}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function resetColour() {
    $(".container .spot").each(function (index) {
        $(this).css("background-color", "#c9c8c5"); //reset
        // d96b18
    });

}
// function includesObj(array) {
//     return array.includes('C') || array.includes('F') || array.includes('H');
// }