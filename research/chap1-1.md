## Callback Functions

- `Função de callback` é uma função passada como argumento para uma outra função (função de fora).

- A função de fora é responsável por chamar e passar argumentos para a função de callback:

- Preste atenção nesse código:

    - <div class="blockOfCode">
function funcao1 (arg) {</br>
....console.log("Você é o cara, ", arg);</br>
}</br></br></br>
function funcao2 (arg) {</br>
....console.log("Nunca mais olhe na minha cara, ", arg);</br>
}</br>
</br></br>
function funcaoDeFora (callbackFunc) {</br>
....const objeto = "Joaquim";</br>
....callbackFunc(objeto);</br>
}
</div>

- Só o código acima não faz nada. Precisamos chamar a `funcaoDeFora()` e passar alguma função como argumento! O que acontecerá se escrevermos isso?

    - <div class="blockOfCode">
funcaoDeFora (funcao1);
</div>

- E caso vc chamasse...

    - <div class="blockOfCode">
funcaoDeFora (funcao2);
</div>

#### 🚨 ATENÇÃO 🚨

- Sincronismo
    - No caso, `funcao1` e `funcao2` são exemplos de callbacks síncronos (pq são executados imediatamente dentro da função de fora).
    - No entanto, normalmente callbacks são usadas para executar um código depois de uma operação assíncrona.
        - Um exemplo de callback assíncrono é o `promise.then( callback ).catch( errorCallback )`).

- **Reforçando**
    - Quando passamos uma funcao como argumento, **estamos passando um bloco de código** (que está armazenado dentro da variável de nome da função)!

    - **Não estamos pedindo que o console execute a função** -- quem faz isso é a função de fora!
    Por isso, quem passa os argumentos da função de callback é a própria função de fora.

    - Ao invés de passar o nome de uma função, poderíamos passar uma função sem nome (anônima):
            - <div class="blockOfCode">
            function funcaoDeFora (callbackFunc) {</br>
            ....const objeto = "Joaquim";</br>
            ....callbackFunc(objeto);</br>
            }</br>
            </br>
            funcaoDeFora( (arg) => { </br>
                ....console.log("Nunca mais olhe na minha cara, ", arg);</br>
            });
            </div>