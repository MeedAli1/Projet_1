import React from 'react';
import './DashboardStudent.css';

function DashboardStudent() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Bienvenue sur votre Tableau de Bord</h2>
      </div>

      <div className="dashboard-card">
        <div className="card-title">Informations de l'étudiant</div>
        <div className="card-content">
          <p><strong>Nom :</strong> Mohamed Ali</p>
          <p><strong>Email :</strong> mohamedali@example.com</p>
          <p><strong>Rôle :</strong> Étudiant</p>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-title">Vos Cours</div>
        <table className="table table-dashboard">
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
  );
}

export default DashboardStudent;
