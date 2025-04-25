import React from 'react';
import './DashboardStudent.css';

function DashboardStudent() {
  return (
    <div className="d-flex">
  {/* Sidebar */}
  <div id="sidebar" className="d-flex flex-column p-3">
    <h3>Bienvenue</h3>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          Profile
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          Boîte de réception
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          Paramètre
        </a>
      </li>
    </ul>
    <hr />
    <div>
      <a href="#" className="nav-link">
          Déconnexion
      </a>
    </div>
  </div>

  {/* Page content */}
  <div className="dashboard-container">
    <div className="dashboard-header">
      <h2>Bienvenue sur votre Tableau de Bord</h2>
    </div>

    <div className="dashboard-card" >
     <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="card-title">Informations de l'étudiant</div>
          <button className="btn btn-primary mt-3">Visiter le profil</button>
         </div>
        <div className="card-content">
            <p><strong>Nom :</strong> Mohamed Ali</p>
            <p><strong>Email :</strong> mohamedali@example.com</p>
            <p><strong>Rôle :</strong> Étudiant</p>
            <p><strong>Niveau :</strong> License</p>
        </div>
  
      </div>

    <div className="dashboard-card">
      <div className="card-title">Vos Cours</div>
      <table className="table table-dashboard" id="cours">
        <thead>
          <tr>
            <th>#</th>
            <th>Cours</th>
            <th>Date de début</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Introduction à l'IA</td>
            <td>01/05/2025</td>
            <td><button className="dashboard-btn">Accéder</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Développement Web avec React</td>
            <td>05/06/2025</td>
            <td><button className="dashboard-btn">Accéder</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
}

export default DashboardStudent;
