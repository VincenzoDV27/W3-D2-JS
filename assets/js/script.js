/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

//AGGIUNGE LE TASK AL DOM
const tasks = document.querySelector("#lista-task");

const aggiungiTasks = (task, lvlTask) => {
  const li = document.createElement("li");
  li.textContent = task;
  tasks.appendChild(li);

  const spanLvl = document.createElement("span");
  spanLvl.textContent = lvlTask;
  spanLvl.classList.add("badge");
  li.appendChild(spanLvl);

  const divData = document.createElement("div");
  divData.textContent = new Date().toLocaleString("it-IT");
  divData.classList.add("data", "divData");
  li.appendChild(divData);

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Elimina";
  li.appendChild(btnDelete);

  if (lvlTask === "ALTO") {
    li.classList.add("priorita-bassa");
  } else if (lvlTask === "MEDIO") {
    li.classList.add("priorita-media");
  } else if (lvlTask === "BASSO") {
    li.classList.add("priorita-alta");
  }
};

// END

//EXEC
aggiungiTasks("Pagare le bollette", "MEDIO");
aggiungiTasks("Fumare", "ALTO");
aggiungiTasks("Comprare il pane", "BASSO");
aggiungiTasks("Studiare", "ALTO");
aggiungiTasks("Riposari", "MEDIO");

// END

// AGGIUNGI LA PARTE EVIDENZIATA ALLA TASK
const evidenzia = (indice) => {
  const task = tasks.children[indice];
  task.classList.add("evidenziato");
};

evidenzia(2);

// END

// TOGLI LA PARTE EVIDENZIATA ALLA TASK
const togliEvidenzia = (indice) => {
  const task = tasks.children[indice];
  task.classList.remove("evidenziato");
};

togliEvidenzia(1);

// END

//CONTATORE
const counter = document.querySelector("#contatore");
const contatore = () => {
  return tasks.children.length;
};

counter.textContent = contatore();

// END
