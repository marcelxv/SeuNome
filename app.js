document.querySelector('.enviar').addEventListener('click', run)


function run(e) {

    const text = document.querySelector('input[type="text"]').value
    console.log(text)


    e.preventDefault()

function concatUrl(e) {

    // Cria uma nova requisição
    const xhr = new XMLHttpRequest() 

    // Abre a requisição com o método GET, url e se é assincrono
    xhr.open('GET', `https://api.genderize.io?name=${text}`, true)

    // Checa se a requisição foi bem sucedida
    xhr.onload = function() {
        if (this.status === 200) {
    // Armazena em response o retorno da requisição usando o JSON.parse e o this.responseText
            const response = JSON.parse(this.responseText)
            console.log(response) 

            let gender = response.gender
            if (gender === 'male') {
                gender = 'Masculino ♂️'
            } else if (gender === 'female') {
                gender = 'Feminino ♀️'
            } else {
                gender = 'Desconhecido'
            }

    // Seleciona o elemento #github-profile no HTML e atribui o valor da response.avatar_url e o nome do usuário via response.name e response.avatar_url
            document.querySelector('#resultado-sexo').innerHTML = `
            <div class="card-header"><p>Nome: ${response.name}</p></div>
            <p>Sexo: ${gender}</p>
            <p>Probabilidade: ${100* (response.probability)}%</p>
            `
        }
 
    }
    // Envia a requisição
    xhr.send()
 
    


}


    // document.querySelector('.enviar-pais').addEventListener('click', paisUrl)
    let resultadoPais = document.querySelector('#resultado-pais')
    
    function paisUrl (e) {
            console.log(text)
    
    
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://api.nationalize.io?name=${text}`, true)
    xhr.onload = function() {
        let resultados = '';
    
        if (this.status === 200) {
            const response = JSON.parse(this.responseText)
            console.log(response)
            response.country.forEach(function(country) {
                let pais = country.country_id
                if(pais === 'BR') {
                    pais = '🇧🇷'
                } else if (pais === 'US') {
                    pais = '🇺🇸'
                } else if (pais === 'ES') {
                    pais = '🇪🇸'
                } else if (pais === 'FR') {
                    pais = '🇫🇷'
                } else if (pais === 'IT') {
                    pais = '🇮🇹'
                } else if (pais === 'DE') {
                    pais = '🇩🇪'
                } else if (pais === 'GB') {
                    pais = '🇬🇧'
                } else if (pais === 'JP') {
                    pais = '🇯🇵'
                } else if (pais === 'CN') {
                    pais = '🇨🇳'
                } else if (pais === 'RU') {
                    pais = '🇷🇺'
                } else if (pais === 'IN') {
                    pais = '🇮🇳'
                } else if (pais === 'CA') {
                    pais = '🇨🇦'
                } else if (pais === 'AU') {
                    pais = '🇦🇺'
                } else if (pais === 'MX') {
                    pais = '🇲🇽'
                } else if (pais === 'TR') {
                    pais = '🇹🇷'
                } else if (pais === 'NL') {
                    pais = '🇳🇱'
                } else if (pais === 'DK') {
                    pais = '🇩🇰'
                } else if (pais === 'SE') {
                    pais = '🇸🇪'
                } else if (pais === 'NO') {
                    pais = '🇳🇴'
                } else if (pais === 'FI') {
                    pais = '🇫🇮'
                } else if (pais === 'CH') {
                    pais = '🇨🇭'
                } else if (pais === 'AT') {
                    pais = '🇦🇹'
                } else if (pais === 'BE') {
                    pais = '🇧🇪'
                } else if (pais === 'PT') {
                    pais = '🇵🇹'
                } else if (pais === 'IE') {
                    pais = '🇮🇪'
                } else if (pais === 'NZ') {
                    pais = '🇳🇿'
                } else if (pais === 'GR') {
                    pais = '🇬🇷'
                } else if (pais === 'SK') {
                    pais = '🇸🇰'
                } else if (pais === 'LI') {
                    pais = '🇱🇮'
                } else if (pais === 'CZ') {
                    pais = '🇨🇿'
                } else if (pais === 'CO') {
                    pais = '🇨🇴'
                } else if (pais === 'AR') {
                    pais = '🇦🇷'
                }  else if (pais === 'VE') {
                    pais = '🇻🇪'
                } else if (pais === 'CL') {
                    pais = '🇨🇱'
                } else if (pais === 'PE') {
                    pais = '🇵🇪'
                } else if (pais === 'EC') {
                    pais = '🇪🇨'
                } else if (pais === 'UY') {
                    pais = '🇺🇾'
                } else if (pais === 'BO') {
                    pais = '🇧🇴'
                } else if (pais === 'DO') {
                    pais = '🇩🇴'
                } else if (pais === 'CO') {
                    pais = '🇨🇴'
                } else if (pais === 'GT') {
                    pais = '🇬🇹'
                } else if (pais === 'HN') {
                    pais = '🇭🇳'
                } else if (pais === 'DZ') {
                    pais = '🇩🇿'
                } else if (pais === 'EG') {
                    pais = '🇪🇬'
                } else if (pais === 'IQ') {
                    pais = '🇮🇶'
                }
                resultados += `
                <p>País: ${pais}</p>
                <p>Probabilidade ${Math.trunc(100* country.probability)}%</p>`
                resultadoPais.innerHTML = resultados
            })
           
          
      
    
        } else {
            resultados += '<li>Não encontrado</li>'
        }
        
    }
    xhr.send()
    
    }
    
    
    concatUrl()
    paisUrl()
}
    
    
    