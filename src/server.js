import express from "express";

const PORT = 4000;

const app = express();

const handleHome = () => console.log("Somebody is trying to go home.");

// 아래와 같은 의미 app.get("/", () => console.log("Somebody is trying to go home.")) // 반드시 함수를 보내야 실행됨.
 app.get("/", handleHome) // 반드시 함수를 보내야 실행됨.


const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);