import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen({ port: port, hostname: "back-end" }, () => {
    console.log(`HTTP server running on http://localhost:${port}`);
});
