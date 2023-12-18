import React from 'react';


function Connexion() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Connexion</h1>
        <form>
          <label>
            Nom d'utilisateur:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Mot de passe:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Se connecter</button>
        </form>
      </header>
    </div>
  );
}

export default Connexion;
