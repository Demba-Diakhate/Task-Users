
    let inputNomUpdate = document.getElementById("inputNom")
    let inputNomUtilisateurUpdate = document.getElementById("inputNomUtilisateur")
    let inputEmailUpdate = document.getElementById("inputEmail")
    let inputPhoneUpdate = document.getElementById("inputPhone")

    let userUpdate = JSON.parse(localStorage.getItem("userUpdate"))
    console.log(userUpdate.id)
    
    if (userUpdate) {
            inputNomUpdate.value = userUpdate.name
            inputNomUtilisateurUpdate.value = userUpdate.username
            inputEmailUpdate.value = userUpdate.email
            inputPhoneUpdate.value = userUpdate.phone
    }
 
    function envoyer(){

        let updatedUser = {
            name: inputNomUpdate.value,
            username: inputNomUtilisateurUpdate.value,
            email: inputEmailUpdate.value,
            phone: inputPhoneUpdate.value,
        };

        fetch(`https://jsonplaceholder.typicode.com/users/${userUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedUser),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(updatedUser => {
            alert("Modification réussie !")
            window.location.href = "../index.html"
        })
        .catch(error => console.error('Erreur:', error))
    }
