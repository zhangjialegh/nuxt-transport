# postis-plus

#### the package base on [postis](https://github.com/adtile/postis#readme).

## Install

```js
npm i postis-plus --save
```

## Usage

Parent HTML which contains an iframe:

```js
import postisPlus from "postis-plus";
const targetWindow = document.querySelectorAll("iframe")[0].contentWindow;

const transport = postisPlus({
  window: targetWindow,
  scope: "scope-for-message-changing-to-avoid-overlapping"
});

// addListener event of 'event'
transport.on('event', ({ name, data }) => {
  switch (name) {
    case 'eventName':
      console.log(data)
      break
  }
})


// addListener event of 'resolve'
transport.on('resolve', ({ name, data }, handler) => {
  switch (name) {
    case 'eventName':
      console.log(data)

      ...
      handler(res)
      break
  }
})
```

In embedded child iframe:

```js
import postisPlus from "postis-plus";
const targetWindow = window.parent;

const transport = postisPlus({
  window: targetWindow,
  scope: "scope-for-message-changing-to-avoid-overlapping"
});

// emit event of 'event'
transport.sendEvent({
  name: 'eventName',
  data: data
})

// emit event of 'resolve'
transport.sendResolve({ name: 'eventName',data: data })
.then((res) => {
  console.log(res)
})
```

