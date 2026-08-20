
console.log("APP.JS STARTER");


// ============================================================
// SUPABASE
// ============================================================

const SUPABASE_URL =
    "https://vnfctnkkgvscmndwpwwh.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_PzMAwM1OAZ9wg-dHVpcDrg_D2ucmY7t";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

console.log("Supabase OK");





// ============================================================
// AUTHENTICATION
// ============================================================

const loginForm =
    document.getElementById("loginForm");

const userSection =
    document.getElementById("userSection");

const emailInput =
    document.getElementById("emailInput");

const passwordInput =
    document.getElementById("passwordInput");

const loginButton =
    document.getElementById("loginButton");

const logoutButton =
    document.getElementById("logoutButton");

const loginMessage =
    document.getElementById("loginMessage");

const loggedInUser =
    document.getElementById("loggedInUser");


// ============================================================
// SHOW / HIDE LOGIN
// ============================================================

function updateAuthUI(user) {

    if (user) {

        if (loginForm) {
            loginForm.style.display = "none";
        }

        if (userSection) {
            userSection.style.display = "block";
        }

        if (loggedInUser) {

            loggedInUser.textContent =
                user.email;

        }

    } else {

        if (loginForm) {
            loginForm.style.display = "block";
        }

        if (userSection) {
            userSection.style.display = "none";
        }

        if (loggedInUser) {
            loggedInUser.textContent = "";
        }

    }

}


// ============================================================
// LOGIN
// ============================================================

if (loginButton) {

    loginButton.addEventListener(
        "click",
        async function () {

            const email =
                emailInput.value.trim();

            const password =
                passwordInput.value;


            if (!email || !password) {

                loginMessage.textContent =
                    "Please enter email and password.";

                return;

            }


            loginButton.disabled = true;

            loginMessage.textContent =
                "Logging in...";


            const {
                data,
                error
            } =
                await supabaseClient.auth.signInWithPassword({
                    email: email,
                    password: password
                });


            if (error) {

                console.error(
                    "Login failed:",
                    error
                );

                loginMessage.textContent =
                    error.message;

                loginButton.disabled = false;

                return;

            }


            console.log(
                "Login successful:",
                data.user
            );


            loginMessage.textContent =
                "";


            passwordInput.value = "";


            updateAuthUI(
                data.user
            );


            loginButton.disabled = false;

        }
    );

}


// ============================================================
// LOGOUT
// ============================================================

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        async function () {

            const {
                error
            } =
                await supabaseClient.auth.signOut();


            if (error) {

                console.error(
                    "Logout failed:",
                    error
                );

                return;

            }


            updateAuthUI(null);

        }
    );

}


// ============================================================
// CHECK CURRENT USER
// ============================================================

async function checkCurrentUser() {

    const {
        data,
        error
    } =
        await supabaseClient.auth.getUser();


    if (error) {

        console.error(
            "Failed to get current user:",
            error
        );

        updateAuthUI(null);

        return;

    }


    updateAuthUI(
        data.user
    );

}


// ============================================================
// AUTH STATE CHANGES
// ============================================================



// Check login when application starts




// ============================================================
// PEOPLE
// ============================================================

const people = [
    "Nahuel",
    "Rom-1",
    "Anday",
    "Rom-2",
    "Odysseas"
];


// ============================================================
// SCHEDULE DATA
// ============================================================

let scheduleData = [];


// ============================================================
// START DATE
// Friday 21.08.2026 = ISO Week 34
// ============================================================

const scheduleStart = new Date(
    2026,
    7,
    21,
    12,
    0,
    0
);


// ============================================================
// TRANSLATIONS
// ============================================================

const translations = {

    en: {

        language: "🌐 Language",

        title: "Cleaning Schedule",

        subtitle: "Shared Living Room & Kitchen",

        thisWeek: "This Week",

        date: "Date",

        responsible: "Responsible",

        time: "Time",

        cleaningSchedule: "Cleaning Schedule",

        week: "Week",

        previous: "← Previous",

        next: "Next →",

        cleaningTasks: "Cleaning Tasks",

        task1: "Vacuum the living room and kitchen floors",

        task2: "Mop the living room and kitchen floors",

        task3: "Wipe all surfaces",

        task4: "Clean the stove and hob",

        task5: "Clean the sink and kitchen area",

        task6: "Empty the rubbish when needed",

        task7: "Wash kitchen cloths separately",

        task8: "Wash mops separately",

        task9: "Wash bathroom cloths separately",

        complete: "Mark cleaning as completed",

        completed:
            "✓ Cleaning completed",

        completedBy:
            "Completed by",

        notCompleted:
            "Not completed",

        notYetAvailable: "Available Thursday–Friday",

        deadlinePassed: "Deadline passed"
    },


    no: {

        language: "🌐 Språk",

        title: "Rengjøringsplan",

        subtitle: "Felles stue og kjøkken",

        thisWeek: "Denne uken",

        date: "Dato",

        responsible: "Ansvarlig",

        time: "Tid",

        cleaningSchedule: "Rengjøringsplan",

        week: "Uke",

        previous: "← Forrige",

        next: "Neste →",

        cleaningTasks: "Rengjøringsoppgaver",

        task1: "Støvsug stuen og kjøkkengulvet",

        task2: "Vask stuen og kjøkkengulvet",

        task3: "Tørk av alle overflater",

        task4: "Rengjør komfyren og platetoppen",

        task5: "Rengjør vasken og kjøkkenområdet",

        task6: "Tøm søppelet ved behov",

        task7: "Vask kjøkkenkluter separat",

        task8: "Vask mopper separat",

        task9: "Vask baderomskluter separat",

        complete: "Marker rengjøringen som utført",

        completed:
            "✓ Rengjøring utført",

        completedBy:
            "Utført av",

        notCompleted:
            "Ikke utført",
        notYetAvailable: "Tilgjengelig torsdag–fredag",

        deadlinePassed: "Fristen har gått ut"
    },


    hu: {

        language: "🌐 Nyelv",

        title: "Takarítási beosztás",

        subtitle: "Közös nappali és konyha",

        thisWeek: "Ezen a héten",

        date: "Dátum",

        responsible: "Felelős",

        time: "Idő",

        cleaningSchedule: "Takarítási beosztás",

        week: "Hét",

        previous: "← Előző",

        next: "Következő →",

        cleaningTasks: "Takarítási feladatok",

        task1: "A nappali és a konyha padlójának porszívózása",

        task2: "A nappali és a konyha padlójának felmosása",

        task3: "Minden felület letörlése",

        task4: "A tűzhely és főzőlap megtisztítása",

        task5: "A mosogató és a konyhai terület megtisztítása",

        task6: "A szemét kiürítése szükség esetén",

        task7: "Konyharuhák külön mosása",

        task8: "Felmosók külön mosása",

        task9: "Fürdőszobai törlőkendők külön mosása",

        complete: "Takarítás elvégzettként megjelölése",

        completed: "✓ Takarítás elvégezve",

        notCompleted: "Nincs elvégezve",

        notYetAvailable: "Csütörtök–péntek között elérhető",

        deadlinePassed: "A határidő lejárt"
    },


    bg: {

        language: "🌐 Език",

        title: "График за почистване",

        subtitle: "Обща всекидневна и кухня",

        thisWeek: "Тази седмица",

        date: "Дата",

        responsible: "Отговорник",

        time: "Час",

        cleaningSchedule: "График за почистване",

        week: "Седмица",

        previous: "← Предишна",

        next: "Следваща →",

        cleaningTasks: "Задачи за почистване",

        task1: "Почистване с прахосмукачка на подовете",

        task2: "Измиване на подовете",

        task3: "Избърсване на всички повърхности",

        task4: "Почистване на печката и котлоните",

        task5: "Почистване на мивката и кухненската зона",

        task6: "Изхвърляне на боклука при необходимост",

        task7: "Пране на кухненските кърпи отделно",

        task8: "Пране на моповете отделно",

        task9: "Пране на кърпите за баня отделно",

        complete: "Маркиране на почистването като завършено",

        completed: "✓ Почистването е завършено",

        notCompleted: "Не е завършено",

        notYetAvailable: "Достъпно от четвъртък до петък",

        deadlinePassed: "Крайният срок изтече"
    },


    ro: {

        language: "🌐 Limbă",

        title: "Program de curățenie",

        subtitle: "Living și bucătărie comune",

        thisWeek: "Săptămâna aceasta",

        date: "Data",

        responsible: "Responsabil",

        time: "Ora",

        cleaningSchedule: "Program de curățenie",

        week: "Săptămâna",

        previous: "← Anterior",

        next: "Următoarea →",

        cleaningTasks: "Sarcini de curățenie",

        task1: "Aspirarea podelelor din living și bucătărie",

        task2: "Spălarea podelelor din living și bucătărie",

        task3: "Ștergerea tuturor suprafețelor",

        task4: "Curățarea aragazului și plitei",

        task5: "Curățarea chiuvetei și a zonei de bucătărie",

        task6: "Golirea gunoiului când este necesar",

        task7: "Spălarea separată a lavetelor de bucătărie",

        task8: "Spălarea separată a mopurilor",

        task9: "Spălarea separată a lavetelor de baie",

        complete: "Marchează curățenia ca finalizată",

        completed: "✓ Curățenia a fost finalizată",

        notCompleted: "Nu este finalizată",

        notYetAvailable: "Disponibil joi–vineri",

        deadlinePassed: "Termenul a expirat"
    },


    pl: {

        language: "🌐 Język",

        title: "Harmonogram sprzątania",

        subtitle: "Wspólny salon i kuchnia",

        thisWeek: "Ten tydzień",

        date: "Data",

        responsible: "Odpowiedzialny",

        time: "Godzina",

        cleaningSchedule: "Harmonogram sprzątania",

        week: "Tydzień",

        previous: "← Poprzedni",

        next: "Następny →",

        cleaningTasks: "Zadania sprzątania",

        task1: "Odkurzanie podłóg w salonie i kuchni",

        task2: "Mycie podłóg w salonie i kuchni",

        task3: "Wytarcie wszystkich powierzchni",

        task4: "Czyszczenie kuchenki i płyty grzewczej",

        task5: "Czyszczenie zlewu i obszaru kuchennego",

        task6: "Wyrzucenie śmieci w razie potrzeby",

        task7: "Pranie ściereczek kuchennych osobno",

        task8: "Pranie mopów osobno",

        task9: "Pranie ściereczek łazienkowych osobno",

        complete: "Oznacz sprzątanie jako wykonane",

        completed: "✓ Sprzątanie wykonane",

        notCompleted: "Nie wykonano",

        notYetAvailable: "Dostępne w czwartek–piątek",

        deadlinePassed: "Termin minął"
    },


    el: {

        language: "🌐 Γλώσσα",

        title: "Πρόγραμμα καθαρισμού",

        subtitle: "Κοινόχρηστο σαλόνι και κουζίνα",

        thisWeek: "Αυτή την εβδομάδα",

        date: "Ημερομηνία",

        responsible: "Υπεύθυνος",

        time: "Ώρα",

        cleaningSchedule: "Πρόγραμμα καθαρισμού",

        week: "Εβδομάδα",

        previous: "← Προηγούμενη",

        next: "Επόμενη →",

        cleaningTasks: "Εργασίες καθαρισμού",

        task1: "Σκούπισμα με ηλεκτρική σκούπα",

        task2: "Σφουγγάρισμα του σαλονιού και της κουζίνας",

        task3: "Καθαρισμός όλων των επιφανειών",

        task4: "Καθαρισμός της κουζίνας και των εστιών",

        task5: "Καθαρισμός του νεροχύτη και της κουζίνας",

        task6: "Άδειασμα των σκουπιδιών όταν χρειάζεται",

        task7: "Ξεχωριστό πλύσιμο των πανιών κουζίνας",

        task8: "Ξεχωριστό πλύσιμο των σφουγγαρίστρων",

        task9: "Ξεχωριστό πλύσιμο των πανιών μπάνιου",

        complete: "Σήμανση καθαρισμού ως ολοκληρωμένου",

        completed: "✓ Ο καθαρισμός ολοκληρώθηκε",

        notCompleted: "Δεν ολοκληρώθηκε",

        notYetAvailable: "Διαθέσιμο Πέμπτη–Παρασκευή",

        deadlinePassed: "Η προθεσμία έληξε"
    },


    hr: {

        language: "🌐 Jezik",

        title: "Raspored čišćenja",

        subtitle: "Zajednički dnevni boravak i kuhinja",

        thisWeek: "Ovaj tjedan",

        date: "Datum",

        responsible: "Odgovorna osoba",

        time: "Vrijeme",

        cleaningSchedule: "Raspored čišćenja",

        week: "Tjedan",

        previous: "← Prethodni",

        next: "Sljedeći →",

        cleaningTasks: "Zadaci čišćenja",

        task1: "Usisati podove dnevnog boravka i kuhinje",

        task2: "Oprati podove dnevnog boravka i kuhinje",

        task3: "Obrisati sve površine",

        task4: "Očistiti štednjak i ploču za kuhanje",

        task5: "Očistiti sudoper i kuhinjski prostor",

        task6: "Isprazniti smeće prema potrebi",

        task7: "Kuhinjske krpe prati odvojeno",

        task8: "Mopove prati odvojeno",

        task9: "Krpe za kupaonicu prati odvojeno",

        complete: "Označi čišćenje kao završeno",

        completed: "✓ Čišćenje završeno",

        notCompleted: "Nije završeno",

        notYetAvailable: "Dostupno četvrtkom i petkom",

        deadlinePassed: "Rok je istekao"
    },


    sk: {

        language: "🌐 Jazyk",

        title: "Rozpis upratovania",

        subtitle: "Spoločná obývačka a kuchyňa",

        thisWeek: "Tento týždeň",

        date: "Dátum",

        responsible: "Zodpovedná osoba",

        time: "Čas",

        cleaningSchedule: "Rozpis upratovania",

        week: "Týždeň",

        previous: "← Predchádzajúci",

        next: "Ďalší →",

        cleaningTasks: "Úlohy upratovania",

        task1: "Vysávať podlahy v obývačke a kuchyni",

        task2: "Umyť podlahy v obývačke a kuchyni",

        task3: "Utrieť všetky povrchy",

        task4: "Vyčistiť sporák a varnú dosku",

        task5: "Vyčistiť drez a kuchynský priestor",

        task6: "Vyniesť odpad podľa potreby",

        task7: "Kuchynské utierky prať oddelene",

        task8: "Mopy prať oddelene",

        task9: "Utierky z kúpeľne prať oddelene",

        complete: "Označiť upratovanie ako dokončené",

        completed: "✓ Upratovanie dokončené",

        notCompleted: "Nedokončené",

        notYetAvailable: "Dostupné vo štvrtok–piatok",

        deadlinePassed: "Termín uplynul"
    },


    cs: {

        language: "🌐 Jazyk",

        title: "Úklidový plán",

        subtitle: "Společný obývací pokoj a kuchyň",

        thisWeek: "Tento týden",

        date: "Datum",

        responsible: "Odpovědná osoba",

        time: "Čas",

        cleaningSchedule: "Úklidový plán",

        week: "Týden",

        previous: "← Předchozí",

        next: "Další →",

        cleaningTasks: "Úklidové úkoly",

        task1: "Vysát podlahy v obývacím pokoji a kuchyni",

        task2: "Vytřít podlahy v obývacím pokoji a kuchyni",

        task3: "Otřít všechny povrchy",

        task4: "Vyčistit sporák a varnou desku",

        task5: "Vyčistit dřez a kuchyňský prostor",

        task6: "Vynést odpad podle potřeby",

        task7: "Kuchyňské utěrky prát samostatně",

        task8: "Mopy prát samostatně",

        task9: "Utěrky z koupelny prát samostatně",

        complete: "Označit úklid jako dokončený",

        completed: "✓ Úklid dokončen",

        notCompleted: "Nedokončeno",

        notYetAvailable: "Dostupné ve čtvrtek–pátek",

        deadlinePassed: "Termín vypršel"
    },


    ti: {

        language: "🌐 ቋንቋ",

        title: "መደብ ጽሬት",

        subtitle: "ሓባራዊ መንበሪ ክፍልን ክሽነን",

        thisWeek: "ናይዚ ሰሙን",

        date: "ዕለት",

        responsible: "ሓላፊ",

        time: "ግዜ",

        cleaningSchedule: "መደብ ጽሬት",

        week: "ሰሙን",

        previous: "← ዝሓለፈ",

        next: "ዝመጽእ →",

        cleaningTasks: "ስራሕ ጽሬት",

        task1: "ኣብ መንበሪ ክፍልን ክሽነን ብቫኩም ጽረይ",

        task2: "መንበሪ ክፍልን ክሽነን ምድሪ ምሕጻብ",

        task3: "ኩሎም ገጽታት ኣጽርይ",

        task4: "ምድጃን መብሰሊ ቦታን ኣጽርይ",

        task5: "ማጽደጃን ከባቢ ክሽነን ኣጽርይ",

        task6: "ኣብ ዘድሊ ግዜ ጉሓፍ ኣውጽእ",

        task7: "ጨርቂ ክሽነ ብፍሉይ ሕጸብ",

        task8: "ሞፕ ብፍሉይ ሕጸብ",

        task9: "ጨርቂ መሕጸቢ ቤት ብፍሉይ ሕጸብ",

        complete: "ጽሬት ከም ዝተወድአ ምልክት ግበር",

        completed: "✓ ጽሬት ተወዲኡ",

        notCompleted: "ኣይተወድአን",

        notYetAvailable: "ካብ ሓሙስ ክሳብ ዓርቢ ይፍቀድ",

        deadlinePassed: "ግዜ ገደብ ሓሊፉ"
    },


    am: {

        language: "🌐 ቋንቋ",

        title: "የጽዳት መርሃ ግብር",

        subtitle: "የጋራ ሳሎን እና ወጥ ቤት",

        thisWeek: "የዚህ ሳምንት",

        date: "ቀን",

        responsible: "ኃላፊ",

        time: "ሰዓት",

        cleaningSchedule: "የጽዳት መርሃ ግብር",

        week: "ሳምንት",

        previous: "← ያለፈው",

        next: "ቀጣይ →",

        cleaningTasks: "የጽዳት ሥራዎች",

        task1: "የሳሎንና የወጥ ቤት ወለል በቫኩም ማጽዳት",

        task2: "የሳሎንና የወጥ ቤት ወለል ማጠብ",

        task3: "ሁሉንም የቤት ንጣፎች ማጽዳት",

        task4: "ምድጃና የማብሰያ ቦታ ማጽዳት",

        task5: "ሲንኩንና የወጥ ቤቱን አካባቢ ማጽዳት",

        task6: "በሚያስፈልግበት ጊዜ ቆሻሻ ማስወገድ",

        task7: "የወጥ ቤት ጨርቆችን ለየብቻ ማጠብ",

        task8: "ሞፖችን ለየብቻ ማጠብ",

        task9: "የመታጠቢያ ቤት ጨርቆችን ለየብቻ ማጠብ",

        complete: "ጽዳቱ እንደተጠናቀቀ ምልክት ማድረግ",

        completed: "✓ ጽዳት ተጠናቋል",

        notCompleted: "አልተጠናቀቀም",

        notYetAvailable: "ሐሙስ–ዓርብ ይገኛል",

        deadlinePassed: "የመጨረሻ ጊዜው አልፏል"
    }

};


// ============================================================
// LOCALES
// ============================================================

const languageLocales = {

    en: "en-GB",
    no: "nb-NO",
    hu: "hu-HU",
    bg: "bg-BG",
    ro: "ro-RO",
    pl: "pl-PL",
    el: "el-GR",
    hr: "hr-HR",
    sk: "sk-SK",
    cs: "cs-CZ",
    ti: "ti-ER",
    am: "am-ET"

};


// ============================================================
// CURRENT LANGUAGE
// ============================================================

let currentLanguage =
    localStorage.getItem("cleaningLanguage") || "en";

if (!translations[currentLanguage]) {
    currentLanguage = "en";
}


// ============================================================
// SELECTED WEEK
// ============================================================

let selectedWeek = 0;


// ============================================================
// HTML ELEMENTS
// ============================================================

const completeButton =
    document.getElementById("completeButton");

const scheduleList =
    document.getElementById("scheduleList");

const previousWeekButton =
    document.getElementById("previousWeek");

const nextWeekButton =
    document.getElementById("nextWeek");

const weekNumberElement =
    document.getElementById("weekNumber");

const weekRangeElement =
    document.getElementById("weekRange");

const languageButton =
    document.getElementById("languageButton");

const languageMenu =
    document.getElementById("languageMenu");


// ============================================================
// GET TASKS
// ============================================================

function getTasks() {

    return document.querySelectorAll(
        '.tasks input[type="checkbox"]'
    );

}


// ============================================================
// ISO WEEK
// ============================================================

function getISOWeek(date) {

    const tempDate = new Date(date);

    tempDate.setHours(0, 0, 0, 0);

    tempDate.setDate(
        tempDate.getDate() +
        3 -
        ((tempDate.getDay() + 6) % 7)
    );

    const week1 =
        new Date(
            tempDate.getFullYear(),
            0,
            4
        );

    return (
        1 +
        Math.round(
            (
                tempDate - week1
            ) /
            (
                7 *
                24 *
                60 *
                60 *
                1000
            )
        )
    );

}


// ============================================================
// GET SCHEDULE DATE
// ============================================================

function getScheduleDate() {

    if (
        !scheduleData ||
        scheduleData.length === 0
    ) {

        return new Date(scheduleStart);

    }


    if (
        selectedWeek < 0 ||
        selectedWeek >= scheduleData.length
    ) {

        selectedWeek = 0;

    }


    const schedule =
        scheduleData[selectedWeek];


    if (!schedule) {

        return new Date(scheduleStart);

    }


    return new Date(
        schedule.cleaning_date +
        "T12:00:00"
    );

}


// ============================================================
// GET RESPONSIBLE
// ============================================================

function getResponsiblePerson() {

    if (
        !scheduleData ||
        !scheduleData[selectedWeek]
    ) {

        return "";

    }


    return (
        scheduleData[selectedWeek].responsible || ""
    ).trim();

}


// ============================================================
// DATE KEY
// ============================================================

function getDateKey(date) {

    return (
        date.getFullYear() +
        "-" +
        String(
            date.getMonth() + 1
        ).padStart(2, "0") +
        "-" +
        String(
            date.getDate()
        ).padStart(2, "0")
    );

}


// ============================================================
// FORMAT DATE
// ============================================================

function formatDate(date) {

    if (currentLanguage === "ti") {

        const weekdays = [
            "ሰንበት",
            "ሰኑይ",
            "ሰሉስ",
            "ረቡዕ",
            "ሓሙስ",
            "ዓርቢ",
            "ቀዳም"
        ];

        return (
            weekdays[date.getDay()] +
            ", " +
            String(date.getDate()).padStart(2, "0") +
            "/" +
            String(date.getMonth() + 1).padStart(2, "0") +
            "/" +
            date.getFullYear()
        );

    }


    if (currentLanguage === "am") {

        const weekdays = [
            "እሁድ",
            "ሰኞ",
            "ማክሰኞ",
            "ረቡዕ",
            "ሐሙስ",
            "ዓርብ",
            "ቅዳሜ"
        ];

        return (
            weekdays[date.getDay()] +
            ", " +
            String(date.getDate()).padStart(2, "0") +
            "/" +
            String(date.getMonth() + 1).padStart(2, "0") +
            "/" +
            date.getFullYear()
        );

    }


    const locale =
        languageLocales[currentLanguage] || "en-GB";


    return date.toLocaleDateString(
        locale,
        {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );

}


// ============================================================
// WEEK RANGE
// ============================================================

function getWeekRange(date) {

    const monday = new Date(date);

    const day = monday.getDay();

    const difference =
        day === 0
            ? -6
            : 1 - day;

    monday.setDate(
        monday.getDate() + difference
    );


    const sunday = new Date(monday);

    sunday.setDate(
        monday.getDate() + 6
    );


    const locale =
        languageLocales[currentLanguage] || "en-GB";


    return (
        monday.toLocaleDateString(
            locale,
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        ) +
        " – " +
        sunday.toLocaleDateString(
            locale,
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        )
    );

}


// ============================================================
// CLEANING WINDOW
// Thursday 08:00 → Friday 18:00
// ============================================================

function getCleaningWindow(date) {

    const friday = new Date(date);

    friday.setHours(
        18,
        0,
        0,
        0
    );


    const thursday = new Date(date);

    thursday.setDate(
        thursday.getDate() - 1
    );

    thursday.setHours(
        8,
        0,
        0,
        0
    );


    return {
        start: thursday,
        end: friday
    };

}


// ============================================================
// CLEANING STATUS
// ============================================================
function canCompleteCleaning(date) {

    // ========================================================
    // TEMPORARY TEST MODE
    // Remove this line after testing
    // ========================================================



    // ========================================================
    // NORMAL RULES
    // ========================================================

    if (isCleaningTooEarly(date)) {
        return false;
    }

    if (isCleaningDeadlinePassed(date)) {
        return false;
    }

    return true;
}


function isCleaningDeadlinePassed(date) {

    const now = new Date();

    return (
        now >
        getCleaningWindow(date).end
    );

}


function isCleaningTooEarly(date) {

    const now = new Date();

    return (
        now <
        getCleaningWindow(date).start
    );

}


// ============================================================
// COMPLETED
// ============================================================

function isCompleted(date) {

    const schedule =
        scheduleData[selectedWeek];

    if (!schedule) {
        return false;
    }

    return schedule.completed === true;

}


// ============================================================
// LOAD TASKS
// ============================================================

function loadTasks(date) {

    const tasks =
        getTasks();

    const dateKey =
        getDateKey(date);

    const deadlinePassed =
        isCleaningDeadlinePassed(date);


    tasks.forEach(
        function(task) {

            const key =
                `cleaning_${dateKey}_${task.id}`;

            const saved =
                localStorage.getItem(key);

            task.checked =
                saved === "true";

            task.disabled =
                deadlinePassed;

        }
    );

}


// ============================================================
// COMPLETE BUTTON
// ============================================================

function updateCompleteButton() {

    if (!completeButton) {
        return;
    }


    const date =
        getScheduleDate();

    const t =
        translations[currentLanguage];


    if (isCompleted(date)) {

        completeButton.textContent =
            t.completed;

        completeButton.classList.add(
            "completed"
        );

        completeButton.disabled =
            true;

        return;

    }


    if (isCleaningTooEarly(date)) {

        completeButton.textContent =
            t.notYetAvailable;

        completeButton.classList.remove(
            "completed"
        );

        completeButton.disabled =
            true;

        return;

    }


    if (isCleaningDeadlinePassed(date)) {

        completeButton.textContent =
            t.deadlinePassed;

        completeButton.classList.remove(
            "completed"
        );

        completeButton.disabled =
            true;

        return;

    }


    completeButton.textContent =
        t.complete;

    completeButton.classList.remove(
        "completed"
    );

    completeButton.disabled =
        false;

}


// ============================================================
// UPDATE CURRENT CLEANING
// ============================================================

function updateCurrentCleaning() {

    const date =
        getScheduleDate();

    const person =
        getResponsiblePerson();

    const schedule =
        scheduleData[selectedWeek];

    const dateElement =
        document.getElementById(
            "cleaningDate"
        );

    const personElement =
        document.getElementById(
            "responsiblePerson"
        );


    if (dateElement) {

        dateElement.textContent =
            formatDate(date);

    }


    if (personElement) {

        personElement.textContent =
            person;

    }

}


// ============================================================
// DISPLAY WEEK
// ============================================================

function displayWeek() {

    if (
        !scheduleData ||
        scheduleData.length === 0
    ) {

        console.log(
            "displayWeek: no schedule data"
        );

        return;

    }


    if (
        selectedWeek < 0
    ) {

        selectedWeek = 0;

    }


    if (
        selectedWeek >= scheduleData.length
    ) {

        selectedWeek =
            scheduleData.length - 1;

    }


    const date =
        getScheduleDate();

    const person =
        getResponsiblePerson();

    const isoWeek =
        getISOWeek(date);

    const completed =
        isCompleted(date);

    const t =
        translations[currentLanguage];
    console.log("LANGUAGE:", currentLanguage);
    console.log("TRANSLATION WEEK:", t.week);
    console.log("ISO WEEK:", isoWeek);

    // ----------------------------------------
    // WEEK NUMBER
    // ----------------------------------------

    if (weekNumberElement) {

        weekNumberElement.textContent =
            `${t.week} ${isoWeek}`;

    }


    // ----------------------------------------
    // WEEK RANGE
    // ----------------------------------------

    if (weekRangeElement) {

        weekRangeElement.textContent =
            getWeekRange(date);

    }


    // ----------------------------------------
    // SCHEDULE
    // ----------------------------------------

    if (scheduleList) {

        scheduleList.innerHTML = `

<div class="schedule-item">

    <div>

    <strong>
    ${formatDate(date)}
</strong>

<p>
    ${t.responsible}:
    ${person}
</p>

<small>
    08:00–18:00
</small>

</div>

<div class="schedule-status">

    ${
            completed
                ? `
                <strong>${t.completed}</strong>

                <div>
                    ${t.completedBy || "Completed by"}:
                    ${scheduleData[selectedWeek].completed_by || ""}
                </div>

                ${
                    scheduleData[selectedWeek].completed_at
                        ? `
                            <div>
                                ${new Date(
                            scheduleData[selectedWeek].completed_at
                        ).toLocaleString(
                            languageLocales[currentLanguage] || "en-GB"
                        )}
                            </div>
                        `
                        : ""
                }
            `
                : t.notCompleted
        }

</div>

</div>

`;

    }


    // ----------------------------------------
    // CURRENT CLEANING
    // ----------------------------------------

    updateCurrentCleaning();


    // ----------------------------------------
    // TASKS
    // ----------------------------------------

    loadTasks(date);


    // ----------------------------------------
    // COMPLETE BUTTON
    // ----------------------------------------

    updateCompleteButton();


    // ----------------------------------------
    // PREVIOUS / NEXT
    // ----------------------------------------

    if (previousWeekButton) {

        previousWeekButton.disabled =
            selectedWeek <= 0;

    }


    if (nextWeekButton) {

        nextWeekButton.disabled =
            selectedWeek >=
            scheduleData.length - 1;

    }


    console.log(
        "DISPLAY WEEK:",
        selectedWeek,
        "ISO:",
        isoWeek,
        "DATA:",
        scheduleData[selectedWeek]
    );

}


// ============================================================
// APPLY LANGUAGE
// ============================================================

function applyLanguage() {

    const t =
        translations[currentLanguage];


    document.documentElement.lang =
        currentLanguage;


    const headerTitle =
        document.querySelector(
            "header h1"
        );

    if (headerTitle) {

        headerTitle.textContent =
            t.title;

    }


    const headerSubtitle =
        document.querySelector(
            "header p"
        );

    if (headerSubtitle) {

        headerSubtitle.textContent =
            t.subtitle;

    }


    if (languageButton) {

        languageButton.textContent =
            t.language;

    }


    const currentTitle =
        document.querySelector(
            ".current-cleaning h2"
        );

    if (currentTitle) {

        currentTitle.textContent =
            t.thisWeek;

    }


    const info =
        document.querySelectorAll(
            ".cleaning-info p"
        );


    if (info.length >= 3) {

        info[0].innerHTML =
            `<strong>${t.date}:</strong>
<span id="cleaningDate"></span>`;

        info[1].innerHTML =
            `<strong>${t.responsible}:</strong>
<span id="responsiblePerson"></span>`;

        info[2].innerHTML =
            `<strong>${t.time}:</strong>
<span id="cleaningTime">08:00–18:00</span>`;

    }


    const scheduleTitle =
        document.querySelector(
            ".schedule h2"
        );

    if (scheduleTitle) {

        scheduleTitle.textContent =
            t.cleaningSchedule;

    }


    if (previousWeekButton) {

        previousWeekButton.textContent =
            t.previous;

    }


    if (nextWeekButton) {

        nextWeekButton.textContent =
            t.next;

    }


    const taskTitle =
        document.querySelector(
            ".tasks h2"
        );

    if (taskTitle) {

        taskTitle.textContent =
            t.cleaningTasks;

    }


    const labels =
        document.querySelectorAll(
            ".tasks label"
        );


    labels.forEach(
        function(label, index) {

            const span =
                label.querySelector("span");

            if (
                span &&
                t[`task${index + 1}`]
            ) {

                span.textContent =
                    t[`task${index + 1}`];

            }

        }
    );


    displayWeek();

}


// ============================================================
// LANGUAGE MENU
// ============================================================

if (
    languageButton &&
    languageMenu
) {

    languageButton.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            languageMenu.classList.toggle(
                "open"
            );

        }
    );

}


// ============================================================
// LANGUAGE SELECTION
// ============================================================

const languageButtons =
    document.querySelectorAll(
        "[data-language]"
    );


languageButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();


                const selectedLanguage =
                    button.dataset.language;


                if (
                    translations[selectedLanguage]
                ) {

                    currentLanguage =
                        selectedLanguage;


                    localStorage.setItem(
                        "cleaningLanguage",
                        currentLanguage
                    );


                    if (languageMenu) {

                        languageMenu.classList.remove(
                            "open"
                        );

                    }


                    applyLanguage();

                }

            }
        );

    }
);


// ============================================================
// CLOSE LANGUAGE MENU
// ============================================================

document.addEventListener(
    "click",
    function() {

        if (languageMenu) {

            languageMenu.classList.remove(
                "open"
            );

        }

    }
);


// ============================================================
// PREVIOUS WEEK
// ============================================================

if (previousWeekButton) {

    previousWeekButton.addEventListener(
        "click",
        function() {

            if (selectedWeek > 0) {

                selectedWeek--;

                console.log(
                    "PREVIOUS CLICK:",
                    selectedWeek
                );

                displayWeek();

            }

        }
    );

}


// ============================================================
// NEXT WEEK
// ============================================================

if (nextWeekButton) {

    nextWeekButton.addEventListener(
        "click",
        function() {

            if (
                selectedWeek <
                scheduleData.length - 1
            ) {

                selectedWeek++;

                console.log(
                    "NEXT CLICK:",
                    selectedWeek
                );

                displayWeek();

            }

        }
    );

}


// ============================================================
// COMPLETE CLEANING
// ============================================================

if (completeButton) {

    completeButton.addEventListener(
        "click",
        async function() {

            const date =
                getScheduleDate();


            if (!canCompleteCleaning(date)) {

                updateCompleteButton();

                return;

            }


            const schedule =
                scheduleData[selectedWeek];


            if (!schedule) {

                console.error(
                    "No schedule found for selected week"
                );

                return;

            }


            completeButton.disabled = true;


            console.log(
                "Completing cleaning:",
                schedule.id
            );


            // ====================================================
            // SECURE COMPLETION
            // ====================================================

            const {
                data,
                error
            } =
                await supabaseClient
                    .rpc(
                        "complete_cleaning",
                        {
                            p_schedule_id:
                            schedule.id
                        }
                    );


            if (error) {

                console.error(
                    "Failed to mark cleaning as completed:",
                    error
                );

                completeButton.disabled = false;

                return;

            }


            console.log(
                "Cleaning marked as completed:",
                data
            );


            // ====================================================
            // UPDATE LOCAL DATA
            // ====================================================

            scheduleData[selectedWeek] =
                data;


            displayWeek();

        }
    );

}


// ============================================================
// TASK CHECKBOXES
// ============================================================

document.addEventListener(
    "change",
    function(event) {

        if (
            !event.target.matches(
                '.tasks input[type="checkbox"]'
            )
        ) {

            return;

        }


        const task =
            event.target;

        const date =
            getScheduleDate();


        if (
            !canCompleteCleaning(date)
        ) {

            loadTasks(date);

            return;

        }


        const dateKey =
            getDateKey(date);


        localStorage.setItem(
            `cleaning_${dateKey}_${task.id}`,
            task.checked
        );

    }
);


// ============================================================
// LOAD SCHEDULE FROM SUPABASE
// ============================================================

// ============================================================
// LOAD CLEANING SCHEDULE FROM SUPABASE
// ============================================================

async function loadScheduleFromSupabase() {

    console.log(
        "Loading cleaning schedule..."
    );

    const pageSize = 1000;

    let allData = [];

    let from = 0;


    while (true) {

        const to =
            from + pageSize - 1;


        const {
            data,
            error
        } =
            await supabaseClient
                .from("cleaning_schedule")
                .select(
                    "id, cleaning_date, responsible, completed, completed_at, completed_by"
                )
                .order(
                    "cleaning_date",
                    {
                        ascending: true
                    }
                )
                .range(
                    from,
                    to
                );


        if (error) {

            console.error(
                "Failed to load cleaning schedule:",
                error
            );

            return;

        }


        if (
            !data ||
            data.length === 0
        ) {

            break;

        }


        allData =
            allData.concat(data);


        console.log(
            `Loaded ${allData.length} cleaning schedule rows`
        );


        if (
            data.length < pageSize
        ) {

            break;

        }


        from += pageSize;

    }


    scheduleData =
        allData;


    console.log(
        "Cleaning schedule loaded from Supabase:",
        scheduleData
    );


    console.log(
        "Total schedule rows:",
        scheduleData.length
    );


    // Start at first schedule entry

    selectedWeek = 0;


    displayWeek();

}


// ============================================================
// START APPLICATION
// ============================================================

// ============================================================
// START APPLICATION
// ============================================================

async function startApplication() {

    console.log(
        "Starting application..."
    );


    applyLanguage();


    // Wait for Supabase to determine
    // whether a user is logged in

    const {
        data: {
            session
        }
    } =
        await supabaseClient.auth.getSession();


    if (!session) {

        console.log(
            "No active session. Waiting for login."
        );

        return;

    }


    console.log(
        "Active Supabase session found:",
        session.user.email
    );


    await loadScheduleFromSupabase();

}


// ============================================================
// AUTH STATE
// ============================================================

supabaseClient.auth.onAuthStateChange(
    async function(event, session) {

        console.log(
            "Auth event:",
            event
        );


        updateAuthUI(
            session
                ? session.user
                : null
        );


        if (
            event === "SIGNED_IN" &&
            session
        ) {

            console.log(
                "User signed in. Loading schedule..."
            );


            await loadScheduleFromSupabase();

        }

    }
);


// ============================================================
// START
// ============================================================

startApplication();