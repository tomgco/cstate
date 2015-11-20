# cstate
Disable CPU c-states on Intel i7's, and maybe other intel CPU's

In order to save energy when the CPU is idle, the CPU can be commanded to enter a low-power mode. Each CPU has several power modes and they are collectively called “C-states” or “C-modes.”, This can be applied by the CPU itself or controlled from the Kernel.

This module allows you to temporarily disable these modes. 

I have found this useful in assisting with benchmark tests that would fluctuate based due to these power saving modes.

**NOTE:** *This module reads `/dev/cpu_dma_latency` which requires root. Be careful :]*

## Usage

```sh
$ sudo cstate-disable
```

## API


```js
const cstate = require('cstate');
cstate.disable((err) => console.log(err));
cstate.enable((err) => console.log(err));
```
