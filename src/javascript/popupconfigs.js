// pega os elementos do doc

const submitClick = document.getElementById("btnsubmit")
const overlay = document.getElementById("overlay")

// adiciona classe ou remove classe hide, para a popup
submitClick.addEventListener("click", () => {
    try {
        document.body.style.overflow = "hidden";
        overlay.classList.toggle("hide")

    } catch (error) {
        console.log(error)
        alert("Não foi possivel fazer o agendamento, tente mais tarde")
    }
});

//adiciona a função de fechar popup ao botão esc

window.addEventListener("keydown",(event) => {
    if(event.key === "Escape"){
        document.body.style.overflow = "auto";
        overlay.classList.add("hide")
    }
})

//adiciona função ao click fora da popup para fechar.

overlay.addEventListener("click",(event)=>{
    if(event.target === overlay){
        document.body.style.overflow = "auto";
        overlay.classList.add("hide")
    }
})