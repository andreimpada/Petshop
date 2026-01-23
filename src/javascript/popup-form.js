// capturar os valores no dom.
const schedulesubmit = document.getElementById("schedulessubmit")
const tutorname = document.getElementById("tutor")
const petname = document.getElementById("pet")
const telefone = document.getElementById("telefone")
const service = document.getElementById("service")
const datapick = document.getElementById("scheduledate")
const hourpick = document.getElementById("schedulehour")
const overlay = document.getElementById("overlay")

import { fetchschedules } from "./schedule-api.js" 


schedulesubmit.addEventListener("submit", async (event) => {
    event.preventDefault()

    //captura os dados do cliente

    const newappointment = {
        id: new Date().getTime(),
        tutor: tutorname.value,
        pet: petname.value,
        tel: telefone.value,
        service: service.value,
        date: datapick.value,
        hour: hourpick.value
    };


    // envia para o servidor
    try {
        await fetch("http://localhost:3333/schedules", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newappointment)
        });
        
        //limpa o formulario 

        schedulesubmit.reset()
        fetchschedules()
        overlay.classList.add("hide")


        alert("Agendamento realizado com sucesso!")


    } catch (error) {
        alert("Erro ao salvar seu agendamento,tente mais tarde")
        console.log(error)

    }





})

