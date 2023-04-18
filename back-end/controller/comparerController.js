const Banques = require("../model/Bank");


const getBanque =  async (req,res,next) =>  {
    try {
        let BanqueID = req.params.id;
        let [Prestation, __] = await Banques.getPrestationById(BanqueID);
        res.status(200).json(Prestation);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = {getBanque }; 
