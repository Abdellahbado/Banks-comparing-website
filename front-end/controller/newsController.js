
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


module.exports = {getNews};