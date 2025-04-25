import React from 'react';

const DashboardTeacher = () => {
  return (<div className="d-flex">
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
    <div className="container">
      <h1 className="text-center my-4">Tableau de bord enseignant</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Bienvenue sur votre tableau de bord</h5>
          <p>Vous êtes maintenant connecté en tant qu'enseignant.</p>
        </div>
      </div>
    </div>  
  </div>
   
  );
};

export default DashboardTeacher;
