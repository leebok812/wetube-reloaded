import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    // return  res.end(); 서버에서 사용자로 보낼것이 없이 끝냄
      return res.send("<h1>I still love you.</h1>"); // HTML 보내기 가능. 가능하지만 추천 x
};

const handleLogin = (req, res) => {
    return res.send({ message : "Login here."}); // JSON 보내기 가능
}

// 아래와 같은 의미 app.get("/", () => console.log("Somebody is trying to go home.")) // 반드시 함수를 보내야 실행됨.
 app.get("/", handleHome) // 반드시 함수를 보내야 실행됨.
 app.get("/login", handleLogin)

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);