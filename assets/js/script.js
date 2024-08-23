// Sélection des éléments du DOM
let firstNameInput = document.getElementById("first-name");
let lastNameInput = document.getElementById("last-name");
let messageInput = document.getElementById("message");
let errorMessage = document.getElementById("error-message");
let commentList = document.getElementById("comment-list");

// Fonction principale activée au clic du bouton de formulaire
function handleSubmit() {
  if (validateForm()) {
    addComment();
    resetForm();
    hideErrorMessage();
  } else {
    showErrorMessage();
  }
}

// Vérification que tous les champs du formulaire sont remplis donc qu'il est valide
function validateForm() {
  return (
    firstNameInput.value.trim() !== "" &&
    lastNameInput.value.trim() !== "" &&
    messageInput.value.trim() !== ""
  );
}

// Ajout d'un nouveau commentaire au bas de la liste
function addComment() {
  let newItemList = `
    <div class="flex space-x-4 text-sm text-gray-500">
      <div class="flex-1 py-10 border-t border-gray-200">
        <h3 class="font-medium text-gray-900">${firstNameInput.value} ${lastNameInput.value}</h3>
        <div class="prose prose-sm mt-4 max-w-none text-gray-500">
          <p>${messageInput.value}</p>
        </div>
      </div>
    </div>
  `;
  commentList.insertAdjacentHTML("beforeend", newItemList);
}

// Réinitialisation des champs du formulaire
function resetForm() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  messageInput.value = "";
}

// Fonction qui masque le message d'erreur
function hideErrorMessage() {
  errorMessage.style.display = "none";
}

// Fonction qui affiche le message d'erreur
function showErrorMessage() {
  errorMessage.style.display = "block";
}
