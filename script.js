
// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Set hero background from first gallery image
const heroBg = document.querySelector('.hero-bg');
if (typeof GALLERY_BG !== 'undefined' && heroBg) {
  heroBg.style.backgroundImage = `url('${GALLERY_BG}')`;
}

// Extras chip list
const addBtn = document.querySelector('.add-extra');
const select = document.getElementById('extraSelect');
const list = document.getElementById('extraList');
let extras = [];

addBtn.addEventListener('click', () => {
  const val = select.value;
  if (!val) return;
  if (extras.includes(val)) return;
  extras.push(val);
  renderExtras();
  renderQuote();
});

function renderExtras(){
  list.innerHTML = '';
  extras.forEach((e, i)=>{
    const li = document.createElement('li');
    li.className = 'chip';
    li.innerHTML = `<span>${e}</span> <button aria-label="remove">×</button>`;
    li.querySelector('button').addEventListener('click', ()=>{
      extras.splice(i,1); renderExtras(); renderQuote();
    });
    list.appendChild(li);
  });
}

// I18N Strings (as before)...
const STRINGS = {
  it: {
    tagline: "B&B a cinque stelle",
    welcome_title: "Benvenuti alla Wooden Bridge House",
    welcome_text: "Una casa luminosa e raffinata a Molini di Triora, con terrazzo panoramico e jacuzzi riscaldata. Al vostro arrivo vi attende anche una bottiglia di vino rosso in omaggio.",
    cta_book:"Richiedi disponibilità",
    nav_about:"La Casa", nav_gallery:"Galleria", nav_extras:"Listino Extra", nav_booking:"Prenotazione", nav_location:"Dove siamo",
    about_title:"Tutto ciò che offre la casa",
    sleep_title:"Posti letto",
    sleep_text:"7 posti letto: camera matrimoniale con letto doppio e singolo separabile, cameretta con letto a castello, salotto con letto singolo pieghevole e divano letto singolo.",
    bath_title:"Bagno",
    bath_text:"Doccia walk-in; dotazione inclusa: shampoo e bagnodoccia, dentifricio, lamette e schiuma da barba. Disponibili asciugacapelli nel cassetto, tappetino, spingi-acqua e lavatrice a carico dall’alto.",
    room_title:"Camera",
    room_text:"In camera trovate un kit cucito, un togli-pelucchi e un deodorante. Ogni ospite riceve un set di asciugamani color crema (per distinguere quelli da bagno bianchi).",
    kitchen_title:"Cucina",
    kitchen_text:"Cucina a induzione con pentole dedicate; selezione di tè e caffè. Le capsule sono numerate per intensità. Presente anche un vasetto di Nutella.",
    lounge_title:"Salotto e giochi",
    lounge_text:"Nel tavolino troverete giochi da tavolo: carte, domino, dama e scacchi. TV e zona relax ampia.",
    wifi_title:"Wi‑Fi",
    jac_title:"Jacuzzi sul terrazzo",
    pub_title:"Woodenbridge Pub",
    car_title:"Macchina per girare il paese",
    gift_title:"Omaggio di benvenuto",
    gallery_title:"Galleria fotografica",
    extras_title:"Listino extra",
    extra_item:"Voce", extra_price:"Prezzo", per_day:"giorno", per_evening:"serata", per_person:"persona", per_bottle:"bottiglia",
    book_title:"Richiedi disponibilità",
    first_name:"Nome", last_name:"Cognome", guests:"Numero ospiti", phone:"Telefono", email:"Email", checkin:"Check‑in", checkout:"Check‑out",
    add_extra:"Aggiungi extra", choose_extra:"Seleziona…", btn_add:"Aggiungi", message:"Messaggio", btn_send:"Invia richiesta",
    form_note:"L’invio usa un servizio senza cookie oppure apre il tuo client email con il riepilogo.",
    loc_title:"Dove siamo", loc_text:"Siamo a Molini di Triora (IM), in una posizione tranquilla e panoramica nella Valle Argentina.",
    extras:"Extra",
    quote_title:"Preventivo stimato", total:"Totale stimato", quote_note:"Stima non vincolante. I prezzi definitivi saranno confermati alla risposta."
  },
  en: {
    tagline:"Five‑star B&B",
    welcome_title:"Welcome to Wooden Bridge House",
    welcome_text:"A bright, refined home in Molini di Triora with panoramic terrace and heated jacuzzi. A complimentary bottle of red wine awaits you on arrival.",
    cta_book:"Request availability",
    nav_about:"The House", nav_gallery:"Gallery", nav_extras:"Extras", nav_booking:"Booking", nav_location:"Location",
    about_title:"Everything the house offers",
    sleep_title:"Sleeping arrangements",
    sleep_text:"7 beds: master bedroom with double and separable single; small room with bunk bed; living room with folding single bed and single sofa bed.",
    bath_title:"Bathroom",
    bath_text:"Walk‑in shower; amenities included: shampoo & body wash, toothpaste, razors and shaving foam. Hairdryer in the drawer, bath mat, squeegee and top‑load washing machine.",
    room_title:"Bedroom",
    room_text:"Sewing kit, lint remover, and deodorant available. Each guest receives a cream‑colored towel set (bath white towels are separate).",
    kitchen_title:"Kitchen",
    kitchen_text:"Induction cooking with dedicated pans; tea & coffee selection. Capsules are numbered by intensity. Plus a jar of Nutella.",
    lounge_title:"Lounge & Games",
    lounge_text:"Coffee table with board games: cards, dominoes, checkers and chess. TV and ample relax area.",
    wifi_title:"Wi‑Fi",
    jac_title:"Terrace Jacuzzi",
    pub_title:"Woodenbridge Pub",
    car_title:"Getting around",
    gift_title:"Complimentary welcome",
    gallery_title:"Photo gallery",
    extras_title:"Extras price list",
    extra_item:"Item", extra_price:"Price", per_day:"day", per_evening:"evening", per_person:"person", per_bottle:"bottle",
    book_title:"Request availability",
    first_name:"First name", last_name:"Last name", guests:"Guests", phone:"Phone", email:"Email", checkin:"Check‑in", checkout:"Check‑out",
    add_extra:"Add extra", choose_extra:"Choose…", btn_add:"Add", message:"Message", btn_send:"Send request",
    form_note:"Submitting uses a cookie‑free service or opens your email client with a summary.",
    loc_title:"Where we are", loc_text:"We are in Molini di Triora (IM), a quiet scenic spot in the Argentina Valley.",
    extras:"Extras",
    quote_title:"Estimated quote", total:"Estimated total", quote_note:"Non‑binding estimate. Final prices will be confirmed in our reply."
  },
  fr: {
    tagline:"B&B cinq étoiles",
    welcome_title:"Bienvenue à Wooden Bridge House",
    welcome_text:"Maison lumineuse et raffinée à Molini di Triora, terrasse panoramique et jacuzzi chauffé. Une bouteille de vin rouge vous est offerte à l’arrivée.",
    cta_book:"Demander la disponibilité",
    nav_about:"La Maison", nav_gallery:"Galerie", nav_extras:"Extras", nav_booking:"Réservation", nav_location:"Où sommes‑nous",
    about_title:"Tout ce que la maison offre",
    sleep_title:"Couchages",
    sleep_text:"7 couchages : chambre double avec lit double et simple séparé, petite chambre avec lits superposés, salon avec lit simple pliant et canapé‑lit simple.",
    bath_title:"Salle de bain",
    bath_text:"Douche à l’italienne ; produits inclus : shampoing & gel douche, dentifrice, rasoirs et mousse à raser. Sèche‑cheveux dans le tiroir, tapis de bain, raclette et machine à laver top‑load.",
    room_title:"Chambre",
    room_text:"Kit de couture, rouleau anti‑peluches et déodorant à disposition. Chaque hôte reçoit un set de serviettes couleur crème (différentes des blanches de salle de bain).",
    kitchen_title:"Cuisine",
    kitchen_text:"Plaques à induction ; sélection de thés et cafés. Capsules numérotées par intensité. Pot de Nutella inclus.",
    lounge_title:"Salon & jeux",
    lounge_text:"Jeux de société dans la table basse : cartes, dominos, dames et échecs. TV et grand espace détente.",
    wifi_title:"Wi‑Fi",
    jac_title:"Jacuzzi en terrasse",
    pub_title:"Woodenbridge Pub",
    car_title:"Se déplacer",
    gift_title:"Cadeau de bienvenue",
    gallery_title:"Galerie photo",
    extras_title:"Tarif des extras",
    extra_item:"Élément", extra_price:"Prix", per_day:"jour", per_evening:"soirée", per_person:"personne", per_bottle:"bouteille",
    book_title:"Demande de disponibilité",
    first_name:"Prénom", last_name:"Nom", guests:"Hôtes", phone:"Téléphone", email:"E‑mail", checkin:"Arrivée", checkout:"Départ",
    add_extra:"Ajouter un extra", choose_extra:"Choisir…", btn_add:"Ajouter", message:"Message", btn_send:"Envoyer la demande",
    form_note:"L’envoi utilise un service sans cookie ou ouvre votre client e‑mail avec le récapitulatif.",
    loc_title:"Où sommes‑nous", loc_text:"Nous sommes à Molini di Triora (IM), un lieu calme et panoramique dans la Vallée Argentina.",
    extras:"Extras",
    quote_title:"Devis estimatif", total:"Total estimé", quote_note:"Estimation non contractuelle. Les prix finaux seront confirmés dans notre réponse."
  },
  de: {
    tagline:"Fünf‑Sterne B&B",
    welcome_title:"Willkommen im Wooden Bridge House",
    welcome_text:"Helles, elegantes Haus in Molini di Triora mit Panoramaterrasse und beheiztem Whirlpool. Bei Ankunft erwartet Sie eine kostenlose Flasche Rotwein.",
    cta_book:"Verfügbarkeit anfragen",
    nav_about:"Das Haus", nav_gallery:"Galerie", nav_extras:"Extras", nav_booking:"Buchung", nav_location:"Lage",
    about_title:"Alles, was das Haus bietet",
    sleep_title:"Schlafplätze",
    sleep_text:"7 Schlafplätze: Doppelzimmer mit Doppelbett und trennbarem Einzelbett; kleines Zimmer mit Etagenbett; Wohnzimmer mit Klappbett und Einzel‑Schlafsofa.",
    bath_title:"Badezimmer",
    bath_text:"Bodengleiche Dusche; enthaltene Artikel: Shampoo & Duschgel, Zahnpasta, Rasierer und Rasierschaum. Föhn im Schubfach, Badematte, Abzieher und Top‑Load‑Waschmaschine.",
    room_title:"Schlafzimmer",
    room_text:"Nähset, Fusselentferner und Deodorant vorhanden. Jeder Gast erhält ein cremefarbenes Handtuch‑Set (separat von den weißen Badetüchern).",
    kitchen_title:"Küche",
    kitchen_text:"Induktionsherd mit Töpfen; Auswahl an Tee und Kaffee. Kapseln nach Intensität nummeriert. Außerdem ein Glas Nutella.",
    lounge_title:"Wohnzimmer & Spiele",
    lounge_text:"Im Couchtisch: Karten, Domino, Dame und Schach. TV und großzügiger Relaxbereich.",
    wifi_title:"WLAN",
    jac_title:"Whirlpool auf der Terrasse",
    pub_title:"Woodenbridge Pub",
    car_title:"Unterwegs",
    gift_title:"Willkommensgeschenk",
    gallery_title:"Fotogalerie",
    extras_title:"Extras – Preisliste",
    extra_item:"Posten", extra_price:"Preis", per_day:"Tag", per_evening:"Abend", per_person:"Person", per_bottle:"Flasche",
    book_title:"Verfügbarkeit anfragen",
    first_name:"Vorname", last_name:"Nachname", guests:"Gäste", phone:"Telefon", email:"E‑Mail", checkin:"Anreise", checkout:"Abreise",
    add_extra:"Extra hinzufügen", choose_extra:"Wählen…", btn_add:"Hinzufügen", message:"Nachricht", btn_send:"Anfrage senden",
    form_note:"Das Absenden nutzt einen cookie‑freien Dienst oder öffnet Ihr E‑Mail‑Programm mit der Zusammenfassung.",
    loc_title:"Wo wir sind", loc_text:"Wir befinden uns in Molini di Triora (IM), ruhig und mit Blick ins Argentinatal.",
    extras:"Extras",
    quote_title:"Kostenvoranschlag", total:"Geschätzte Summe", quote_note:"Unverbindliche Schätzung. Endpreise bestätigen wir in unserer Antwort."
  },
  ru: {
    tagline:"Пятизвёздочный B&B",
    welcome_title:"Добро пожаловать в Wooden Bridge House",
    welcome_text:"Светлый элегантный дом в Молини‑ди‑Триора с террасой и подогреваемой джакузи. По прибытии вас ждёт бутылка красного вина в подарок.",
    cta_book:"Запросить доступность",
    nav_about:"Дом", nav_gallery:"Галерея", nav_extras:"Доп. услуги", nav_booking:"Бронирование", nav_location:"Где мы",
    about_title:"Что предлагает дом",
    sleep_title:"Спальные места",
    sleep_text:"7 мест: спальня с двуспальной кроватью и отдельной односпальной, малая комната с двухъярусной кроватью, гостиная с раскладной односпальной и односпальным диваном‑кроватью.",
    bath_title:"Ванная",
    bath_text:"Душ без порога; включены шампунь и гель для душа, зубная паста, станки и пена для бритья. Фен в ящике, коврик, водосгон и стиральная машина с верхней загрузкой.",
    room_title:"Комната",
    room_text:"Набор для шитья, удалитель катышков и дезодорант. Каждому гостю — комплект кремовых полотенец (отдельно от белых для ванной).",
    kitchen_title:"Кухня",
    kitchen_text:"Индукционная плита; выбор чая и кофе. Капсулы пронумерованы по интенсивности. Также банка Нутеллы.",
    lounge_title:"Гостиная и игры",
    lounge_text:"В журнальном столике — карты, домино, шашки и шахматы. ТВ и зона отдыха.",
    wifi_title:"Wi‑Fi",
    jac_title:"Джакузи на террасе",
    pub_title:"Бар Woodenbridge",
    car_title:"Передвижение",
    gift_title:"Подарок‑приветствие",
    gallery_title:"Фотогалерея",
    extras_title:"Прайс на доп. услуги",
    extra_item:"Позиция", extra_price:"Цена", per_day:"день", per_evening:"вечер", per_person:"чел.", per_bottle:"бут.",
    book_title:"Запросить доступность",
    first_name:"Имя", last_name:"Фамилия", guests:"Гостей", phone:"Телефон", email:"E‑mail", checkin:"Заезд", checkout:"Выезд",
    add_extra:"Добавить услугу", choose_extra:"Выбрать…", btn_add:"Добавить", message:"Сообщение", btn_send:"Отправить запрос",
    form_note:"Отправка использует сервис без cookie либо откроет ваш почтовый клиент с заявкой.",
    loc_title:"Где мы находимся", loc_text:"Мы в Молини‑ди‑Триора (IM), тихое живописное место в долине Аргентина.",
    extras:"Доп. услуги",
    quote_title:"Ориентировочная смета", total:"Итого", quote_note:"Необязательная оценка. Итоговые цены подтвердим в ответе."
  }
};

function applyLang(code){
  const dict = STRINGS[code] || STRINGS.it;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.setAttribute('lang', code);
}
applyLang('it');
document.getElementById('lang').addEventListener('change', (e)=> applyLang(e.target.value));

// --- Pricing estimator ---
// €85/night up to 2 guests; +€30/night per guest for 3rd–5th; 6th & 7th: €20/night each; max 7 guests.
function nightlyRate(guests){
  guests = Math.max(1, Math.min(7, Number(guests)||1));
  let base = 85;
  if (guests <= 2) return base;
  let extra = 0;
  const g3to5 = Math.max(0, Math.min(guests,5) - 2);
  extra += g3to5 * 30;
  const g6to7 = Math.max(0, guests - 5);
  extra += g6to7 * 20;
  return base + extra;
}
function parseDate(v){ const d = new Date(v+"T12:00:00"); return isNaN(d) ? null : d; }
function nightsBetween(a,b){ if(!a||!b) return 0; const ms = b - a; return Math.max(0, Math.round(ms/86400000)); }

const inputs = {
  guests: document.querySelector('input[name="guests"]'),
  checkin: document.querySelector('input[name="checkin"]'),
  checkout: document.querySelector('input[name="checkout"]')
};

function renderQuote(){
  const g = Math.min(7, Math.max(1, Number(inputs.guests.value||1)));
  const ci = parseDate(inputs.checkin.value);
  const co = parseDate(inputs.checkout.value);
  const n = nightsBetween(ci, co);
  const perNight = nightlyRate(g);
  const lines = [];
  if (n>0) lines.push({label:`${n} × €${perNight}/notte (${g} ospiti)`, amount: n*perNight});
  // extras
  extras.forEach(e=>{
    if (e.includes("€60")) { const k=(n>0?n:1)*60; lines.push({label:(n>0? `${n} × `:"")+e,amount:k}); }
    else if (e.includes("€70")) { const k=Math.max(1,n)*70; lines.push({label:`${Math.max(1,n)} × ${e}`,amount:k}); }
    else if (e.includes("€10/persona")) { const k=g*10; lines.push({label:`${g} × ${e}`,amount:k}); }
    else if (e.includes("€15")) { lines.push({label:e,amount:15}); }
    else if (e.includes("€10/bottiglia")) { lines.push({label:e,amount:10}); }
  });
  const total = lines.reduce((s,l)=>s+l.amount,0);
  const container = document.getElementById('quoteLines');
  container.innerHTML = '';
  lines.forEach(l=>{
    const div = document.createElement('div'); div.className='line';
    div.innerHTML = `<span>${l.label}</span><strong>€${l.amount.toFixed(0)}</strong>`; container.appendChild(div);
  });
  document.getElementById('quoteTotal').textContent = `€${total.toFixed(0)}`;
}
['input','change'].forEach(evt=>{
  inputs.guests.addEventListener(evt, renderQuote);
  inputs.checkin.addEventListener(evt, renderQuote);
  inputs.checkout.addEventListener(evt, renderQuote);
});
renderQuote();

// --- Lightbox ---
const lb = document.getElementById('lightbox'); const lbImg = document.getElementById('lbImg'); const lbClose = document.getElementById('lbClose');
document.querySelectorAll('.gallery a.lb').forEach(a=>{
  a.addEventListener('click',(ev)=>{ ev.preventDefault(); lbImg.src=a.getAttribute('href'); lb.classList.add('show'); lb.setAttribute('aria-hidden','false'); });
});
function closeLB(ev){ ev && ev.preventDefault(); lb.classList.remove('show'); lb.setAttribute('aria-hidden','true'); lbImg.removeAttribute('src'); }
lb.addEventListener('click',(e)=>{ if(e.target===lb) closeLB(); }); lbClose.addEventListener('click', closeLB);

// --- Formspree + fallback mailto ---
const form = document.getElementById('bookForm');
const FORM_ENDPOINT = ""; // set your Formspree endpoint to enable POST
form.addEventListener('submit', async (ev)=>{
  ev.preventDefault();
  const data = new FormData(form);
  if (data.get('company')) return; // honeypot

  const payload = Object.fromEntries(data.entries());
  payload.extras = extras;

  if (FORM_ENDPOINT){
    try{
      const res = await fetch(FORM_ENDPOINT, {
        method:'POST',
        headers: {'Accept':'application/json', 'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
      if (res.ok){
        alert('Richiesta inviata! Ti risponderemo al più presto.');
        return;
      }
    }catch(e){ /* fall through */ }
  }

  const lang = document.getElementById('lang').value; const t = STRINGS[lang] || STRINGS.it;
  const ci = payload.checkin || '-'; const co = payload.checkout || '-';
  const body = [
    `${t.first_name}: ${payload.firstName}`,
    `${t.last_name}: ${payload.lastName}`,
    `${t.guests}: ${payload.guests}`,
    `${t.phone}: ${payload.phone}`,
    `${t.email}: ${payload.email}`,
    `${t.checkin}: ${ci}`,
    `${t.checkout}: ${co}`,
    extras.length ? `${t.extras}: ${extras.join(' | ')}` : `${t.extras}: -`,
    `${t.message}: ${payload.message || '-'}`
  ].map(encodeURIComponent).join('%0D%0A');
  const subject = encodeURIComponent(`Richiesta soggiorno – ${payload.firstName} ${payload.lastName}`);
  window.location.href = `mailto:woodenbridgehouse@gmail.com?subject=${subject}&body=${body}`;
});
