## Qual é o método vencedor?

- ❌ Nunca com < onclick="" >;
- 🆗 Às vezes com htmlElement.onclick.
- ✅ Sempre com eventListener.


#### Por quê?

**Pq não usar o inline?**
- É uma método super antigo e é considerado uma prática horrível.
- Não é bom misturar o HTML e o JS no mesmo arquivo.
    - É bem mais difícil analisar o código.
    - E você não pode reutilizar em outro arquivo.
- "Ah, mas eu tenho só um arquivo". 
    - E se você tiver 100 botões?
    - Pode parecer fácil se você estiver fazendo algo rápido, mas são ineficientes e incontroláveis.

**Pq eventListener >>> htmlElement.onclick**
- Pq vc tem a opção de retirar um eventListener. ex:
    - <div class="blockOfCode">
        // Isso é bem relevante para programas maiores.</br>
        myElement.addEventListener('click', functionA);</br>
        myElement.removeEventListener('click', functionB)
        </div>
- Pq vc pode aplicar vários manipuladores para o mesmo ouvinte. Ou seja

    - <div class="blockOfCode">
        // Dessa forma, functionA e functionB serão executadas </br>
        myElement.addEventListener('click', functionA);</br>
        myElement.addEventListener('click', functionB)
        </div>
    - <div class="blockOfCode">
        // Dessa forma, só a functionB será executada: </br>
        myElement.onclick = functionA;</br>
        myElement.onclick = functionB;
        </div>
