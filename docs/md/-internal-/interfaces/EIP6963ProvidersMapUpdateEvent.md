[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EIP6963ProvidersMapUpdateEvent

# Interface: EIP6963ProvidersMapUpdateEvent

Defined in: node\_modules/.pnpm/web3@4.14.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3/lib/commonjs/web3\_eip6963.d.ts:26

The **`CustomEvent`** interface represents events initialized by an application for any purpose.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent)

## Extends

- [`CustomEvent`](CustomEvent.md)

## Properties

### AT\_TARGET

> `readonly` **AT\_TARGET**: `2`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11462

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`AT_TARGET`](CustomEvent.md#at_target)

***

### bubbles

> `readonly` **bubbles**: `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11353

The **`bubbles`** read-only property of the Event interface indicates whether the event bubbles up through the DOM tree or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`bubbles`](CustomEvent.md#bubbles)

***

### BUBBLING\_PHASE

> `readonly` **BUBBLING\_PHASE**: `3`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11463

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`BUBBLING_PHASE`](CustomEvent.md#bubbling_phase)

***

### cancelable

> `readonly` **cancelable**: `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11366

The **`cancelable`** read-only property of the Event interface indicates whether the event can be canceled, and therefore prevented as if the event never happened.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`cancelable`](CustomEvent.md#cancelable)

***

### ~~cancelBubble~~

> **cancelBubble**: `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11360

The **`cancelBubble`** property of the Event interface is deprecated.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`cancelBubble`](CustomEvent.md#cancelbubble)

***

### CAPTURING\_PHASE

> `readonly` **CAPTURING\_PHASE**: `1`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11461

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`CAPTURING_PHASE`](CustomEvent.md#capturing_phase)

***

### composed

> `readonly` **composed**: `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11372

The read-only **`composed`** property of the or not the event will propagate across the shadow DOM boundary into the standard DOM.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`composed`](CustomEvent.md#composed)

***

### currentTarget

> `readonly` **currentTarget**: `EventTarget` \| `null`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11378

The **`currentTarget`** read-only property of the Event interface identifies the element to which the event handler has been attached.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`currentTarget`](CustomEvent.md#currenttarget)

***

### defaultPrevented

> `readonly` **defaultPrevented**: `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11384

The **`defaultPrevented`** read-only property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`defaultPrevented`](CustomEvent.md#defaultprevented)

***

### detail

> **detail**: [`EIP6963ProviderResponse`](../type-aliases/EIP6963ProviderResponse.md)

Defined in: node\_modules/.pnpm/web3@4.14.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3/lib/commonjs/web3\_eip6963.d.ts:28

The read-only **`detail`** property of the CustomEvent interface returns any data passed when initializing the event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/detail)

#### Overrides

[`CustomEvent`](CustomEvent.md).[`detail`](CustomEvent.md#detail)

***

### eventPhase

> `readonly` **eventPhase**: `number`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11390

The **`eventPhase`** read-only property of the being evaluated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`eventPhase`](CustomEvent.md#eventphase)

***

### isTrusted

> `readonly` **isTrusted**: `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11396

The **`isTrusted`** read-only property of the when the event was generated by the user agent (including via user actions and programmatic methods such as HTMLElement.focus()), and `false` when the event was dispatched via The only exception is the `click` event, which initializes the `isTrusted` property to `false` in user agents.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`isTrusted`](CustomEvent.md#istrusted)

***

### NONE

> `readonly` **NONE**: `0`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11460

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`NONE`](CustomEvent.md#none)

***

### ~~returnValue~~

> **returnValue**: `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11403

The Event property **`returnValue`** indicates whether the default action for this event has been prevented or not.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`returnValue`](CustomEvent.md#returnvalue)

***

### ~~srcElement~~

> `readonly` **srcElement**: `EventTarget` \| `null`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11410

The deprecated **`Event.srcElement`** is an alias for the Event.target property.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`srcElement`](CustomEvent.md#srcelement)

***

### target

> `readonly` **target**: `EventTarget` \| `null`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11416

The read-only **`target`** property of the dispatched.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`target`](CustomEvent.md#target)

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11422

The **`timeStamp`** read-only property of the Event interface returns the time (in milliseconds) at which the event was created.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`timeStamp`](CustomEvent.md#timestamp)

***

### type

> **type**: `string`

Defined in: node\_modules/.pnpm/web3@4.14.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3/lib/commonjs/web3\_eip6963.d.ts:27

The **`type`** read-only property of the Event interface returns a string containing the event's type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)

#### Overrides

[`CustomEvent`](CustomEvent.md).[`type`](CustomEvent.md#type)

## Methods

### composedPath()

> **composedPath**(): `EventTarget`[]

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11434

The **`composedPath()`** method of the Event interface returns the event's path which is an array of the objects on which listeners will be invoked.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)

#### Returns

`EventTarget`[]

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`composedPath`](CustomEvent.md#composedpath)

***

### ~~initCustomEvent()~~

> **initCustomEvent**(`type`, `bubbles?`, `cancelable?`, `detail?`): `void`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:8556

The **`CustomEvent.initCustomEvent()`** method initializes a CustomEvent object.

#### Parameters

##### type

`string`

##### bubbles?

`boolean`

##### cancelable?

`boolean`

##### detail?

`any`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/initCustomEvent)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`initCustomEvent`](CustomEvent.md#initcustomevent)

***

### ~~initEvent()~~

> **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11441

The **`Event.initEvent()`** method is used to initialize the value of an event created using Document.createEvent().

#### Parameters

##### type

`string`

##### bubbles?

`boolean`

##### cancelable?

`boolean`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/initEvent)

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`initEvent`](CustomEvent.md#initevent)

***

### preventDefault()

> **preventDefault**(): `void`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11447

The **`preventDefault()`** method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`preventDefault`](CustomEvent.md#preventdefault)

***

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11453

The **`stopImmediatePropagation()`** method of the If several listeners are attached to the same element for the same event type, they are called in the order in which they were added.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)

#### Returns

`void`

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`stopImmediatePropagation`](CustomEvent.md#stopimmediatepropagation)

***

### stopPropagation()

> **stopPropagation**(): `void`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11459

The **`stopPropagation()`** method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

#### Returns

`void`

#### Inherited from

[`CustomEvent`](CustomEvent.md).[`stopPropagation`](CustomEvent.md#stoppropagation)
