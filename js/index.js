function newElement() {
    let li = document.createElement("li");
    let to_do = document.querySelector("#task").value;
    if (to_do.length == 0) {
        $(".error").toast("show");
    }
    else {
        let veri = document.createTextNode(to_do);
        li.appendChild(veri);
        document.querySelector("#list").appendChild(li);
        $(".success").toast("show");
    }
}

let list = document.querySelector("ul")
list.addEventListener("click", function (event) {
    event.target.classList.toggle("checked")
})

