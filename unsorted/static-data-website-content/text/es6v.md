repo: https://github.com/GroceriStar/es6-package
One of the main things of understanding how this project is packed, works, structured - you can read here: https://code.lengstorf.com/learn-rollup-js/
it's covered basics of using Rollup for development of JS modules

---

1) I start to make some work on it. Related to groceristar part of the project.
I move basic methods, tests for those methods.
Main workflow: you work at `/src` folder.
file structure a bit different, but main changes related to how you'll debug your code.

You code stuff at src should be built to folder `lib` by the command `npm run dev`. if you want to debug your code and see how it works locally - when you build your code you can use `node lib/index.js`
this will call the main file that we have

be aware, that sometime, your code will generate issues, because this plugin has a lot of cool features, that helps developers to produce better code. So your tests, your imports, your custom formatting can generate an issue. it's ok, so don't worry about it a lot. But for sure, your code should be tested.

---

we actually build our own template with Babel and other important tools.
so this plan changing right now. I also find out hard times to think about moving completely the whole plugin at one time. so I decide to do it in stupid, but simple and maybe smart way :) I create a plugin, that like a bridge between our current fetch plugin and between our next generation version of it. And I plan to move our functionality by parts. Like move search at first time - test how it works, break something small, etc. then, move next set of functions
