//adiciona a data no input da frontpage

import dayjs from "dayjs";
const datefront = document.getElementById("datefront");

datefront.value = dayjs().format("YYYY-MM-DD")

// adiciona um listener para caso mude a data 
datefront.addEventListener("change", () => {
    console.log(datefront.value)
})