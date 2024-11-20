function mostrarHistoria() {
    const historia = document.getElementById("historia");
    if (historia.textContent === "") {
        historia.textContent = "O basquete foi inventado em 1891 pelo Dr. James Naismith.";
    } else {
        historia.textContent = "";
    }
}

function mostrarBeneficio() {
    const lista = document.querySelectorAll(".benefits ul li");
    lista.forEach(item => {
        if (item.style.display === "none") {
            item.style.display = "block";  
        } else {
            item.style.display = "none";
        }
    });
}

function alertaUsuario() {
    alert("Acompanhe para mais informações sobre o basquete!");
}

function validarConteudo() {
    const historia = document.getElementById("historia").textContent;
    if (historia === "") {
        alert("Clique para saber mais sobre a história do basquete.");
        return false;
    }
    return true;
}

function contarPalavrasIntroducao() {
    const introText = document.getElementById("introText").textContent;
    const palavras = introText.trim().split(/\s+/);
    const totalPalavras = palavras.length;

    const contagemPalavrasElement = document.getElementById("contagemPalavras");
    contagemPalavrasElement.textContent = `A introdução contém ${totalPalavras} palavras.`;
}