document.addEventListener('DOMContentLoaded', () => {


let ul = document.getElementById("listeUtilisateur")

// Read users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
    //   console.log(user.name);
    // console.log(user.id);
      let listeUtilisateurContent = document.createElement("li")
      listeUtilisateurContent.innerHTML = `<span class="nom">${user.name}</span> 
                                <span class="user">${user.username}</span> 
                                <span class="email">${user.email}</span> 
                                <span class="tel">${user.phone}</span> 
                                <button class="update" id="${user.id}">Modifier</button> 
                                <button class="sup" id="${user.id}">Supprimer</button>`
      ul.appendChild(listeUtilisateurContent) 
                               
    });
  })
  .catch(error => console.error('Erreur:', error));


// Ajouter user 
let donneeNewUsers = JSON.parse(localStorage.getItem("newUser"))

donneeNewUsers.forEach(donneeNewUser => {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
        name: donneeNewUser.name,
        username: donneeNewUser.username,
        email: donneeNewUser.email,
        phone: donneeNewUser.phone
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((donneeNewUser) => {
        let listeUtilisateurContent = document.createElement("li")
        listeUtilisateurContent.innerHTML = `<span class="nom">${donneeNewUser.name}</span> 
                                <span class="user">${donneeNewUser.username}</span> 
                                <span class="email">${donneeNewUser.email}</span> 
                                <span class="tel">${donneeNewUser.phone}</span> 
                                <button class="update" id="${donneeNewUser.id}">Modifier</button> 
                                <button class="sup" id="${donneeNewUser.id}">Supprimer</button>`
      ul.appendChild(listeUtilisateurContent);

    });
    

});     



 // supprimer user
 ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("sup")) {
      const id = event.target.getAttribute("id");

      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'DELETE',
      })
      .then((response) => {
          if (response.ok) {
              event.target.parentElement.remove()
          }
      })
      .catch(error => console.error("Erreur:", error))
  }

// Modifier
  if (event.target.classList.contains("update")) {
      const id = event.target.getAttribute("id");

      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then(response => response.json())
          .then(user => {
              localStorage.setItem("userUpdate", JSON.stringify(user))

              window.location.href = "../pages/update.html"
          })
          .catch(error => console.error("Erreur:", error));
  }
 

})

})
