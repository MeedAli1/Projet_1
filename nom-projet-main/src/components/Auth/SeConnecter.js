import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
console.log("SeConnecter chargé !");

function SeConnecter({ onCloseModal }) {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // لاستخدام التنقل

  // التعامل مع تغيير الحقول
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'emailOrPhone') {
      setEmailOrPhone(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  // التعامل مع الإرسال
  const handleSubmit = (e) => {
    e.preventDefault();

    // فرضيات للتحقق من نوع المستخدم (يمكن تعديلها لاحقًا باستخدام خدمة تحقق من المستخدم)
    if (emailOrPhone === "student" && password === "") {
      onCloseModal?.();
      navigate('/Dashboard-Student'); // توجيه إلى لوحة التحكم الخاصة بالطالب
       // إغلاق الـModal
    } else if (emailOrPhone === "teacher" && password === "") {
      onCloseModal?.();
      navigate('/dashboard-teacher'); // توجيه إلى لوحة التحكم الخاصة بالمدرس
       // إغلاق الـModal
    } else {
      alert("Email ou mot de passe incorrect!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Connexion</h2>
      <form className="mx-auto" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="emailOrPhone" className="form-label">Email ou Numéro</label>
          <input
            type="text"
            className="form-control"
            id="emailOrPhone"
            value={emailOrPhone}
            onChange={handleChange}
            placeholder="ex: nom@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="Mot de passe"
          />
        </div>
        <div className="mb-3 text-end">
          <Link to="/mot-de-passe-oublie" className="text-decoration-none">Mot de passe oublié ?</Link>
        </div>
        <button type="submit" className="btn btn-primary w-100">Se connecter</button>
      </form>
    </div>
  );
}

export default SeConnecter;
