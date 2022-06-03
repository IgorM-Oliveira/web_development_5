faker.setLocale('pt_BR');
const date = [];

const generate = () => {
    document.getElementById('cep').value = faker.address.zipCode('########')
    document.getElementById('name').value = faker.name.findName()
    document.getElementById('phone').value = faker.phone.phoneNumber('+55 9#### ####')
    document.getElementById('email').value = faker.internet.exampleEmail()
}

const back = () => {
    document.getElementById('form_input').style.display = 'flex';
    document.getElementById('form_value').style.display = 'none';
}

const enviar = () => {
    const cep = document.getElementById('cep').value
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const e_mail = document.getElementById('email').value

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
        response.json()
        .then(data => {
            document.getElementById('form_input').style.display = 'none';
            document.getElementById('form_value').style.display = 'flex';

            const dateForm = {
                name: name,
                phone: phone,
                e_mail: e_mail,
                cidade: data.localidade,
                logra: data.logradouro,
                bairro: data.bairro,
            }

            date.push(dateForm);

            let table = document.getElementById("table");
            let row = table.insertRow(-1);

            let nome = row.insertCell(0);
            let tel = row.insertCell(1);
            let email = row.insertCell(2);
            let cidade = row.insertCell(3);
            let logra = row.insertCell(4);
            let bairro = row.insertCell(5);

            for (let i = 0; i < date.length; i++) {
                nome.innerHTML = date[i].name;
                tel.innerHTML = date[i].phone;
                email.innerHTML = date[i].e_mail;
                cidade.innerHTML = date[i].cidade;
                logra.innerHTML = date[i].logra;
                bairro.innerHTML = date[i].bairro;
            }
        })
      }).catch((error) => {
          console.error(error)
      })
}