// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    console.log(window);
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text
    };

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000);
    });

    // resolve runs the first function in .then
    promise.then(
        result => document.getElementById("pElement1").innerText = result+1,
        error => alert(error) // doesn't run
    );

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
    console.log("daco");
    const btnTest = document.getElementById("btnTest");
    console.log(btnTest);
    btnTest.addEventListener("click", function () {
            alert("daco");
            document.getElementById("pElement1").innerText = "boo";
            const {remote} = require('electron')
            remote.getCurrentWindow().loadFile('./src/indexedDBdemo.html');
        }
    );
});


