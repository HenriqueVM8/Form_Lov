emailjs.init({
    publicKey: "mOcJdG1DgyKRt1MG1"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_2ww0zjr",
        "template_skpevzy",
        this
    )
    .then(() => {
        alert("Mensagem enviada com sucesso! 🩵");
        form.reset();
    })
    .catch((error) => {
        console.error(error);
        alert("Erro ao enviar a mensagem.");
    });
});