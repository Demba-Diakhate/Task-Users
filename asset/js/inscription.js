let inputNom = document.getElementById("inputNom")
let inputNomUtilisateur = document.getElementById("inputNomUtilisateur")
let inputEmail = document.getElementById("inputEmail")
let inputPhone = document.getElementById("inputPhone")



// Formulaire new user
function envoyer(){
    let users = JSON.parse(localStorage.getItem("newUser")) || [];
    let user = {
        name: inputNom.value,
        username: inputNomUtilisateur.value,
        email: inputEmail.value,
        phone: inputPhone.value
    };
    users.push(user);
    localStorage.setItem("newUser", JSON.stringify(users))
}