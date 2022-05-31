function enviar() {
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const cep = document.getElementById('cep').value

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
        response.json()
        .then(data => {
            document.getElementById('form_input').style.display = 'none';
            document.getElementById('form_value').style.display = 'flex';
            document.getElementById('bairro').innerHTML = data.bairro
            document.getElementById('local').innerHTML = data.localidade
            document.getElementById('logra').innerHTML = data.logradouro
            document.getElementById('uf').innerHTML = data.uf
        })
      }).catch((error) => {
          console.log(error)
      })

    console.log(name, phone, email, cep)
}