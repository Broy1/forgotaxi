export function HomePage() {

  const style = `
    .hero {
      margin-bottom: 50px;
    }

    .hero h1 {
      color: yellow;
      font-size: 46px;
      margin: 0 0 10px;
      letter-spacing: -1px;
    }

    .subtitle {
      color: orange;
      font-size: 18px;
      margin-bottom: 25px;
      max-width: 600px;
      line-height: 1.5;
    }

    .hero-actions {
      display: flex;
      gap: 12px;
      margin-bottom: 30px;
    }

    .btn {
      background: orange;
      color: #0b0c10;
      padding: 10px 18px;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 600;
      transition: 0.2s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
    }

    .btn.secondary {
      background: transparent;
      border: 1px solid yellow;
      color: yellow;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 16px;
      margin-top: 40px;
    }

    .stat {
      background: #12141b;
      border: 1px solid #1f2230;
      border-radius: 14px;
      padding: 18px;
      text-align: center;
      transition: 0.2s ease;
    }

    .stat:hover {
      transform: translateY(-4px);
      border-color: #00d4ff33;
    }

    .stat h2 {
      margin: 0;
      font-size: 30px;
      color: yellow;
    }

    .stat p {
      margin: 6px 0 0;
      color: #a9a9b3;
      font-size: 14px;
    }
  `;

  return `
    <style>${style}</style>

    <div class="hero">
      <h1>Csicsi Toretto Epikus Garázsa</h1>
      <p class="subtitle">
        A konkurencia még mindig azt hiszi, hogy versenyben van.
      </p>

      <div class="hero-actions">
        <a href="#cars" class="btn">Autók megtekintése</a>
      </div>
    </div>





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