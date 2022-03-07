## Como disparar um evento?

- Supondo que vc preparou um eventListener assim:
    - <div class="blockOfCode">
        btn.addEventListener ('tipo do evento', (e) => {...});</br>
</div>

- Como *triggar* (disparar) o evento?
    
    - Pela interação do usuário (pex. clique)
    
    - API: sinalizando o progresso de uma tarefa assíncona
    
    - Pelo JS: `HTMLElement.click()`
    
    - Pelo JS 2:
        - **Criando um objeto `Event`, direcionando para um elemento alvo e despachando!**

        - <div class="blockOfCode">
            // cria o objeto evento </br>
            const clickEvent = new Event('click');</br> 
            </br>
            // despacha o evento para um alvo</br>
            btn.dispatchEvent(clickEvent); // dispara um clique no botao alvo
        </div>
