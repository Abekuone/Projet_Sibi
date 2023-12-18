// Formulaire.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';



const Sortie = () => {
  const [formData, setFormData] = useState({
    agence: '',
    direction: '',
    utilisateur: '',
    typeMateriel: '',
    panneProbable: '',
    nomSociete: '',
    nomRepresentant: '',
    cnibRepresentant: '',
    autresEnregistrements: '',
    tachesEffectuees: '',
    dateSortie: null,
    dateRetour: null,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/sortie', formData);

        if (response.status ===201) {
          console.log('formulaire soumis avec succes !');
          // reinitialisez le formulaire apres la soumission si necessaire
          setFormData({/*vos valeurs initiales ici*/});
        }else {
          console.error('erreur lors de la soumission du formulaire');
        }
      } catch (error ) {
          console.error('erreur:' ,error);
        }
      };

  

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h2>Informations sur le propriétaire</h2>
        <label>
    Agence:
    <select name="agence" value={formData.agence} onChange={handleChange}>
    <option value="">Sélectionnez une Agence</option>
    <option value="12030"> BAGRE </option>
    <option value="03018"> BANFORA </option>
    <option value="10046"> BEGUEDO </option>
    <option value="01025"> BENDOGO </option>
    <option value="12014"> BITOU </option>
    <option value="01062"> BOASSA </option>
    <option value="02003"> BOBO </option>
    <option value="02053"> BOBO BARAKA </option>
    <option value="02041"> BOBO 3</option>
    <option value="02015"> BOBO 2</option>
    <option value="02044"> BOBO 4 </option>
    <option value="01043"> BONHEUR VILLE </option>
    <option value="13055"> BOROMO </option>
    <option value="01037"> CBI BARAKA </option>
    <option value="12033"> CINKANSSE </option>
    <option value="01005"> CISSIN </option>
    <option value="99002"> CORIS MONEY </option>
    <option value="08032"> DANO </option>
    <option value="01011"> DASSASGO </option>
    <option value="04013"> DEDOUGOU </option>
    <option value="06023"> DJIBO </option>
    <option value="15016"> DORI</option>
    <option value="09021"> FADA</option>
    <option value="16017"> GAOUA</option>
    <option value="12058">GARANGO</option>
    <option value="01059"> GARE ROUTIERE</option>
    <option value="01007"> GOUNGHIN</option>
    <option value="01028"> HAMDALAYE</option>
    <option value="10051"> HOUNDE</option>
    <option value="01061">KARPALA</option>
    <option value="11009">KAYA</option>
    <option value="48063">KOMBISSIRI</option>
    <option value="11026">KONGOUSSI</option>
    <option value="05004">KOUDOUGOU</option>
    <option value="05042">KOUDOUGOU ACADEMIA</option>
    <option value="17038">  KOUPELA</option>
    <option value="01001">KWAME NKROUMA</option>
    <option value="01031">MANDELA</option>
    <option value="48047">MANGA</option>
    <option value="17057">MOGTEDO</option>
    <option value="01050"> NAGRIN</option>
    <option value="01056"> NIOKO</option>
    <option value="01000"> NOUVELLE</option>
    <option value="01029"> OUAGA 2000 </option>
    <option value="06022"> OUAHIGOUYA</option>
    <option value="12045"> OUARGAYE</option>
    <option value="01040"> PAUL VI</option>
    <option value="01020"> PISSY</option>
    <option value="01048">PLATINIUM</option>
    <option value="07012">POUYTENGA</option>
    <option value="99001">RODWOOKO</option>
    <option value="01006">SANKARYARE</option>
    <option value="01019">SIAO</option>
    <option value="99000"> SITE CENTRAL</option>
    <option value="01035"> SOMGANDE</option>
    <option value="01008"> TAMPOUY</option>
    <option value="01034"> TANGHIN</option>
    <option value="12024"> TENKODOGO</option>
    <option value="01039"> THEATRE POPULAIRE</option>
    <option value="24049"> TOUGAN</option>
    <option value="01027"> TRAME</option>
    <option value="42052"> YAKO</option>
    <option value="01002"> YENNEGA</option>
    <option value="48060"> ZABRE</option>
    <option value="01036"> ZAD</option>
    <option value="01054"> ZINIARE</option>
    <option value="01010"> 1200 LOGEMENTS</option>
      {/* Ajoutez d'autres options au besoin */}
    </select>
  </label>
  <label>
    Direction:
    <select name="direction" value={formData.direction} onChange={handleChange}>
    <option value="">Sélectionnez une Direction</option>
      <option value="direction1">Direction des Operations</option>
      <option value="direction2">Direction de la Tresorerie</option>
      <option value="direction3">Direction des Engagements</option>
      <option value="direction4">Direction de la clientelle Entreprise</option>
      <option value="direction5">Direction des Finances et de la Comptabilite</option>
      <option value="direction6">Direction des Affaires Juridiques et du Contentieux</option>
      <option value="direction7">Direction de la Banque Digitale</option>
      <option value="direction8">Direction du Controle premanent</option>
      <option value="direction9">Direction du Reseau</option>
      <option value="direction10">Departement des Systemes d'Informations</option>
      <option value="direction11">Departement des Moyens Generaux</option>
      <option value="direction12">Departement Syst Management de la Qualite</option>
      <option value="direction13">Departement Organisation et projets</option>
      <option value="direction14">Departement de la Monetique</option>
      <option value="direction15">Departement du Capital Humain</option>
     {/* Ajoutez d'autres options au besoin */}
    </select>
  </label>

        <label>Utilisateur:
          <input type="text" name="utilisateur" value={formData.utilisateur} onChange={handleChange} />
        </label>
         <h2>Caractéristiques du matériel</h2>
        <label>Type de matériel:
          <select name="typeMateriel" value={formData.typeMateriel} onChange={handleChange}>
            <option value="ordinateurPortable">Ordinateur portable</option>
            <option value="scanner">Scanner</option>
            <option value="imprimante">imprimante</option>
          </select>
        </label>

        <h2>Types de panne probable</h2>
        <label>Type de panne probable:
          <input type="text" name="panneProbable" value={formData.panneProbable} onChange={handleChange} />
          
        </label>
      </div>

      <div style={{ flex: 1 }}>
        <h2>Informations sur le Prestataire</h2>
        <label>Nom de la société:
          <input type="text" name="nomSociete" value={formData.nomSociete} onChange={handleChange} />
        </label>
        <label>Nom du représentant:
          <input type="text" name="nomRepresentant" value={formData.nomRepresentant} onChange={handleChange} />
        </label>
        <label> CNIB du représentant:
          <input type="text" name="cnibRepresentant" value={formData.cnibRepresentant} onChange={handleChange} />
        </label>
        <label>Autres enregistrements:
          <textarea name="autresEnregistrements" value={formData.autresEnregistrements} onChange={handleChange}></textarea>
        </label>

        <h2>Tâches effectuées</h2>
        <label>Tâches effectuées:
          <textarea name="tachesEffectuees" value={formData.tachesEffectuees} onChange={handleChange}></textarea>
        </label>
      </div>

      <div style={{ flex: 1 }}>
        <h2>Date de sortie</h2>
        <label>
    Date de sortie:
    <DatePicker
      name="dateSortie"
      selected={formData.dateSortie}
      onChange={(date) => setFormData({ ...formData, dateSortie: date })}
    />
  </label>
        
        
        <h2>Date de retour</h2>
        <label>
    Date de retour:
    <DatePicker
      name="dateRetour"
      selected={formData.dateRetour}
      onChange={(date) => setFormData({ ...formData, dateRetour: date })}
    />
  </label>
        

        <button type="submit">Enregistrer</button>
        
      </div>
    </form>
  );
};

export default Sortie;

