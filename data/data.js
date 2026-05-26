/* =============================================================
   DATI DEL SITO — unica fonte. Modifica qui.
   - L'ORDINE di visualizzazione = l'ordine in cui compaiono qui.
     Per riordinare, sposta le righe.
   - Per nascondere una voce: aggiungi  hidden: true
   - "logo" = nome file in assets/logos/  (scaricato da scripts/fetch-logos.sh)
   - "src"  = URL sorgente del logo (usato solo dallo script di download)
   ============================================================= */

var LAMBDA = {

  // -------- Portfolio (aziende su cui ho investito / che ho seguito) --------
  portfolio: [
    { name: "Scalapay",        url: "https://www.scalapay.com",         logo: "scalapay.png",       src: "https://lambdalpha.com/wp-content/uploads/2020/11/scalapay.png" },
    { name: "Lendable",        url: "https://www.lendable.co.uk",       logo: "lendable.png",       src: "https://lambdalpha.com/wp-content/uploads/2019/04/lendable.png" },
    { name: "Gideon Brothers", url: "https://www.gideonbros.ai",        logo: "gideon.png",         src: "https://lambdalpha.com/wp-content/uploads/2019/01/gideon-1-1.png" },
    { name: "Emma",            url: "https://emma-app.com",             logo: "emma.png",           src: "https://www.lambdalpha.com/wp-content/uploads/2019/01/emma.png" },
    { name: "Bear",            url: "https://bear.app",                 logo: "bear.png",           src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/Bear-app-4.png" },
    { name: "Young Platform",  url: "https://youngplatform.com",        logo: "young-platform.jpg", src: "https://lambdalpha.com/wp-content/uploads/2021/09/young-platform.jpg" },
    { name: "Pliant",          url: "https://www.getpliant.com",        logo: "pliant.png",         src: "https://lambdalpha.com/wp-content/uploads/2021/04/pliant.png" },
    { name: "Mansa",           url: "https://getmansa.com",             logo: "mansa.png",          src: "https://lambdalpha.com/wp-content/uploads/2020/01/Mansa-logo.png" },
    { name: "Silverbird",      url: "https://silverbird.com",           logo: "silverbird.png",     src: "https://lambdalpha.com/wp-content/uploads/2021/04/sliverbird.png" },
    { name: "Orkestro",        url: "https://www.orkestro.com",         logo: "orkestro.png",       src: "https://lambdalpha.com/wp-content/uploads/2021/04/orkestro.png" },
    { name: "Onepilot",        url: "https://www.onepilot.co",          logo: "onepilot.png",       src: "https://lambdalpha.com/wp-content/uploads/2021/04/one.png" },
    { name: "Airbank",         url: "https://joinairbank.com",          logo: "airbank.jpg",        src: "https://lambdalpha.com/wp-content/uploads/2021/09/Airbank-logo.jpg" },
    { name: "Kolleno",         url: "https://www.kolleno.com",          logo: "kolleno.png",        src: "https://lambdalpha.com/wp-content/uploads/2020/11/Kolleno-logo.png" },
    { name: "Panther",         url: "https://www.withpanther.com",      logo: "panther.png",        src: "https://lambdalpha.com/wp-content/uploads/2020/11/panther.png" },
    { name: "Kipli",           url: "https://kipli.com",                logo: "kipli.png",          src: "https://lambdalpha.com/wp-content/uploads/2020/01/kipli.png" },
    { name: "Dishpatch",       url: "https://www.dishpatch.co.uk",      logo: "dishpatch.png",      src: "https://lambdalpha.com/wp-content/uploads/2021/04/dispatch.png" },
    { name: "WeRoad",          url: "https://www.weroad.it",            logo: "weroad.png",         src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/WEROAD-1.png" },
    { name: "Talent Garden",   url: "https://www.talentgarden.com",     logo: "talentgarden.jpg",   src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/Talent-Garden-1.jpg" },
    { name: "Greenjinn",       url: "https://www.greenjinn.com",        logo: "greenjinn.png",      src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/green-jin-1.png" },
    { name: "Agora",           url: "https://agoraworld.co",            logo: "agora.png",          src: "https://lambdalpha.com/wp-content/uploads/2020/11/agora-img.png" },
    { name: "Airfair",         url: "https://airfair.io",               logo: "airfair.png",        src: "https://lambdalpha.com/wp-content/uploads/2020/11/airfair.png" },
    { name: "S4M",             url: "https://www.s4m.io",               logo: "s4m.png",            src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/S4M-1.png" },
    { name: "Cala",            url: "https://eatcala.com",              logo: "cala.png",           src: "https://lambdalpha.com/wp-content/uploads/2019/09/cala.png" },
    { name: "Kukua",           url: "https://www.kukua.me",             logo: "kukua.png",          src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/kukua_logo-1.png" },
    { name: "Medicalib",       url: "https://www.medicalib.fr",         logo: "medicalib.png",      src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/medicalib-1.png" },
    { name: "Il Caffè Italiano", url: "https://www.ilcaffeitaliano.com",logo: "caffeitaliano.png",  src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/cafe-italiano.png" }
  ],

  // -------- Fondi & co-investitori --------
  // NB: dati di partenza dalla vecchia sezione "I have coinvested with".
  // Cura la lista: tieni solo i fondi in cui sei davvero LP / vuoi mostrare.
  funds: [
    { name: "a16z",             url: "https://a16z.com",               logo: "a16z.jpg",            src: "https://lambdalpha.com/wp-content/uploads/2021/09/Andreessen_Horowitz_new_logo.jpg" },
    { name: "Balderton",        url: "https://www.balderton.com",      logo: "balderton.jpg",       src: "https://lambdalpha.com/wp-content/uploads/2020/11/balderton.jpg" },
    { name: "Lakestar",         url: "https://www.lakestar.com",       logo: "lakestar.jpg",        src: "https://lambdalpha.com/wp-content/uploads/2020/12/LakeStar.jpg" },
    { name: "LocalGlobe",       url: "https://localglobe.vc",          logo: "localglobe.jpg",      src: "https://lambdalpha.com/wp-content/uploads/2020/11/localglobe.jpg" },
    { name: "Stride.VC",        url: "https://stride.vc",              logo: "stride.jpg",          src: "https://lambdalpha.com/wp-content/uploads/2020/12/Stride.jpg" },
    { name: "Connect Ventures", url: "https://www.connectventures.co", logo: "connectventures.jpg", src: "https://lambdalpha.com/wp-content/uploads/2020/11/connectventures.jpg" },
    { name: "Kima Ventures",    url: "https://www.kimaventures.com",   logo: "kimaventures.png",    src: "https://lambdalpha.com/wp-content/uploads/2020/11/kimaventures.png" },
    { name: "DN Capital",       url: "https://www.dncapital.com",      logo: "dncapital.jpg",       src: "https://lambdalpha.com/wp-content/uploads/2020/12/DnCapital.jpg" }
  ]
};

/* Espone i dati al browser (window) e a Node (scripts/fetch-logos.sh) */
if (typeof window !== "undefined") { window.LAMBDA = LAMBDA; }
if (typeof module !== "undefined" && module.exports) { module.exports = LAMBDA; }
