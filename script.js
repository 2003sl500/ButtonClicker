console.log("Javascript is working");

function loginBtnChange() {
    var temp = document.querySelector("#loginBtn").innerHTML;

    if (temp == "Login") {
        document.querySelector("#loginBtn").innerHTML = "Logout";
    } else {
        document.querySelector("#loginBtn").innerHTML = "Login";
    }
}

function hide(element) {
    element.remove();
}

function topLikes(element) {
    alert("Ninja was liked");
}