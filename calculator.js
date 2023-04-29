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

window.onload = function () {
    Calculate();
}

function Calculate() {
    score = 0;
    underwater = []
    var tasks = document.querySelectorAll('input');
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].parentElement.classList.contains("btn-primary")) {
            let id = tasks[i].id;
            if (reverseString(id)[0] == "1") { continue }
            let task = Number(id[1]);
            if (task == 3) {
                if (reverseString(id)[0] == "2") {
                    task = 9;
                }
            }
            let _score = scores.get(task);
            if (score == 0 && task == 6) { continue }
            if (task == 1 || task == 2 || task == 7 || task == 8 || task == 4 || task == 5) {
                _score *= reverseString(id)[0] - 1
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
    for (let i = 1; i < ele.parentElement.parentElement.childElementCount + 1; i++) {
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
    Calculate()
    if (ele.name == "submarine" || ele.name == "submarineP") {
        let submarine = 2
        let submarines = document.getElementsByName("submarine");
        let submarinesP = document.getElementsByName("submarineP");
        submarine -= ele.value
        if (ele.name == "submarine") {
            for (let i=0; i<submarinesP.length; i++) {
                if (submarinesP[i].value > submarine) {submarinesP[i].disabled = true}
                else {submarinesP[i].disabled = false}
            }
        }
        else if (ele.name == "submarineP") {
            for (let i=0; i<submarines.length; i++) {
                // console.log(submarines[i].value)
                if (submarines[i].value > submarine) {submarines[i].disabled = true}
                else {submarines[i].disabled = false}
            }
        }
    }
    else if (ele.name == "server" || ele.name == "serverP") {
        let server = 2;
        let servers = document.getElementsByName("server");
        let serversP = document.getElementsByName("serverP");
        server -= ele.value
        if (ele.name == "server") {
            for (let i=0; i<serversP.length; i++) {
                if (serversP[i].value > server) {serversP[i].disabled = true}
                else {serversP[i].disabled = false}
            }
        }
        else if (ele.name == "serverP") {
            for (let i=0; i<servers.length; i++) {
                if (servers[i].value > server) {servers[i].disabled = true}
                else {servers[i].disabled = false}
            }
        }
    }
}

function Restart() {
    score = 0;
    document.getElementById("score").innerHTML = "Score: 0"
    // var tasks = document.getElementsByName("task");

    var tasks = document.querySelectorAll('input');

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
    Calculate()
}