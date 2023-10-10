const body = document.body;
        let h1 = document.createElement('h1');
        h1.textContent = 'Cifrador de Mensajes';
        body.appendChild(h1);

        let container = document.createElement('div');
        container.classList.add('container');
        body.appendChild(container);

        let button = document.createElement('button');
        button.textContent = 'Cifrar Mensaje';
        button.addEventListener('click', cifrarMensaje);
        container.appendChild(button);

        let mensajeCifradoP = document.createElement('p');
        mensajeCifradoP.id = 'mensajeCifrado';
        container.appendChild(mensajeCifradoP);

        let imageContainer = document.createElement('div');
        imageContainer.id = 'imageContainer';
        container.appendChild(imageContainer);

        let imagen = document.createElement('img');
        imagen.id = 'imagen';
        imagen.src = 'imagen1.jpg';
        imagen.alt = 'Imagen Cambiante';
        imagen.addEventListener('click', cambiarImagen);
        imageContainer.appendChild(imagen);

        let currentImageIndex = 0;
        const images = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];

        function cifrarMensaje() {
            const inputText = window.prompt("Introduce un mensaje:");
            if (inputText === null || inputText === "") {
                return;
            }

            const mensajeCifrado = cifrarTexto(inputText);
            document.getElementById('mensajeCifrado').textContent = mensajeCifrado;
        }

        function cifrarTexto(texto) {
            let textoCifrado = '';

            for (let i = 0; i < texto.length; i++) {
                const char = texto[i];
                if (char === ' ') {
                    textoCifrado += ' ';
                } else if (char === 'Z' || char === 'z') {
                    textoCifrado += 'A';
                } else if (char === '9') {
                    textoCifrado += '0';
                } else if (char.match(/[A-Ya-y0-8]/)) {
                    textoCifrado += String.fromCharCode(char.charCodeAt(0) + 1);
                } else {
                    textoCifrado += char;
                }
            }

            return textoCifrado.toUpperCase();
        }

        function cambiarImagen() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            imagen.src = images[currentImageIndex];
        }
