const courseRouter = require("express").Router()

courseRouter.get("/course",async (req,res)=>{
try {
    const course = await course.find();
    res.send(course);
} catch (error) {
    res.status(201).json(error);
}
})


courseRouter.get("/lesson",(req,res)=>{
    var arr = ["math", "english"];
    res.send(arr);
    })
module.exports = courseRouter;