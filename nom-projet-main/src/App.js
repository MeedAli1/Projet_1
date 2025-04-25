import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import SeConnecter from './components/Auth/SeConnecter';
import Register from './components/Auth/Register';
import Cours from './components/Cours/Cours';
import Contact from './components/Contact/Contact';
import Accueil from './components/Accueil/Accueil';
import ChatBubble from './components/Chat/ChatBubble';
import Chatbot from './components/Chat/Chatbot';
import NotreContenu from './pages/NotreContenu'; 
import NosProfesseurs from './pages/NosProfesseurs';
import NosOffres from './pages/NosOffres';
import FAQ from './components/FAQ';
import DashboardStudent from './pages/DashboardStudent';
import DashboardTeacher from './pages/DashboardTeacher';
import ModalForm from './components/Auth/ModalConnexion'; // تأكد من الاستدعاء الصحيح

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Navbar onShowModal={handleShowModal} />
      
      <ChatBubble />

      <Routes>
        <Route path="/" element={<Accueil onShowModal={handleShowModal} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard-Student" element={<DashboardStudent/>} />
        <Route path="/dashboard-teacher" element={<DashboardTeacher />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/seconnecter" element={<SeConnecter onCloseModal={handleCloseModal} />} />
        <Route path="/contenu" element={<NotreContenu />} />
        <Route path="/professeurs" element={<NosProfesseurs />} />
        <Route path="/offres" element={<NosOffres />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <ModalForm show={showModal} handleClose={handleCloseModal} />
      <Chatbot />
    </div>
  );
}

export default App;
