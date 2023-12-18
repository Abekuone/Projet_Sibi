import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [isUserListVisible, setIsUserListVisible] = useState(false);

  const generatePassword = () => {
    // Générer un mot de passe aléatoire (à des fins de démonstration uniquement)
    return Math.random().toString(36).substring(7);
  };

  const handleCreateUser = () => {
    const newPassword = generatePassword();

    // Créer un nouvel utilisateur avec un mot de passe automatique
    const newUser = {
      id: Date.now(),
      name: newUserName,
      password: newPassword,
    };

    // Mettre à jour la liste des utilisateurs
    setUsers([...users, newUser]);

    // Réinitialiser le champ du nom d'utilisateur
    setNewUserName('');
  };

  const handleDeleteUser = (userId) => {
    // Filtrer la liste pour exclure l'utilisateur à supprimer
    const updatedUsers = users.filter(user => user.id !== userId);

    // Mettre à jour la liste des utilisateurs
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>Créer un utilisateur</h2>
      <div>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button onClick={handleCreateUser}>Créer</button>
      </div>

      <h2>Liste des utilisateurs</h2>
      <button onClick={() => setIsUserListVisible(!isUserListVisible)}>
        {isUserListVisible ? 'Fermer la liste' : 'Ouvrir la liste'}
      </button>

      {isUserListVisible && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - Mot de passe : {user.password}
              <button onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserManagement;
