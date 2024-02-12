"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendHTMXRedirect = void 0;
const sendHTMXRedirect = (req, res, next, route) => {
    const jsRedirect = `<script>window.location.href = "${route}";</script>`;
    res.setHeader("Content-Type", "text/html");
    return res.send(jsRedirect);
};
exports.sendHTMXRedirect = sendHTMXRedirect;
