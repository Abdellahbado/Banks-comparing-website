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
        await Banques.ajouterBanque(id, req.body);
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

const supprimerPrestation = async (req,res,next) => {
    try {
        let id = req.params.id;
        await Banques.deletePrestation(id);
        res.send("La prestation a été bien supprimer");
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

const supprimerNews = async (req,res,next) => {
    try {
        let id = req.params.id;
        await Banques.deleteNews(id);
        res.send(" News a été supprimer");
    } catch (error) {
        console.log(error);
        next(error);
    }
}


/*
const supprimerPrestation = async (req,res,next) => {
    try {
        let presId = req.params.id1;
        let bankId = req.params.id2;
        await Banques.deletePrestation(presId,bankId);
        res.send("Prestation a été supprimer");
    } catch (error) {
        console.log(error);
        next(error);
    }
}*/

const newsTitles = async (req,res,next) => {
    try {
        let [titles,_] = await Banques.newsTitles();
        res.status(200).json(titles);
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const getNews = async (req,res,next) =>{
    try {
        let [news,_] = await Banques.getNews();
        res.status(200).json(news);
    } catch (error) {
        console.log(error);
    }
}

const AjouterNews = async (req,res,next) => {
    try {
        await Banques.addNews(req.body);
        res.sendStatus(200);
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const modifierNews = async (req,res,next) => {
    try {
        let id = req.params.id;
        let data = req.body;
        await Banques.updateNews(data,id);
        res.sendStatus(200);
        
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
                  getPrestations,
                  newsTitles,
                  supprimerNews,
                  AjouterNews,
                  modifierNews,
                  getNews
};