import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => { // 모든 handler( controller ) 는 middleware가 될 수 있지만 next 함수를 호출해야지만 middleware이다.
    console.log(`Someone is going to : ${req.url}`); // middleware는 작업을 다음 함수에게 넘기는 함수이다. 응답하는 함수가 아니라.
    next();
}

const handleHome = (req, res) => {
    // return  res.end(); 
      return res.send("<h1>I love middlewares</h1>"); // HTML 보내기 가능. 가능하지만 추천 x
};

const handleLogin = (req, res) => {
    return res.send({ message : "Login here."}); // JSON 보내기 가능
}

// 아래와 같은 의미 app.get("/", () => console.log("Somebody is trying to go home.")) // 반드시 함수를 보내야 실행됨.
 app.get("/",gossipMiddleware, handleHome) // 반드시 함수를 보내야 실행됨.
 app.get("/login", handleLogin)

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);