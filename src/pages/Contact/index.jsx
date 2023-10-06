import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import { FaSpinner, FaWhatsapp } from 'react-icons/fa';

import { HiCheckCircle, HiOutlineEnvelope } from 'react-icons/hi2';
import { PageArea } from './styled';

export default function Contact() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = event => {
    event.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        config.ID_SERVICE,
        config.ID_MODEL,
        form.current,
        config.ID_USER
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
        },
        error => {
          setError(true);
          setLoading(false);
          console.error(error);
        }
      );
  };

  const contacts = [
    {
      name: 'WhatsApp',
      description: '+55 73 9 88150582',
      link: 'https://wa.me/5573988150582?text=Ol%C3%A1%21+vim+atrav%C3%A9s+do+seu+portf%C3%B3lio+',
      icon: <FaWhatsapp style={{ width: 50, height: 50 }} />,
    },
    {
      name: 'Email',
      description: 'rairandesbravador@gmail.com',
      link: 'mailto:rairandesbravador@gmail.com?subject=Olá...',
      icon: <HiOutlineEnvelope style={{ width: 50, height: 50 }} />,
    },
  ];

  return (
    <PageArea>
      <div className="containerForm">
        <div>
          <h2>
            <span>Fale </span>
            <span>Comigo</span>
          </h2>
          <p>
            Entre em contato por formulário ou WhatsApp, com certeza irei poder
            te ajudar.
          </p>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="message">Mensagem:</label>
              <textarea
                id="message"
                name="message"
                className="textArea"
                required
              />
            </div>
            <div className="inputs">
              <div>
                <label htmlFor="fullName">Seu nome:</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Seu email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div>
              <button type="submit" disabled={loading}>
                {loading && <FaSpinner />}
                {success && <HiCheckCircle />}
                Enviar mensagem
              </button>

              {error && (
                <p>
                  Ocorreu um erro ao enviar a mensagem, tente novamente mais
                  tarde.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="containerDados">
        {contacts.map((contact, index) => (
          <div key={`contact-${index}`} className="contact">
            {contact.icon}
            <div className="text">
              <p>{contact.name}</p>
              <Link to={contact.link} target="_blank">
                {contact.description}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageArea>
  );
}
