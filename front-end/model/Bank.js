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

    static getComparer(id){
        let sql = `SELECT pres_nom,frais FROM prestations WHERE bank_id=${id} ;`;
        return  DB.execute(sql);
    }

    static getById (id) {
        let sql = `SELECT * FROM Banque WHERE Banque_id = ${id};`;
        return DB.execute(sql);
    }

    static async getPrestationById (id) {
        let sql = `SELECT * FROM prestations WHERE bank_id = ${id};`;
        let data = await DB.execute(sql);
        let prestations = data[0];
        for (let index = 0; index < prestations.length; index++) {
            if (prestations[index].frais === "-1") {
                prestations[index].frais = "La prestation n'existe pas";
            }          
        }
        return prestations;
    }

    static getPrestationNom(){
        let sql = `SELECT pres_id,pres_nom FROM prestations WHERE bank_id=101;`;
        return DB.execute(sql);
    }

    static filtrer(presId,min,max){
        let sql = `SELECT * FROM Banque 
                   WHERE Banque_id IN (
                      SELECT bank_id FROM prestations
                      WHERE pres_id=${presId} AND prestations.frais >= ${min} AND prestations.frais <=${max} );`;
        return DB.execute(sql);
    }

    static async Tri(id){
        let sql=`  SELECT Banque.*,prestations.frais
                   FROM Banque
                   JOIN prestations
                   ON Banque.Banque_id = prestations.bank_id
                   WHERE prestations.pres_id=${id}
                   ORDER BY prestations.frais
                    ;`;
        let data = await DB.execute(sql);
        let prestations = data[0];
        for (let index = 0; index < prestations.length; index++) {
            prestations[index].frais = parseInt(prestations[index].frais);
            
        }
        prestations.sort((a, b) => {
            if (a.frais < b.frais) {
              return -1;
            } else if (a.frais > b.frais) {
              return 1;
            } else {
              return 0;
            }
          });
        return prestations;
    }

    static getNews(){
        let sql = `SELECT news_id,news_titres,news_sous_titres,news_date FROM  NEWS;`;
        return DB.execute(sql);
    }

    static getNewsById(id){
        let sql = `SELECT news_titres,news_sous_titres,news_date,news_contenu FROM NEWS WHERE news_id=${id};`;
        return DB.execute(sql);
    }

}


module.exports = Banque ;