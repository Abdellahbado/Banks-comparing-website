const DB = require("../config/DB");

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


    static addBanque(data) {
        let sql = `INSERT INTO Banque(Banque_id, Nom_banque, Siege_social, Telephone, Fax) VALUES(${data.Banque_id} ,  "${data.Nom_banque}", "${data.Siege_social}", ${data.Telephone}, ${data.Fax});`;
        DB.execute(sql);
    }

    static updateBanque(data){
        let sql = `UPDATE Banque SET Nom_banque="${data.Nom_banque}", Siege_social="${data.Siege_social}", Telephone=${data.Telephone}, Fax=${data.Fax} WHERE Banque_id=${data.Banque_id};`;
        DB.execute(sql);
    }

    static deleteBanque(data){
        let sql = `DELETE FROM Banque WHERE Banque_id=${data.Banque_id}`;
        DB.execute(sql);
    }

    static addPrestation(data) {
        let sql = `INSERT INTO prestations(pres_id, pres_nom, pres_type, frais, bank_id) VALUES(${data.pres_id} ,  "${data.pres_nom}", "${data.pres_type}", ${data.frais}, ${data.bank_id});`;
        DB.execute(sql);
    }

    static upadatePrestation(data){
        let sql = `UPDATE Prestations SET pres_nom="${data.pres_nom}", pres_type="${data.pres_type}", frais=${data.frais} WHERE pres_id=${data.pres_id} AND bank_id=${data.bank_id};`
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
        let sql = `SELECT * FROM prestations WHERE bank_id = ${id};`;
        return DB.execute(sql);
    }

    /*static getPrestationById (id1,id2) {
        let sql = `SELECT * FROM prestations WHERE pres_id=${id1} AND bank_id = ${id2};`;
        return DB.execute(sql);
    }*/

    static filtrer(presId,min,max){
        let sql = `SELECT * FROM Banque 
                   WHERE Banque.Banque_id IN (
                      SELECT bank_id FROM prestations
                      WHERE prestations.pres_id=${presId} AND prestations.frais >= ${min} AND prestations.frais <=${max} );`;
        return DB.execute(sql);
    }

    static Tri(id){
        let sql = `SELECT * FROM Banque 
                   WHERE Banque_id IN (
                   SELECT bank_id FROM prestations 
                   WHERE prestations.pres_id=${id}
                   ORDER BY prestations.frais
                   );`;
        return DB.execute(sql);
    }

}


module.exports = Banque ;