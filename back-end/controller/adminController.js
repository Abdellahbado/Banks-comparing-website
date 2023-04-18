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

const getPrestation = async (req,res,next) => {
    try {
        let id1 = req.params.id_pres;
        let id2 = req.params.id_bank;
        let [Prestation, __] = await Banques.getPrestationById(id1,id2);
        res.status(200).json(Prestation);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const ajouterBanque = async (req,res,next) => {
    try {
        await Banques.addBanque(req.body);
        res.send("Banque a été bien ajouté");
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const ajouterPrestation = async (req,res,next) => {
    try {
        await Banques.addPrestation(req.body);
        res.send("La prestation a été bien ajouté");
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const modifierBanque = async (req,res,next) => {
    try {
        await Banques.updateBanque(req.body);
        res.send("Banque a été bien modifié");
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const ModifierPrestations = async (req,res,next) => {
    try {
        await Banques.upadatePrestation(req.body);
        res.send("prestations est bien modifié");
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const supprimerBanque = async (req,res,next) => {
    try {
        await Banques.deleteBanque(req.body);
        res.send("Banque a été supprimer");
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const supprimerPrestation = async (req,res,next) => {
    try {
        await Banques.deletePrestation(req.body);
        res.send("Prestation a été supprimer");
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports = {getBanques,
                  ajouterBanque,
                  modifierBanque,
                  ajouterPrestation,
                  ModifierPrestations,
                  supprimerBanque,
                  supprimerPrestation,
                  getPrestation
}; 

