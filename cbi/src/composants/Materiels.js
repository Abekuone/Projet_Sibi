import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/materiels.css';

function Materiels() {
  useEffect(()=> {
    fetch(' ')
  }, [])
  const [typeMateriel, setTypeMateriel] = useState('');
  const [numeroSerie, setNumeroSerie] = useState('');
  const [modeleMateriel, setModeleMateriel] = useState('');
  const [fabricantMateriel, setFabricantMateriel] = useState('');
  const [dateReception, setDateReception] = useState(new Date());
  const [nombreMateriels, setNombreMateriels] = useState ('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      typeMateriel,
      numeroSerie,
      modeleMateriel,
      fabricantMateriel,
      dateReception,
      nombreMateriels,
     
    });

    setTypeMateriel('');
    setNumeroSerie('');
    setModeleMateriel('');
    setFabricantMateriel('');
    setDateReception(new Date());
    setNombreMateriels(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type de matériel:</label>
        <select
          value={typeMateriel}
          onChange={(e) => setTypeMateriel(e.target.value)}
        >
          <option value="ordinateur">Ordinateur portable</option>
          <option value="unite centrale">Unite centrale</option>
          <option value="imprimante">Imprimante</option>
          <option value="scanner">Scanner</option>
          <option value="moniteur">moniteur</option>
          {/* Ajoutez d'autres options selon vos besoins */}
        </select>
      </div>

      <div>
        <label>Numéro de série:</label>
        <input
          type="text"
          value={numeroSerie}
          onChange={(e) => setNumeroSerie(e.target.value)}
        />
      </div>

      <div>
        <label>Modèle du matériel:</label>
        <input
          type="text"
          value={modeleMateriel}
          onChange={(e) => setModeleMateriel(e.target.value)}
        />
      </div>

      <div>
        <label>Fabricant du matériel:</label>
        <input
          type="text"
          value={fabricantMateriel}
          onChange={(e) => setFabricantMateriel(e.target.value)}
        />
      </div>

      <div>
        <label>Date de réception:</label>
        <DatePicker selected={dateReception} onChange={(date) => setDateReception(date)} />
      </div>

      <div>
        <label>
          nombre de Materiels
        </label>
        <input
        type="number"
        value={nombreMateriels}
        onChange={(e) =>setNombreMateriels(e.target.value)}/>
      </div>

      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default Materiels;
