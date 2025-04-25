// src/components/Cours/Cours.js
import React, { useState } from 'react';
import './Cours.css';
import { Button, Card, Form, Row, Col, Modal } from 'react-bootstrap';
import FAQ from '../FAQ';
const Cours = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [category, setCategory] = useState('Toutes');
  const [sortBy, setSortBy] = useState('');

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <div className="text-center bg-light p-5 mb-4 rounded shadow">
        <h1>Bienvenue sur la plateforme de cours</h1>
        <p>Découvrez, apprenez, et progressez avec les meilleurs cours disponibles.</p>
        <Button variant="primary" onClick={handleShow}>+ Ajouter un cours</Button>
      </div>

      {/* Statistiques */}
      <Row className="text-center mb-4">
        <Col><h5>📚 120 Cours</h5></Col>
        <Col><h5>👩‍🎓 340 Étudiants</h5></Col>
        <Col><h5>👨‍🏫 25 Formateurs</h5></Col>
        <Col><h5>⭐ 4.7/5 Moyenne</h5></Col>
      </Row>

      {/* Filtres */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Control type="text" placeholder="Rechercher un cours..." />
        </Col>
        <Col md={3}>
          <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Toutes les catégories</option>
            <option>Développement</option>
            <option>Design</option>
            <option>Business</option>
            <option>Marketing</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option>Trier par</option>
            <option>Prix croissant</option>
            <option>Prix décroissant</option>
            <option>Note</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Slider Top Cours */}
      <h4>🎓 Les cours les mieux notés</h4>
      <Row className="mb-5">
        {[1, 2, 3].map((cours, index) => (
          <Col key={index} md={4}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Cours Populaire {cours}</Card.Title>
                <Card.Text>Ce cours a reçu d'excellentes notes.</Card.Text>
                <Button variant="outline-primary">Voir le cours</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Nouveaux Cours */}
      <h4>🆕 Nouveaux cours</h4>
      <Row className="mb-4">
        {[1, 2, 3].map((cours, index) => (
          <Col key={index} md={4}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Nouveau Cours {cours}</Card.Title>
                <Card.Text>Découvrez ce nouveau contenu pédagogique.</Card.Text>
                <Button variant="outline-success">Voir le cours</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal Ajouter un cours */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un cours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Titre du cours</Form.Label>
              <Form.Control type="text" placeholder="Entrez le titre" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Entrez une description" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Prix</Form.Label>
              <Form.Control type="number" placeholder="Ex: 49.99" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fichiers</Form.Label>
              <Form.Control type="file" multiple onChange={handleFileChange} />
              {selectedFiles.length > 0 && (
                <ul className="mt-2">
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}
            </Form.Group>

            <Button variant="success" onClick={handleClose}>
              Ajouter
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      
      <FAQ />  {/* FAQ ici */}
    </div>
    
  );
};

export default Cours;
