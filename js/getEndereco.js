const url = 'https://go-wash-api.onrender.com/api/auth/address';

async function getEnderecoUsuario(){   
    let user  = localStorage.getItem('user');
    let token  =  JSON.parse(user).access_token;
    console.log(user);
    
    let resposta = await fetch(url,{
        method: "GET",
        headers:{
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+token
        }      
    });
    
    let data = await resposta.json();
    console.log(data);
    /*
    if (resposta.ok) {
        alert("Endereço realizado com sucesso!"); // Exibe um alerta se o cadastro for bem-sucedido
         window.location.href = "endereco.html"; // Redireciona para a página de endereco
    } else {
        if (data && data.errors) { //condição que verifica se o objeto data está definido e se possui uma propriedade errors.
            // Se houver erros retornados pela API, exibe esses erros
            alert("Erro ao enviar o endereço: " + JSON.stringify(data.errors)); //JSON.stringify(data.errors) esta convertendo o objeto de erro em uma string Json
        } else {
            alert("Ocorreu um erro ao enviar o endereço. Por favor, tente novamente."); // Exibe um alerta genérico de erro
        }
    }
    */
}
getEnderecoUsuario();
