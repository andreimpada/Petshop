// capturar os valores no dom.
const schedulesubmit = document.getElementById("schedulessubmit")
const tutorname = document.getElementById("tutor")
const petname = document.getElementById("pet")
const telefone = document.getElementById("telefone")
const service = document.getElementById("service")
const datapick = document.getElementById("scheduledate")
const hourpick = document.getElementById("schedulehour")
const overlay = document.getElementById("overlay")
const hourpopup = document.getElementById("schedulehour")


import { fetchschedules } from "./schedule-api.js" 


schedulesubmit.addEventListener("submit", async (event) => {
    event.preventDefault()

    //captura os dados do cliente

    const newappointment = {
        id: String(new Date().getTime()),
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

//cria os elementos do input hora 


const inputDataPopup = document.getElementById("scheduledate");
inputDataPopup.addEventListener("change", () => {
    hoursfill();
});

async function hoursfill(){
    const horasOcupadas = await filtroHorariosOcupados();
    const agora = new Date();
    const datahoje = agora.toISOString().split('T')[0];
    const horaAtual = agora.getHours()
    

    hourpopup.innerHTML="";

    for (let h=9; h<= 21; h++){
        const horaFormatada = h<10 ? `0${h}:00` : `${h}:00`

        if(horasOcupadas.includes(horaFormatada)){
            continue;        
        }

        if(datapick.value === datahoje && h <=horaAtual){
            continue;
        }


        const horarioinput = document.createElement("option")

        horarioinput.innerText = horaFormatada
        horarioinput.value = horaFormatada
        hourpopup.append(horarioinput)        
    }
}

hoursfill()

async function filtroHorariosOcupados() {
    
    const dataSelecionada = document.getElementById("scheduledate").value;
    

    const response = await fetch("http://localhost:3333/schedules");
    const agendamentos = await response.json();

    const ocupadosNoDia = agendamentos.filter(item => item.date === dataSelecionada);
    
    const horasOcupadas = ocupadosNoDia.map(item => item.hour);

    return horasOcupadas;
}



