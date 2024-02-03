let playerArea = document.querySelector('#playerArea');
let playerBtn = document.querySelector('#playerBtn');
let comp1Area = document.querySelector('#comp1Area');
let comp1Btn = document.querySelector('#comp1Btn');
let comp2Area = document.querySelector('#comp2Area');
let comp2Btn = document.querySelector('#comp2Btn');
let comp3Area = document.querySelector('#comp3Area');
let comp3Btn = document.querySelector('#comp3Btn');
let startBtn = document.querySelector('#startBtn');
let infoDiv = document.querySelector('#info');
let restartBtn = document.querySelector('#restartBtn');
let st1 = Math.floor(Math.random()*(430 - 240) + 240);
let st2 = Math.floor(Math.random()*(430 - 240) + 240);
let st3 = Math.floor(Math.random()*(430 - 240) + 240);
let st4 = Math.floor(Math.random()*(430 - 240) + 240);
let rand = null;
let winner = 0;

alert('Compete against three computers in speed typing. Click Start and get started. When you finish writing press enter and see your position.');

let texts = [
    "Javascript je najpopularniji programski jezik danasnjice",
    "Javascript nam sluzi da manipulisemo web stranicama",
    "Ecmascript je zvanicna verzija Javascripta koja je implementirana u brauzere",
    "Javascript je  case-sensitive programski jezik",
    "Leksicka struktura programskog jezika je skup osnovnih pravila koja određuju kako ste napisali program u ovom jeziku",
    "Javascript ne prepoznaje razmake izmedju svoje sintakse niti nove linije izmedju svojih zavrsenih komandi",
    "Javascript podrzava dva stila komentara",
    "Javascript varijable su kontejneri za cuvanje vrednosti podataka",
    "Javascript svoje tipove podataka deli u tri kategorije: primitivni, kompleksni i specijalni",
    "Null je kljucna rec Javascripta i predstavlja odsustvo vrednosti",
    "Javascript lista je indeksno uredjeni skup vrednosti (Array)",
    "Objekti su najbitniji tip podataka Javascripta",
    "Funkcije u Javascriptu mozemo posmatrati kao mini programe koje mozemo pozvati da se izvrse",
    "Loop-ovi su izrazi u Javascriptu uz pomoc kojih omogucavamo izvrsavanje bloka koda vise puta",
    "Window objekat je globalni objekat za client-side javascript programe",
    "Document object model je osnovni API za predstavljanje i manipulisanje html elementima",
    "Javascript lako menja kontent html elemenata, najlaksi nacin je da koristimo innerHTML property",
    "Bootstrap je besplatni front-end frejmvork za brzi i laksi web razvoj",
    "CSS je racunarski jezik koji pripada porodici style sheet jezika i koristi se da bi se opisao (stilizovao) strukturalno definisan dokument",
    "Pseudo klase su kljucne reci koje se dodaju selektorima da bi definisali specijalno stanje nekog elementa",
    "Border predstavlja samu ivicu elementa koju za razliku od padding-a mozemo stilizovati",
    "Margine predstavljaju spoljasnji prostor elementa koje omogucavaju da se elementi odguruju jedni od drugih",
    "Display svojstva koristimo da bismo menjali prikaz elemenata na stranici",
    "Overflow svojstvo definise sta se desava sa sadrzajem koji izlazi van granica elementa",
    "Pozicioniranje predstavlja definisanje polozaja elemenata na stranici u odnosu na prozor browsera, sadrzaj stranice ili odredjeni element",
    "HTML je hypertext markup language",
    "Paragraf-pasus predstavlja jedan blok teksta",
    "Naslovi i podnaslovi koriste se da bi dokument imao logicnu hijerarhiju",
    "Uredjena lista ol je lista koja ce ispred svake stavke imati redni broj pod kojim se nalazi",
    "Neuredjena lista ul je lista kod koje ce se ispred svake stavke naci bullet",
    "Prava moc html dokumenata nalazi se u  njihovoj sposobnosti da se uz pomoc linkova povezuju sa drugim dokumentima",
    "HTML5 predstavlja petu po redu, unapredjenu verziju HTML i kao takav unosi brojna unapredjenja u odnosu na prethodne verzije",
    "Ime google dolazi od pogresnog izgovora reci googol što je naziv za broj 10100",
    "Flexbox ima za cilj pruzanje efikasnijeg nacina za rasporedjivanje, poravnanje i raspodelu prostora izmedju elemenata u nekom kontejneru",
    "Flex kontejner element roditelj postaje fleksibilan podesavanjem svojstva display na flex",
    "Svojstvo flex-grow definise mogucnost nekog flex elementa da raste ako je potrebno",
    "Svojstvo flex-shrink definise mogucnost nekog flex elementa da se skuplja ako je potrebno",
    "Svojstvo flex-wrap definise da li su flex elementi naterani da budu u jednoj liniji ili se mogu prostirati na vise linija",
    "Svojstvo flex-basis definise podrazumevanu velicinu nekog elementa pre nego sto je preostali prostor raspodeljen",
    "Svojstvo flex-direction uspostavlja glavnu osu, definisuci tako smer u kojem se flex elementi smestaju u flex kontejner",
    "Svojstvo align-items definise ravnanje flex elemenata duz poprecne ose",
    "Svojstvo order definise redosled flex elemenata",
    "CSS3 media queries predstavljaju svojevrstan spas za web dizajnere i developere jer umnogome olaksavaju proces izrade responsive sajtova"
];

startBtn.addEventListener('click', timer);
restartBtn.addEventListener('click', restart);

function restart() {
    location.reload();
}

function timer() {
    let time = 5;
    startBtn.innerHTML = time;
    let loop = setInterval(function () {
        time--;
        startBtn.innerHTML = time;
        if (time === 0) {
            clearInterval(loop);
            startBtn.style.display = "none";
            restartBtn.style.display = "block";
            startTyping();
        }
    }, 1000);
}

function startTyping() {
    rand = Math.floor(Math.random() * texts.length);
    infoDiv.innerHTML = '<h3>' + texts[rand] + '</h3>';
    infoDiv.style.display = "block";
    playerArea.focus();
    playerStartTyping();
    comp1StartTyping();
    comp2StartTyping();
    comp3StartTyping();
}

function playerStartTyping() {
    playerArea.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
            let userTaxt = playerArea.value.trim();
            if (userTaxt == texts[rand]) {
                winner++;
                playerBtn.className = "success";
                playerBtn.innerHTML = "Position : " + winner;
            } else {
                playerBtn.className = "danger";
                playerBtn.innerHTML = "Wrong Typing";
            }
        }
    })
}

function comp1StartTyping() {
    let text = texts[rand];
    let textArray = text.split("");
    let loop = setInterval(function () {
        if (textArray.length != 0) {
            comp1Area.value += textArray.shift();
        } else {
            clearInterval(loop);
            winner++;
            comp1Btn.className = "success";
            comp1Btn.innerHTML = "Position : " + winner;
        }
    }, st1)
}

function comp2StartTyping() {
    let text = texts[rand];
    let textArray = text.split("");
    let loop = setInterval(function () {
        if (textArray.length != 0) {
            comp2Area.value += textArray.shift();
        } else {
            clearInterval(loop);
            winner++;
            comp2Btn.className = "success";
            comp2Btn.innerHTML = "Position : " + winner;
        }
    }, st2)
}

function comp3StartTyping() {
    let text = texts[rand];
    let textArray = text.split("");
    let loop = setInterval(function () {
        if (textArray.length != 0) {
            comp3Area.value += textArray.shift();
        } else {
            clearInterval(loop);
            winner++;
            comp3Btn.className = "success";
            comp3Btn.innerHTML = "Position : " + winner;
        }
    }, st3)
}