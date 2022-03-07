
## Como responder a eventos? + intro a objetos `Event`

- (M2) e (M3) vão chamar a `callbackFunction` quando o clique ocorrer. blz.

- Só que tem um detalhe. Quando chamarem, eles vão tentar passar **um parâmetro** para a `callbackFuncion`.
    - Esse parâmetro é um objeto que guarda as informações importantes e métodos desse evento de clique - é um objeto do tipo `Event`.
    - Já vamos falar mais sobre ele.

- Por isso, quando definimos a callbackFunction já podemos esperar receber esse objeto do tipo `Event`.
- Vamos preparar a função para receber um parâmetro e checar o que foi recebido.

    - <div class="blockOfCode">
function callbackFunction(eventoLegal) {</br>
....console.log(eventoLegal);</br>
}
</div>

    - normalmente, esse parametro tem nomes básicos: event, evt, e.
    
- A mesma estrutura pode ser desenhada usando uma função anônima:

    - <div class="blockOfCode">
    // Isso... </br></br>
    function callbackFunction(event) {</br>
    ....console.log(event);</br>
    }</br>
    </br>
    bt3.addEventListener("click", callbackFunction);</br>
    </br></br></br>
    // ... é equivalente a isso</br>
    </br>
    bt3.addEventListener("click", (event) => {</br>
    ....console.log(event)</br>
    })

</div>

**OBS**
- Se estiver usando M1 e quer acessar esse objeto `Event`, precisamos explicitamente passá-lo no html `div onclick="callbackFunction(event)>"`.