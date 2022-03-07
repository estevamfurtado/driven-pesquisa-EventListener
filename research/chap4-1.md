## Propagação de Eventos

- [Melhor ilustração possível](https://domevents.dev/)
    - Fizemos a explicação ao vivo:
        - Fases: captura, target, bubbling.
        - Event.bubbles, [Event.cancelable]( https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable ).
        - addEventListener (tipo, callback, options) -> options:
            - capture: roda na fase da captura
            - passive: 
            - once: roda 1 vez só
        - Efeitos
            - [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
            - Event.stopPropagation()
            - Event.stopImmediatePropagation()
- [POC](https://codesandbox.io/s/poc-addeventlistener-7qc57b?file=/main.js)


- [MZN: Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MZN: Teste](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events)
- [MZN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [Event Propagation](https://domevents.dev/)
- [Event Order](https://www.quirksmode.org/js/events_order.html)
- [Event Access](https://www.quirksmode.org/js/events_access.html)
