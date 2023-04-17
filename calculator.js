var score = 0;
var scores = new Map([
    [1, 12],
    [2, 7],
    [3, 13],
    [4, 11],
    [5, 6],
    [6, 13],
    [7, 12],
    [8, 7],
    [9, 9]
]);

window.onload = function() {
    Calculate()
}

function Calculate() {
    score = 0;
    underwater = []
    var tasks = document.getElementsByName("task")
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].parentElement.classList.contains("btn-primary")) {
            let id = tasks[i].id;
            if (reverseString(id)[0] == "1") {continue}
            let task = Number(id[1]);
            if (task == 3) {
                if (reverseString(id)[0] == "2") {
                    task = 9;
                }
            }
            let _score = scores.get(task);
            if (score == 0 && task == 6) {continue}
            if (task == 1 || task == 2 || task == 7 || task == 8 || task == 4 || task == 5) {
                _score *= reverseString(id)[0]-1
                if (_score == 24 && task == 1) {
                    underwater.push("1")
                }
                if (_score == 24 && task == 7) {
                    underwater.push("1")
                }
            }
            score += _score
        }
    }
    if (JSON.stringify(underwater) == JSON.stringify(["1", "1"])) {
        score += 12
    }
    // ele.innerHTML = "Score: " + score
    document.getElementById("score").innerHTML = "Score: " + score;
}

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

function UpdateScores(ele) {
    var id = ele.id
    for (let i = 1; i < ele.parentElement.parentElement.childElementCount+1; i++) {
        id = reverseString(id)
        var _id = id.replace(id[0], i)
        id = reverseString(id)
        _id = reverseString(_id)
        if (document.getElementById(_id).parentElement.classList.contains("btn-primary")) {
            document.getElementById(_id).parentElement.classList.remove("btn-primary");
            document.getElementById(_id).parentElement.classList.add("btn-outline-dark");
        }
    }
    ele.parentElement.classList.remove("btn-outline-dark");
    ele.parentElement.classList.add("btn-primary");
    /*
    var task = Number(id[1]);
    if (task == 3) {
        if (reverseString(id)[0] == 2) {
            task = 7
        }
    }
    var _score = scores.get(task)
    if (task == 1 || task == 2 || task == 4 || task == 5) {
        _score *= reverseString(id)[0]-1
    }
    if (reverseString(id)[0] != 1) {
        score += _score
    } 
    */
   Calculate()
}

function Restart() {
    score = 0;
    document.getElementById("score").innerHTML = "Score: 0"
    var tasks = document.getElementsByName("task");
    for (let i = 0; i < tasks.length; i++) {
        let id = tasks[i].id
        if (reverseString(id)[0] == "1" && id[1] != "5") {
            document.getElementById(id).parentElement.classList.remove("btn-outline-dark");
            document.getElementById(id).parentElement.classList.add("btn-primary");
        }
        else if (id[1] == "5" && reverseString(id)[0] == "3") {
            document.getElementById(id).parentElement.classList.remove("btn-outline-dark");
            document.getElementById(id).parentElement.classList.add("btn-primary");
        } else {
            document.getElementById(id).parentElement.classList.remove("btn-primary");
            document.getElementById(id).parentElement.classList.add("btn-outline-dark");
        }
        document.getElementById(id).parentElement.classList.remove("active");
    }
}