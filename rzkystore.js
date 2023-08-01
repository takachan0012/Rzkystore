//Template Objeck list-item
function List_items(category,name,amount){
  this.category = category;
  this.name = name;
  this.amount = amount;
  this.adverb = function(){
    if(amount < 2 ){
      return "KURANG";
    }
    else{
      return "CUKUP";
    }
  }
}
//LIST_OBJECT ROKOK
let laBold = new List_items("ROKOK","LA-BOLD",7);
let mldBlack16 = new List_items("ROKOK","MLD-BLACK16",7);
let djarcok = new List_items("ROKOK","DJARUM-COKLAT-KRETEK",1);
let super12 = new List_items("ROKOK","SUPER12",7);
let super50 = new List_items("ROKOK","SUPER50",7);
let signatureBlk = new List_items("ROKOK","SIGNATURE-BLACK",7);
let ggMerah = new List_items("ROKOK","GG-MERAH-KRETEK",7);
let proMerah = new List_items("ROKOK","PRO-MERAH",7);
let proPutih = new List_items("ROKOK","PRO-PUTIH",7);
let surya12 = new List_items("ROKOK","SURYA12",7);
let surya16 = new List_items("ROKOK","SURYA16",7);
let ggFilter12 = new List_items("ROKOK","GARPIT12",7);
let ggFilter50 = new List_items("ROKOK","GARPIT50",7);
let samsuKretek = new List_items("ROKOK","SAMSU-KRETEK",7);
let magnumBlk12 = new List_items("ROKOK","MAGNUM-BLACK12",1);
let samsuPrem = new List_items("ROKOK","SAMSU-PREM",7);
let mbFb20 = new List_items("ROKOK","MB-FB20",7);
let mbFb12 = new List_items("ROKOK","MB-FB12",7);
let mbKretekBiru = new List_items("ROKOK","MB-BIRU-KRETEK",7);
let mbIceburst = new List_items("ROKOK","MB-ICE-BURST",7);
let mbMerah = new List_items("ROKOK","MB-MERAH",7);
let mbPutih = new List_items("ROKOK","MB-PUTIH",7);
let sm12 = new List_items("ROKOK","SM12",7);
let sm16 = new List_items("ROKOK","SM16",7);
let smKrtk = new List_items("ROKOK","SM-KRETEK",7);
let smMenthol16 = new List_items("ROKOK","SM-MENTHOL-16",7);
let esBerypop16 = new List_items("ROKOK","ESSE-BERRYPOP-16",7);
let esApplemint = new List_items("ROKOK","ESSE-APPPLEMINT",7);
let esJuicy = new List_items("ROKOK","ESSE-JUICY",7);
let camel = new List_items("ROKOK","CAMEL12",1);
let camel16 = new List_items("ROKOK","CAMEL16",7);
let jazyBold = new List_items("ROKOK","JAZY-BOLD",7);
let juaraKrtk = new List_items("ROKOK","JUARA-KRETEK",7);
let mustika = new List_items("ROKOK","MUSTIKA-KRETEK",7);
let magnumMax = new List_items("ROKOK","MAGNUM-MAX20",1);
let onJasmin = new List_items("ROKOK","ON-JASMINE-KRETEK",1);
let bintangMas = new List_items("ROKOK","BINTANG-MAS-KRETEK",7);
let djavaHijau = new List_items("ROKOK","DJAVA-IJO-KRETEK",7);
let bhumi = new List_items("ROKOK","BHUMI-KRETEK",7);
let esBerypop12 = new List_items("ROKOK","ESSESSE-BERRYPOP-12",1);
let cakra = new List_items("ROKOK","CAKRA-KRETEK",1);
let laIcePurple = new List_items("ROKOK","LA-ICE-PURPLE",7);
let kingSuper = new List_items("ROKOK","SUPER-KING",7);
let langsep = new List_items("ROKOK","LANGSEP",1);
let twizz = new List_items("ROKOK","TWIZZ",7);
// List Items ROKOK
let listRokok = [laBold,mldBlack16,djarcok,super12,super50,signatureBlk,ggMerah,proMerah,proPutih,surya12,surya16,ggFilter12,ggFilter50,samsuKretek,magnumBlk12,samsuPrem,mbFb12,mbFb20,mbKretekBiru,mbIceburst,mbMerah,mbPutih,sm12,sm16,smKrtk,smMenthol16,esBerypop12,esBerypop16,esApplemint,esJuicy,camel,jazyBold,juaraKrtk,mustika,magnumMax,onJasmin,bintangMas,djavaHijau,bhumi,cakra,laIcePurple,kingSuper,langsep,twizz, camel16
];

// LIST OBJECK OBAT
let vegeta = new List_items("OBAT","VEGETA",7);
let konidin = new List_items("OBAT","KONIDIN",3);
let neozep = new List_items("OBAT","NEOZEP",6);
let panadoL_ijo = new List_items("OBAT","PANADOL-IJO",7);
let viks_inhelar = new List_items("OBAT","VIKS44-INHELAR",1);
let bejo_jahe = new List_items("OBAT","BEJO-JAHE-MERAH",6);
let antangin = new List_items("OBAT","ANTANGIN",7);
let waisan = new List_items("OBAT","WAISAN",7);
let tAnginDws = new List_items("OBAT","TOLAK-ANGIN-DWS",7);
let contrexin = new List_items("OBAT","CONTREXIN",7);
let byeFever = new List_items("OBAT","BYE-BYE-FEVER",7);
let promag = new List_items("OBAT","PROMAG",7);
let kayuPutihKcl = new List_items("OBAT","KAYU-PUTIH-KECIL",7);
let sgrDinginOri = new List_items("OBAT","SEGAR-DINGIN-ORI",7);
let ceteme = new List_items("OBAT","CETEME",7);
let vitacimin = new List_items("OBAT","VITACIMIN",7);
let bodrex_FB = new List_items("OBAT","BODREX-FLU-BATUK",7);
let baygonBkr = new List_items("OBAT","BAYGON-BAKAR",7);
let koyoCabe = new List_items("OBAT","KOYO-CABE",7);
let salonpas = new List_items("OBAT","SALONPAS",7);
let bintang7 = new List_items("OBAT","BINTANG-7",7);
let entroStopAnak = new List_items("OBAT","ENTROSTOP-ANAK",7);
let komikObh = new List_items("OBAT","KOMIK-OBH",1);
let oskadonBiru = new List_items("OBAT","OSKADON-BIRU",7);
let oskadonSP = new List_items("OBAT","OSKADON-SP",7);
let mixagripFlu = new List_items("OBAT","MIXAGRIP-FLU",7);
let mixagripFB = new List_items("OBAT","MIXAGRIP-FLU-BATUK",7);
let geliga = new List_items("OBAT","BALSEM-GELIGA",7);
let freshCareMerah = new List_items("OBAT","FRESH-CARE-MERAH",7);
let hitBakar1000 = new List_items("OBAT","HIT-BAKAR1000",7);
let betadin = new List_items("OBAT","BETADIN",7);
let laserin = new List_items("OBAT","LASERIN-BATUK",7);
let reumacyl = new List_items("OBAT","NEO-REUMACYL",7);
let paramexKepala = new List_items("OBAT","PARAMEX-KEPALA",7);
let ademsariSet = new List_items("OBAT","ADEMSARI-SACHET",7);
let aladina = new List_items("OBAT","ALADINA",7);
let madurasa = new List_items("OBAT","MADURASA",7);
let antimo = new List_items("OBAT","ANTIMO-DWS",7);
let tAnginAnak = new List_items("OBAT","TOLAK-ANGIN-ANAK",7);
let hansaplas = new List_items("OBAT","HANSAPLAS",7);
let insto_mata = new List_items("OBAT","INSTO",7);
let bodrexi = new List_items("OBAT","BODREXIN",7);
let gpu = new List_items("OBAT","MINYAK-GPU",7);
let poldanMig = new List_items("OBAT","POLDAN-MIG",7);
let balsemLang = new List_items("OBAT","BALSEM-LANG",7);
let bodreX = new List_items("OBAT","BODREX",7);
let paracetamol = new List_items("OBAT","PARACETAMOL-DWS",7);
let ultraFlu = new List_items("OBAT","ULTRA-FLU",7);
let bedakMBK = new List_items("OBAT","BEDAK-MBK",7);
let bodrexEx = new List_items("OBAT","BODREX-EXTRA",7);
let diapet = new List_items("OBAT","DIAPET",7);
let panadolBiru = new List_items("OBAT","PANADOL-BIRU",7);
let panadolExtra = new List_items("OBAT","PANADOL-EXTRA",7);
let panadolAnak = new List_items("OBAT","PANADOL-ANAK",1);
let napacine = new List_items("OBAT","NEO-NAPACINE",1);
let tolakLinu = new List_items("OBAT","TOLAK-LINU",1);
// LIST ITEMS OBAT
let listObat = [vegeta,konidin,neozep,panadoL_ijo,viks_inhelar,bejo_jahe,antangin,waisan,tAnginDws,contrexin,byeFever,promag,kayuPutihKcl,sgrDinginOri,ceteme,vitacimin,bodrex_FB,baygonBkr,koyoCabe,salonpas,bintang7,entroStopAnak,komikObh,oskadonSP,oskadonBiru,mixagripFlu,mixagripFB,geliga,freshCareMerah,hitBakar1000,betadin,laserin,reumacyl,paramexKepala,ademsariSet,aladina,madurasa,antimo,tAnginAnak,hansaplas,insto_mata,bodrexi,gpu,poldanMig,balsemLang,bodreX,paracetamol,ultraFlu,bedakMBK,bodrexEx,diapet,panadolBiru,panadolExtra,panadolAnak,napacine,tolakLinu
];

// LIST OBJECT STYLELIST
let mirandBlack = new List_items("STYLELIST","MIRANDA-BLACK",1);
let tisu2500 = new List_items("STYLELIST","TISU-2500",7);
let mirandBlech = new List_items("STYLELIST","MIRANDA-BLEACHING",7);
let mirandColor = new List_items("STYLELIST","MIRANDA-WARNA",1);
let tisuBesar = new List_items("STYLELIST","TISU-BESAR",7);
let kapasSelection = new List_items("STYLELIST","KAPAS-SELECTION",7);
let rexonaMen = new List_items("STYLELIST","REXONA-MEN",7);
let rexonaWomen = new List_items("STYLELIST","REXONA-WANITA",7);
let marinaHandbody = new List_items("STYLELIST","MARINA-HANDBODY-KECIL",1);
// LIST ITEMS KECANTIKAN
let listStylist = [mirandBlack,tisu2500,mirandBlech,mirandColor,tisuBesar,kapasSelection,rexonaMen,rexonaWomen,marinaHandbody];

// LIST OBJECK WRITER TOOLS AND OFFICE
let lakbanPthkcl = new List_items("ALAT-TULIS-KANTOR","LAKBAN-PUTIH-KECIL",7);
let lakbanPthbsr = new List_items("ALAT-TULIS-KANTOR","LAKBAN-PUTIH-BESAR",7);
let etona = new List_items("ALAT-TULIS-KANTOR","ETONA",7);
let bonRangkap = new List_items("ALAT-TULIS-KANTOR","BON-RANGKAP",7);
let spidolPermanent = new List_items("ALAT-TULIS-KANTOR","SPIDOL-PERMANENT",7);
let pulpen = new List_items("ALAT-TULIS-KANTOR","PULPEN-STANDART-HITAM",7);
let buku = new List_items("ALAT-TULIS-KANTOR","BUKU",7);
let penghapus = new List_items("ALAT-TULIS-KANTOR","PENGHAPUS",7);
let gunting = new List_items("ALAT-TULIS-KANTOR","GUNTING-KECIL",7);
let guntingBenang = new List_items("ALAT-TULIS-KANTOR","GUNTING-BENANG",7);

// LIST ITEMS WRITER TOOLS AND OFFICE
let listATK = [lakbanPthkcl,lakbanPthbsr,etona,bonRangkap,spidolPermanent,pulpen,buku,penghapus,gunting,guntingBenang];

// LIST OBJECK SNACK 
let twist2000 = new List_items("SNACK","TWIST-2000",7);
let chitatoLite = new List_items("SNACK","CHITATO-LITE",1);
let chitatoBbq = new List_items("SNACK","CHITATO-BBQ",1);
let kuaciRebo = new List_items("SNACK","KUACI-REBO",1);
let ajisuka = new List_items("SNACK","AJISUKA",1);
let pangpang = new List_items("SNACK","PANG-PANG",1);
let astaga = new List_items("SNACK","ASTAGA",7);
let pilusBbq = new List_items("SNACK","PILUS-BBQ",1);
let kcgKulit = new List_items("SNACK","KACANG-KULIT",7);
let rostaIjo = new List_items("SNACK","ROSTA-IJO",7);
let moringPds = new List_items("SNACK","MORING-PEDAS",7);
let kerupuk2000 = new List_items("SNACK","KERUPUK-2000",7);
let kerupukBantet = new List_items("SNACK","KERUPUK-BANTET",7);
let dadaliCkr = new List_items("SANCK","DADALI-CIKUR",1);
let basreng1000 = new List_items("SNACK","BASRENG-1000-PEDAS",7);
let rostaMerah = new List_items("SNACK","ROSTA-MERAH",7);
let gAtom = new List_items("SNACK","GARUDA-ATOM",7);
let gAtom2000 = new List_items("SNACK","GARUDA-ATOM-2000",1);
let sosisAyam = new List_items("SNACK","SOSIS-AYAM",7);
let pilusOri = new List_items("SNACK","PILUS-ORI",1);
let pilusPds = new List_items("SNACK","PILUS-PEDAS",1);
let kcgPolong = new List_items("SNACK","KACANG-POLONG",1);
let dadaliCjr = new List_items("SNACK","DADALI-CIANJUR",1);
let koroMerah = new List_items("SNACK","KORO-MERAH",1);
let moringAsin = new List_items("SNACK","MORING-ASIN",7);
let koroIjo = new List_items("SNACK","KORO-IJO",1);
let taroBbq = new List_items("SNACK","TARO-BBQ",7);
let sosisSapi = new List_items("SNACK","SOSIS-SAPI",7);
let qtelaBbq = new List_items("SNACK","QTELA-BBQ",1);
let frenchFri = new List_items("SNACK","FRENCH-FRIES2000",7);
let makaroni1000 = new List_items("SNACK","MAKARONI-1000",7);
let potato2000 = new List_items("SNACK","POTATO-2000",7);
// LIST ITEMS OF SNACK
let listSnack = [twist2000,chitatoLite,chitatoBbq,kuaciRebo,ajisuka,pangpang,astaga,pilusBbq,kcgKulit,rostaIjo,moringPds,kerupuk2000,kerupukBantet,dadaliCkr,basreng1000,rostaMerah,gAtom,sosisAyam,pilusOri,pilusPds,kcgPolong,dadaliCjr,koroMerah,moringAsin,koroIjo,taroBbq,sosisSapi,qtelaBbq,frenchFri,makaroni1000,potato2000,gAtom2000
];

// LIST OBJECT KUE DAN ROTI
let sariGandumSandwice = new List_items("KUE-ROTI","SARI-GANDUM-SANDWICE",7);
let roti2000 = new List_items("KUE-ROTI","ROTI-2000",1);
let rotiAoka = new List_items("KUE-ROTI","ROTI-AOKA",1);
let marieTunggal = new List_items("KUE-ROTI","MARIE-TUNGGAL",1);
let pastaKeju500 = new List_items("KUE-ROTI","PASTA-KEJU-500",7);
let pastaCkt500 = new List_items("KUE-ROTI","PASTA-COKLAT-500",7);
let ardenKue = new List_items("KUE-ROTI","ARDEN-2000",7);
let malkistCrackers7k = new List_items("KUE-ROTI","MALKIST-CRACKERS-7K",7);
let chocoKeju1000 = new List_items("KUE-ROTI","CHOCOLATOS-KEJU-1000",7);
let time2000 = new List_items("KUE-ROTI","TIMEBREAK-2000",7);
let slaiOlai2000 = new List_items("KUE-ROTI","SLAI-OLAI-2000",7);
let vegeChs = new List_items("KUE-ROTI","VEGETABLE-CHEESE-2000",1);
let regalDuoCkt = new List_items("KUE-ROTI","REGAL-DUO-COKLAT",1);
let regalDuoKcg = new List_items("KUE-ROTI","REGAL-DUO-KACANG",7);
let gery2000 = new List_items("KUE-ROTI","GERY-2000",7);
let malkistCkt7k = new List_items("KUE-ROTI","MALKIST-COKLAT-7K",7);
let betterKue = new List_items("KUE-ROTI","BETTER",7);
let wafelloCkt = new List_items("KUE-ROTI","WAFELLO-COKLAT-1000",7);
let wafelloCaramel = new List_items("KUE-ROTI","WAFELLO-CARAMEL-1000",1);
let chocoCkt1000 = new List_items("KUE-ROTI","CHOCOLATOS-COKLAT-1000",7);
let nextar2000 = new List_items("KUE-ROTI","NEXTAR-2000",7);
let superstar1000 = new List_items("KUE-ROTI","SUPER-STAR-1000",7);
let malkistAbon1000 = new List_items("KUE-ROTI","MALKIST-ABON-1000",7);
let cokiCoki = new List_items("KUE-ROTI","COKI-COKI",7);
let kalpa2000 = new List_items("KUE-ROTI","KALPA-2000",7);
let gorio500 = new List_items("KUE-ROTI","GORIORIO-500",1);
let nabati2000 = new List_items("KUE-ROTI","NABATI-2000",7);
let malkistCkt1000 = new List_items("KUE-ROTI","MALKIST-COKLAT-1000",7);
let chocopie = new List_items("KUE-ROTI","CHOCOPIE-2000",1);
let bengWfer = new List_items("KUE-ROTI","BENGBENG-WAFER-2000",7);
let gerycrackerKeju = new List_items("KUE-ROTI","GERY-CRACKER-KEJU-1000",7);
let oreoBolu = new List_items("KUE-ROTI","OREO-BOLU",7);
let chocolatos500 = new List_items("KUE-ROTI","CHOCOLATOS-500",7);
let nabatiRolls = new List_items("KUE-ROTI","NABATI-ROLLS",7);
let oreoSandwice = new List_items("KUE-ROTI","OREO-SANDWICE",7);
let bigrolKeju = new List_items("KUE-ROTI","BIGROLL-KEJU",7);
let malkistCrk1000 = new List_items("KUE-ROTI","MALKIST-CRACKERS-1000",7);
let bigrolCkt = new List_items("KUE-ROTI","BIGROL-COKLAT",1);
let ahh1000 = new List_items("KUE-ROTI","AHH-1000",1);
let time1000 = new List_items("KUE-ROTI","TIMEBREAK-1000",1);
let regal1000 = new List_items("KUE-ROTI","REGAL-MARIE-1000",1);
let romaKelapa = new List_items("KUE-ROTI","ROMA-KELAPA",7);
let romaSandwice = new List_items("KUE-ROTI","ROMA-SANDWICE-2000",7);
let astor1000 = new List_items("KUE-ROTI","ASTOR-1000",7);

// LIST ITEMS KUE-ROTI
let listKueRoti = [
  sariGandumSandwice,roti2000,rotiAoka,marieTunggal,pastaKeju500,pastaCkt500,ardenKue,malkistCrackers7k,chocoKeju1000,time2000,slaiOlai2000,vegeChs,regalDuoCkt,regalDuoKcg,gery2000,malkistCkt7k,betterKue,wafelloCkt,wafelloCaramel,chocoCkt1000,nextar2000,superstar1000,malkistAbon1000,cokiCoki,kalpa2000,gorio500,nabati2000,malkistCkt1000,chocopie,bengWfer,gerycrackerKeju,oreoBolu,chocolatos500,nabatiRolls,oreoSandwice,bigrolKeju,malkistCrk1000,bigrolCkt,ahh1000,time1000,regal1000,romaKelapa,romaSandwice,astor1000
  ];

// LIST OBJECT KOPI
let marimasSet = new List_items("PERKOPIAN","MARIMAS-SIRSAK-JERUK",7);
let energenIjo = new List_items("PERKOPIAN","ENERGEN-KACANG-IJO",7);
let energenVanila = new List_items("PERKOPIAN","ENERGEN-VANILLA",7);
let maxteaSet = new List_items("PERKOPIAN","MAXTEA",7);
let gCappucino = new List_items("PERKOPIAN","GOODDAY-CAPPUCINO",7);
let nutrisariJP = new List_items("PERKOPIAN","NUTRISARI-JP",1);
let sariwangiSet = new List_items("PERKOPIAN","SARIWANGI-SACHET",7);
let dancowPutih = new List_items("PERKOPIAN","DANCOW-PUTIH",7);
let creamyLate = new List_items("PERKOPIAN","CREAMY-LATE",7);
let kapalMix = new List_items("PERKOPIAN","KAPAL-API-MIX",7);
let topAren = new List_items("PERKOPIAN","TOP-KOPI-GULA-AREN",7);
let dancowCkt = new List_items("PERKOPIAN","DANCOW-COKLAT",7);
let berasMerah = new List_items("PERKOPIAN","NESTLE-BERAS-MERAH",7);
let esteEmje = new List_items("PERKOPIAN","ESTE-EMJE",7);
let gCoolin = new List_items("PERKOPIAN","GOODDAY-COOLIN",7);
let gVanilla = new List_items("PERKOPIAN","GOODDAY-VANILLA",7);
let abcSusu = new List_items("PERKOPIAN","ABC-SUSU",7);
let toraDuo = new List_items("PERKOPIAN","TORABIKA-DUO",7);
let abcPlus = new List_items("PERKOPIAN","ABC-PLUS",7);
let luwakWhite = new List_items("PERKOPIAN","LUWAK-WHITE-COFFEE",7);
let gilusMix = new List_items("PERKOPIAN","GILUS-MIX",7);
let susuPutih = new List_items("PERKOPIAN","SUSU-PUTIH-SACHET",7);
let gCarabian = new List_items("PERKOPIAN","GOODDAY-CARABIAN",7);
let angetSuje = new List_items("PERKOPIAN","ANGETSARI-SUSU-JAHE",7);
let susuCkt = new List_items("PERKOPIAN","SUSU-COKLAT-SACHET",7);
let gMerah = new List_items("PERKOPIAN","GOODDAY-MERAH",7);
let energenCkt = new List_items("PERKOPIAN","ENERGEN-COKLAT",7);
let gCkt = new List_items("PERKOPIAN","GOODDAY-COKLAT",7);
let indoCafe = new List_items("PERKOPIAN","INDOCAFE",7);
let extraJoss = new List_items("PERKOPIAN","EXTRAJOSS",7);
let amhMerah = new List_items("PERKOPIAN","AMH-JAHE-MERAH",7);
let eKurma = new List_items("PERKOPIAN","ENERGEN-KURMA",7);
let susuKaleng = new List_items("PERKOPIAN","SUSU-KALENG-PTH",7);
let milo2000 = new List_items("PERKOPIAN","MILO-2000-SACHET",7);
// LIST ITEMS KOPI
let listKopi = [
  marimasSet,energenIjo,energenVanila,eKurma,maxteaSet,gCappucino,nutrisariJP,sariwangiSet,dancowPutih,creamyLate,kapalMix,topAren,dancowCkt,berasMerah,esteEmje,gCoolin,gVanilla,abcSusu,toraDuo,abcPlus,luwakWhite,gilusMix,susuPutih,gCarabian,angetSuje,susuCkt,gMerah,energenCkt,gCkt,indoCafe,extraJoss,amhMerah,susuKaleng,milo2000
  ]

// LIST OBJECT KAMAR MANDI
let ciptPasta = new List_items("KAMAR-MANDI","CIPTADENT-PASTA",7);
let peptPasta = new List_items("KAMAR-MANDI","PEPSODENT-PASTA",7);
let shampoLF = new List_items("KAMAR-MANDI","SHAMPO-LF",7);
let shampoClrBiru = new List_items("KAMAR-MANDI","SHAMPO-CLEAR-BIRU",7);
let panteneCond = new List_items("KAMAR-MANDI","PANTENE-CONDITIONER",7);
let mamaLemon = new List_items("KAMAR-MANDI","MAMA-LEMON-1000",1);
let shampoHS = new List_items("KAMAR-MANDI","SHAMPO-HS",7);
let moltoBiru = new List_items("KAMAR-MANDI","MOLTO-BIRU",7);
let sabunGive = new List_items("KAMAR-MANDI","SABUN-GIVE",7);
let sabunLFbiru = new List_items("KAMAR-MANDI","SABUN-LF-BIRU",7);
let dettolOrg = new List_items("KAMAR-MANDI","DETTOL-ORANGE",7);
let liquidPink = new List_items("KAMAR-MANDI","SOKLIN-LIQUID-PINK",7);
let sunlight5000 = new List_items("KAMAR-MANDI","SUNLIGHT-5000",7);
let panteneBiru = new List_items("KAMAR-MANDI","SHAMPO-PANTENE-BIRU",7);
let sunlight2000 = new List_items("KAMAR-MANDI","SUNLIGHT-2000",7);
let rejoice = new List_items("KAMAR-MANDI","SHAMPO-REJOICE",7);
let sabunColek2000 = new List_items("KAMAR-MANDI","SABUN-COLEK-2000",7);
let downyHitam = new List_items("KAMAR-MANDI","DOWNY-HITAM-1000",7);
let procline500 = new List_items("KAMAR-MANDI","PROCLINE-500",7);
let fnl_wash = new List_items("KAMAR-MANDI","FAIR&LOVELY-WASH",7);
let rinso1000 = new List_items("KAMAR-MANDI","RINSO-1000",7);
let shinzui = new List_items("KAMAR-MANDI","SHINZUI",7);
let sikatFormula = new List_items("KAMAR-MANDI","SIKAT-GIGI-FORMULA",7);
let zincShamp = new List_items("KAMAR-MANDI","ZINC-SHAMPO",7);
let rinsoLiq = new List_items("KAMAR-MANDI","RINSO-CAIR",7);
let clearMan = new List_items("KAMAR-MANDI","CLEAR-MAN",7);
let wipol = new List_items("KAMAR-MANDI","WIPOL-1000",7);
let sabunCair = new List_items("KAMAR-MANDI","SABUN-CAIR",7);
let kisprayGold = new List_items("KAMAR-MANDI","KISPRAY-GOLD-1000",7);
let doveShampo = new List_items("KAMAR-MANDI","DOVE-SHAMPO",7);
let daia1000 = new List_items("KAMAR-MANDI","DAIA-1000",7);
let jazOne = new List_items("KAMAR-MANDI","JAZ-1",7);
let nuvo = new List_items("KAMAR-MANDI","SABUN-NUVO",1);
// LIST ITEMS KAMAR-MANDI
let listKamarMandi = [
  ciptPasta,peptPasta,shampoLF,shampoClrBiru,panteneCond,mamaLemon,shampoHS,moltoBiru,sabunGive,sabunLFbiru,dettolOrg,liquidPink,sunlight5000,panteneBiru,sunlight2000,rejoice,sabunColek2000,downyHitam,procline500,fnl_wash,rinso1000,shinzui,sikatFormula,zincShamp,rinsoLiq,clearMan,wipol,sabunCair,kisprayGold,doveShampo,daia1000,jazOne,nuvo
  ]

// LIST OBEJECT BEVERAGE
let kopkap2000 = new List_items("MINUMAN","KOPIKAP-2000",7);
let amoCola = new List_items("MINUMAN","AMO-COLA",1);
let amoStr = new List_items("MINUMAN","AMO-STR",1);
let amoLemon = new List_items("MINUMAN","AMO-LEMON",1);
let isoPlus = new List_items("MINUMAN","ISOPLUS",7);
let bearBrand = new List_items("MINUMAN","BEAR-BRAND",7);
let uCkt250 = new List_items("MINUMAN","ULTRA-CKT-250",1);
let indoPth125 = new List_items("MINUMAN","INDOMILK-PTH-125",7);
let hydCoco = new List_items("MINUMAN","HYDROCOCO",7);
let zoda = new List_items("MINUMAN","ZODA",7);
let milkuCkt = new List_items("MINUMAN","MILKU-CKT",7);
let milkuStr = new List_items("MINUMAN","MILKU-STR",7);
let bintangZero = new List_items("MINUMAN","BINTANG-ZERO",7);
let krating = new List_items("MINUMAN","KRATINGDENG",7);
let cingkuKal = new List_items("MINUMAN","CINGKU-KALENG",7);
let tehRio = new List_items("MINUMAN","TEH-RIO",7);
let coLa = new List_items("MINUMAN","COCA-COLA",7);
let uStr250 = new List_items("MINUMAN","ULTRA-STR-250",1);
let uPth250 = new List_items("MINUMAN","ULTRA-PTH-250",7);
let panta = new List_items("MINUMAN","FANTA",7);
let goldaCofe = new List_items("MINUMAN","GOLDA-COFFEE",7);
let gCktBotol = new List_items("MINUMAN","GOODDAY-CKT-BOTOL",7);
let pocariS = new List_items("MINUMAN","POCARI-SWEET",7);
let tebsKaleng = new List_items("MINUMAN","TEBS-KALENG",1);
let minral_1L = new List_items("MINUMAN","MINRAL-1L",7);
let kaki3Kaleng = new List_items("MINUMAN","KAKI-3-KALENG",7);
let tehKotak = new List_items("MINUMAN","TEH-KOTAK",7);
let isoCup = new List_items("MINUMAN","ISO-CUP",7);
let ale = new List_items("MINUMAN","ALE-ALE",7);
let uCkt200 = new List_items("MINUMAN","ULTRA-CKT-200",7);
let nutriBost = new List_items("MINUMAN","NUTRIBOOST",7);
let FloriJeruk = new List_items("MINUMAN","FLORIDINA-JERUK",7);
let uStr125 = new List_items("MINUMAN","ULTRA-STR-125",7);
let c1000_ORG = new List_items("MINUMAN","C1000-ORANGE/LEMON",7);
let tehPucuk = new List_items("MINUMAN","TEH-PUCUK",7);
let buaVit = new List_items("MINUMAN","BUAVITA",7);
let sariKcg = new List_items("MINUMAN","SARI-KACANG-IJO",7);
let kaki3BtlBesar = new List_items("MINUMAN","KAKI-3-BTL-BSR",7);
let sprit = new List_items("MINUMAN","SPRITE",7);
let aqua_1L = new List_items("MINUMAN","AQUA-1L",7);
let panther = new List_items("MINUMAN","PANTHER",1);
let okBig = new List_items("MINUMAN","OKKY-BIG",7);
let mizon = new List_items("MINUMAN","MIZONE",1);
let aqua_Gelas = new List_items("MINUMAN","AQUA-GELAS",7);
let yogurtDrink = new List_items("MINUMAN","YOUGURT-DRINK",7);
let powerF = new List_items("MINUMAN","POWER-F",7);
let aqua_600 = new List_items("MINUMAN","AQUA-600",7);
let tehGelasBig = new List_items("MINUMAN","TEH-GELAS-BIG",1);
let uCkt125 = new List_items("MINUMAN","ULTRA-CKT-125",7);
let esTeler = new List_items("MINUMAN","ES-TELER",7);
let cincauPand = new List_items("MINUMAN","CINCAU-PANDA",7);
let monti1000 = new List_items("MINUMAN","MOUNTEA-1000",7);
let kaki3BtlKcl = new List_items("MINUMAN","KAKI-3-BTL-KCL",7);
let tehGelas1000 = new List_items("MINUMAN","TEH-GELAS-1000",7);
let minral600 = new List_items("MINUMAN","MINRAL-600",7);
let nipisMadu = new List_items("MINUMAN","NIPIS-MADU",7);
let leMineral600 = new List_items("MINUMAN","LE-MINERAL-600",7);
// LIST ITEMS BEVERAGE
let listBeverage = [
  kopkap2000,amoCola,amoStr,amoLemon,isoPlus,bearBrand,uCkt250,indoPth125,hydCoco,zoda,milkuCkt,milkuStr,bintangZero,cingkuKal,krating,tehRio,coLa,uStr250,uPth250,panta,goldaCofe,gCktBotol,pocariS,tebsKaleng,minral_1L,kaki3Kaleng,tehKotak,isoCup,ale,uCkt200,nutriBost,FloriJeruk,uStr125,c1000_ORG,tehPucuk,buaVit,sariKcg,kaki3BtlBesar,sprit,aqua_1L,panther,okBig,mizon,aqua_Gelas,yogurtDrink,powerF,aqua_600,tehGelasBig,uCkt125,esTeler,cincauPand,monti1000,kaki3BtlKcl,tehGelas1000,minral600,nipisMadu,leMineral600
  ]

// LIST OBJECT MIE
let popmiGor = new List_items("MIE","POPMIE-GORENG",7);
let koreaGor = new List_items("MIE","SEDAAP-KOREA-GORENG",1);
let koreaKuah = new List_items("MIE","SEDAAP-KOREA-KUAH",7);
let indoRend = new List_items("MIE","INDO-RENDANG",7);
let indoRica = new List_items("MIE","INDO-RICA",1);
let indoGentong = new List_items("MIE","INDO-EMPAL-GENTONG",7);
let bihunSoto = new List_items("MIE","BIHUNKU-SOTO",7);
let kariSpes = new List_items("MIE","SEDAAP-KARI-SPECIAL",1);
let popmiAb = new List_items("MIE","POPMIE-AB",7);
let suksesKuah = new List_items("MIE","SUKSES-KUAH",7);
let suksesGor = new List_items("MIE","SUKSES-GORENG",1);
let popmiBaso = new List_items("MIE","POPMIE-BASO",1);
let indoGor = new List_items("MIE","INDO-GORENG",1);
let indoAb = new List_items("MIE","INDO-AB",7);
let indoGeprek = new List_items("MIE","INDO-GEPREK",7);
let indoIjo = new List_items("MIE","INDO-CABE-IJO",7);
let bihunAb = new List_items("MIE","BIHUNKU-AB",7);
let indoKocok = new List_items("MIE","INDO-KOCOK-BDG",7);
let indoSoto = new List_items("MIE","INDO-SOTO",7);
let sedapSoto = new List_items("MIE","SEDAAP-SOTO",1);
let indoAceh = new List_items("MIE","INDO-ACEH",7);
let indoSeblak = new List_items("MIE","INDO-SEBLAK",7);
let sedaapGor = new List_items("MIE","SEDAAP-GORENG",7);
let mieGelas = new List_items("MIE","MIE-GELAS",7);
let sedaapAb = new List_items("MIE","SEDAAP-AB",7);
let indoGeti = new List_items("MIE","INDO-GETI",7);

// LIST ITEMS MIE
let listMie = [
  popmiGor,koreaGor,koreaKuah,indoRend,indoRica,indoGentong,bihunSoto,kariSpes,popmiAb,suksesKuah,suksesGor,popmiBaso,indoGor,indoAb,indoGeprek,indoIjo,bihunAb,indoKocok,indoSoto,sedapSoto,indoAceh,indoSeblak,sedaapGor,mieGelas,sedaapAb,indoGeti
];

// LIST OBJECT DAPUR
let minyakPer = new List_items("DAPUR","MINYAK-PERAPAT",1);
let telur = new List_items("DAPUR","TELUR",1);
let beras = new List_items("DAPUR","BERAS",7);
let kecapBango = new List_items("DAPUR","KECAP-BANGO-1000",1);
let abcExtra = new List_items("DAPUR","ABC-EXTRA-PEDAS",7);
let roycoAy = new List_items("DAPUR","ROYCO-AYAM-SACHET",7);
let terasiAbc = new List_items("DAPUR","TERASI-ABC-SACHET",7);
let terasiUleg = new List_items("DAPUR","SAMBAL-ULEG-TERASI",7);
let miki = new List_items("DAPUR","MIKI-SODIUM",1);
let minyak1L = new List_items("DAPUR","MINYAK-1L",7);
let gulaPthPer = new List_items("DAPUR","GULA-PTH-PERAPAT",7);
let mentegaSet = new List_items("DAPUR","MENTEGA-SACHET",7);
let gulaPthSet = new List_items("DAPUR","GULA-PTH-SACHET",7);
let sasa500 = new List_items("DAPUR","SASA-500",7);
let korekKayu = new List_items("DAPUR","KOREK-KAYU",7);
let roycoSapi = new List_items("DAPUR","ROYCO-SAPI-SACHET",7);
let bonCabe = new List_items("DAPUR","BONCABE",7);
let korekTokai = new List_items("DAPUR","TOKAI",7);
let minyakSet = new List_items("DAPUR","MINYAK-SACHET",7);
let nutriJel = new List_items("DAPUR","NUTRIJEL-AGAR",7);
let sardenKal = new List_items("DAPUR","SARDEN",1);
let sasa5000 = new List_items("DAPUR","SASA-5000",7);
let sasa3000 = new List_items("DAPUR","SASA-3500",7);
let bubur3000 = new List_items("DAPUR","SUPER-BUBUR-3,5K",7);
let garamDap = new List_items("DAPUR","GARAM-DAPUR",7);
let buryam1000 = new List_items("DAPUR","BURYAM-1000",7);
// LIST ITEMS DAPUR
let listDapur = [
  minyakPer,telur,beras,kecapBango,abcExtra,roycoAy,terasiAbc,terasiUleg,miki,minyak1L,gulaPthPer,mentegaSet,gulaPthSet,sasa500,korekKayu,roycoSapi,bonCabe,korekTokai,minyakSet,nutriJel,sardenKal,sasa5000,sasa3000,bubur3000,garamDap,buryam1000
  ]

// LIST OBJECT PERMEN
let mint = new List_items("PERMEN","MINTZ",7);
let bigBabol = new List_items("PERMEN","BIGBABOL",7);
let golia = new List_items("PERMEN","GOLIA",7);
let dinosX = new List_items("PERMEN","DINOS-X",7);
let relax = new List_items("PERMEN","RELAXA",7);
let lazery = new List_items("PERMEN","LAZERY",1);
let piramid = new List_items("PERMEN","PIRAMID-CKT",7);
let kopiko = new List_items("PERMEN","KOPIKO",7);
let yupi = new List_items("PERMEN","YUPI-500",7);
let hotPermen = new List_items("PERMEN","PERMEN-KAKI",1);
let kissMint = new List_items("PERMEN","KISS",7);
let yupiSate = new List_items("PERMEN","YUPI-SATE",7);
let fruit = new List_items("PERMEN","FRUTIVIT",7);
let mentos = new List_items("PERMEN","MENTOS",7);

//LIST ITEMS PERMEN
let listPermen = [
  mint,bigBabol,golia,dinosX,relax,lazery,piramid,kopiko,yupi,hotPermen,kissMint,yupiSate,fruit,mentos
  ];

// LIST OBJECT TAMBAHAN
let kiwi = new List_items("TAMBAHAN","KIWI-HITAM",1);
let swallow15K = new List_items("TAMBAHAN","SWALLOW-15K",7);
let lamp15 = new List_items("TAMBAHAN","LAMPU-15WATT",7);
let lamp10 = new List_items("TAMBAHAN","LAMPU-10WATT",7);
let lamp5 = new List_items("TAMBAHAN","LAMPU-5WATT",7);
let remi = new List_items("TAMBAHAN","KARTU-REMI",7);
let kresekBolaKcl = new List_items("TAMBAHAN","KRESEK-BOLA-KCL",7);
let plastikRokok = new List_items("TAMBAHAN","PLASTIK-ROKOK",7);
let gapleh = new List_items("TAMBAHAN","KARTU-GAPLEH",7);
let powerGlue = new List_items("TAMBAHAN","POWER-GLUE",7);
let plastikEs2000 = new List_items("TAMBAHAN","PLASTIK-ES-2000",7);
let abon = new List_items("TAMBAHAN","AABON",7);
let lamp20 = new List_items("TAMBAHAN","LAMPU-20WATT",7);
let korekKuping = new List_items("TAMBAHAN","KOREK-KUPING",7);
let bateraiRemot = new List_items("TAMBAHAN","BATERAI-REMOTE",7);
let bateraiJam = new List_items("TAMBAHAN","BATERAI-JAM",7);
let kresekBolaBesar = new List_items("TAMBAHAN","KRESEK-BOLA-BESAR",1);
let cupCoffee = new List_items("TAMBAHAN","CUP-COFFEE",7);
let lilin = new List_items("TAMBAHAN","LILIN",7);
let kado = new List_items("TAMBAHAN","KERTAS-KADO",1);
let masker2000 = new List_items("TAMBAHAN","MASKER-HITAM/PUTIH-2K",7);
let siletGoal = new List_items("TAMBAHAN","SILET-GOAL",7);
let siletTiger = new List_items("TAMBAHAN","SILET-TIGER",7);
// LIST OBJECT BABY
let mamyXl = new List_items("BABY","MAMY-XL",7);
let mamyL = new List_items("BABY","MAMY-L",7);
let mamyS = new List_items("BABY","MAMY-S",7);
let mamyM = new List_items("BABY","MAMY-M",7);
let charm2 = new List_items("BABY","CHARM-NIGHT-2",7);
let charmOrg = new List_items("BABY","CHARM-ORANGE",7);

//LIST ITEMS BABY
let listBaby = [
  mamyXl,mamyL,mamyS,mamyM,charm2,charmOrg
  ];



// LIST ITEMS TAMBAHAN
let listTambahan = [
  kiwi,swallow15K,lamp15,lamp10,remi,kresekBolaKcl,plastikRokok,gapleh,powerGlue,plastikEs2000,abon,lamp20,korekKuping,bateraiJam,bateraiRemot,kresekBolaBesar,cupCoffee,lamp5, lilin,kado,masker2000,siletGoal,siletTiger
 ]

//FUNCTION FOR CREATE TABLE BODY AND CONTENT
function createTableContent(itemTocreate){
  // CREATE TABEL TEMPLATE AND HEADER
let table = `
<table class="table mb-5">
  <thead class="category table-dark">
    <tr>
      <td colspan="4" class="text-center fw-bold">${itemTocreate[0].category}</td>
    </tr>
  </thead>
  <thead class="table-secondary">
    <tr>
      <th scope="col">NO</th>
      <th scope="col">NAMA BARANG</th>
      <th scope="col"></th>
      <th scope="col">KETERANGAN</th>
    </tr>
  </thead>
  <tbody id="${itemTocreate[0].category}">
  </tbody>
</table>
`;
// GET ELEMENT CONTAINER  && CREATE TABLE TEMPLATE HEADER
document.getElementById("container").appendChild(document.createElement("div")).innerHTML= table;
// GET ELEMENT TBODY
let tbody = document.getElementById(`${itemTocreate[0].category}`);
// FOR NUMBER IN TBODY
let noColumn = 1;
    // LOOPING FOR LIST ITEM
    for(arrContent of itemTocreate){
      let trTableContent = `
          <th scope="row">${noColumn++}</th>
          <td>${arrContent.name}</td>
          <td class="text-center">...</td>
          <td>${arrContent.adverb()}</td>`;
      if(arrContent.adverb() == "KURANG"){
        let trTableDanger = tbody.appendChild(document.createElement("tr"));
        trTableDanger.setAttribute("class","table-danger");
        trTableDanger.innerHTML = trTableContent;
        }
      else{
        tbody.appendChild(document.createElement("tr")).innerHTML=trTableContent;
      }
    }
}

//EXECUTE FUNCTION createTableContent
createTableContent(listRokok);
createTableContent(listObat);
createTableContent(listStylist);
createTableContent(listATK);
createTableContent(listSnack);
createTableContent(listKueRoti);
createTableContent(listKopi);
createTableContent(listKamarMandi);
createTableContent(listBeverage);
createTableContent(listMie);
createTableContent(listDapur);
createTableContent(listPermen);
createTableContent(listBaby);
createTableContent(listTambahan);


//DV -1 RELEASED 
//FEATURE DROPUP
//console.log(ulDropUp)
function dropUp(idLink){
  // CREATE LI ID
  document.getElementById("dropMenu").appendChild(document.createElement("li")).setAttribute("id",`${idLink[0].category}_li`);
  // CREATE A ID
  document.getElementById(`${idLink[0].category}_li`).appendChild(document.createElement("a")).setAttribute("id",`${idLink[0].category}_`);
  // CREATE A HREF
  document.getElementById(`${idLink[0].category}_`).setAttribute("href",`#${idLink[0].category}`);
  // CREATE CLASS BOOTSTRAP
  document.getElementById(`${idLink[0].category}_`).setAttribute("class",`p-2`);
  
  let a_href = document.getElementById(`${idLink[0].category}_`);
  let textNode = document.createTextNode(`${idLink[0].category}`);
  a_href.appendChild(textNode);
//console.log(ulList);
    //let ullist = document.createElement("li");
    //let text = ulList.innertext = idLink[0].category;
    //ulDropUp.appendChild(ullist);
    //href="#${idLink[0].category}">${idLink[0].category}</a>`))
}
dropUp(listRokok);
dropUp(listObat);
dropUp(listStylist);
dropUp(listATK);
dropUp(listSnack);
dropUp(listKueRoti);
dropUp(listKopi);
dropUp(listKamarMandi);
dropUp(listBeverage);
dropUp(listMie);
dropUp(listDapur);
dropUp(listPermen);
dropUp(listBaby);
dropUp(listTambahan);



// let test_ulList = document.createElement("li");
// let ahref = test_ulList.appendChild(document.createElement("a"));
// console.log(test_ulList)