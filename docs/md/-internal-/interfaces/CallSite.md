[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CallSite

# Interface: CallSite

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:304

## Methods

### getColumnNumber()

> **getColumnNumber**(): `number` \| `null`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:349

Current column number [if this function was defined in a script]

#### Returns

`number` \| `null`

***

### getEnclosingColumnNumber()

> **getEnclosingColumnNumber**(): `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:397

#### Returns

`number`

***

### getEnclosingLineNumber()

> **getEnclosingLineNumber**(): `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:398

#### Returns

`number`

***

### getEvalOrigin()

> **getEvalOrigin**(): `string` \| `undefined`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:355

A call site object representing the location where eval was called
[if this function was created using a call to eval]

#### Returns

`string` \| `undefined`

***

### getFileName()

> **getFileName**(): `string` \| `undefined`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:339

Name of the script [if this function was defined in a script]

#### Returns

`string` \| `undefined`

***

### getFunction()

> **getFunction**(): `Function` \| `undefined`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:321

Current function

#### Returns

`Function` \| `undefined`

***

### getFunctionName()

> **getFunctionName**(): `string` \| `null`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:328

Name of the current function, typically its name property.
If a name property is not available an attempt will be made to try
to infer a name from the function's context.

#### Returns

`string` \| `null`

***

### getLineNumber()

> **getLineNumber**(): `number` \| `null`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:344

Current line number [if this function was defined in a script]

#### Returns

`number` \| `null`

***

### getMethodName()

> **getMethodName**(): `string` \| `null`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:334

Name of the property [of "this" or one of its prototypes] that holds
the current function

#### Returns

`string` \| `null`

***

### getPosition()

> **getPosition**(): `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:399

#### Returns

`number`

***

### getPromiseIndex()

> **getPromiseIndex**(): `number` \| `null`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:392

returns the index of the promise element that was followed in
Promise.all() or Promise.any() for async stack traces, or null
if the CallSite is not an async

#### Returns

`number` \| `null`

***

### getScriptHash()

> **getScriptHash**(): `string`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:395

#### Returns

`string`

***

### getScriptNameOrSourceURL()

> **getScriptNameOrSourceURL**(): `string`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:394

#### Returns

`string`

***

### getThis()

> **getThis**(): `unknown`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:308

Value of "this"

#### Returns

`unknown`

***

### getTypeName()

> **getTypeName**(): `string` \| `null`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:316

Type of "this" as a string.
This is the name of the function stored in the constructor field of
"this", if available.  Otherwise the object's [[Class]] internal
property.

#### Returns

`string` \| `null`

***

### isAsync()

> **isAsync**(): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:380

is this an async call (i.e. await, Promise.all(), or Promise.any())?

#### Returns

`boolean`

***

### isConstructor()

> **isConstructor**(): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:375

Is this a constructor call?

#### Returns

`boolean`

***

### isEval()

> **isEval**(): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:365

Does this call take place in code defined by a call to eval?

#### Returns

`boolean`

***

### isNative()

> **isNative**(): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:370

Is this call in native V8 code?

#### Returns

`boolean`

***

### isPromiseAll()

> **isPromiseAll**(): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:385

is this an async call to Promise.all()?

#### Returns

`boolean`

***

### isToplevel()

> **isToplevel**(): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:360

Is this a toplevel invocation, that is, is "this" the global object?

#### Returns

`boolean`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:401

#### Returns

`string`
