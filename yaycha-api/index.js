const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const prisma = require("./prismaClient");

const cors = require("cors");
app.use(cors());

const {contentRouter} = require("./routers/content");
app.use("/content", contentRouter);

const {userRouter} = require("./routers/user");
app.use("/", userRouter);

app.get("/info", (req,res) =>{
    res.json("yaycha api ");
});

const server = app.listen(8000, () => {
    console.log("yaycha api is running on local host 8000");
});

const gracefulShutdown = async () => {
    await prisma.$disconnect();
    
    server.close(() => {
        console.log("yaycha api closed");
        process.exit(0);
    });
};
   process.on("SIGTERM", gracefulShutdown);
   process.on("SIGINT", gracefulShutdown);

