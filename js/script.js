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
