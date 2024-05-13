const url = 'https://go-wash-api.onrender.com/api/auth/address';

async function getEnderecoUsuario() {
    try {
        let user = localStorage.getItem('user');
        if (!user) {
            console.log("Usuário não encontrado.");
            return;
        }
        let token = JSON.parse(user).access_token;

        const resposta = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        });

        const data = await resposta.json();
        console.log(data);

        if (data && data.data && data.data.length > 0) {
            exibirDados(data.data);
        } else {
            console.log("Nenhum endereço encontrado.");
        }
    } catch (error) {
        console.error("Ocorreu um erro ao buscar os dados:", error);
    }
}

function exibirDados(enderecos) {
    const tabela = document.getElementById('dados-api');

    enderecos.forEach(endereco => {
        const linha = criaLinha(endereco);
        tabela.appendChild(linha);
    });
}

function criaLinha(endereco) {
    const linha = document.createElement("tr");

    const tdId = document.createElement("td");
    const tdTitle = document.createElement("td");
    const tdCEP = document.createElement("td");
    const tdAddress = document.createElement("td");
    const tdNumber = document.createElement("td");
    const tdComplement = document.createElement("td");

    tdId.textContent = endereco.id;
    tdTitle.textContent = endereco.title;
    tdCEP.textContent = endereco.cep;
    tdAddress.textContent = endereco.address;
    tdNumber.textContent = endereco.number;
    tdComplement.textContent = endereco.complement || "-"; // Se complemento for null, exibe "-"

    linha.appendChild(tdId);
    linha.appendChild(tdTitle);
    linha.appendChild(tdCEP);
    linha.appendChild(tdAddress);
    linha.appendChild(tdNumber);
    linha.appendChild(tdComplement);

    return linha;
}

getEnderecoUsuario();
