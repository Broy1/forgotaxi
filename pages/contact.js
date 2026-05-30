export function ContactPage() {

  const style = `
    .contact-hero {
      margin-bottom: 25px;
    }

    .contact-hero h1 {
    color: yellow;
      font-size: 34px;
      margin: 0 0 8px;
    }

    .subtitle {
      color: orange;
      font-size: 16px;
      margin: 0;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-top: 20px;
    }

    .contact-card {
      background: #12141b;
      border: 1px solid #1f2230;
      border-radius: 14px;
      padding: 16px;
      transition: 0.2s ease;
    }

    .contact-card:hover {
      transform: translateY(-4px);
      border-color: #00d4ff33;
    }

    .contact-card h3 {
      margin: 0 0 8px;
      font-size: 16px;
    }

    .contact-card p {
      margin: 0;
      color: #cfcfcf;
      font-size: 14px;
      line-height: 1.4;
    }

    .contact-card a {
      color: #00d4ff;
      text-decoration: none;
    }

    .contact-card a:hover {
      text-decoration: underline;
    }
  `;

  return `
    <style>${style}</style>

    <div class="contact-hero">
      <h1>Kapcsolat</h1>
      <p class="subtitle">Lépj velünk kapcsolatba bármilyen kérdés esetén</p>
    </div>

    <div class="contact-grid">

      <div class="contact-card">
        <h3>📧 Email</h3>
        <p><a href="mailto:support@berauto.hu">support@berauto.hu</a></p>
      </div>

      <div class="contact-card">
        <h3>📞 Telefon</h3>
        <p>+36 30 123 4567</p>
      </div>

      <div class="contact-card">
        <h3>📍 Iroda</h3>
        <p>Budapest, belváros</p>
      </div>

      <div class="contact-card">
        <h3>⏱ Ügyfélszolgálat</h3>
        <p>0–24 elérhető online support</p>
      </div>

    </div>
  `;
}