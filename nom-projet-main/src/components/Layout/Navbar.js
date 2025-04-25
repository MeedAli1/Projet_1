import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Dropdown } from 'react-bootstrap';
import SeConnecter from '../Auth/SeConnecter';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { FaHome, FaBook, FaEnvelope, FaUserAlt, FaLanguage, FaList, FaChalkboardTeacher, FaTags } from 'react-icons/fa';
import './Navbar.css';  // Importation du CSS
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const navigate = useNavigate();
  const handleLanguageChange = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-light" to="/">
          We Learn
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-light ms-2 custom-btn" to="/"><FaHome className="me-2" />{t('accueil')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-light ms-2 custom-btn" to="/cours"><FaBook className="me-2" />{t('cours')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-light ms-2 custom-btn" to="/contact"><FaEnvelope className="me-2" />{t('contact')}</Link>
            </li>
            {/* New buttons with icons */}
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-light ms-2 custom-btn" to="/contenu"><FaList className="me-2" />{t('notre_contenu')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-light ms-2 custom-btn" to="/professeurs"><FaChalkboardTeacher className="me-2" />{t('nos_professeurs')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-light ms-2 custom-btn" to="/offres"><FaTags className="me-2" />{t('nos_offres')}</Link>
            </li>
            {/* Register and Login buttons */}
            {/*<li className="nav-item">
              <Link className="nav-link btn btn-outline-light ms-2 custom-btn" to="/register"><FaUserAlt className="me-2" />{t('register')}</Link>
            </li>*/}
            <li className="nav-item">
              <button className="btn btn-outline-light ms-2 custom-btn" onClick={() => navigate('/register')}>
                <FaUserAlt className="me-2" />{t('register')}
              </button>
            </li>

            <li className="nav-item">
              <button className="btn btn-outline-light ms-2 custom-btn" onClick={handleOpenModal}>
                <FaUserAlt className="me-2" />{t('login')}
              </button>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" className="ms-2 custom-btn">
                  <FaLanguage className="me-2" />{i18next.language ? i18next.language.toUpperCase() : 'LANG'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleLanguageChange('fr')}>Français</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguageChange('ar')}>العربية</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{t('login')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SeConnecter />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            {t('close')}
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
}

export default Navbar;
