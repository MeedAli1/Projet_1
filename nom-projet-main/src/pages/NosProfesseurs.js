import React from 'react';
import './NosProfesseurs.css'; // Si tu veux ajouter des styles supplémentaires
import FAQ from '../components/FAQ';

function NosProfesseurs() {
  return (
    <div className="container mt-5">
      {/* Titre de la section */}
      <h1 className="text-center mb-4" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333' }}>
        Nos Professeurs
      </h1>

      {/* Paragraphe d'introduction */}
      <p className="text-center lead" style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#555' }}>
        Un contenu précieux et riche sous la supervision des meilleurs professeurs et enseignants de Tunisie. <br />
        La plateforme <strong>we learn</strong> cherche à attirer les meilleurs professeurs et enseignants les plus qualifiés de tout le pays pour accompagner vos enfants dans leur cheminement vers la réussite.
      </p>

      {/* Image principale */}
      <div className="text-center mb-5">
        <img
          src="/images/profs-group.jpg"
          alt="Nos professeurs"
          className="img-fluid rounded shadow"
          style={{
            maxHeight: '600px',
            width: '100%',
            objectFit: 'cover',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      {/* Connaître les professeurs */}
      <div className="mt-5 text-center">
        <h2>Connaissez Nos Professeurs</h2>
        <p className="lead">Voici nos professeurs expérimentés et passionnés, prêts à vous guider dans votre apprentissage.</p>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/images/prof1.jpg" className="card-img-top" alt="Professeur 1" />
            <div className="card-body">
              <h5 className="card-title">Mme Amina Ben Salah</h5>
              <p className="card-text">Spécialiste en Mathématiques. Expérience de plus de 10 ans dans l’enseignement secondaire.</p>
              <a href="/profile/amina" className="btn btn-primary">Voir les profils</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/images/prof2.jpg" className="card-img-top" alt="Professeur 2" />
            <div className="card-body">
              <h5 className="card-title">M. Sami Trabelsi</h5>
              <p className="card-text">Professeur de Sciences expérimenté, passionné par la pédagogie moderne et les outils numériques.</p>
              <a href="/profile/sami" className="btn btn-primary">Voir les profils</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/images/prof3.jpg" className="card-img-top" alt="Professeur 3" />
            <div className="card-body">
              <h5 className="card-title">Mme Leila Gharbi</h5>
              <p className="card-text">Enseignante de Lettres avec une approche personnalisée pour chaque élève.</p>
              <a href="/profile/leila" className="btn btn-primary">Voir les profils</a>
            </div>
          </div>
        </div>
      </div>

      {/* Conseils des Professeurs */}
      <div className="mt-5 text-center">
        <h2>Conseil des Professeurs</h2>
        <p className="lead">Nos professeurs vous offrent des conseils pour réussir vos études et mieux gérer votre apprentissage.</p>
      </div>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Mme Amina Ben Salah</h5>
              <p className="card-text">"Il est essentiel de pratiquer régulièrement pour maîtriser les mathématiques. Ne vous découragez jamais, chaque erreur est une occasion d'apprendre!"</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">M. Sami Trabelsi</h5>
              <p className="card-text">"Les sciences ne sont pas seulement des concepts théoriques, elles sont partout autour de vous. Expérimentez, explorez et amusez-vous avec les outils numériques!"</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Mme Leila Gharbi</h5>
              <p className="card-text">"Chaque élève a sa propre méthode d'apprentissage. Il est important de comprendre son propre rythme et de demander de l'aide lorsque c'est nécessaire."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vidéos des Professeurs */}
      <div className="mt-5 text-center">
        <h2>Vidéo des Professeurs</h2>
        <p className="lead">Découvrez les vidéos de nos professeurs partageant des astuces et conseils pour réussir vos études.</p>
      </div>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Mme Amina Ben Salah</h5>
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/xxxxxxxxxxx"  // Remplacez par le lien réel
                title="Vidéo de Mme Amina"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">M. Sami Trabelsi</h5>
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/xxxxxxxxxxx"  // Remplacez par le lien réel
                title="Vidéo de M. Sami"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Mme Leila Gharbi</h5>
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/xxxxxxxxxxx"  // Remplacez par le lien réel
                title="Vidéo de Mme Leila"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ */}
      <FAQ />  {/* FAQ ici */}
    </div>
  );
}

export default NosProfesseurs;
