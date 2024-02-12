"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorController = void 0;
const errorController = (err, req, res, next) => {
    if (err.status && +String(err.status)[0] === 4) {
        return res.render("partials/error", {
            title: "Error",
            message: err.message,
        });
    }
    return res.status(err.status || 500).send(err.message);
};
exports.errorController = errorController;
