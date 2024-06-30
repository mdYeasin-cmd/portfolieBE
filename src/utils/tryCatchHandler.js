const tryCatchHandler = (controllerFunction) => {
    return (req, res, next) => {
        Promise.resolve(controllerFunction(req, res, next)).catch((error) => next(error));
    }
}

export default tryCatchHandler;