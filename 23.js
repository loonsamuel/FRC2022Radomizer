
function Randomize() {
    //shuffle objects

    // resetColour();


    var red = shuffle();
    var blue = shuffle();
    var cable = Math.floor(Math.random() * 4)+1;
    var str = "RED: "+"\nw:"+red[0]+" b:"+red[1] + "\n\n\nBLUE: " +"\nw:"+blue[0]+" b:"+blue[1];
    console.log("RED: "+"\nw:"+red[0]+" b:"+red[1]);
    // console.log("BLUE: " +"\nw:"+blue[0]+" b:"+blue[1]);
    // console.log(cable);

    $(".red .spot").each(function (index) {
        // console.log(flattenArr[index]);
        if (index +1 == red[0] )
        {
            $(this).css("background-color", "#000"); //reset
            $(this).css("opacity", "100"); //reset
            
        } else if (index+1 == red[1]) {

            $(this).css("background-color", "#c4c4c4"); //reset
            $(this).css("opacity", "100"); //reset

        } else {

            $(this).css("opacity", "0"); //reset
        }
       
        // d96b18
    });

    $(".blue .spot").each(function (index) {
        // console.log(flattenArr[index]);
        if (index +1 == blue[0] )
        {
            $(this).css("background-color", "#000"); //reset
            $(this).css("opacity", "100"); //reset
            
        } else if (index+1 == blue[1]) {

            $(this).css("background-color", "#c4c4c4"); //reset
            $(this).css("opacity", "100"); //reset

        } else {

            $(this).css("opacity", "0"); //reset
        }
       
        // d96b18
    });

    $(".cable .spot").each(function (index) {
        // console.log(flattenArr[index]);
        if (index +1 == cable )
        {
            $(this).css("background-color", "#d7040d"); //reset
            $(this).css("opacity", "100"); //reset
            
        } else {
            $(this).css("opacity", "0"); //reset
        }
       
        // d96b18
    });

    


}


// function shuffle(array) {
//     let currentIndex = array.length, randomIndex;

//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {

//         // Pick a remaining element.
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         // And swap it with the current element.
//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex], array[currentIndex]];
//     }

//     return array;
// }

function shuffle() {
    var tmp1 = [];
    tmp1 [0]  = Math.floor(Math.random() * 4)+1;
    do {
        tmp1[1] = Math.floor(Math.random() * 4)+1
    } while (tmp1[0] ==tmp1[1]);
   

    return tmp1;
}

function resetColour() {
    $(".container .spot").each(function (index) {
        $(this).css("opacity", "0"); //reset
        // d96b18
    });

}
// function includesObj(array) {
//     return array.includes('C') || array.includes('F') || array.includes('H');
// }