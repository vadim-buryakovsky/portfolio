window.addEventListener("load", function () {

    var name = document.querySelector(".name");
    name.setAttribute("style", "width: 200px; height: 100px");
    var h1 = document.createElement("h1");
    h1.textContent = "Vadim Buryakovsky";
    setTimeout(function () {
        name.appendChild(h1);
    }, 2000)


});