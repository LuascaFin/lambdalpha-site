/* =============================================================
   DATI DEL SITO — unica fonte. Modifica qui.
   - ORDINE di visualizzazione = ordine in questo array (o trascina su ?edit=1)
   - Per nascondere una voce: aggiungi  hidden: true
   - Per un exit: aggiungi  sold: true   (mostra badge "Sold")
   - "logo" = file in assets/logos/ ; "src" = URL da cui scaricarlo
   - Nomi e domini ricavati da Investment portfolio.xlsx (fogli Angel/Fund).
   - I domini con commento "verify" sono incerti (email mancante o non-brand):
     da confermare prima di scaricare i loghi definitivi.
   ============================================================= */

var LAMBDA = {

  // -------- Portfolio (angel) — ordine deciso da Luca --------
  portfolio: [
    { name: "Scalapay",        url: "https://www.scalapay.com",        logo: "scalapay.png",       src: "https://lambdalpha.com/wp-content/uploads/2020/11/scalapay.png" },
    { name: "Lendable",        url: "https://www.lendable.co.uk",      logo: "lendable.png",       src: "https://lambdalpha.com/wp-content/uploads/2019/04/lendable.png" },
    { name: "Pliant",          url: "https://www.getpliant.com",       logo: "pliant.png",         src: "https://lambdalpha.com/wp-content/uploads/2021/04/pliant.png" },
    { name: "Apron",           url: "https://www.apron.com",           logo: "apron.png",          src: "https://logo.clearbit.com/apron.com" },
    { name: "WeRoad",          url: "https://www.weroad.it",           logo: "weroad.png",         src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/WEROAD-1.png" },
    { name: "JetHR",           url: "https://www.jethr.it",            logo: "jethr.png",          src: "https://logo.clearbit.com/jethr.it" },
    { name: "Stacks",          url: "https://www.getstacks.ai",        logo: "stacks.png",         src: "https://logo.clearbit.com/getstacks.ai" },
    { name: "Instant",         url: "https://instant.one",             logo: "instant.png",        src: "https://logo.clearbit.com/instant.one" },
    { name: "Gideon Brothers", url: "https://www.gideonbros.ai",       logo: "gideon.png",         src: "https://lambdalpha.com/wp-content/uploads/2019/01/gideon-1-1.png" },
    { name: "Fence",           url: "https://www.fence.finance",       logo: "fence.png",          src: "https://logo.clearbit.com/fence.finance" },
    { name: "Nilos",           url: "https://www.nilos.io",            logo: "nilos.png",          src: "https://logo.clearbit.com/nilos.io" },
    { name: "Piana",           url: "https://www.getpiana.com",        logo: "piana.png",          src: "https://logo.clearbit.com/getpiana.com" },
    { name: "Infact Systems",  url: "https://www.infactsystems.com",   logo: "infact.png",         src: "https://logo.clearbit.com/infactsystems.com" },
    { name: "Formance",        url: "https://www.formance.com",        logo: "formance.png",       src: "https://logo.clearbit.com/formance.com" },
    { name: "Arrakis",         url: "https://www.arrakistechnologies.ai", logo: "arrakis.png",     src: "https://logo.clearbit.com/arrakistechnologies.ai" },
    { name: "Vibiz",           url: "https://www.vibiz.ai",            logo: "vibiz.png",          src: "https://logo.clearbit.com/vibiz.ai" },
    { name: "Invertix",        url: "https://www.invertix.ai",         logo: "invertix.png",       src: "https://logo.clearbit.com/invertix.ai" },
    { name: "Ancora",          url: "https://www.ancora.work",         logo: "ancora.png",         src: "https://logo.clearbit.com/ancora.work" },
    { name: "5u.ai",           url: "https://5u.ai",                   logo: "5u.png",             src: "https://logo.clearbit.com/5u.ai" },
    { name: "Jade Hosting",    url: "https://www.jadehosting.app",     logo: "jade.png",           src: "https://logo.clearbit.com/jadehosting.app" },
    { name: "Onepilot",        url: "https://www.onepilot.co",         logo: "onepilot.png",       src: "https://lambdalpha.com/wp-content/uploads/2021/04/one.png" },
    { name: "Kolleno",         url: "https://www.kolleno.com",         logo: "kolleno.png",        src: "https://lambdalpha.com/wp-content/uploads/2020/11/Kolleno-logo.png" },
    { name: "Nebuly",          url: "https://www.nebuly.com",          logo: "nebuly.png",         src: "https://logo.clearbit.com/nebuly.ai" },
    { name: "Qomodo",          url: "https://www.qomodo.me",           logo: "qomodo.png",         src: "https://logo.clearbit.com/qomodo.me" },
    { name: "Mark.ai",         url: "https://www.markcopy.ai",         logo: "markai.png",         src: "https://logo.clearbit.com/markcopy.ai" },
    { name: "Kortix",          url: "https://www.kortix.ai",           logo: "kortix.png",         src: "https://logo.clearbit.com/kortix.ai" },
    { name: "ReportAid",       url: "https://www.reportaid.ai",        logo: "reportaid.png",      src: "https://logo.clearbit.com/reportaid.ai" },
    { name: "MicroSignals",    url: "https://www.microsignals.com",    logo: "microsignals.png",   src: "https://logo.clearbit.com/microsignals.com" },
    { name: "Blockoffice",     url: "https://www.blockoffice.com",     logo: "blockoffice.png",    src: "https://logo.clearbit.com/blockoffice.com" },
    { name: "Speckle",         url: "https://www.speckle.systems",     logo: "speckle.png",        src: "https://logo.clearbit.com/speckle.systems" },
    { name: "Emma",            url: "https://emma-app.com",            logo: "emma.png",           src: "https://www.lambdalpha.com/wp-content/uploads/2019/01/emma.png" },
    { name: "Bear",            url: "https://bear.app",                logo: "bear.png",           src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/Bear-app-4.png" },
    { name: "Rollee",          url: "https://www.getrollee.com",       logo: "rollee.png",         src: "https://logo.clearbit.com/getrollee.com" },
    { name: "Saber",           url: "https://saber.app",               logo: "saber.png",          src: "https://logo.clearbit.com/saber.app" },
    { name: "Young Platform",  url: "https://youngplatform.com",       logo: "young-platform.jpg", src: "https://lambdalpha.com/wp-content/uploads/2021/09/young-platform.jpg" },
    { name: "Kipli",           url: "https://kipli.com",               logo: "kipli.png",          src: "https://lambdalpha.com/wp-content/uploads/2020/01/kipli.png" },
    { name: "Talent Garden",   url: "https://www.talentgarden.com",    logo: "talentgarden.jpg",   src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/Talent-Garden-1.jpg" },
    { name: "Contrast",        url: "https://getcontrast.io",          logo: "contrast.png",       src: "https://logo.clearbit.com/getcontrast.io" },
    { name: "Wectory",         url: "https://wectory.com",             logo: "wectory.png",        src: "https://logo.clearbit.com/wectory.com" },
    { name: "Agora",           url: "https://agoraworld.co",           logo: "agora.png",          src: "https://lambdalpha.com/wp-content/uploads/2020/11/agora-img.png" },
    { name: "Kukua",           url: "https://www.kukua.me",            logo: "kukua.png",          src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/kukua_logo-1.png" },

    // --- exit ---
    { name: "Airbank",         url: "https://joinairbank.com",         logo: "airbank.jpg",        src: "https://lambdalpha.com/wp-content/uploads/2021/09/Airbank-logo.jpg", sold: true },
    { name: "S4M",             url: "https://www.s4m.io",              logo: "s4m.png",            src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/S4M-1.png", sold: true },
    { name: "Medicalib",       url: "https://www.medicalib.fr",        logo: "medicalib.png",      src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/medicalib-1.png", sold: true },
    { name: "Il Caffè Italiano", url: "https://www.ilcaffeitaliano.com", logo: "caffeitaliano.png", src: "https://www.lambdalpha.com/wp-content/uploads/2018/12/cafe-italiano.png", sold: true },
    { name: "Futura",          url: "https://www.wearefutura.com",     logo: "futura.png",         src: "https://logo.clearbit.com/wearefutura.com", sold: true },
    { name: "RVVUP",           url: "https://rvvup.com",               logo: "rvvup.png",          src: "https://logo.clearbit.com/rvvup.com", sold: true }
  ],

  // -------- Funds I back as an LP — ordine deciso da Luca --------
  lpFunds: [
    { name: "2100 VC",         url: "https://2100.vc",                  logo: "2100.png",        src: "https://logo.clearbit.com/2100.vc" },
    { name: "FJ Labs",         url: "https://www.fjlabs.com",           logo: "fjlabs.png",      src: "https://logo.clearbit.com/fjlabs.com" },
    { name: "Puzzle Ventures", url: "https://puzzle-ventures.com",      logo: "puzzle.png",      src: "https://logo.clearbit.com/puzzle-ventures.com" },
    { name: "Tiny",            url: "https://www.tiny.vc",              logo: "tiny.png",        src: "https://logo.clearbit.com/tiny.vc" },
    { name: "Cocoa",           url: "https://cocoa.vc",                 logo: "cocoa.png",       src: "https://logo.clearbit.com/cocoa.vc" },
    { name: "Entropy",         url: "https://www.entropyindustrial.com", logo: "entropy.png",    src: "https://logo.clearbit.com/entropyindustrial.com" },
    { name: "201 Ventures",    url: "https://201.vc",                   logo: "201.png",         src: "https://logo.clearbit.com/201.vc" },
    { name: "Firedrop",        url: "https://firedrop.vc",              logo: "firedrop.png",    src: "https://logo.clearbit.com/firedrop.vc" },
    { name: "Foreword",        url: "https://www.foreword.vc",          logo: "foreword.png",    src: "https://logo.clearbit.com/foreword.vc" },
    { name: "Drysdale",        url: "https://drysdale.vc",              logo: "drysdale.png",    src: "https://logo.clearbit.com/drysdale.vc" },
    { name: "Rerail",          url: "https://rerail.vc",                logo: "rerail.png",      src: "https://logo.clearbit.com/rerail.vc" },
    { name: "Main Object",     url: "https://mainobject.vc",            logo: "mainobject.png",  src: "https://logo.clearbit.com/mainobject.vc" },
    { name: "HelloWorld",      url: "https://helloworld.vc",            logo: "helloworld.png",  src: "https://logo.clearbit.com/helloworld.vc" },
    { name: "SpeedInvest",     url: "https://www.speedinvest.com",      logo: "speedinvest.png", src: "https://logo.clearbit.com/speedinvest.com" },
    { name: "10x",             url: "https://www.10xfounders.com",      logo: "10x.png",         src: "https://logo.clearbit.com/10xfounders.com" }
  ],

  // -------- Co-investors — ordine deciso da Luca --------
  coinvestors: [
    { name: "Accel",            url: "https://www.accel.com",           logo: "accel.png",           src: "https://logo.clearbit.com/accel.com" },
    { name: "Sequoia",          url: "https://www.sequoiacap.com",      logo: "sequoia.png",         src: "https://logo.clearbit.com/sequoiacap.com" },
    { name: "Index",            url: "https://www.indexventures.com",   logo: "index.png",           src: "https://logo.clearbit.com/indexventures.com" },
    { name: "Lightspeed",       url: "https://lsvp.com",                logo: "lightspeed.png",      src: "https://logo.clearbit.com/lsvp.com" },
    { name: "General Catalyst", url: "https://www.generalcatalyst.com", logo: "generalcatalyst.png", src: "https://logo.clearbit.com/generalcatalyst.com" },
    { name: "DST Global",       url: "https://dst-global.com",          logo: "dst.png",             src: "https://logo.clearbit.com/dst-global.com" },
    { name: "a16z",             url: "https://a16z.com",                logo: "a16z.jpg",            src: "https://lambdalpha.com/wp-content/uploads/2021/09/Andreessen_Horowitz_new_logo.jpg" },
    { name: "Balderton",        url: "https://www.balderton.com",       logo: "balderton.jpg",       src: "https://lambdalpha.com/wp-content/uploads/2020/11/balderton.jpg" },
    { name: "EQT",              url: "https://eqtventures.com",         logo: "eqt.png",             src: "https://logo.clearbit.com/eqtventures.com" },
    { name: "LocalGlobe",       url: "https://localglobe.vc",           logo: "localglobe.jpg",      src: "https://lambdalpha.com/wp-content/uploads/2020/11/localglobe.jpg" }
  ]
};

/* Espone i dati al browser (window) e a Node (scripts/fetch-logos.sh) */
if (typeof window !== "undefined") { window.LAMBDA = LAMBDA; }
if (typeof module !== "undefined" && module.exports) { module.exports = LAMBDA; }
