const express = require("express");
const path = require("path");
const userRoutes = require("./userRoutes");

const port = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
