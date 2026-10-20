PROGETTO TASKS - MANIPOLARE IL DOM

Per ogni "task" deve contenere la task stessa, la priorità della task, l'orario aggiornato automaticamente e il pulsante "Elimina".

Ho quindi preso col querySelector il tag ul con id "lista-task" con la const tasks.
Ho creato la funzione aggiungiTasks.
Dalla funzione richiedo i parametri "task" dove verrà indicata la task stessa e "lvltask" per indicare la priorità della task.
Inizio creando il tag li per ogni task, lo span per la priorità della task, un div per la data, aggiungendo le corrispettive classi .data e .divData, ed infine il button "Elimina".


Secondo la priorità indicata la task deve avere un background-color diverso, per cui stesso nella funzione ho generato un if che consulta la priorità indicata per ogni task ed infine applica la classe corretta, generata dal CSS.

Ho creato due funzioni che permettono di evidenziare e togliere la parte evidenziata usando la proprietà classList.add e classlist.remove. Per indicare la task corretta ho usato un parametro indice, che poi dentro le funzioni viene usato come parametro per selezionare il "children" esatto della const tasks (precedentemente usata per ottenere il primo querySelector)

Con il const counter vado a prendere lo span con id "contatore" come indicato nel codice html.
Ho creato la funzione contatore, dove effettua il return della length di tasks.children.
Infine, scrivo nel dom quello che la funzione contatore ritorna con counter.textContent. 
