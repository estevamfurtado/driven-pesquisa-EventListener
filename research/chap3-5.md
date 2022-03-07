## O objeto `Event`

- O objeto `Event` representa um evento que acontece no DOM. Ele registra todas as informações (propriedades) e métodos pertinentes a um evento.

- Como existem **muitos tipos de eventos diferentes**, existem outros tipos de objetos mais específicos (interfaces) para operar (por exemplo, `MouseEvent`, `InputEvent`, `PointerEvent`, `DragEvent`, `ErrorEvent`...). Todos se baseiam na interface `Event`.

#### (Algumas) propriedades do `Event`

Listando as principais:

- .target: elemento que disparou o evento
- .type: string minúscula com o nome do evento
- .timeStamp: a hora em ms que o elemento foi criado
- .isTrusted: TRUE se foi triggado naturalmente, FALSE se foi triggado pelo programa

Outros:
- .bubbles, .cancelable, .composed, .currentTarget, .defaultPrevented, .eventPhase

#### Métodos do `Event`
- .preventDefault(): cancela o evento (se for cancelável)
- .stopPropagation(): cancela a propagação de novos eventos no DOM.
- .stopImmediatePropagation()
- .composedPath()
