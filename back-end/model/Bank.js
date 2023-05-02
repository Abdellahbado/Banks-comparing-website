const DB = require("../config/DB");
const bcrypt = require('bcrypt');

class Banque {

    constructor(nom_banque, siege, telephone, fax, logo){
        this.nom_banque=nom_banque;
        this.siege=siege;
        this.telephone=telephone;
        this.fax=fax;
        this.logo=logo;
    }

    static getBanks (){
        let sql = "SELECT * FROM Banque;";
        let data = DB.execute(sql);
        return data;
    }


    static addBanque(id,data) {
        let sql = `INSERT INTO Banque(Banque_id, Nom_banque, Siege_social, Telephone, Fax) VALUES(${id} ,  "${data.Nom_banque}", "${data.Siege_social}", ${data.Telephone}, ${data.Fax});`;
        DB.execute(sql);
    }

    static updateBanque(id, data){
        let sql = `UPDATE Banque SET Nom_banque="${data.Nom_banque}", Siege_social="${data.Siege_social}", Telephone=${data.Telephone}, Fax=${data.Fax} WHERE Banque_id=${id};`;
        DB.execute(sql);
    }

    static deleteBanque(id){
        let sql = `DELETE FROM Banque WHERE Banque_id=${id}`;
        DB.execute(sql);
    }

    static addPrestation(data) {
        let sql = `INSERT INTO prestations(pres_id, pres_nom, pres_type, frais, bank_id) VALUES(${data.pres_id} ,  "${data.pres_nom}", "${data.pres_type}", ${data.frais}, ${data.bank_id});`;
        DB.execute(sql);
    }

    static async upadatePrestation(id,data){
        for (let index = 0; index < data.length; index++) {
            let sql = `UPDATE prestations SET frais="${data[index].frais}" WHERE pres_id=${data[index].pres_id} AND bank_id=${id};`
            await DB.execute(sql);          
        }
    }

    static deletePrestation(data){
        let sql = `DELETE FROM Prestations WHERE pres_id=${data.pres_id} AND bank_id=${data.bank_id}`;
        DB.execute(sql);
    }

    static getById (id) {
        let sql = `SELECT * FROM Banque WHERE Banque_id = ${id};`;
        return DB.execute(sql);
    }

    static getPrestationById (id) {
        let sql = `SELECT pres_id,pres_nom,frais FROM prestations WHERE bank_id = ${id};`;
        return DB.execute(sql);
    }

    static async foundUser (userName){
        let  sql = `SELECT EXISTS(SELECT * FROM Adminstrateur WHERE Nom='${userName}') AS user_exists;`;
        let [data,_] = await DB.execute(sql);
        return data[0].user_exists;
    }

    static async foundPwd (userName,pwd){
        let  sql = `SELECT * FROM Adminstrateur WHERE Nom='${userName}';`;
        let data = await DB.execute(sql);
        const match = await bcrypt.compare( pwd,data[0][0].Mot_de_passe);
        if(match){
            return 1;
        }
        else{
            return 0;
        }
    }
}


module.exports = Banque ;