document.getElementById('calcular').addEventListener('click', () => {

    let p = document.getElementById('peso').value;
    let a = document.getElementById('altura').value;

    const isValid = /^(\d+)$|^(\d+\.{1}\d{3})$/;
    if (!isValid.test(a)) {

        console.log('Validacion superada: ', a)

        let imc = p / (a ** 2);
        console.log(imc);

        imc = imc.toFixed(1);

        if (imc < 18.5) {
            document.getElementById('imc').textContent = imc
            document.getElementById('imc').style.backgroundColor = 'cyan';
        } else if (imc >= 18.5 && imc <= 24.9) {
            document.getElementById('imc').textContent = imc
            document.getElementById('imc').style.backgroundColor = 'green';
        } else if (imc >= 25 && imc <= 29.9) {
            document.getElementById('imc').textContent = imc
            document.getElementById('imc').style.backgroundColor = 'yellow';
        } else if (imc >= 30 && imc <= 34.9) {
            document.getElementById('imc').textContent = imc
            document.getElementById('imc').style.backgroundColor = 'orange';
        } else if (imc >= 35) {
            document.getElementById('imc').textContent = imc
            document.getElementById('imc').style.backgroundColor = 'red';
        }
    } else {
        alert('Por favor, escriba la altura en Metros');
        document.getElementById('imc').textContent = ``;
        document.getElementById('imc').style.backgroundColor = `white`;
    }



})


document.getElementById('reiniciar').addEventListener('click', () => {

    document.getElementById('peso').value = ``;
    document.getElementById('altura').value = ``;
    document.getElementById('imc').textContent = ``;
    document.getElementById('imc').style.backgroundColor = `white`;
})

