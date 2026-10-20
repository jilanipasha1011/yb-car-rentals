/**
 * YB Car Rentals - Interactive Client Script
 * Self-drive car rental platform for Delhi NCR
 */

// 1. Car Fleet Database
const fleetData = {
  thar: {
    name: "Mahindra Thar 4x4",
    kicker: "Adventure & Off-Road SUV",
    img: "images/thar-hd.jpg",
    badge: "4x4 ADVENTURE",
    rate: "₹3,499 / day",
    desc: "The undisputed king of the mountains and rough roads. Featuring genuine 4x4 drive with low/high ratio transfer cases, all-terrain capability, commanding road presence, and chilled air conditioning for any excursion to Manali, Spiti, Ladakh or Rajasthan.",
    specs: [
      { label: "Seating", val: "4 Seater with rear seats" },
      { label: "Drivetrain", val: "Manual / 4x4 Shift" },
      { label: "Fuel Type", val: "Diesel / Petrol Turbo" },
      { label: "Ground Clearance", val: "226 mm (Class Leading)" },
      { label: "Mileage", val: "Approx 14 km/l" },
      { label: "Permit", val: "All India Tourist Permit" }
    ],
    features: [
      "Shift-on-the-fly 4x4 Transfer Case",
      "All-Terrain Tires with Alloy Wheels",
      "Chilled Dual A/C with Heater",
      "Touchscreen Infotainment with Navigation",
      "Adventure Roll-Over Cage & Dual Airbags",
      "ESP with Hill Hold & Hill Descent Control",
      "Removable Roof Panels & Sturdy Hardtop"
    ]
  },
  scorpio: {
    name: "Mahindra Scorpio-N",
    kicker: "7-Seater Luxury Highway SUV",
    img: "images/scorpio.jpg",
    badge: "7-SEATER KING",
    rate: "₹3,799 / day",
    desc: "The big daddy of SUVs. Equipped with a punchy 2.2L mHawk diesel engine, commanding high seating position, and generous 3-row comfort for up to 7 passengers. Perfect for family road trips, business delegations, and destination weddings.",
    specs: [
      { label: "Seating", val: "7 Seater (2+2+3 or 2+3+2)" },
      { label: "Engine", val: "2.2L mHawk Turbo Diesel" },
      { label: "Transmission", val: "6-Speed Manual / AT" },
      { label: "Safety Rating", val: "5-Star Global NCAP" },
      { label: "Boot Space", val: "Flexible 3rd row foldable" },
      { label: "Drive Type", val: "Rear Wheel Drive (RWD)" }
    ],
    features: [
      "Dual-Zone Automatic Temperature Control",
      "Plush Leatherette Captain Seats",
      "8-inch Touchscreen Infotainment with Alexa",
      "Cruise Control for relaxed highway driving",
      "Powerful Dual Projector LED Headlamps",
      "Rear A/C Vents with independent blower",
      "Wireless Phone Charging & Multiple USBs"
    ]
  },
  brezza: {
    name: "Maruti Suzuki Brezza",
    kicker: "Compact Smart Hybrid SUV",
    img: "images/brezza.png",
    badge: "MOST POPULAR",
    rate: "₹2,199 / day",
    desc: "Verified Delhi vehicle (DL 5CX 2788). Incredibly dependable, frugal smart hybrid engine with over 19 km/l mileage. Comfortable seating for 5 adults with high ground clearance to handle city potholes and steep mountain passes easily.",
    specs: [
      { label: "Seating", val: "5 Adults" },
      { label: "Registration", val: "DL 5CX 2788 (Delhi)" },
      { label: "Fuel & Mileage", val: "Petrol Hybrid · 19+ km/l" },
      { label: "Transmission", val: "5-Speed Manual" },
      { label: "Boot Space", val: "328 Litres" },
      { label: "Ground Clearance", val: "200 mm" }
    ],
    features: [
      "Electric Sunroof with Tilt Function",
      "SmartPlay Pro Touchscreen with Apple CarPlay & Android Auto",
      "Rear Parking Camera with Dynamic Sensor Guidelines",
      "Cruise Control & Steering-mounted switches",
      "Chilled Automatic Climate Control",
      "Rear Seat A/C Vents & Fast USB Charging",
      "Extraordinary Fuel Economy for long highway trips"
    ]
  },
  bolero: {
    name: "Mahindra Bolero Neo N10",
    kicker: "Tough 7-Seater RWD SUV",
    img: "images/bolero-neo.png",
    badge: "TOUGH & RELIABLE",
    rate: "₹2,499 / day",
    desc: "Built on Mahindra's legendary third-generation chassis with Rear Wheel Drive (RWD) and multi-terrain technology. The top-spec N10 trim provides tough body-on-frame durability, high torque mHawk75 engine, and seating for 7 people.",
    specs: [
      { label: "Seating", val: "7 Seater (with foldable jumps)" },
      { label: "Engine", val: "1.5L mHawk75 Diesel" },
      { label: "Drive Type", val: "Rear Wheel Drive (RWD)" },
      { label: "Chassis", val: "High Strength Ladder Frame" },
      { label: "Mileage", val: "17+ km/l on Diesel" },
      { label: "Trim", val: "Top Model N10" }
    ],
    features: [
      "Multi-Terrain Technology (MTT) for sticky hill climbs",
      "High torque diesel pull for heavy luggage & passengers",
      "Tough suspension built to tackle potholes & gravel",
      "Touchscreen Audio system with Bluetooth",
      "Eco Mode for maximum fuel efficiency",
      "Cornering Headlamps for enhanced night vision",
      "Armrests on front and middle row seats"
    ]
  },
  amaze: {
    name: "Honda Amaze",
    kicker: "Premium Comfort Sedan",
    img: "images/honda-amaze.png",
    badge: "PREMIUM SEDAN",
    rate: "₹1,899 / day",
    desc: "Verified Delhi registered sedan (DL 14CE 2839) in sleek Crystal Black Pearl. Known for its ultra-smooth Japanese i-VTEC engine, whisper-quiet cabin, plush suspension, and a cavernous 420-litre boot that easily swallows 3 full-sized airport suitcases.",
    specs: [
      { label: "Seating", val: "5 Seater Executive Sedan" },
      { label: "Registration", val: "DL 14CE 2839 (Delhi)" },
      { label: "Engine", val: "1.2L i-VTEC Petrol" },
      { label: "Boot Capacity", val: "420 Litres (Class Best)" },
      { label: "Fuel Mileage", val: "18.6 km/l" },
      { label: "Ride Quality", val: "Ultra-plush Comfort" }
    ],
    features: [
      "Massive 420L Trunk space — ideal for Airport drops",
      "Ultra-smooth and refined Honda i-VTEC engine",
      "Automatic Climate Control with Max Cool",
      "Touchscreen Infotainment with Bluetooth hands-free",
      "Plush rear bench with generous knee & legroom",
      "Dual Airbags, ABS with EBD, and ISOFIX child anchors",
      "Smooth power delivery and easy city maneuvering"
    ]
  },
  fronx: {
    name: "Maruti Suzuki Fronx",
    kicker: "Sporty Urban Turbo Crossover",
    img: "images/fronx.jpg",
    badge: "TURBO CROSSOVER",
    rate: "₹2,299 / day",
    desc: "The sharp and stylish Nexa crossover. Featuring dynamic coupe styling, peppy boosterjet turbo engine, high ground clearance, 360-degree camera, and exceptional fuel economy for young road-trippers and city explorers.",
    specs: [
      { label: "Seating", val: "5 Adults" },
      { label: "Transmission", val: "Automatic / Manual" },
      { label: "Fuel Economy", val: "20+ km/l" },
      { label: "Ground Clearance", val: "190 mm" },
      { label: "Screen", val: "9-inch SmartPlay Pro+ Touchscreen" },
      { label: "Wheels", val: "16-inch Precision Cut Alloys" }
    ],
    features: [
      "360-Degree Surround View Camera System",
      "Head-Up Display (HUD) showing speed & turn navigation",
      "Wireless Smartphone Charging Pad",
      "Wireless Apple CarPlay & Android Auto",
      "Cruise Control and steering-mounted controls",
      "Chilled automatic climate control",
      "Sporty aerodynamically sculpted body"
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Set auto year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 3. Date Inputs Configuration
  const pickupDateInput = document.getElementById('pickupDate');
  const returnDateInput = document.getElementById('returnDate');

  if (pickupDateInput) {
    const today = new Date();
    const todayStr = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 10);
    pickupDateInput.min = todayStr;
    pickupDateInput.value = todayStr;

    // Set default return date to tomorrow
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const tomorrowStr = new Date(tomorrow.getTime() - tomorrow.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 10);

    if (returnDateInput) {
      returnDateInput.min = todayStr;
      returnDateInput.value = tomorrowStr;
    }

    pickupDateInput.addEventListener('change', () => {
      if (returnDateInput) {
        returnDateInput.min = pickupDateInput.value;
        if (returnDateInput.value && returnDateInput.value < pickupDateInput.value) {
          returnDateInput.value = pickupDateInput.value;
        }
      }
    });
  }

  // 4. Hero Thumbnail Switcher
  const thumbBtns = document.querySelectorAll('.thumb-btn');
  const heroCarImage = document.getElementById('heroCarImage');
  const heroCarName = document.getElementById('heroCarName');
  const heroCarTag = document.getElementById('heroCarTag');
  const heroCarBookBtn = document.getElementById('heroCarBookBtn');

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const imgSrc = btn.dataset.img;
      const name = btn.dataset.name;
      const tag = btn.dataset.tag;

      if (heroCarImage && imgSrc) {
        heroCarImage.style.opacity = '0';
        setTimeout(() => {
          heroCarImage.src = imgSrc;
          heroCarImage.alt = name;
          heroCarImage.style.opacity = '1';
        }, 150);
      }

      if (heroCarName) heroCarName.textContent = name;
      if (heroCarTag) heroCarTag.textContent = tag;

      if (heroCarBookBtn) {
        heroCarBookBtn.onclick = (e) => {
          e.preventDefault();
          selectCarAndScroll(name);
        };
      }
    });
  });

  // 5. Fleet Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const fleetCards = document.querySelectorAll('.fleet-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.dataset.filter;

      fleetCards.forEach(card => {
        const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 6. Card Image View Toggle (Scenic vs Street/Garage)
  const imgToggleBtns = document.querySelectorAll('.img-toggle-btn');
  imgToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = btn.parentElement;
      parent.querySelectorAll('.img-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.dataset.target;
      const newSrc = btn.dataset.src;
      const targetImg = document.getElementById(targetId);

      if (targetImg && newSrc) {
        targetImg.style.opacity = '0.5';
        setTimeout(() => {
          targetImg.src = newSrc;
          targetImg.style.opacity = '1';
        }, 120);
      }
    });
  });

  // 7. Interactive Vehicle Specs Modal
  const modal = document.getElementById('carModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalKicker = document.getElementById('modalKicker');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecsTable = document.getElementById('modalSpecsTable');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalBadges = document.getElementById('modalBadges');
  const modalBookBtn = document.getElementById('modalBookBtn');

  function openCarModal(key) {
    const car = fleetData[key];
    if (!car || !modal) return;

    if (modalImg) modalImg.src = car.img;
    if (modalTitle) modalTitle.textContent = car.name;
    if (modalKicker) modalKicker.textContent = car.kicker;
    if (modalDesc) modalDesc.textContent = car.desc;

    if (modalBadges) {
      modalBadges.innerHTML = `<span class="modal-badge-chip">${car.badge}</span>`;
    }

    if (modalSpecsTable) {
      modalSpecsTable.innerHTML = car.specs.map(spec => `
        <div class="modal-spec-item">
          <span>${spec.label}</span>
          <strong>${spec.val}</strong>
        </div>
      `).join('');
    }

    if (modalFeatures) {
      modalFeatures.innerHTML = car.features.map(f => `<li>✓ ${f}</li>`).join('');
    }

    if (modalBookBtn) {
      modalBookBtn.onclick = (e) => {
        e.preventDefault();
        closeCarModal();
        const waMsg = `Hi YB Car Rentals, I'd like to book the ${encodeURIComponent(car.name)} for self-drive.%0APlease share availability and the current rates.`;
        window.open(`https://wa.me/919211498230?text=${waMsg}`, '_blank', 'noopener');
      };
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCarModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const carKey = btn.dataset.carKey;
      openCarModal(carKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeCarModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCarModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeCarModal();
    }
  });

  // 8. Helper to prefill car dropdown and scroll to booking form
  function selectCarAndScroll(carName) {
    const carSelect = document.getElementById('car');
    if (carSelect) {
      const options = [...carSelect.options];
      const match = options.find(o => o.value.toLowerCase().includes(carName.toLowerCase().split(' ')[0]));
      if (match) {
        carSelect.value = match.value;
      }
    }
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  document.querySelectorAll('.card-book-btn, .trip-cta, [data-car]').forEach(link => {
    link.addEventListener('click', (e) => {
      const carName = link.dataset.car;
      if (carName) {
        e.preventDefault();
        selectCarAndScroll(carName);
      }
    });
  });

  // 9. Booking Form Submission to WhatsApp
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const car = document.getElementById('car')?.value || 'Any available vehicle';
      const trip = document.getElementById('trip')?.value || 'Road Trip';
      const pickupLocation = document.getElementById('pickupLocation')?.value || 'Delhi Hub';
      const pickupDate = document.getElementById('pickupDate')?.value || 'Flexible';
      const returnDate = document.getElementById('returnDate')?.value || 'To be discussed';

      const message = `Hi YB Car Rentals, I would like to check availability for a self-drive car:%0A%0A` +
        `*Selected Car:* ${encodeURIComponent(car)}%0A` +
        `*Trip Purpose:* ${encodeURIComponent(trip)}%0A` +
        `*Pickup Location:* ${encodeURIComponent(pickupLocation)}%0A` +
        `*Pickup Date:* ${encodeURIComponent(pickupDate)}%0A` +
        `*Return Date:* ${encodeURIComponent(returnDate)}%0A%0A` +
        `Please confirm slot availability, daily rental charges, refundable deposit, and documents required. Thank you!`;

      window.open(`https://wa.me/919211498230?text=${message}`, '_blank', 'noopener');
    });
  }
});
