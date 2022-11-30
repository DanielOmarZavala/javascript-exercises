function getMessage() {
    return new Promise(resolve =>
        resolve("test string")
    );
}

function usingThen() {
    // console.log(getMessage())
    getMessage()
        .then((response) =>
            console.log("Then: " + response)
        );
}

/**
 * Waits for promise to resolve then initializes variable with response.
 * After variable is initialized, log it to console.
 *
 * @returns {Promise<void>}
 */
async function usingAwait() {
    const response = await getMessage();
    console.log("Await: " + response);
}
usingAwait();
usingThen();
