//procurar o botão
document.querySelector("#add-time")

//quando clicar no botão
.addEventListener('click', cloneField)

//executar uma ação

function cloneField(){
    //duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //node - elementos de htlm

    //pegar campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo limpar
    fields.forEach(function(field){
        //pegar p field do momento e limpa
        field.value = ""
    })

    //fields[0].value = ""
   // fields[1].value = ""
    //colar na página. onde colar?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

  
