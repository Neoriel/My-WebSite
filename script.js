const commandInput = document.getElementById('command-input');
const output = document.querySelector('.output');

commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        executeCommand(commandInput.value);
        commandInput.value = '';
    }
});

function executeCommand(command) {
    // Ejecutar acciones según el comando ingresado
     if (command === 'ayuda') {
        output.innerHTML += 'Obten Informacion sobre mi ejecutando alguno de los siguientes comandos:<br><br>';
        output.innerHTML += '- ayuda: muestra la lista de comandos disponibles<br><br>';
        output.innerHTML += '- estudios: muestra mis estudios realizados y los que estoy cursando actualmente<br><br>';
        output.innerHTML += '- habilidades: muestra mis habilidades y destrezas<br><br>';
        output.innerHTML += '- lenguajes: muestra los lenguajes de programación que conozco<br><br>';
        output.innerHTML += '- idiomas: muestra los idiomas que hablo y a que nivel<br><br>';
        output.innerHTML += '- proyectos: muestra mis proyectos<br><br>'
    } else if (command === 'estudios') {
        output.innerHTML += 'Estudios realizados:<br><br>';
        output.innerHTML += '- Pasantia en programacion<br><br>';
        output.innerHTML += '- Actualmente cursando la carrera de Ingieneria en sistemas<br><br>';
        output.innerHTML += '- Realizando tambien una certificacion verificada en ciencias de la computacion en la universidad de Harvard<br><br>' 
    } else if (command === 'habilidades') {
        output.innerHTML += 'Habilidades y destrezas:<br><br>';
        output.innerHTML += '- Desarrollo web<br><br>';
        output.innerHTML += '- Diseño grafico<br><br>'
        output.innerHTML += '- Manejo de programas Adobe(Photoshop, Affter Effects, Adobe Premiere)<br><br>'
        output.innerHTML += '- Programación en JavaScript<br><br>';
        output.innerHTML += '- Diseño de interfaces de usuario<br><br>';
        output.innerHTML += '- Manejo de sistemas Linux<br><br>'
        output.innerHTML += '- Manejo de Git y GitHub<br><br>'
    } else if (command === 'lenguajes') {
        output.innerHTML += 'Lenguajes de programación que conozco:<br><br>';
        output.innerHTML += '- JavaScript<br><br>';
        output.innerHTML += '- HTML/CSS<br><br>';
        output.innerHTML += '- Python<br><br>';
    } else if (command === 'idiomas') {
        output.innerHTML += 'Idiomas que hablo:<br><br>';
        output.innerHTML += '- Español (Nativo)<br><br>';
        output.innerHTML += '- Inglés (Intermedio)<br><br>';
        output.innerHTML += '- Japones (Basico)<br><br>';

    } else if (command === 'help') {
            output.innerHTML += 'Get information about me by executing one of the following commands:<br><br>';
            output.innerHTML += '- help: shows the list of available commands<br><br>';
            output.innerHTML += '- studies: shows my completed studies and the studies I am currently pursuing<br><br>';
            output.innerHTML += '- skills: shows my skills and abilities<br><br>';
            output.innerHTML += '- languages: shows the programming languages that I know<br><br>';
            output.innerHTML += '- languaje: shows the languages I speak and at what level<br><br>';
        } else if (command === 'studies') {
            output.innerHTML += 'Studies carried out:<br><br>';
            output.innerHTML += '- Programming internship<br><br>';
            output.innerHTML += '- Currently studying Systems Engineering<br><br>';
            output.innerHTML += '- Also pursuing a verified certification in computer science at Harvard University<br><br>' 
        } else if (command === 'skills') {
            output.innerHTML += 'Skills and competences: <br><br>';
            output.innerHTML += '- Web development<br><br>';
            output.innerHTML += '- Graphic design<br><br>'
            output.innerHTML += '- Handling Adobe software(Photoshop, Affter Effects, Premiere)<br><br>'
            output.innerHTML += '- JavaScript programming<br><br>';
            output.innerHTML += '- Design of user interfaces<br><br>';
            output.innerHTML += '- Linux system management (basic)<br><br>'
            output.innerHTML += '- Git and GitHub management<br><br>'
        } else if (command === 'languajes') {
            output.innerHTML += 'Programming languages I am familiar with:<br><br>';
            output.innerHTML += '- JavaScript<br><br>';
            output.innerHTML += '- HTML/CSS<br><br>';
            output.innerHTML += '- Python<br><br>';
        } else if (command === 'languaje') {
            output.innerHTML += 'Languages I speak:<br><br>';
            output.innerHTML += '- Spanish (Native)<br><br>';
            output.innerHTML += '- English (Intermediate)<br><br>';
            output.innerHTML += '- Japanese (Basic)<br><br>';
        }
    


    }


   
    































