document.getElementById('group-name').addEventListener('input', function() {
    const groupName = document.getElementById('group-name').value;
    const startButton = document.getElementById('start-request');
    
    if (groupName) {
        startButton.disabled = false;
        startButton.classList.add('enabled');
    } else {
        startButton.disabled = true;
        startButton.classList.remove('enabled');
    }
});

document.getElementById('start-request').addEventListener('click', function() {
    document.getElementById('sign-in').style.display = 'none';
    document.getElementById('request-form').style.display = 'block';
});

document.getElementById('date').addEventListener('input', enableSubmitButton);
document.getElementById('time').addEventListener('input', enableSubmitButton);

function enableSubmitButton() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const submitButton = document.getElementById('submit-request');
    
    if (date && time) {
        submitButton.disabled = false;
        submitButton.classList.add('enabled');
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove('enabled');
    }
}

document.getElementById('submit-request').addEventListener('click', function() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const comments = document.getElementById('comments').value;

    if (date && time) {
        document.getElementById('request-form').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';

        console.log('Solicitud Enviada:', { date, time, comments });
    } else {
        alert('Por favor completa todos los campos.');
    }
});

document.getElementById('go-back').addEventListener('click', function() {
    document.getElementById('confirmation').style.display = 'none';
    document.getElementById('sign-in').style.display = 'block';
    document.getElementById('group-name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('comments').value = '';
    document.getElementById('start-request').disabled = true;
    document.getElementById('start-request').classList.remove('enabled');
    document.getElementById('submit-request').disabled = true;
    document.getElementById('submit-request').classList.remove('enabled');
});
