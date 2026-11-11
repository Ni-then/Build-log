const express = require("express");

const app = express();
//localhost:3000/sum?a=10&b=20
app.get("/sum", function(req, res) {
    const a = req.query.a;
    // Query parameters URL ke end mein ? ke baad aane wala extra data hota hai, jo server ko batata hai ki tumhe kya chahiye.
    const b = req.query.b;
    res.json({
        // ans : a + b // but this will give 1020 if a=10 and b=20 because they are strings, so we need to convert them to numbers
        ans: Number(a) + Number(b)
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a - b
    })
});

app.listen(3000);