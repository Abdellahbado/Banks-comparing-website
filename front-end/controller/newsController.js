
const Banques = require("../model/Bank");
 
 const getNews =  async (req,res,next) =>  {
        try {
            const [NewsBank, _] = await Banques.getNews();
            res.status(200).json(NewsBank);
        } catch (error) {
            console.log(error);
            next(error);
        }
}

const getNewsById =  async (req,res,next) =>  {
    try {
        let id = req.params.id;
        const [NewsBank, _] = await Banques.getNewsById(id);
        res.status(200).json(NewsBank);
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports = {getNews,getNewsById};