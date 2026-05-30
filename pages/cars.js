export function CarsPage() {

  const style = `
  h1 {
    color: yellow;
    margin-bottom: 20px;
    font-size: 36px;
    letter-spacing: -0.5px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .car-card {
    background: #12141b;
    border: 1px solid #1f2230;
    border-radius: 16px;
    padding: 14px;
    transition: 0.25s ease;
    cursor: pointer;
  }

  .car-card:hover {
    transform: translateY(-8px);
    border-color: #00d4ff55;
  }

  .car-card img {
    width: 100%;
    height: 180px;
    object-fit: contain;
    background: radial-gradient(circle, #1a1d2a, #0b0c10);
    border-radius: 12px;
    padding: 10px;
    display: block;
  }

  .car-card h3 {
    font-size: 18px;
    margin: 12px 0 6px;
  }

  .car-card .price {
    margin: 0;
    color: yellow;
    font-weight: 700;
    font-size: 15px;
  }

  .car-details {
    margin-top: 10px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    color: #cfcfcf;
    font-size: 14px;
    line-height: 1.4;
  }
`;

  const cars = [
    {
      name: "BMW M4",
      price: "25 000 Ft/nap",
      image: "assets/cars/car1.jpg",
      details: "Motor: 3.0L, 510 LE\nVáltó: Automata\nÜlés: 4 fő"
    },
    {
      name: "Rolls Royce Phantom",
      price: "1 Ft/nap",
      image: "assets/cars/car2.jpg",
      details: "Luxus kategória\nSofőrrel is kérhető\nPrémium belső tér"
    },
    {
      name: "Audi RS8",
      price: "90 000 000 Ft/nap",
      image: "assets/cars/car3.jpg",
      details: "V8 Biturbo\nQuattro hajtás\n0-100: 3.5s"
    }
  ];

  setTimeout(() => {
  const grid = document.querySelector('.grid');

  if (!grid) return;

  grid.onclick = (e) => {
    const card = e.target.closest('.car-card');
    if (!card) return;

    const details = card.querySelector('.car-details');
    const isActive = card.classList.contains('active');

    // minden bezárása
    grid.querySelectorAll('.car-card').forEach(c => {
      c.classList.remove('active');
      c.querySelector('.car-details').style.maxHeight = null;
    });

    // nyitás
    if (!isActive) {
      card.classList.add('active');
      details.style.maxHeight = details.scrollHeight + "px";
    }
  };
}, 0);

  return `
    <style>${style}</style>

    <h1>Bérautóink</h1>

    <div class="grid">
      ${cars.map(car => `
        <div class="car-card">
          <img src="${car.image}" alt="${car.name}" />
          <h3>${car.name}</h3>
          <p class="price">${car.price}</p>

          <div class="car-details">
            ${car.details.replace(/\n/g, "<br>")}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}