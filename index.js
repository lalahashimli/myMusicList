var enterNameOfMusic = document.getElementById("enterName");
var items = document.getElementsByClassName("item");


for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", clickItem)

}

function clickItem(event) {
    enterNameOfMusic.value = event.target.innerText;
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
}

enterNameOfMusic.addEventListener("keyup", function () {

    for (let i = 0; i < items.length; i++) {

        let name = items[i].innerText.toUpperCase();
        if (name.includes(enterNameOfMusic.value.toUpperCase()) && enterNameOfMusic.value != "") {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }

})