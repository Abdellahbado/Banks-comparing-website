const DB = require("../../back-end/config/DB");

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

    static getById (id) {
        let sql = `SELECT * FROM Banque WHERE Banque_id = ${id};`;
        return DB.execute(sql);
    }

    static getPrestationById (id) {
        let sql = `SELECT * FROM prestations WHERE bank_id = ${id};`;
        return DB.execute(sql);
    }

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