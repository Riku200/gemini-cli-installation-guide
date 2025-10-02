// Get modals
const installModal = document.getElementById("install-modal");
const publishModal = document.getElementById("publish-modal");
const updateModal = document.getElementById("update-modal");

// Get buttons that open the modals
const openInstallBtn = document.getElementById("open-install-guide");
const openPublishBtn = document.getElementById("open-publish-guide");
const openUpdateBtn = document.getElementById("open-update-guide");

// Get all close buttons
const closeButtons = document.querySelectorAll(".close-button");

// Function to open a modal
function openModal(modal) {
    if (modal) modal.style.display = "block";
}

// Function to close a modal
function closeModal(modal) {
    if (modal) modal.style.display = "none";
}

// Event listeners for open buttons
if (openInstallBtn) openInstallBtn.onclick = () => openModal(installModal);
if (openPublishBtn) openPublishBtn.onclick = () => openModal(publishModal);
if (openUpdateBtn) openUpdateBtn.onclick = () => openModal(updateModal);

// Event listeners for close buttons
closeButtons.forEach(button => {
    button.onclick = function() {
        closeModal(installModal);
        closeModal(publishModal);
        closeModal(updateModal);
    }
});

// Close modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == installModal) {
        closeModal(installModal);
    }
    if (event.target == publishModal) {
        closeModal(publishModal);
    }
    if (event.target == updateModal) {
        closeModal(updateModal);
    }
}