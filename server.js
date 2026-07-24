function abrirMenu() {
    document.getElementById("meuMenu").classList.toggle("ativo");
}

//Funções para levar ao formulário ao clicar no botão de matricula e de agendamento de aula
function contato(){
  document.getElementById("form").scrollIntoView({
    behavior:"smooth"
  })
}
function agendar(){
  document.getElementById("form").scrollIntoView({
    behavior:"smooth"
  })
}

//Código para envio ao email do dono da academia com Web3Forms
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "ae564f2f-14d3-42df-a0ec-e0bbf533075f");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});