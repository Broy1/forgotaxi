export function TermsPage() {

  const style = `
    .terms-hero {
      margin-bottom: 30px;
    }

    .terms-hero h1 {
      color: yellow;
      font-size: 34px;
      margin: 0 0 8px;
    }

    .subtitle {
      color: orange;
      font-size: 16px;
      margin: 0;
    }

    .terms-grid {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 20px;
      max-width: 600px;
    }

    .terms-card {
      background: #12141b;
      border: 1px solid #1f2230;
      border-radius: 14px;
      padding: 16px;
      cursor: pointer;
      transition: 0.2s ease;
    }

    .terms-card:hover {
      border-color: #00d4ff33;
    }

    .terms-card h3 {
      margin: 0;
      font-size: 16px;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .terms-card p {
      margin-top: 10px;
      color: #cfcfcf;
      font-size: 14px;
      line-height: 1.4;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .terms-card.active p {
      max-height: 200px;
    }
  `;

  setTimeout(() => {
    document.querySelectorAll('.terms-card').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('active');
      });
    });
  }, 0);

  return `
    <style>${style}</style>

    <div class="terms-hero">
      <h1>Bérlési feltételek</h1>
      <p class="subtitle">Fontos információk a járműbérléshez</p>
    </div>

    <div class="terms-grid">
      <div class="terms-card">
        <h3>📄 Jogosultság</h3>
        <p>Minimum 21 éves életkor és érvényes vezetői engedély szükséges.</p>
      </div>

      <div class="terms-card">
        <h3>💳 Fizetés</h3>
        <p>A bérlés díja előre fizetendő online vagy átvételkor.</p>
      </div>

      <div class="terms-card">
        <h3>⛔ Felelősség</h3>
        <p>A járművet rendeltetésszerűen kell használni, károk esetén felelősség terhel.</p>
      </div>

      <div class="terms-card">
        <h3>⏱ Időtartam</h3>
        <p>Minimum 1 napos bérlés, késés esetén extra díj kerül felszámításra.</p>
      </div>
    </div>
  `;
}