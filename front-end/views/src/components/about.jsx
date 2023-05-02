import React from 'react';
import pic from './bnk2.jpg'
import me from './me.png'

const Aboutus = () => {
  return (
    <div className="contain">
      <div className='head'>
      <h1 className='tit' >ABOUT <br /> US </h1>
        <img  className='pic' src= {pic} alt="" />
        

      </div>
      <div className='objet'>
      <h1 className='notr' >Quelle est notre objectif ?</h1>
       <p className='para'>
       Nous sommes une équipe de professionnels dédiés à aider les consommateurs à trouver la banque qui convient le mieux à leurs besoins. Nous comprenons que choisir une banque peut être une décision difficile et intimidante, car il y a tant de choix et de variables à considérer. C'est pourquoi nous avons rassemblé une équipe de spécialistes qui travaillent dur pour fournir des informations précises et impartiales sur les différentes banques, leurs services et leurs produits. Nous sommes déterminés à aider nos clients à prendre des décisions financières éclairées en leur offrant des analyses comparatives et des commentaires approfondis sur les produits bancaires les plus populaires. Que vous cherchiez une banque pour gérer votre compte courant, épargner de l'argent, investir ou obtenir un prêt, nous sommes là pour vous aider à trouver la banque qui convient le mieux à vos besoins financiers
       </p>
      
       
       <div className='g3' >
       <h1 className='notr'>Notre equipe :</h1>
       <div className='equipe'> 
      
         <div className='personne'>
         <img className='me' src= {me}alt="" />
          <p className='data'> NAME : GOUASMI</p>
           <p className='data'> PRENOM : Yassine </p>
            <p className='data'> TEL : +213551724106 </p>    
            <p className='data'> MAIL : ly_gouasmi@esi.dz</p>         
         </div>
         <div className='personne2'>
         <img className='me' src= {me}alt="" />
          <p className='data'> NAME : BENOSTMANE</p>
           <p className='data'> PRENOM : Fadhel </p>
            <p className='data'> TEL : +213558926852 </p>    
            <p className='data'> MAIL : lf_benostmane@esi.dz</p>         
         </div>
         <div className='personne'>
         <img className='me' src= {me}alt="" />
          <p className='data'> NAME : ARAB</p>
           <p className='data'> PRENOM : Hamza </p>
            <p className='data'> TEL : +213542258038 </p>    
            <p className='data'> MAIL : la_arab@esi.dz</p>         
         </div>
        </div> 
         <div className='equipe'> 
       <div className='personne3'>
         <img className='me' src= {me}alt="" />
          <p className='data'> NAME : BOUKOUFFALLAH</p>
           <p className='data'> PRENOM : Abdallah</p>
            <p className='data'> TEL : +213666646561 </p>    
            <p className='data'> MAIL : la_boukouffallah@esi.dz</p>         
         </div>
         <div className='personne2'>
         <img className='me' src= {me}alt="" />
          <p className='data'> NAME : CHERFA</p>
           <p className='data'> PRENOM : Moahmed  </p>
            <p className='data'> TEL : +213551458756 </p>    
            <p className='data'> MAIL : lm_cherfa@esi.dz</p>         
         </div>
         <div className='personne'>
         <img className='me' src= {me}alt="" />
          <p className='data'> NAME : BOUBENIA</p>
           <p className='data'> PRENOM : Walid  </p>
            <p className='data'> TEL : +213541789654 </p>    
            <p className='data'> MAIL : lw_boubenia@esi.dz</p>         
         </div>
       </div>
      </div>
      </div>
      </div>
    
      

  );
}

export default Aboutus;







