---
title: asyn  await
date: '2025-07-18'
category: JavaScript
tags: []
---
# asyn  await 

```javascript
async function chainAnimationsAsync(elem, animations) {
  let ret = null;
  try {
    for(let anim of animations) {
      ret = await anim(elem);
    }
  } catch(e) {
    /* 忽略错误，继续执行 */
  }
  return ret;
}
```

# promise

1.  
