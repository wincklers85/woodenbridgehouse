
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
});

function renderExtras(){
  list.innerHTML = '';
  extras.forEach((e, i)=>{
    const li = document.createElement('li');
    li.className = 'chip';
    li.innerHTML = `<span>${e}</span> <button aria-label="remove">×</button>`;
    li.querySelector('button').addEventListener('click', ()=>{
      extras.splice(i,1); renderExtras();
    });
    list.appendChild(li);
  });
}

// Mailto submission (static-site friendly)
const form = document.getElementById('bookForm');
form.addEventListener('submit', (ev)=>{
  ev.preventDefault();
  const data = new FormData(form);
  const lang = document.getElementById('lang').value;
  const t = STRINGS[lang] || STRINGS.it;

  const body = [
    `${t.first_name}: ${data.get('firstName')}`,
    `${t.last_name}: ${data.get('lastName')}`,
    `${t.guests}: ${data.get('guests')}`,
    `${t.phone}: ${data.get('phone')}`,
    `${t.email}: ${data.get('email')}`,
    `${t.checkin}: ${data.get('checkin')}`,
    `${t.checkout}: ${data.get('checkout')}`,
    extras.length ? `${t.extras}: ${extras.join(' | ')}` : `${t.extras}: -`,
    `${t.message}: ${data.get('message') || '-'}`
  ].map(encodeURIComponent).join('%0D%0A');

  const subject = encodeURIComponent(`Richiesta soggiorno – ${data.get('firstName')} ${data.get('lastName')}`);
  const mailto = `mailto:woodenbridgehouse@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;
});

// I18N
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
    jac_text:"",
    pub_title:"Woodenbridge Pub",
    pub_text:"",
    car_title:"Macchina per girare il paese",
    car_text:"",
    gift_title:"Omaggio di benvenuto",
    gift_text:"",
    gallery_title:"Galleria fotografica",
    extras_title:"Listino extra",
    extra_item:"Voce", extra_price:"Prezzo", per_day:"giorno", per_evening:"serata", per_person:"persona", per_bottle:"bottiglia",
    book_title:"Richiedi disponibilità",
    first_name:"Nome", last_name:"Cognome", guests:"Numero ospiti", phone:"Telefono", email:"Email", checkin:"Check‑in", checkout:"Check‑out",
    add_extra:"Aggiungi extra", choose_extra:"Seleziona…", btn_add:"Aggiungi", message:"Messaggio", btn_send:"Invia richiesta", form_note:"L’invio apre il tuo client email con il riepilogo. Ti risponderemo al più presto.",
    loc_title:"Dove siamo", loc_text:"Siamo a Molini di Triora (IM), in una posizione tranquilla e panoramica nella Valle Argentina.",
    extras:"Extra"
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
    jac_text:"The jacuzzi features heating and hydromassage with jets and bubbles. Controls are on the tub top. Turn on the porch/terrace light switch to power it; if it stays off, check the protection switch is ON. After use, switch to OFF, add the chlorine floater and cover the tub. Turning off the porch lights also turns off the tub. On arrival, water is set to 35°C.",
    pub_title:"Woodenbridge Pub",
    pub_text:"Ground floor; bartender on request, 18:00–21:00. Advance booking required. Open Bar while stocks last: €70 per evening.",
    car_title:"Getting around",
    car_text:"Fiat Topolino EV (2‑seat microcar) €60/day, approx. 80 km range. AM driving licence required.",
    gift_title:"Complimentary welcome",
    gift_text:"A complimentary bottle of red wine awaits you on arrival.",
    gallery_title:"Photo gallery",
    extras_title:"Extras price list",
    extra_item:"Item", extra_price:"Price", per_day:"day", per_evening:"evening", per_person:"person", per_bottle:"bottle",
    book_title:"Request availability",
    first_name:"First name", last_name:"Last name", guests:"Guests", phone:"Phone", email:"Email", checkin:"Check‑in", checkout:"Check‑out",
    add_extra:"Add extra", choose_extra:"Choose…", btn_add:"Add", message:"Message", btn_send:"Send request", form_note:"Submitting opens your email client with a summary. We'll get back to you shortly.",
    loc_title:"Where we are", loc_text:"We are in Molini di Triora (IM), a quiet scenic spot in the Argentina Valley.",
    extras:"Extras"
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
    jac_text:"Le jacuzzi dispose du chauffage et de l’hydromassage avec jets et bulles. Les commandes sont sur le bord supérieur. Allumez l’interrupteur d’éclairage du porche/terrasse pour l’alimenter ; s’il ne démarre pas, vérifiez que l’interrupteur de protection est sur ON. Après utilisation, mettez sur OFF, ajoutez le flotteur de chlore et recouvrez. Éteindre les lumières du porche éteint aussi la cuve. À l’arrivée, l’eau est à 35 °C.",
    pub_title:"Woodenbridge Pub",
    pub_text:"Rez‑de‑chaussée ; barman sur demande, 18h00–21h00. Réservation préalable obligatoire. Open Bar dans la limite des stocks : 70 € par soirée.",
    car_title:"Se déplacer",
    car_text:"Fiat Topolino EV (microcar 2 places) 60 €/jour, env. 80 km d’autonomie. Permis AM requis.",
    gift_title:"Cadeau de bienvenue",
    gift_text:"Une bouteille de vin rouge vous est offerte à l’arrivée.",
    gallery_title:"Galerie photo",
    extras_title:"Tarif des extras",
    extra_item:"Élément", extra_price:"Prix", per_day:"jour", per_evening:"soirée", per_person:"personne", per_bottle:"bouteille",
    book_title:"Demande de disponibilité",
    first_name:"Prénom", last_name:"Nom", guests:"Hôtes", phone:"Téléphone", email:"E‑mail", checkin:"Arrivée", checkout:"Départ",
    add_extra:"Ajouter un extra", choose_extra:"Choisir…", btn_add:"Ajouter", message:"Message", btn_send:"Envoyer la demande", form_note:"L’envoi ouvre votre client e‑mail avec le récapitulatif. Nous vous répondrons rapidement.",
    loc_title:"Où sommes‑nous", loc_text:"Nous sommes à Molini di Triora (IM), un lieu calme et panoramique dans la Vallée Argentina.",
    extras:"Extras"
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
    jac_text:"Der Whirlpool verfügt über Heizung und Hydromassage mit Düsen und Blasen. Bedienfeld oben am Becken. Schalten Sie den Lichtschalter der Veranda/Terrasse ein; startet er nicht, prüfen Sie den Schutzschalter (ON). Nach Benutzung auf OFF, Chlorschwimmer hinein und abdecken. Das Ausschalten der Verandalichter schaltet auch den Whirlpool aus. Bei Ankunft ist das Wasser auf 35 °C eingestellt.",
    pub_title:"Woodenbridge Pub",
    pub_text:"Erdgeschoss; Barkeeper auf Anfrage, 18:00–21:00. Vorab‑Reservierung erforderlich. Open Bar solange der Vorrat reicht: 70 € pro Abend.",
    car_title:"Unterwegs",
    car_text:"Fiat Topolino EV (2‑Sitzer Microcar) 60 €/Tag, ca. 80 km Reichweite. AM‑Führerschein erforderlich.",
    gift_title:"Willkommensgeschenk",
    gift_text:"Eine Flasche Rotwein kostenlos bei Ankunft.",
    gallery_title:"Fotogalerie",
    extras_title:"Extras – Preisliste",
    extra_item:"Posten", extra_price:"Preis", per_day:"Tag", per_evening:"Abend", per_person:"Person", per_bottle:"Flasche",
    book_title:"Verfügbarkeit anfragen",
    first_name:"Vorname", last_name:"Nachname", guests:"Gäste", phone:"Telefon", email:"E‑Mail", checkin:"Anreise", checkout:"Abreise",
    add_extra:"Extra hinzufügen", choose_extra:"Wählen…", btn_add:"Hinzufügen", message:"Nachricht", btn_send:"Anfrage senden", form_note:"Das Absenden öffnet Ihr E‑Mail‑Programm mit der Zusammenfassung. Wir melden uns zeitnah.",
    loc_title:"Wo wir sind", loc_text:"Wir befinden uns in Molini di Triora (IM), ruhig und mit Blick ins Argentinatal.",
    extras:"Extras"
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
    jac_text:"Джакузи с подогревом и гидромассажем (струи и пузырьки). Панель управления сверху. Включите выключатель света на веранде/террасе; если ванна не запускается, проверьте защитный выключатель (ON). После использования — OFF, положите поплавок с хлором и накройте. Отключение света на веранде отключает и ванну. К прибытию вода установлена на 35 °C.",
    pub_title:"Бар Woodenbridge",
    pub_text:"Первый этаж; бармен по запросу, 18:00–21:00. Необходима предварительная бронь. Открытый бар до окончания запасов: 70 € за вечер.",
    car_title:"Передвижение",
    car_text:"Fiat Topolino EV (микромобиль на 2 места) 60 €/день, пробег около 80 км. Требуются права AM.",
    gift_title:"Подарок‑приветствие",
    gift_text:"При прибытии вас ждёт бутылка красного вина.",
    gallery_title:"Фотогалерея",
    extras_title:"Прайс на доп. услуги",
    extra_item:"Позиция", extra_price:"Цена", per_day:"день", per_evening:"вечер", per_person:"чел.", per_bottle:"бут.",
    book_title:"Запросить доступность",
    first_name:"Имя", last_name:"Фамилия", guests:"Гостей", phone:"Телефон", email:"E‑mail", checkin:"Заезд", checkout:"Выезд",
    add_extra:"Добавить услугу", choose_extra:"Выбрать…", btn_add:"Добавить", message:"Сообщение", btn_send:"Отправить запрос", form_note:"Отправка откроет почтовый клиент с резюме. Мы скоро свяжемся с вами.",
    loc_title:"Где мы находимся", loc_text:"Мы в Молини‑ди‑Триора (IM), тихое живописное место в долине Аргентина.",
    extras:"Доп. услуги"
  }
};

// Apply language
function applyLang(code){
  const dict = STRINGS[code] || STRINGS.it;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
}
applyLang('it');
document.getElementById('lang').addEventListener('change', (e)=> applyLang(e.target.value));
