const input = document.querySelector(".input")
const icon = document.querySelector("i")

icon.addEventListener("click", function () {
    if (input.type == "password") {
        input.type = "text"
        icon.className = "fa fa-eye-slash"
    } else {
        input.type = "password"
        icon.className = "fa fa-eye"
    }

})