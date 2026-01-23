export function renderschedules(appointments) {
   const containerMorning = document.getElementById("container-morning");
   const containerAfternoon = document.getElementById("container-afternoon");
   const containerNight = document.getElementById("container-night");
   const selectedDate = document.getElementById("datefront").value

   // limpa o container
   containerMorning.innerHTML = "";
   containerAfternoon.innerHTML = "";
   containerNight.innerHTML = "";

   //percorre a lista da api
   appointments.forEach((item) => {

      if (item.date === selectedDate) {
         const itemdiv = document.createElement("div")


         //cria o contato 
         itemdiv.classList.add("schedule")
         itemdiv.innerHTML = `
      <div>
      <span class="hour">${item.hour}</span>
      <span class="petName">${item.pet}</span>
      <span class="ownerName">/ ${item.tutor}</span>
      </div>
      <div>
      <span class="serviceDescription">${item.service}</span>
      </div>
      <div class="remove">
      <span>Remover agendamento</span>
      </div>    
      `;

         //separação por hora 
         const hour = parseInt(item.hour.split(":")[0]);

         if (hour < 12) {
            containerMorning.appendChild(itemdiv)
         } else if (hour >= 12 && hour < 18) {
            containerAfternoon.appendChild(itemdiv)
         } else {
            containerNight.appendChild(itemdiv)
         }

      }
   })

}

export async function fetchschedules() {
   try {
      //puxa os dados da api
      const response = await fetch("http://localhost:3333/schedules");
      const data = await response.json();
      renderschedules(data)


   } catch (error) {
      console.log("erro ao carregar agendamentos", error)

   }

}