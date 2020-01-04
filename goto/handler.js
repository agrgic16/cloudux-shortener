"use strict"

module.exports = (event, context) => {
    let err;
    const result = {
        status: "Hello World!"
    };

    context
        .status(200)
        .succeed(result);
}
