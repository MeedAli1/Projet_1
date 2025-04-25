import React from 'react';
import './NosOffres.css'; // إذا تحب تزوقه أكثر، نعملو CSS خاص
import FAQ from '../components/FAQ';
const offres = [
  {
    id: 1,
    titre: 'Pack Bac Math',
    description: 'Cours + Exercices + Examens corrigés pour les élèves de Bac Math.',
    prix: '99 TND',
    image: '/images/bac-math.jpg'
  },
  {
    id: 2,
    titre: 'Pack Bac Sciences',
    description: 'Préparation complète au Bac Sciences avec vidéos, PDF et QCM.',
    prix: '89 TND',
    image: '/images/bac-sciences.jpg'
  },
  {
    id: 3,
    titre: 'Pack Bac Lettres',
    description: 'Cours interactifs et documents utiles pour réussir le Bac Lettres.',
    prix: '79 TND',
    image: '/images/bac-lettres.jpg'
  },
  {
    id: 4,
    titre: 'Abonnement Mensuel',
    description: 'Accès illimité à tous les cours durant 30 jours.',
    prix: '49 TND/mois',
    image: '/images/abonnement.jpg'
  },
];

function NosOffres() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Nos Offres</h1>
      <div className="row">
        {offres.map((offre) => (
          <div className="col-md-6 col-lg-4 mb-4" key={offre.id}>
            <div className="card h-100 shadow-sm">
              <img src={offre.image} className="card-img-top" alt={offre.titre} />
              <div className="card-body">
                <h5 className="card-title">{offre.titre}</h5>
                <p className="card-text">{offre.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <span className="fw-bold">{offre.prix}</span>
                <button className="btn btn-success btn-sm">S'inscrire</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <FAQ />  {/* FAQ ici */}
    </div>
  );
}

export default NosOffres;
