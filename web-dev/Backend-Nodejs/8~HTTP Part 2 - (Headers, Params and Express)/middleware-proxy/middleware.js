import express from "express";

const app = express();
app.use(express.json());//express.json() middleware to parse JSON bodies
// cors middleware
app.use(cors())
app.use(cors({ origin: "http://localhost:5173" }));  
app.use((req, res, next) => {
    req.name = "nithen"
    next();
});

app.get("/sum", function (req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

// Route specific middlewares
function logRequest(req, res, next) {
    console.log(`Request made to: ${req.url}`);
    const access = true;
    if(access==true){
        next();
    }else{
        res.json({
            message: "Access denied"
        })
    }
}
app.get('/special', logRequest, (req, res) => {
    res.send('This route uses route-specific middleware!');
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})


