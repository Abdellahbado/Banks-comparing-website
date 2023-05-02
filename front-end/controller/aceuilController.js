
const Banques = require("../model/Bank");
 
 const getBanques =  async (req,res,next) =>  {
        try {
            const [Banks, _] = await Banques.getBanks();
            res.status(200).json(Banks);
        } catch (error) {
            console.log(error);
            next(error);
        }
}

const getBnquesByID =  async (req,res,next) => {
    try {
        let BanqueID = req.params.id;
        let [Banque, _] = await Banques.getById(BanqueID);
        let Prestation = await Banques.getPrestationById(BanqueID);
        res.status(200).json({Banque:Banque[0] , Prestation});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const filtrerById =  async (req,res,next) =>  {
    try {
        let presID = req.params.presId;
        let min = req.params.min;
        let max = req.params.max;
        let [Banque, _] = await Banques.filtrer(presID,min,max);
        res.status(200).json(Banque);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const triByPres = async (req,res,next) => {
    try {
        let pres = req.params.id;
        let Banque = await Banques.Tri(pres);
        res.status(200).json(Banque);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const getPresNom = async (req,res,next) => {
    try {
        let [Prestation, _] = await Banques.getPrestationNom();
        res.status(200).json(Prestation);
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
            getBanques,
            getBnquesByID,
            filtrerById,
            triByPres,
            getPresNom
};

