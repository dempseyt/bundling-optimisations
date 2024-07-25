---
marp: true
paginate: true
theme: gaia
---

# The Final Talk

## Bundling Optimisations

<br/><br/><br/><br/><br/>
_Note that I am talking specifically about bundling JavaScript code_

---

## Agenda

1. Recap on previous talks
2. Tree Shaking
3. Minification
4. Code Splitting
5. Hot Module Replacement
6. Lazy Loading
7. Conclusion

---

# Dependency Trees

- Traverse the codebase and resolve import and require statements.
- End up with an adjacency list representing all the dependencies.
- Example from the last talk:

```JSON
{
    "index.js": ["library3000.js"],
    "library3000.js": ["date.js", "time.js"],
    "date.js": [],
    "time.js": []
}
```

---

<h1 style="margin:-30px;">Tree Shaking</h1>

- Removing "dead code".
- This is achievable by checking the adjacency list.
- If a file isn't referenced anywhere, then it isn't being used.

<div style="display:flex; justify-content: space-around;">
<img src="./images/tree-shaking.webp" style="border-radius:50px; border: 4px solid black; width: 300px;">
<div>

```JSON
{
    "index.js": ["library3000.js"],
    "library3000.js": ["date.js", "time.js"],
    "date.js": [],
    "time.js": [],
    "dead-file.js": ["dung-eaters-file.js"],
    "dung-eaters-file.js": []
}
```

</div>
</div>

---

# Minification

- Removes whitespace and comments.
- Shorten or remove variable and function names.
- Removes unused code (tree shaking).

<img src="./images/minification.png">

---

<h1 style="margin:-30px;">Code Splitting</h1>

- Involves splitting the code into "chunks".
- Loading only what is needed for a page.
- Benefits:
  - Improves load time by reducing initial bundle size.
  - Optimises performance by loading only what is necessary.
  - Better resource management.
- You have static and dynamic code splitting, and it can be done manually or automatically.

---

<h1 style="margin:-30px;">Static Code Splitting</h1>

- Splits the code at build time.
- Can be done by defining split points in your code.

<img src="./images/code-splitting.png" style="border-radius:50px; border: 4px solid black; width: 250px;">

---

# Dynamic Code Splitting

- Splits the code at runtime.
- Involves asynchronously loading modules with JavaScript's `import` function.
- This isn't something that bundlers do by themself, this a developers choice if they want to write their code this way.

---

```JavaScript
// data.js
const data = [1,2,3,4,5]
export default data
```

```JavaScript
const onLoad = async () => {
  const myData = (await import("./data")).default;
}
```

<img src="./images/async.webp" style="border-radius:50px; border: 4px solid black; width: 300px; margin-top: 10px; display: flex; justify-content: center;" />

---

# Hot Module Replacement

- Enables the replacement of modules while the application is running.
- Only modules that are changed and their dependencies need a reload, not the whole app.
- Preserve the state of your app.
- Great for developers and can speed up the development process.

---

# Lazy Loading

- Closely linked with code splitting.
- Lazy loading is the practice of only loading the resources which are needed at runtime.
- Code splitting allows this to happen.

<div style="display:flex; justify-content: end; margin-top: -80px">
<img src="./images/lazy-loading.webp" style="border-radius:50px; border: 4px solid black; width: 350px;">
</div>

---

<div style="display:flex; justify-content:center; align-items: center; width: 100%; height: 100%; text-align: center;">
This is all well and good but now lets go and have a look at what I'm talking about
</div>
