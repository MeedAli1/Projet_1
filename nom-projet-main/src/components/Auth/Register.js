import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelope, FaLock, FaUserTag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
  });

  const [selectedRole, setSelectedRole] = useState(null); // لتخزين الاختيار بين البطاقة
  const navigate = useNavigate(); // استخدام useNavigate هنا

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من الشروط
    if (formData.fullName.length < 3 || /\d/.test(formData.fullName)) {
      alert("🛑 Le nom complet doit contenir au moins 3 caractères et ne doit pas inclure de chiffres.");
      return;
    }

    if (!formData.email.includes('@')) {
      alert("📧 Veuillez saisir une adresse email valide.");
      return;
    }

    if (formData.password.length < 6) {
      alert("🔐 Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    // التحقق من أن كلمة المرور تحتوي على الحروف الكبيرة، الحروف الصغيرة، الأرقام، والرموز الخاصة
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert("🔐 Le mot de passe doit contenir des lettres majuscules, des lettres minuscules, des chiffres et des caractères spéciaux.");
      return;
    }

    // التحقق من أن كلمة المرور وإعادة كلمة المرور متطابقتان
    if (formData.password !== formData.confirmPassword) {
      alert("🔐 Les mots de passe ne correspondent pas.");
      return;
    }

    console.log('✅ Données soumises:', formData);

    // بعد التحقق بنجاح، التوجيه إلى لوحة التحكم المناسبة
    if (formData.role === 'student') {
      navigate('/dashboard-student');
    } else {
      navigate('/dashboard-teacher');
    }
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleForgotPassword = () => {
    // هذا الرابط يمكن تخصيصه بحيث يوجه المستخدم إلى بريد لإعادة تعيين كلمة المرور
    const emailLink = "mailto:support@example.com?subject=Demande de réinitialisation de mot de passe&body=Bonjour, je voudrais réinitialiser mon mot de passe.";
    window.location.href = emailLink;
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      {selectedRole === null ? (
        <div className="d-flex justify-content-center gap-5">
          <div className="card" style={{ width: '20rem', cursor: 'pointer' }} onClick={() => handleRoleSelection('student')}>
            <div className="card-body text-center">
              <FaUser className="mb-3" size={60} />
              <h5 className="card-title">Étudiant</h5>
            </div>
          </div>
          <div className="card" style={{ width: '20rem', cursor: 'pointer' }} onClick={() => handleRoleSelection('teacher')}>
            <div className="card-body text-center">
              <FaUserTag className="mb-3" size={60} />
              <h5 className="card-title">Enseignant</h5>
            </div>
          </div>
        </div>
      ) : (
        <div className="card p-4 shadow-lg border-0" style={{ width: '100%', maxWidth: '500px' }}>
          <h3 className="text-center mb-4 text-primary">{selectedRole === 'student' ? "Créer un compte étudiant" : "Créer un compte enseignant"}</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label"><FaUser className="me-2" />Nom complet</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                placeholder="Ex: Ali Ben Salah"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label"><FaEnvelope className="me-2" />Adresse email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Ex: ali@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label"><FaLock className="me-2" />Mot de passe</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Minimum 6 caractères, avec des lettres majuscules, minuscules, chiffres et symboles spéciaux."
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label"><FaLock className="me-2" />Confirmer mot de passe</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                placeholder="Confirmer votre mot de passe"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {selectedRole === 'student' ? (
              <div className="mb-3">
                <label className="form-label">Niveau d'études</label>
                <select className="form-select" name="niveau" onChange={handleChange}>
                  <option value="L1">L1</option>
                  <option value="L2">L2</option>
                  <option value="L3">L3</option>
                  <option value="Master">Master</option>
                </select>
              </div>
            ) : (
              <div className="mb-3">
                <label className="form-label">Spécialité</label>
                <input
                  type="text"
                  className="form-control"
                  name="specialty"
                  placeholder="Ex: Informatique"
                  onChange={handleChange}
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary w-100 mt-2">S'inscrire</button>
          </form>

          <button className="btn btn-outline-secondary w-100 mt-3" onClick={() => setSelectedRole(null)}>Retour</button>
        </div>
      )}
    </div>
  );
};

export default Register;
