import React from 'react';
import './NotreContenu.css';
import FAQ from '../components/FAQ';
const bacs = [
  { nom: 'Mathématiques', image: '/images/bac-math.jpg' },
  { nom: 'Sciences Expérimentales', image: '/images/bac-science.jpg' },
  { nom: 'Lettres', image: '/images/bac-lettres.jpg' },
  { nom: 'Économie et Gestion', image: '/images/bac-eco.jpg' },
  { nom: 'Informatique', image: '/images/bac-info.jpg' },
  { nom: 'Techniques', image: '/images/bac-tech.jpg' }
];

function NotreContenu() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Nos Filières Bac</h1>
      <div className="row justify-content-center">
        {bacs.map((bac, index) => (
          <div className="col-md-2 col-sm-4 col-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={bac.image} className="card-img-top" alt={bac.nom} />
              <div className="card-body text-center">
                <h6 className="card-title">{bac.nom}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <FAQ />  {/* FAQ ici */}
    </div>
  );
}

export default NotreContenu;
