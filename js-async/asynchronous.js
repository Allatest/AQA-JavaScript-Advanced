//Task 2
async function delayAndLog(message, milliseconds) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(message), milliseconds);
    });

    let result = await promise;
    console.log(result);
}

delayAndLog("done", 1000);
delayAndLog("done", 5000);
delayAndLog("done", 7000);
