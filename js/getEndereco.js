const url = 'https://go-wash-api.onrender.com/api/auth/address';

/*function adicionarEndereco(endereco) {
    listaEnderecos.push(endereco);
}

// Função para exibir todos os endereços na página
function exibirEnderecos() {
    const listaDiv = document.getElementById('dados-api');

    // Itera sobre a lista de endereços e exibe cada endereço
    listaEnderecos.forEach(function(endereco) {
        const enderecoDiv = document.createElement('div');
        enderecoDiv.textContent = endereco;
        listaDiv.appendChild(enderecoDiv);
    });
}    
*/



document.addEventListener("DOMContentLoaded", async function getEnderecoUsuario(){   
    let user  = localStorage.getItem('user');
    let token  =  JSON.parse(user).access_token;
    console.log(JSON.parse(localStorage.getItem('user')).access_token);
    
    const resposta = await fetch(url,{
        method: "GET",
        headers:{
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+token
        }      
    });
    
    const data = await resposta.json();
    exibirDados(data);
    console.log(data);

});

function exibirDados(data) {
    const dadosDiv = document.getElementById('dados-api');

    dadosDiv.innerHTML = `<pre>${JSON.stringify(data)}</pre>`;
};

function exibirDadosTabela(data){
    const tabela = document.getElementById('tabela');
    const tbody = tabela.getElementsByTagName('tbody')[0];

     // Itera sobre a lista de endereços e exibe cada endereço
    data.forEach(function(endereco) {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML =  `
        <td>${endereco.title}</td>
        <td>${endereco.cep}</td>
        <td>${endereco.address}</td>
        <td>${endereco.number}</td>
        <td>${endereco.complement}</td>
    `;
        tbody.appendChild(novaLinha);
    });
}

getEnderecoUsuario();
