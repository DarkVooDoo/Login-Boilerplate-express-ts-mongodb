"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const App = express_1.default();
const PORT = 8080;
App.listen(PORT, () => {
    console.log('Server Running on PORT: ' + PORT);
});
