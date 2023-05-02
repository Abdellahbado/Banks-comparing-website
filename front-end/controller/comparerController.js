const Banques = require("../model/Bank");


const getComparerPres =  async (req,res,next) =>  {
    try {
        let Bank1 = req.params.id1;
        let Bank2 = req.params.id2;
        let [Banque1,_] = await Banques.getComparer(Bank1);
        let [Banque2,__] = await Banques.getComparer(Bank2);
        res.status(200).json({Banque1,Banque2});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = {
    getComparerPres
};
