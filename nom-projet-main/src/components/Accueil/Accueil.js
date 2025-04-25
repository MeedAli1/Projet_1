import React, { useState } from 'react';
import { BsPersonFill, BsBookFill, BsAwardFill, BsStar } from 'react-icons/bs';

function Accueil({ openModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Marie',
      image: 'https://via.placeholder.com/100',
      text: 'Cette plateforme m\'a permis de découvrir de nouvelles compétences et d\'apprendre à mon rythme. Hautement recommandé!',
    },
    {
      name: 'Pierre',
      image: 'https://via.placeholder.com/100',
      text: 'Une expérience d\'apprentissage unique! Les cours sont très bien structurés et les enseignants sont super.',
    },
    {
      name: 'Sophie',
      image: 'https://via.placeholder.com/100',
      text: 'Les cours sont très interactifs et m\'ont permis d\'améliorer mes compétences rapidement. Excellente plateforme.',
    },
    {
      name: 'Lucas',
      image: 'https://via.placeholder.com/100',
      text: 'J\'ai adoré l\'approche pédagogique de cette plateforme. Très recommandée pour ceux qui veulent progresser à leur rythme.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 mb-3">Bienvenue sur notre plateforme éducative</h1>
      <p className="lead mb-4">
        Découvrez des cours passionnants, apprenez à votre rythme et obtenez des certificats de réussite.
      </p>

      {/* Introduction à la plateforme */}
      <div className="mt-5 py-5" style={{ backgroundColor: '#e9f7fd', borderRadius: '10px' }}>
        <h2 className="mb-4">Qu'est-ce que notre plateforme?</h2>
        <p className="lead">
          Notre plateforme éducative est conçue pour aider les étudiants à apprendre de manière flexible, à leur propre rythme. Nous offrons une large gamme de cours dans divers domaines, enseignés par des experts. Que vous soyez débutant ou avancé, vous trouverez des ressources adaptées à vos besoins.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4">
            <div className="card text-center shadow-sm">
              <BsPersonFill size={40} className="text-primary mb-3" />
              <h5>+1000 étudiants</h5>
              <p>Notre communauté continue de grandir, avec plus de 1000 étudiants qui apprennent chaque jour.</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-center shadow-sm">
              <BsBookFill size={40} className="text-success mb-3" />
              <h5>+50 cours</h5>
              <p>Nous offrons plus de 50 cours dans des domaines divers, avec de nouveaux cours ajoutés régulièrement.</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-center shadow-sm">
              <BsStar size={40} className="text-warning mb-3" />
              <h5>4.8/5 de moyenne</h5>
              <p>Nos étudiants nous attribuent une note moyenne de 4.8/5 pour la qualité de nos cours et formateurs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Nos avantages */}
      <div className="mt-5 py-5" style={{ backgroundColor: '#f0f8ff', borderRadius: '10px' }}>
        <h2 className="mb-4">Nos avantages</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card text-center shadow-sm advantage-card">
              <BsPersonFill size={40} className="text-primary mb-3" />
              <h5>Apprentissage personnalisé</h5>
              <p>Chaque étudiant a des besoins différents, nous vous aidons à apprendre selon votre propre rythme et vos préférences.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center shadow-sm advantage-card">
              <BsBookFill size={40} className="text-success mb-3" />
              <h5>Contenu riche & varié</h5>
              <p>Nos cours couvrent un large éventail de sujets pour répondre à toutes vos passions et besoins professionnels.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center shadow-sm advantage-card">
              <BsAwardFill size={40} className="text-warning mb-3" />
              <h5>Certificats de réussite</h5>
              <p>À la fin de chaque formation, obtenez un certificat qui prouve vos compétences acquises.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des cours */}
      <div className="mt-5 py-5" style={{ backgroundColor: '#f1f8ff', borderRadius: '10px' }}>
        <h2 className="mb-4">Nos cours populaires</h2>
        <div className="row">
          {/* Exemple de cours */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ borderRadius: '10px' }}>
              <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Cours 1" />
              <div className="card-body">
                <h5 className="card-title">Introduction à l'IA</h5>
                <p className="card-text">Apprenez les bases de l'intelligence artificielle et de l'apprentissage automatique.</p>
                <a href="#" className="btn btn-primary">Voir le cours</a>
              </div>
            </div>
          </div>
          {/* Ajouter d'autres cours ici */}
        </div>
      </div>

      {/* Avis des étudiants */}
      <div className="mt-5 py-5" style={{ backgroundColor: '#f1f8ff', borderRadius: '10px' }}>
        <h2 className="mb-4">Avis des utilisateurs</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm testimonial-card">
              <img src={testimonials[currentIndex].image} className="card-img-top rounded-circle mx-auto mt-3" alt={testimonials[currentIndex].name} />
              <div className="card-body text-center">
                <blockquote className="blockquote" style={{ fontStyle: 'italic' }}>
                  <p>"{testimonials[currentIndex].text}"</p>
                </blockquote>
                <footer className="blockquote-footer">{testimonials[currentIndex].name}</footer>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-light me-2" onClick={prevTestimonial}>
            <span className="glyphicon glyphicon-chevron-left" style={{ fontSize: '20px' }}></span>
          </button>
          <button className="btn btn-light ms-2" onClick={nextTestimonial}>
            <span className="glyphicon glyphicon-chevron-right" style={{ fontSize: '20px' }}></span>
          </button>
        </div>
      </div>

      {/* Vidéo Avis des étudiants */}
      <div className="mt-5 py-5" style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}>
        <h2 className="mb-4">Découvrez ce que disent nos étudiants</h2>
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Avis des étudiants" frameBorder="0" allowFullScreen></iframe>
      </div>

      {/* FAQ Section */}
      <div className="mt-5 py-5" style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}>
        <h2 className="mb-4">Questions fréquentes</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading1">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                Qu'est-ce que we learn ?
              </button>
            </h2>
            <div id="faqCollapse1" className="accordion-collapse collapse show" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                we learn est une plateforme éducative qui permet aux étudiants d'accéder à une gamme de cours diversifiés dans plusieurs domaines.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                Comment m'inscrire sur la plateforme ?
              </button>
            </h2>
            <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Vous pouvez vous inscrire en cliquant sur le bouton "S'inscrire" en haut et en remplissant le formulaire avec les informations demandées.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                Quelles offres sont disponibles actuellement ?
              </button>
            </h2>
            <div id="faqCollapse3" className="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Actuellement, nous avons des offres spéciales sur certaines formations qui vous permettent d'y accéder à prix réduit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading4">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                Comment m'abonner à une offre ?
              </button>
            </h2>
            <div id="faqCollapse4" className="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Pour vous abonner à une offre, sélectionnez la formation de votre choix et suivez les étapes pour acheter l'offre ou vous inscrire au cours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
