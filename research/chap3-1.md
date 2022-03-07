## Como responder (reagir/manipular) a eventos?

Suponha que vc queira chamar essa função aqui quando apertar um botão:
- <div class="blockOfCode">
function callbackFunction() {</br>
....console.log("oi");</br>
}
</div>

Normalmente, para cada tipo de evento, existem 3 tipos de manipuladores (event handlers)...

#### M1. Manipulador de eventos inline

- <div class="blockOfCode">
    <`div
    onclick="callbackFunction()>"
    <`/div>
</div>

#### M2. Manipulador de eventos no JS

- <div class="blockOfCode">
    bt2.onclick = callbackFunction;
</div>

#### M3. Ouvidor de eventos no JS (`EventListener`)

- <div class="blockOfCode">
    bt3.addEventListener("click", callbackFunction);
</div>