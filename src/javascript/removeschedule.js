import { fetchschedules } from "./schedule-api.js"

const schedulewrapper = document.querySelector(".container");

schedulewrapper.addEventListener("click", async (event) => {
    const isremovebtn = event.target.closest(".remove");

    if (isremovebtn) {
        const scheduleitem = event.target.closest(".schedule")
        const id = scheduleitem.dataset.id
        const hasConfirmed = confirm("Deseja realmente remover esse agendamento?")

        if (hasConfirmed) {
            await scheduleremove(id);
        }
    }




})

async function scheduleremove(id) {
    try {
       const response = await fetch(`http://localhost:3333/schedules/${id}`, {
            method: "DELETE"
        });

        if(!response.ok){
            throw new Error("Erro ao deletar no servidor");
        }

        await fetchschedules();
        alert("Agendamento removido!");


    } catch (error) {
        console.error("Erro detalhado:",error);
        alert("Não foi possivel remover. o servidor retornou erro")

    }

}