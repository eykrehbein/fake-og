const express = require("express");
const app = express();

app.get("/", (req, res) => {
    if (req.headers["user-agent"].includes("Twitterbot")) {
        res.setHeader("Location", "https://x.ai");

        return;
    }

    res.redirect(301, "https://chat.openai.com");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
