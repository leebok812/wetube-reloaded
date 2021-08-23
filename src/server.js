import express from "express";

const PORT = 4000;

const app = express();

const routerLogger = (req, res, next) => {
    console.log("PATH : ", req.path);
    next();
}

const methodLogger =(req, res, next) => {
    console.log("METHOD : ", req.method);
    next();
}

const home = (req, res) => {
    console.log("I will respond.");
    return res.send("Hello.");
}

const login = (req, res) => {
    return res.send("Login.");
}
app.use(methodLogger,routerLogger); // 이렇게 사용 할 경우 순서 중요!
app.get("/",home );
app.get("/login",login);


// const logger = (req, res, next) => { // 모든 handler( controller ) 는 middleware가 될 수 있지만 next 함수를 호출해야지만 middleware이다.
//     console.log(`${req.method} ${req.url}`); // middleware는 작업을 다음 함수에게 넘기는 함수이다. 응답하는 함수가 아니라.
//     next();
// }

// const privateMiddleware = (req, res, next) => {
//     const url = req.url;
//     if(url === "/protected"){ 
//         return res.send("<h1>Not Allowed</h1>");
//     }else{
//         console.log("Allowed, you may continue.");
//         next();
//     }
// }


// const handleHome = (req, res) => {
//     // return  res.end(); 
//       return res.send("<h1>I love middlewares</h1>"); // HTML 보내기 가능. 가능하지만 추천 x
// };

// const handleLogin = (req, res) => {
//     return res.send({ message : "Login here."}); // JSON 보내기 가능
// }

// 
// // app.use(logger) // middleware를 use하는 게 먼저오고, 그 다음에 URL의 get이 와야함 <순서>  이렇게 밖으로 빼주면 모든 route에서 이 함수를 사용하게 된다.
//  app.use(privateMiddleware)

// // 아래와 같은 의미 app.get("/", () => console.log("Somebody is trying to go home.")) // 반드시 함수를 보내야 실행됨.
//  app.get("/",logger, handleHome) // 반드시 함수를 보내야 실행됨. || / 실행 후 logger 실행후 ( next로 다음거로 보냄) handleHome 이 마지막으로 얘는 middleware가 아님
//  app.get("/login", handleLogin)

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);