import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/transmission.css';


const Transmission = () => {
  const [transfers, setTransfers] = useState([]);
  const [transferData, setTransferData] = useState({
    dateEnvoi: new Date(),
    destination: '',
    typeMateriel: '',
    nomEnvoyant: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransferData({ ...transferData, [name]: value });
  };

  const handleDateChange = (date) => {
    setTransferData({ ...transferData, dateEnvoi: date });
  };

  const saveTransfer = () => {
    const { destination, typeMateriel, nomEnvoyant } = transferData;
    if (destination && typeMateriel && nomEnvoyant) {
      const newTransfer = { ...transferData };
      setTransfers([...transfers, newTransfer]);

      // Réinitialisation des données du transfert
      setTransferData({
        dateEnvoi: new Date(),
        destination: '',
        typeMateriel: '',
        nomEnvoyant: '',
      });
    } else {
      alert('Veuillez remplir tous les champs du transfert.');
    }
  };

  return (
    <div>
      <h2>Gestion des Transferts de Matériel</h2>
      <form>
        <label>Date d'envoi:</label>
        <DatePicker
          selected={transferData.dateEnvoi}
          onChange={handleDateChange}
        />

        <label>Destination:</label>
        <input
          type="text"
          name="destination"
          value={transferData.destination}
          onChange={handleInputChange}
        />

        <label>Type de matériel:</label>
        <input
          type="text"
          name="typeMateriel"
          value={transferData.typeMateriel}
          onChange={handleInputChange}
        />

        <label>Nom de l'envoyant:</label>
        <input
          type="text"
          name="nomEnvoyant"
          value={transferData.nomEnvoyant}
          onChange={handleInputChange}
        />

        <button type="button" onClick={saveTransfer}>
          Enregistrer le transfert
        </button>
      </form>

      <div>
        <h3>Liste des Transferts</h3>
        {transfers.length === 0 ? (
          <p>Aucun transfert enregistré.</p>
        ) : (
          <ul>
            {transfers.map((transfer, index) => (
              <li key={index}>
                <strong>Date d'envoi:</strong> {transfer.dateEnvoi.toISOString().split('T')[0]},{' '}
                <strong>Destination:</strong> {transfer.destination},{' '}
                <strong>Type de matériel:</strong> {transfer.typeMateriel},{' '}
                <strong>Nom de l'envoyant:</strong> {transfer.nomEnvoyant}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Transmission;
