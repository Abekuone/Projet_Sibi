import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Affectation = () => {
  // États locaux pour gérer les valeurs des champs
  const [beneficiaire, setBeneficiaire] = useState({
    agence: '',
    direction: '',
    service: '',
    fonction: '',
    utilisateur: '',
  });

  const [affectation, setAffectation] = useState('');
  const [autreAffectation, setAutreAffectation] = useState('');

  const [materiel, setMateriel] = useState({
    type: '',
    autreType: '',
    fabricant: '',
    modele: '',
    numeroSerie: '',
  });

  // Gestionnaire d'événements pour mettre à jour l'état du bénéficiaire
  const handleBeneficiaireChange = (e) => {
    const { name, value } = e.target;
    setBeneficiaire((prev) => ({ ...prev, [name]: value }));
  };

  // Gestionnaire d'événements pour mettre à jour l'état de l'affectation
  const handleAffectationChange = (e) => {
    const selectedAffectation = e.target.value;
    setAffectation(selectedAffectation);

    // Réinitialiser la valeur de l'autre affectation si ce n'est pas "Autre"
    if (selectedAffectation !== 'Autre') {
      setAutreAffectation('');
    }
  };

  // Gestionnaire d'événements pour mettre à jour l'état de l'autre affectation
  const handleAutreAffectationChange = (e) => {
    setAutreAffectation(e.target.value);
  };

  // Gestionnaire d'événements pour mettre à jour l'état du matériel
  const handleMaterielChange = (e) => {
    const { name, value } = e.target;
    setMateriel((prev) => ({ ...prev, [name]: value }));
  };

  const [dateAffectation, setDateAffectation] = useState(null);

  // Gestionnaire d'événements pour mettre à jour la date d'affectation
  const handleDateAffectationChange = (date) => {
    setDateAffectation(date);
  };

  // Gestionnaire d'événements pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer des actions avec les données du formulaire
    console.log('Formulaire soumis :', { beneficiaire, affectation, autreAffectation, materiel });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Informations sur le bénéficiaire */}
      <div>
        <h2>Fiche d'Affectation Du Materiel</h2>
        <label>
          Agence:
          <select value={affectation} onChange={handleAffectationChange}>
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
            
          </select>
        </label>
        
        <label>
          Direction:
      <select value={affectation} onChange={handleAffectationChange}>
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
          </select>
        </label>
        <label>
          Service:
          <input type="text" name="service" value={beneficiaire.service} onChange={handleBeneficiaireChange} />
        </label>
        <label>
          Fonction:
          <input type="text" name="fonction" value={beneficiaire.fonction} onChange={handleBeneficiaireChange} />
        </label>
        <label>
          Utilisateur:
          <input type="text" name="utilisateur" value={beneficiaire.utilisateur} onChange={handleBeneficiaireChange} />
        </label>
      </div>

      {/* Objet de l'affectation */}
      <div>
        <h2>Objet de l'affectation</h2>
        <label>
          Affectation:
          <select value={affectation} onChange={handleAffectationChange}>
            <option value="">Nouvel uttilisateur</option>
            <option value="">reaffectation(ancien propriétaire)</option>
            <option value="">depannage</option>
            
          </select>
        </label>
        {affectation === 'Autre' && (
          <label>
            Précisez :
            <input type="text" value={autreAffectation} onChange={handleAutreAffectationChange} />
          </label>
        )}
      </div>

      {/* Caractéristiques du matériel */}
      <div>
        <h2>Caractéristiques du matériel</h2>
        <label>
          Type de matériel:
          <select name="type" value={materiel.type} onChange={handleMaterielChange}>
            <option value="">Sélectionnez une option</option>
            <option value="unite centrale">Unité centrale</option>
            <option value="moniteur">Moniteur</option>
            <option value="ordinateur portable">Ordinateur portable</option>
            <option value="imprimante">Imprimante</option>
            <option value="scanner">Scanner</option>
            <option value="Autre">Autre(a preciser)</option>
          </select>
        </label>
        {materiel.type === 'Autre' && (
          <label>
            Précisez :
            <input type="text" name="autreType" value={materiel.autreType} onChange={handleMaterielChange} />
          </label>
        )}
        <label>
          Fabricant:
          <input type="text" name="fabricant" value={materiel.fabricant} onChange={handleMaterielChange} />
        </label>
        <label>
          Modèle:
          <input type="text" name="modele" value={materiel.modele} onChange={handleMaterielChange} />
        </label>
        <label>
          Numéro de série:
          <input type="text" name="numeroSerie" value={materiel.numeroSerie} onChange={handleMaterielChange} />
        </label>
      
      {/* Date d'affectation */}
      
        <h2>Date d'affectation</h2>
        <label>
          Sélectionnez la date d'affectation:
          <DatePicker
            selected={dateAffectation}
            onChange={handleDateAffectationChange}
            dateFormat="dd/MM/yyyy"
          />
        </label>

      </div>

      {/* Bouton de soumission du formulaire */}
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default Affectation;
