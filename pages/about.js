export function AboutPage() {

  const style = `
    .about-hero {
      margin-bottom: 30px;
    }

    .about-hero h1 {
      color: yellow;
      font-size: 34px;
      margin: 0 0 8px;
    }

    .subtitle {
      color: orange;
      font-size: 16px;
      margin: 0;
    }

    .about-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: 20px;
    }

    .about-card {
      background: #12141b;
      border: 1px solid #1f2230;
      border-radius: 14px;
      padding: 16px;
      transition: 0.2s ease;
    }

    .about-card:hover {
      transform: translateY(-5px);
      border-color: #00d4ff33;
    }

    .about-card h3 {
      margin: 0 0 8px;
      font-size: 16px;
    }

    .about-card p {
      margin: 0;
      color: #cfcfcf;
      font-size: 14px;
      line-height: 1.4;
    }
  `;

  return `
    <style>${style}</style>

    <div class="about-hero">
      <h1>Rólunk</h1>
      <p class="subtitle">Modern autóbérlés gyorsan, átláthatóan és kompromisszumok nélkül.</p>
    </div>

    <div class="about-grid">
      <div class="about-card">
        <h3>⚡ Gyors foglalás</h3>
        <p>Foglalj e-mailben vagy akár telefonon.</p>
      </div>

      <div class="about-card">
        <h3>🚗 Prémium flotta</h3>
        <p>Sportautók, luxusmodellek és városi járművek egy helyen.</p>
      </div>

      <div class="about-card">
        <h3>🔒 Megbízható rendszer</h3>
        <p>Stabil, átlátható és biztonságos bérlési folyamat.</p>
      </div>
    </div>
  `;
}