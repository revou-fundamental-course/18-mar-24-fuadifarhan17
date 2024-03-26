function validateForm() {
    const name = document.forms["message-form"]["nama-lengkap"].value;
    const birthDate = document.forms["message-form"]["tanggal-lahir"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const noTelp = document.forms["message-form"]["no-hp"].value;
    const packages = document.forms["message-form"]["paket"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || noTelp == "" || packages == "" || messages =="") {
        alert("Tidak Boleh Ada Yang Kosong!");
        return false;
    }

setSenderUI (name, birthDate, gender, noTelp, packages, messages);

return false;
}

function setSenderUI(name, birthDate, gender, noTelp, packages, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-no-telp").innerHTML = noTelp;
    document.getElementById("sender-paket").innerHTML = packages;
    document.getElementById("sender-messages").innerHTML = messages;

return false;
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides =
    document.getElementsByClassName("img-slideshow");
    if (n > slides.length)
    {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display ="block";
}