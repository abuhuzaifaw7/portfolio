function copyEmail(event) {
    event.preventDefault();
    const email = "abuhuzaifaw7@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const popup = document.getElementById('popup');
        popup.classList.add('show');
        setTimeout(() => {
            popup.classList.remove('show');
        }, 2000);
    });
}

function copyPhoneNumber(event) {
    event.preventDefault();
    const phoneNumber = "+91 6387869214";
    navigator.clipboard.writeText(phoneNumber).then(() => {
        const popup = document.getElementById('phonePopup');
        popup.classList.add('show');
        setTimeout(() => {
            popup.classList.remove('show');
        }, 2000);
    });
}

function showPopup() {
    const confirmDownload = confirm('Do you want to download the CV?');
    if (confirmDownload) {
        downloadCV();
    }
}

function downloadCV() {
    window.open('../assets/documents/abu huzaifa cv 3-7-24.pdf', '_blank');
}