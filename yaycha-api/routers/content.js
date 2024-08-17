const express = require("express");

const router = express.Router();

const prisma = require("../prismaClient");


router.delete("/posts/:id", async (req,res) =>{
      const {id} = req.params;

      await prisma.comment.deleteMany({
         where: {postId: Number(id)},
      });

      await prisma.post.deleteMany({
          where: {id: Number(id)},
      });

      res.sendStatus(204);
});


router.delete("/comments/:id", async (req,res) => {
     const {id} = req.params;

     await prisma.comment.deleteMany({
        where : {id: Number(id)},
     });

     res.sendStatus(204);
});

router.get("/posts", async (req,res) => {
    try{
        const data = await prisma.post.findMany({
           include: {
            user: true,
            comments: true,
           },
           orderBy: {id: "desc"},
           take: 10,
        });
        res.json(data);
        
    }catch(e){
        res.status(500).json({error: e});
    }
});


router.get("/posts/:id", async (req,res) => {
    const {id} = req.params;

    try{
        const data = await prisma.post.findFirst({
            where: {id: Number(id)},
            include: {
              user: true,
              comments: {
                include: {user: true},
              },
            },
        });
        res.json(data);
    }catch(e){
        res.status(500).json({error: e});
    }
})

module.exports = {contentRouter: router};