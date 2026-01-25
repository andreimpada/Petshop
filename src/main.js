"use strict"

//configuração do dayjs
import "./libs/dayjs.js"

//CSS
import "./styles/global.css"
import "./styles/main.css"


//JS

import "./javascript/popupconfigs.js"
import "./javascript/data.js"
import "./javascript/popup-form.js"
import "./javascript/schedule-api.js"
import "./javascript/removeschedule.js"



import { fetchschedules } from "./javascript/schedule-api.js" 
window.onload= () => {
    fetchschedules();
}  