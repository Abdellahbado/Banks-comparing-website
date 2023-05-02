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

const getPrestations = async (req,res,next) => {
    try {
        let id = req.params.id;
        let [Prestation, _] = await Banques.getPrestationById(id);
        res.status(200).json(Prestation);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const ajouterBanque = async (req,res,next) => {
    try {
        let id = req.params.id;
        await Banques.addBanque(id, req.body);
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
        let id = req.id;
        await Banques.updateBanque(id,req.body);
        res.send("Banque a été bien modifié");
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const ModifierPrestations = async (req,res,next) => {
    try {
        let banque = req.params.id;
        await Banques.upadatePrestation(banque,req.body);
        res.send("prestations est bien modifié");
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const supprimerBanque = async (req,res,next) => {
    try {
        let id = req.params.id;
        await Banques.deleteBanque(id);
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
                  getPrestations
}; 

