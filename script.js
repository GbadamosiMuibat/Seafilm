document .querySelector("#login-btn").onclick = () =>{
    document .querySelector(".login-form-container").classList.toggle("active")
}
document .querySelector("#close-login-form").onclick = () =>{
    document .querySelector(".login-form-container").classList.remove("active")
}
document .querySelector("#menu-btn").onclick = () =>{
    document .querySelector(".navbar").classList.toggle("active")
}