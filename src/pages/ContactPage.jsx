import React from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/ContactPage.css';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="main-content">
      <section className="contact-section">
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.openForOpportunities')} <span>{t('contact.yes')}</span></p>
        
        <form
          name="contact"
          method="post"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <div className="form-group">
            <input type="text" name="name" placeholder={t('contact.fullName')} required />
            <input type="email" name="email" placeholder={t('contact.emailAddress')} required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder={t('contact.yourMessage')} required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            <span role="img" aria-label="submit">📩</span> {t('contact.submit')}
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;

