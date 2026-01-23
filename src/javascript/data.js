//adiciona a data no input da frontpage
import dayjs from "dayjs";
import { fetchschedules } from "./schedule-api";
const datefront = document.getElementById("datefront");
const datepopup = document.getElementById("scheduledate");


datefront.value = dayjs().format("YYYY-MM-DD")

// adiciona um listener para caso mude a data 
datefront.addEventListener("change", () => {
    fetchschedules()
})

// adiciona a data de hoje no popup

datepopup.value = dayjs().format("YYYY-MM-DD")
datepopup.min = dayjs().format("YYYY-MM-DD")



