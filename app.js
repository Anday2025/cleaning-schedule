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

let currentUser = null;


// ============================================================
// PEOPLE
// ============================================================

const people = [
    "Nahuel",
    "Filmon",
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

    // ========================================================
    // ENGLISH
    // ========================================================

    en: {

        language: "🌐 Language",

        resetPasswordTitle: "Reset password",
        newPassword: "New password",
        confirmPassword: "Confirm new password",
        updatePassword: "Update password",
        forgotPassword: "Forgot password?",
        logout: "Log out",
        login: "Log in",
        email: "Email",
        password: "Password",

        title: "Cleaning Schedule",
        subtitle: "Shared Living Room & Kitchen",

        thisWeek: "This Week",
        date: "Date",

        thursdayNote:
            "If Friday is not possible, cleaning should be done on Thursday.",

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
        completed: "✓ Cleaning completed",
        completedBy: "Completed by",
        notCompleted: "Not completed",

        notYetAvailable: "Available Thursday–Friday",
        deadlinePassed: "Deadline passed",

        notResponsible:
            "Only the responsible resident can complete this cleaning.",

        loginRequired:
            "Please log in to complete cleaning.",

        enterEmailPassword:
            "Please enter email and password.",

        loggingIn:
            "Logging in...",

        loginSuccessful:
            "Login successful.",

        sendingReset:
            "Sending password reset email...",

        resetSent:
            "Password reset email sent. Please check your email.",

        enterEmailFirst:
            "Please enter your email address first.",

        updatingPassword:
            "Updating password...",

        passwordUpdated:
            "Password updated successfully.",

        passwordUpdatedLogin:
            "Password updated. You can now log in.",

        enterPasswords:
            "Please enter and confirm your new password.",

        passwordsDoNotMatch:
            "The passwords do not match."
    },


    // ========================================================
    // NORWEGIAN
    // ========================================================

    no: {

        language: "🌐 Språk",

        resetPasswordTitle: "Tilbakestill passord",
        newPassword: "Nytt passord",
        confirmPassword: "Bekreft nytt passord",
        updatePassword: "Oppdater passord",
        forgotPassword: "Glemt passord?",
        logout: "Logg ut",
        login: "Logg inn",
        email: "E-post",
        password: "Passord",

        title: "Rengjøringsplan",
        subtitle: "Felles stue og kjøkken",

        thisWeek: "Denne uken",
        date: "Dato",

        thursdayNote:
            "Hvis fredag ikke er mulig, skal rengjøringen utføres på torsdag.",

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
        completed: "✓ Rengjøring utført",
        completedBy: "Utført av",
        notCompleted: "Ikke utført",

        notYetAvailable: "Tilgjengelig torsdag–fredag",
        deadlinePassed: "Fristen har gått ut",

        notResponsible:
            "Bare den som er ansvarlig for rengjøringen kan fullføre den.",

        loginRequired:
            "Logg inn for å fullføre rengjøringen.",

        enterEmailPassword:
            "Skriv inn e-post og passord.",

        loggingIn:
            "Logger inn...",

        loginSuccessful:
            "Innlogging vellykket.",

        sendingReset:
            "Sender e-post for tilbakestilling av passord...",

        resetSent:
            "E-post for tilbakestilling er sendt. Sjekk e-posten din.",

        enterEmailFirst:
            "Skriv inn e-postadressen din først.",

        updatingPassword:
            "Oppdaterer passord...",

        passwordUpdated:
            "Passordet er oppdatert.",

        passwordUpdatedLogin:
            "Passordet er oppdatert. Du kan nå logge inn.",

        enterPasswords:
            "Skriv inn og bekreft det nye passordet.",

        passwordsDoNotMatch:
            "Passordene er ikke like."
    },


    // ========================================================
    // HUNGARIAN
    // ========================================================

    hu: {

        language: "🌐 Nyelv",

        resetPasswordTitle: "Jelszó visszaállítása",
        newPassword: "Új jelszó",
        confirmPassword: "Új jelszó megerősítése",
        updatePassword: "Jelszó frissítése",
        forgotPassword: "Elfelejtette a jelszavát?",
        logout: "Kijelentkezés",
        login: "Bejelentkezés",
        email: "E-mail",
        password: "Jelszó",

        title: "Takarítási beosztás",
        subtitle: "Közös nappali és konyha",

        thisWeek: "Ezen a héten",
        date: "Dátum",

        thursdayNote:
            "Ha pénteken nem lehetséges, a takarítást csütörtökön kell elvégezni.",

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
        completedBy: "Elvégezte",
        notCompleted: "Nincs elvégezve",

        notYetAvailable: "Csütörtök–péntek között elérhető",
        deadlinePassed: "A határidő lejárt",

        notResponsible:
            "Csak a takarításért felelős személy jelölheti késznek.",

        loginRequired:
            "A takarítás befejezéséhez jelentkezzen be.",

        enterEmailPassword:
            "Adja meg az e-mail-címet és a jelszót.",

        loggingIn:
            "Bejelentkezés...",

        loginSuccessful:
            "Sikeres bejelentkezés.",

        sendingReset:
            "Jelszó-visszaállító e-mail küldése...",

        resetSent:
            "A jelszó-visszaállító e-mail elküldve.",

        enterEmailFirst:
            "Először adja meg az e-mail-címét.",

        updatingPassword:
            "Jelszó frissítése...",

        passwordUpdated:
            "A jelszó sikeresen frissítve.",

        passwordUpdatedLogin:
            "A jelszó frissítve. Most már bejelentkezhet.",

        enterPasswords:
            "Adja meg és erősítse meg az új jelszót.",

        passwordsDoNotMatch:
            "A jelszavak nem egyeznek."
    },


    // ========================================================
    // BULGARIAN
    // ========================================================

    bg: {

        language: "🌐 Език",

        resetPasswordTitle: "Нулиране на паролата",
        newPassword: "Нова парола",
        confirmPassword: "Потвърдете новата парола",
        updatePassword: "Актуализиране на паролата",
        forgotPassword: "Забравена парола?",
        logout: "Изход",
        login: "Вход",
        email: "Имейл",
        password: "Парола",

        title: "График за почистване",
        subtitle: "Обща всекидневна и кухня",

        thisWeek: "Тази седмица",
        date: "Дата",

        thursdayNote:
            "Ако почистването в петък не е възможно, то трябва да бъде извършено в четвъртък.",

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
        completedBy: "Извършено от",
        notCompleted: "Не е завършено",

        notYetAvailable: "Достъпно от четвъртък до петък",
        deadlinePassed: "Крайният срок изтече",

        notResponsible:
            "Само отговорният за почистването може да го завърши.",

        loginRequired:
            "Влезте в профила си, за да завършите почистването.",

        enterEmailPassword:
            "Моля, въведете имейл и парола.",

        loggingIn:
            "Влизане...",

        loginSuccessful:
            "Влизането е успешно.",

        sendingReset:
            "Изпращане на имейл за възстановяване на паролата...",

        resetSent:
            "Имейлът за възстановяване на паролата е изпратен.",

        enterEmailFirst:
            "Моля, първо въведете имейл адреса си.",

        updatingPassword:
            "Актуализиране на паролата...",

        passwordUpdated:
            "Паролата е актуализирана успешно.",

        passwordUpdatedLogin:
            "Паролата е актуализирана. Вече можете да влезете.",

        enterPasswords:
            "Моля, въведете и потвърдете новата парола.",

        passwordsDoNotMatch:
            "Паролите не съвпадат."
    },


    // ========================================================
    // ROMANIAN
    // ========================================================

    ro: {

        language: "🌐 Limbă",

        resetPasswordTitle: "Resetare parolă",
        newPassword: "Parolă nouă",
        confirmPassword: "Confirmă parola nouă",
        updatePassword: "Actualizează parola",
        forgotPassword: "Ai uitat parola?",
        logout: "Deconectare",
        login: "Autentificare",
        email: "E-mail",
        password: "Parolă",

        title: "Program de curățenie",
        subtitle: "Living și bucătărie comune",

        thisWeek: "Săptămâna aceasta",
        date: "Data",

        thursdayNote:
            "Dacă vineri nu este posibil, curățenia trebuie făcută joi.",

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
        completedBy: "Finalizat de",
        notCompleted: "Nu este finalizată",

        notYetAvailable: "Disponibil joi–vineri",
        deadlinePassed: "Termenul a expirat",

        notResponsible:
            "Doar persoana responsabilă poate finaliza curățenia.",

        loginRequired:
            "Autentifică-te pentru a finaliza curățenia.",

        enterEmailPassword:
            "Introdu e-mailul și parola.",

        loggingIn:
            "Autentificare...",

        loginSuccessful:
            "Autentificare reușită.",

        sendingReset:
            "Se trimite e-mailul pentru resetarea parolei...",

        resetSent:
            "E-mailul pentru resetarea parolei a fost trimis.",

        enterEmailFirst:
            "Introdu mai întâi adresa de e-mail.",

        updatingPassword:
            "Se actualizează parola...",

        passwordUpdated:
            "Parola a fost actualizată cu succes.",

        passwordUpdatedLogin:
            "Parola a fost actualizată. Acum te poți autentifica.",

        enterPasswords:
            "Introdu și confirmă noua parolă.",

        passwordsDoNotMatch:
            "Parolele nu coincid."
    },


    // ========================================================
    // POLISH
    // ========================================================

    pl: {

        language: "🌐 Język",

        resetPasswordTitle: "Resetowanie hasła",
        newPassword: "Nowe hasło",
        confirmPassword: "Potwierdź nowe hasło",
        updatePassword: "Zaktualizuj hasło",
        forgotPassword: "Nie pamiętasz hasła?",
        logout: "Wyloguj się",
        login: "Zaloguj się",
        email: "E-mail",
        password: "Hasło",

        title: "Harmonogram sprzątania",
        subtitle: "Wspólny salon i kuchnia",

        thisWeek: "Ten tydzień",
        date: "Data",

        thursdayNote:
            "Jeśli sprzątanie w piątek nie jest możliwe, należy je wykonać w czwartek.",

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
        completedBy: "Wykonane przez",
        notCompleted: "Nie wykonano",

        notYetAvailable: "Dostępne w czwartek–piątek",
        deadlinePassed: "Termin minął",

        notResponsible:
            "Tylko osoba odpowiedzialna może zakończyć sprzątanie.",

        loginRequired:
            "Zaloguj się, aby zakończyć sprzątanie.",

        enterEmailPassword:
            "Wprowadź e-mail i hasło.",

        loggingIn:
            "Logowanie...",

        loginSuccessful:
            "Logowanie zakończone sukcesem.",

        sendingReset:
            "Wysyłanie wiadomości dotyczącej resetowania hasła...",

        resetSent:
            "Wiadomość dotycząca resetowania hasła została wysłana.",

        enterEmailFirst:
            "Najpierw wprowadź adres e-mail.",

        updatingPassword:
            "Aktualizowanie hasła...",

        passwordUpdated:
            "Hasło zostało pomyślnie zaktualizowane.",

        passwordUpdatedLogin:
            "Hasło zostało zaktualizowane. Możesz się teraz zalogować.",

        enterPasswords:
            "Wprowadź i potwierdź nowe hasło.",

        passwordsDoNotMatch:
            "Hasła nie są takie same."
    },


    // ========================================================
    // GREEK
    // ========================================================

    el: {

        language: "🌐 Γλώσσα",

        resetPasswordTitle: "Επαναφορά κωδικού πρόσβασης",
        newPassword: "Νέος κωδικός πρόσβασης",
        confirmPassword: "Επιβεβαίωση νέου κωδικού πρόσβασης",
        updatePassword: "Ενημέρωση κωδικού πρόσβασης",
        forgotPassword: "Ξεχάσατε τον κωδικό πρόσβασης;",
        logout: "Αποσύνδεση",
        login: "Σύνδεση",
        email: "Email",
        password: "Κωδικός πρόσβασης",

        title: "Πρόγραμμα καθαρισμού",
        subtitle: "Κοινόχρηστο σαλόνι και κουζίνα",

        thisWeek: "Αυτή την εβδομάδα",
        date: "Ημερομηνία",

        thursdayNote:
            "Εάν δεν είναι δυνατό την Παρασκευή, ο καθαρισμός πρέπει να γίνει την Πέμπτη.",

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
        completedBy: "Ολοκληρώθηκε από",
        notCompleted: "Δεν ολοκληρώθηκε",

        notYetAvailable: "Διαθέσιμο Πέμπτη–Παρασκευή",
        deadlinePassed: "Η προθεσμία έληξε",

        notResponsible:
            "Μόνο ο υπεύθυνος μπορεί να ολοκληρώσει τον καθαρισμό.",

        loginRequired:
            "Συνδεθείτε για να ολοκληρώσετε τον καθαρισμό.",

        enterEmailPassword:
            "Εισαγάγετε email και κωδικό πρόσβασης.",

        loggingIn:
            "Σύνδεση...",

        loginSuccessful:
            "Η σύνδεση ήταν επιτυχής.",

        sendingReset:
            "Αποστολή email επαναφοράς κωδικού πρόσβασης...",

        resetSent:
            "Το email επαναφοράς στάλθηκε.",

        enterEmailFirst:
            "Εισαγάγετε πρώτα τη διεύθυνση email.",

        updatingPassword:
            "Ενημέρωση κωδικού πρόσβασης...",

        passwordUpdated:
            "Ο κωδικός πρόσβασης ενημερώθηκε.",

        passwordUpdatedLogin:
            "Ο κωδικός πρόσβασης ενημερώθηκε. Μπορείτε τώρα να συνδεθείτε.",

        enterPasswords:
            "Εισαγάγετε και επιβεβαιώστε τον νέο κωδικό πρόσβασης.",

        passwordsDoNotMatch:
            "Οι κωδικοί πρόσβασης δεν ταιριάζουν."
    },


    // ========================================================
    // CROATIAN
    // ========================================================

    hr: {

        language: "🌐 Jezik",

        resetPasswordTitle: "Ponovno postavljanje lozinke",
        newPassword: "Nova lozinka",
        confirmPassword: "Potvrdite novu lozinku",
        updatePassword: "Ažuriraj lozinku",
        forgotPassword: "Zaboravili ste lozinku?",
        logout: "Odjava",
        login: "Prijava",
        email: "E-pošta",
        password: "Lozinka",

        title: "Raspored čišćenja",
        subtitle: "Zajednički dnevni boravak i kuhinja",

        thisWeek: "Ovaj tjedan",
        date: "Datum",

        thursdayNote:
            "Ako čišćenje u petak nije moguće, treba ga obaviti u četvrtak.",

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
        completedBy: "Završio",
        notCompleted: "Nije završeno",

        notYetAvailable: "Dostupno četvrtkom i petkom",
        deadlinePassed: "Rok je istekao",

        notResponsible:
            "Samo odgovorna osoba može završiti čišćenje.",

        loginRequired:
            "Prijavite se kako biste završili čišćenje.",

        enterEmailPassword:
            "Unesite e-poštu i lozinku.",

        loggingIn:
            "Prijava...",

        loginSuccessful:
            "Prijava je uspješna.",

        sendingReset:
            "Slanje e-pošte za ponovno postavljanje lozinke...",

        resetSent:
            "E-pošta za ponovno postavljanje lozinke je poslana.",

        enterEmailFirst:
            "Najprije unesite svoju adresu e-pošte.",

        updatingPassword:
            "Ažuriranje lozinke...",

        passwordUpdated:
            "Lozinka je uspješno ažurirana.",

        passwordUpdatedLogin:
            "Lozinka je ažurirana. Sada se možete prijaviti.",

        enterPasswords:
            "Unesite i potvrdite novu lozinku.",

        passwordsDoNotMatch:
            "Lozinke se ne podudaraju."
    },


    // ========================================================
    // SLOVAK
    // ========================================================

    sk: {

        language: "🌐 Jazyk",

        resetPasswordTitle: "Obnovenie hesla",
        newPassword: "Nové heslo",
        confirmPassword: "Potvrďte nové heslo",
        updatePassword: "Aktualizovať heslo",
        forgotPassword: "Zabudli ste heslo?",
        logout: "Odhlásiť sa",
        login: "Prihlásiť sa",
        email: "E-mail",
        password: "Heslo",

        title: "Rozpis upratovania",
        subtitle: "Spoločná obývačka a kuchyňa",

        thisWeek: "Tento týždeň",
        date: "Dátum",

        thursdayNote:
            "Ak upratovanie v piatok nie je možné, musí sa vykonať vo štvrtok.",

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
        completedBy: "Dokončil",
        notCompleted: "Nedokončené",

        notYetAvailable: "Dostupné vo štvrtok–piatok",
        deadlinePassed: "Termín uplynul",

        notResponsible:
            "Upratovanie môže dokončiť iba zodpovedná osoba.",

        loginRequired:
            "Prihláste sa, aby ste mohli dokončiť upratovanie.",

        enterEmailPassword:
            "Zadajte e-mail a heslo.",

        loggingIn:
            "Prihlasovanie...",

        loginSuccessful:
            "Prihlásenie bolo úspešné.",

        sendingReset:
            "Odosielanie e-mailu na obnovenie hesla...",

        resetSent:
            "E-mail na obnovenie hesla bol odoslaný.",

        enterEmailFirst:
            "Najprv zadajte svoju e-mailovú adresu.",

        updatingPassword:
            "Aktualizácia hesla...",

        passwordUpdated:
            "Heslo bolo úspešne aktualizované.",

        passwordUpdatedLogin:
            "Heslo bolo aktualizované. Teraz sa môžete prihlásiť.",

        enterPasswords:
            "Zadajte a potvrďte nové heslo.",

        passwordsDoNotMatch:
            "Heslá sa nezhodujú."
    },


    // ========================================================
    // CZECH
    // ========================================================

    cs: {

        language: "🌐 Jazyk",

        resetPasswordTitle: "Obnovení hesla",
        newPassword: "Nové heslo",
        confirmPassword: "Potvrďte nové heslo",
        updatePassword: "Aktualizovat heslo",
        forgotPassword: "Zapomněli jste heslo?",
        logout: "Odhlásit se",
        login: "Přihlásit se",
        email: "E-mail",
        password: "Heslo",

        title: "Úklidový plán",
        subtitle: "Společný obývací pokoj a kuchyň",

        thisWeek: "Tento týden",
        date: "Datum",

        thursdayNote:
            "Pokud není možné uklidit v pátek, úklid musí být proveden ve čtvrtek.",

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
        completedBy: "Dokončil",
        notCompleted: "Nedokončeno",

        notYetAvailable: "Dostupné ve čtvrtek–pátek",
        deadlinePassed: "Termín vypršel",

        notResponsible:
            "Úklid může dokončit pouze odpovědná osoba.",

        loginRequired:
            "Přihlaste se, abyste mohli dokončit úklid.",

        enterEmailPassword:
            "Zadejte e-mail a heslo.",

        loggingIn:
            "Přihlašování...",

        loginSuccessful:
            "Přihlášení bylo úspěšné.",

        sendingReset:
            "Odesílání e-mailu pro obnovení hesla...",

        resetSent:
            "E-mail pro obnovení hesla byl odeslán.",

        enterEmailFirst:
            "Nejprve zadejte svou e-mailovou adresu.",

        updatingPassword:
            "Aktualizace hesla...",

        passwordUpdated:
            "Heslo bylo úspěšně aktualizováno.",

        passwordUpdatedLogin:
            "Heslo bylo aktualizováno. Nyní se můžete přihlásit.",

        enterPasswords:
            "Zadejte a potvrďte nové heslo.",

        passwordsDoNotMatch:
            "Hesla se neshodují."
    },


    // ========================================================
    // TIGRINYA
    // ========================================================

    ti: {

        language: "🌐 ቋንቋ",

        resetPasswordTitle: "መሕለፊ ቃል ዳግማይ ኣዘጋጅ",
        newPassword: "ሓድሽ መሕለፊ ቃል",
        confirmPassword: "ሓድሽ መሕለፊ ቃል ኣረጋግጽ",
        updatePassword: "መሕለፊ ቃል ኣሐድስ",
        forgotPassword: "መሕለፊ ቃል ረሲዕካ?",
        logout: "ውጻእ",
        login: "እቶ",
        email: "ኢ-መይል",
        password: "መሕለፊ ቃል",

        title: "መደብ ጽሬት",
        subtitle: "ሓባራዊ መንበሪ ክፍልን ክሽነን",

        thisWeek: "ናይዚ ሰሙን",
        date: "ዕለት",

        thursdayNote:
            "ዓርቢ ምጽራይ እንተዘይከኣል፣ ምጽራይ ሓሙስ ክግበር ኣለዎ።",

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
        completedBy: "ዝወድኦ",
        notCompleted: "ኣይተወድአን",

        notYetAvailable: "ካብ ሓሙስ ክሳብ ዓርቢ ይፍቀድ",
        deadlinePassed: "ግዜ ገደብ ሓሊፉ",

        notResponsible:
            "ጽሬት ክውድእ ዝኽእል ሓላፊ ጽሬት ጥራይ እዩ።",

        loginRequired:
            "ጽሬት ንምውዳእ እቶ።",

        enterEmailPassword:
            "ኢ-መይልን መሕለፊ ቃልን ኣእትው።",

        loggingIn:
            "ይኣቱ ኣሎ...",

        loginSuccessful:
            "ብዓወት ኣቲኻ።",

        sendingReset:
            "ናይ መሕለፊ ቃል መልእኽቲ ይስደድ ኣሎ...",

        resetSent:
            "ናይ መሕለፊ ቃል መልእኽቲ ተላኢኹ።",

        enterEmailFirst:
            "ቀዳማይ ኢ-መይልኻ ኣእቱ።",

        updatingPassword:
            "መሕለፊ ቃል ይሕደስ ኣሎ...",

        passwordUpdated:
            "መሕለፊ ቃል ብዓወት ተሓዲሱ።",

        passwordUpdatedLogin:
            "መሕለፊ ቃል ተሓዲሱ። ሕጂ ክትኣቱ ትኽእል።",

        enterPasswords:
            "ሓድሽ መሕለፊ ቃል ኣእትውን ኣረጋግጽን።",

        passwordsDoNotMatch:
            "መሕለፊ ቃላት ኣይመሳሰሉን።"
    },


    // ========================================================
    // AMHARIC
    // ========================================================

    am: {

        language: "🌐 ቋንቋ",

        resetPasswordTitle: "የይለፍ ቃል ዳግም ማስጀመር",
        newPassword: "አዲስ የይለፍ ቃል",
        confirmPassword: "አዲሱን የይለፍ ቃል ያረጋግጡ",
        updatePassword: "የይለፍ ቃል አዘምን",
        forgotPassword: "የይለፍ ቃል ረሱ?",
        logout: "ውጣ",
        login: "ግባ",
        email: "ኢሜይል",
        password: "የይለፍ ቃል",

        title: "የጽዳት መርሃ ግብር",
        subtitle: "የጋራ ሳሎን እና ወጥ ቤት",

        thisWeek: "የዚህ ሳምንት",
        date: "ቀን",

        thursdayNote:
            "አርብ ማጽዳት ካልተቻለ፣ ጽዳቱ ሐሙስ መከናወን አለበት።",

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
        completedBy: "ያጠናቀቀው",
        notCompleted: "አልተጠናቀቀም",

        notYetAvailable: "ሐሙስ–ዓርብ ይገኛል",
        deadlinePassed: "የመጨረሻ ጊዜው አልፏል",

        notResponsible:
            "ጽዳቱን ማጠናቀቅ የሚችለው ኃላፊው ብቻ ነው።",

        loginRequired:
            "ጽዳቱን ለማጠናቀቅ ይግቡ።",

        enterEmailPassword:
            "ኢሜይል እና የይለፍ ቃል ያስገቡ።",

        loggingIn:
            "በመግባት ላይ...",

        loginSuccessful:
            "በተሳካ ሁኔታ ገብተዋል።",

        sendingReset:
            "የይለፍ ቃል መመለሻ ኢሜይል በመላክ ላይ...",

        resetSent:
            "የይለፍ ቃል መመለሻ ኢሜይል ተልኳል።",

        enterEmailFirst:
            "መጀመሪያ የኢሜይል አድራሻዎን ያስገቡ።",

        updatingPassword:
            "የይለፍ ቃል በማዘመን ላይ...",

        passwordUpdated:
            "የይለፍ ቃሉ በተሳካ ሁኔታ ታድሷል።",

        passwordUpdatedLogin:
            "የይለፍ ቃሉ ታድሷል። አሁን መግባት ይችላሉ።",

        enterPasswords:
            "አዲሱን የይለፍ ቃል ያስገቡ እና ያረጋግጡ።",

        passwordsDoNotMatch:
            "የይለፍ ቃሎቹ አይዛመዱም።"
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

const forgotPasswordButton =
    document.getElementById("forgotPasswordButton");

const resetPasswordForm =
    document.getElementById("resetPasswordForm");

const newPasswordInput =
    document.getElementById("newPasswordInput");

const confirmPasswordInput =
    document.getElementById("confirmPasswordInput");

const updatePasswordButton =
    document.getElementById("updatePasswordButton");

const resetPasswordMessage =
    document.getElementById("resetPasswordMessage");

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
// TRANSLATION HELPER
// ============================================================

function getTranslation(key) {

    const language =
        translations[currentLanguage];

    const english =
        translations.en;

    return (
        language?.[key] ||
        english?.[key] ||
        key
    );

}


// ============================================================
// UPDATE AUTH UI
// ============================================================

function updateAuthUI(user) {

    currentUser = user || null;


    if (currentUser) {

        if (loginForm) {
            loginForm.style.display = "none";
        }

        if (resetPasswordForm) {
            resetPasswordForm.style.display = "none";
        }

        if (userSection) {
            userSection.style.display = "block";
        }

        if (loggedInUser) {

            loggedInUser.textContent =
                currentUser.email || "";

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

    updateCompleteButton();

}


// ============================================================
// LOGIN
// ============================================================

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const email =
                emailInput
                    ? emailInput.value.trim()
                    : "";

            const password =
                passwordInput
                    ? passwordInput.value
                    : "";


            if (!email || !password) {

                if (loginMessage) {

                    loginMessage.textContent =
                        getTranslation(
                            "enterEmailPassword"
                        );

                }

                return;

            }


            if (loginButton) {
                loginButton.disabled = true;
            }


            if (loginMessage) {

                loginMessage.textContent =
                    getTranslation(
                        "loggingIn"
                    );

            }


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

                if (loginMessage) {
                    loginMessage.textContent =
                        error.message;
                }

                if (loginButton) {
                    loginButton.disabled = false;
                }

                return;

            }


            console.log(
                "Login successful:",
                data.user
            );


            if (passwordInput) {
                passwordInput.value = "";
            }


            if (loginMessage) {

                loginMessage.textContent =
                    getTranslation(
                        "loginSuccessful"
                    );

            }


            updateAuthUI(
                data.user
            );


            await loadScheduleFromSupabase();


            if (loginButton) {
                loginButton.disabled = false;
            }

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

            logoutButton.disabled = true;


            const {
                error
            } =
                await supabaseClient.auth.signOut();


            if (error) {

                console.error(
                    "Logout failed:",
                    error
                );

                logoutButton.disabled = false;

                return;

            }


            updateAuthUI(null);


            scheduleData = [];

            selectedWeek = 0;


            if (scheduleList) {
                scheduleList.innerHTML = "";
            }

            if (weekNumberElement) {
                weekNumberElement.textContent = "";
            }

            if (weekRangeElement) {
                weekRangeElement.textContent = "";
            }


            if (completeButton) {
                completeButton.disabled = true;
            }


            logoutButton.disabled = false;

        }
    );

}


// ============================================================
// FORGOT PASSWORD
// ============================================================

if (forgotPasswordButton) {

    forgotPasswordButton.addEventListener(
        "click",
        async function () {

            const email =
                emailInput
                    ? emailInput.value.trim()
                    : "";


            if (!email) {

                if (loginMessage) {

                    loginMessage.textContent =
                        getTranslation(
                            "enterEmailFirst"
                        );

                }

                return;

            }


            forgotPasswordButton.disabled =
                true;


            if (loginMessage) {

                loginMessage.textContent =
                    getTranslation(
                        "sendingReset"
                    );

            }


            const {
                error
            } =
                await supabaseClient.auth.resetPasswordForEmail(
                    email,
                    {
                        redirectTo:
                            window.location.origin +
                            window.location.pathname
                    }
                );


            if (error) {

                console.error(
                    "Password reset failed:",
                    error
                );

                if (loginMessage) {
                    loginMessage.textContent =
                        error.message;
                }

                forgotPasswordButton.disabled =
                    false;

                return;

            }


            if (loginMessage) {

                loginMessage.textContent =
                    getTranslation(
                        "resetSent"
                    );

            }


            forgotPasswordButton.disabled =
                false;

        }
    );

}


// ============================================================
// UPDATE PASSWORD
// ============================================================

if (resetPasswordForm) {

    resetPasswordForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const newPassword =
                newPasswordInput
                    ? newPasswordInput.value
                    : "";

            const confirmPassword =
                confirmPasswordInput
                    ? confirmPasswordInput.value
                    : "";


            if (!newPassword || !confirmPassword) {

                if (resetPasswordMessage) {

                    resetPasswordMessage.textContent =
                        getTranslation(
                            "enterPasswords"
                        );

                }

                return;

            }


            if (newPassword !== confirmPassword) {

                if (resetPasswordMessage) {

                    resetPasswordMessage.textContent =
                        getTranslation(
                            "passwordsDoNotMatch"
                        );

                }

                return;

            }


            if (updatePasswordButton) {
                updatePasswordButton.disabled = true;
            }


            if (resetPasswordMessage) {

                resetPasswordMessage.textContent =
                    getTranslation(
                        "updatingPassword"
                    );

            }


            const {
                error
            } =
                await supabaseClient.auth.updateUser({

                    password: newPassword

                });


            if (error) {

                console.error(
                    "Password update failed:",
                    error
                );

                if (resetPasswordMessage) {

                    resetPasswordMessage.textContent =
                        error.message;

                }

                if (updatePasswordButton) {
                    updatePasswordButton.disabled = false;
                }

                return;

            }


            if (resetPasswordMessage) {

                resetPasswordMessage.textContent =
                    getTranslation(
                        "passwordUpdated"
                    );

            }


            if (newPasswordInput) {
                newPasswordInput.value = "";
            }

            if (confirmPasswordInput) {
                confirmPasswordInput.value = "";
            }


            setTimeout(
                async function () {

                    await supabaseClient.auth.signOut();


                    if (resetPasswordForm) {
                        resetPasswordForm.style.display =
                            "none";
                    }

                    if (loginForm) {
                        loginForm.style.display =
                            "block";
                    }

                    if (loginMessage) {

                        loginMessage.textContent =
                            getTranslation(
                                "passwordUpdatedLogin"
                            );

                    }

                    if (updatePasswordButton) {
                        updatePasswordButton.disabled =
                            false;
                    }

                },
                1500
            );

        }
    );

}


// ============================================================
// SUPABASE AUTH STATE
// ONLY ONE AUTH LISTENER
// ============================================================

supabaseClient.auth.onAuthStateChange(
    function (event, session) {

        console.log(
            "Auth event:",
            event
        );


        if (event === "PASSWORD_RECOVERY") {

            if (loginForm) {
                loginForm.style.display =
                    "none";
            }

            if (userSection) {
                userSection.style.display =
                    "none";
            }

            if (resetPasswordForm) {
                resetPasswordForm.style.display =
                    "block";
            }

            return;

        }


        updateAuthUI(
            session
                ? session.user
                : null
        );


        if (event === "SIGNED_OUT") {

            scheduleData = [];

            selectedWeek = 0;

            if (scheduleList) {
                scheduleList.innerHTML = "";
            }

            if (weekNumberElement) {
                weekNumberElement.textContent = "";
            }

            if (weekRangeElement) {
                weekRangeElement.textContent = "";
            }

            return;

        }


        if (
            event === "SIGNED_IN" &&
            session
        ) {

            setTimeout(
                async function () {

                    await loadScheduleFromSupabase();

                },
                0
            );

        }

    }
);


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

    const tempDate =
        new Date(date);

    tempDate.setHours(
        0,
        0,
        0,
        0
    );

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
        scheduleData[selectedWeek].responsible ||
        ""
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
            String(
                date.getDate()
            ).padStart(2, "0") +
            "/" +
            String(
                date.getMonth() + 1
            ).padStart(2, "0") +
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
            String(
                date.getDate()
            ).padStart(2, "0") +
            "/" +
            String(
                date.getMonth() + 1
            ).padStart(2, "0") +
            "/" +
            date.getFullYear()

        );

    }


    const locale =
        languageLocales[currentLanguage] ||
        "en-GB";


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

    const monday =
        new Date(date);

    const day =
        monday.getDay();

    const difference =
        day === 0
            ? -6
            : 1 - day;


    monday.setDate(
        monday.getDate() +
        difference
    );


    const sunday =
        new Date(monday);

    sunday.setDate(
        monday.getDate() +
        6
    );


    const locale =
        languageLocales[currentLanguage] ||
        "en-GB";


    return (

        monday.toLocaleDateString(
            locale,
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        )

        +

        " – "

        +

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

    const friday =
        new Date(date);

    friday.setHours(
        18,
        0,
        0,
        0
    );


    const thursday =
        new Date(date);

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

function isCleaningDeadlinePassed(date) {

    const now =
        new Date();

    return (
        now >
        getCleaningWindow(date).end
    );

}


function isCleaningTooEarly(date) {

    const now =
        new Date();

    return (
        now <
        getCleaningWindow(date).start
    );

}


// ============================================================
// CURRENT USER RESPONSIBLE?
// ============================================================

function isCurrentUserResponsible() {

    const schedule =
        scheduleData[selectedWeek];


    if (!schedule) {
        return false;
    }


    if (!currentUser) {
        return false;
    }


    if (!schedule.responsible_user_id) {
        return false;
    }


    return (
        currentUser.id ===
        schedule.responsible_user_id
    );

}


// ============================================================
// COMPLETED
// ============================================================

function isCompleted() {

    const schedule =
        scheduleData[selectedWeek];


    if (!schedule) {
        return false;
    }


    return schedule.completed === true;

}


// ============================================================
// CAN COMPLETE CLEANING
// ============================================================

function canCompleteCleaning(date) {

    if (!currentUser) {
        return false;
    }


    if (!isCurrentUserResponsible()) {
        return false;
    }


    if (isCleaningTooEarly(date)) {
        return false;
    }


    if (isCleaningDeadlinePassed(date)) {
        return false;
    }


    if (isCompleted(date)) {
        return false;
    }


    return true;

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

    const responsible =
        isCurrentUserResponsible();

    const completed =
        isCompleted();


    tasks.forEach(
        function (task) {

            const key =
                `cleaning_${dateKey}_${task.id}`;

            const saved =
                localStorage.getItem(key);


            task.checked =
                saved === "true";


            task.disabled =
                !responsible ||
                completed ||
                deadlinePassed;

        }
    );

}


// ============================================================
// UPDATE COMPLETE BUTTON
// ============================================================

function updateCompleteButton() {

    if (!completeButton) {
        return;
    }


    const date =
        getScheduleDate();


    // --------------------------------------------------------
    // Not logged in
    // --------------------------------------------------------

    if (!currentUser) {

        completeButton.textContent =
            getTranslation(
                "loginRequired"
            );

        completeButton.classList.remove(
            "completed"
        );

        completeButton.disabled =
            true;

        return;

    }


    // --------------------------------------------------------
    // Not responsible
    // --------------------------------------------------------

    if (!isCurrentUserResponsible()) {

        completeButton.textContent =
            getTranslation(
                "notResponsible"
            );

        completeButton.classList.remove(
            "completed"
        );

        completeButton.disabled =
            true;

        return;

    }


    // --------------------------------------------------------
    // Already completed
    // --------------------------------------------------------

    if (isCompleted()) {

        completeButton.textContent =
            getTranslation(
                "completed"
            );

        completeButton.classList.add(
            "completed"
        );

        completeButton.disabled =
            true;

        return;

    }


    // --------------------------------------------------------
    // Too early
    // --------------------------------------------------------

    if (isCleaningTooEarly(date)) {

        completeButton.textContent =
            getTranslation(
                "notYetAvailable"
            );

        completeButton.classList.remove(
            "completed"
        );

        completeButton.disabled =
            true;

        return;

    }


    // --------------------------------------------------------
    // Deadline passed
    // --------------------------------------------------------

    if (isCleaningDeadlinePassed(date)) {

        completeButton.textContent =
            getTranslation(
                "deadlinePassed"
            );

        completeButton.classList.remove(
            "completed"
        );

        completeButton.disabled =
            true;

        return;

    }


    // --------------------------------------------------------
    // Available
    // --------------------------------------------------------

    completeButton.textContent =
        getTranslation(
            "complete"
        );

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
// ESCAPE HTML
// ============================================================

function escapeHtml(value) {

    if (value === null || value === undefined) {
        return "";
    }


    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


// ============================================================
// FORMAT COMPLETED DATE
// ============================================================

function formatCompletedDate(dateString) {

    if (!dateString) {
        return "";
    }


    const date =
        new Date(dateString);


    if (Number.isNaN(date.getTime())) {
        return "";
    }


    const locale =
        languageLocales[currentLanguage] ||
        "en-GB";


    return date.toLocaleString(
        locale,
        {
            dateStyle: "short",
            timeStyle: "short"
        }
    );

}


// ============================================================
// DISPLAY WEEK
// ============================================================

function displayWeek() {

    if (
        !scheduleData ||
        scheduleData.length === 0
    ) {

        return;

    }


    if (selectedWeek < 0) {
        selectedWeek = 0;
    }


    if (
        selectedWeek >=
        scheduleData.length
    ) {

        selectedWeek =
            scheduleData.length - 1;

    }


    const date =
        getScheduleDate();

    const person =
        getResponsiblePerson();

    const schedule =
        scheduleData[selectedWeek];

    const isoWeek =
        getISOWeek(date);

    const completed =
        isCompleted();


    // --------------------------------------------------------
    // WEEK NUMBER
    // --------------------------------------------------------

    if (weekNumberElement) {

        weekNumberElement.textContent =
            `${getTranslation("week")} ${isoWeek}`;

    }


    // --------------------------------------------------------
    // WEEK RANGE
    // --------------------------------------------------------

    if (weekRangeElement) {

        weekRangeElement.textContent =
            getWeekRange(date);

    }


    // --------------------------------------------------------
    // SCHEDULE
    // --------------------------------------------------------

    if (scheduleList) {

        let statusHtml = "";


        if (completed) {

            const completedBy =
                escapeHtml(
                    schedule.completed_by || ""
                );

            const completedAt =
                formatCompletedDate(
                    schedule.completed_at
                );


            statusHtml = `

                <div class="schedule-status">

                    <strong>
                        ${getTranslation("completed")}
                    </strong>

                    <div>
                        ${getTranslation("completedBy")}:
                        ${completedBy}
                    </div>

                    ${
                completedAt
                    ? `
                                <div>
                                    ${escapeHtml(completedAt)}
                                </div>
                              `
                    : ""
            }

                </div>

            `;

        } else {

            statusHtml = `

                <div class="schedule-status">

                    ${getTranslation("notCompleted")}

                </div>

            `;

        }


        scheduleList.innerHTML = `

            <div class="schedule-item">

                <div>

                    <strong>
                        ${escapeHtml(formatDate(date))}
                    </strong>

                    <p>
                        ${getTranslation("responsible")}:
                        ${escapeHtml(person)}
                    </p>

                    <small>
                        08:00–18:00
                    </small>

                </div>

                ${statusHtml}

            </div>

        `;

    }


    // --------------------------------------------------------
    // CURRENT CLEANING
    // --------------------------------------------------------

    updateCurrentCleaning();


    // --------------------------------------------------------
    // TASKS
    // --------------------------------------------------------

    loadTasks(date);


    // --------------------------------------------------------
    // COMPLETE BUTTON
    // --------------------------------------------------------

    updateCompleteButton();


    // --------------------------------------------------------
    // NAVIGATION
    // --------------------------------------------------------

    if (previousWeekButton) {

        previousWeekButton.disabled =
            selectedWeek <= 0;

    }


    if (nextWeekButton) {

        nextWeekButton.disabled =
            selectedWeek >=
            scheduleData.length - 1;

    }

}


// ============================================================
// APPLY TRANSLATIONS
// ============================================================

function applyLanguage() {

    const t =
        translations[currentLanguage];


    if (!t) {
        return;
    }


    document.documentElement.lang =
        currentLanguage;


    // --------------------------------------------------------
    // HEADER
    // --------------------------------------------------------

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
            "header .header-text p"
        );

    if (headerSubtitle) {
        headerSubtitle.textContent =
            t.subtitle;
    }


    // --------------------------------------------------------
    // LANGUAGE BUTTON
    // --------------------------------------------------------

    if (languageButton) {

        languageButton.textContent =
            t.language;

    }


    // --------------------------------------------------------
    // LOGIN
    // --------------------------------------------------------

    if (emailInput) {

        emailInput.placeholder =
            t.email;

    }


    if (passwordInput) {

        passwordInput.placeholder =
            t.password;

    }


    if (loginButton) {

        loginButton.textContent =
            t.login;

    }


    if (forgotPasswordButton) {

        forgotPasswordButton.textContent =
            t.forgotPassword;

    }


    // --------------------------------------------------------
    // RESET PASSWORD
    // --------------------------------------------------------

    const resetTitle =
        resetPasswordForm?.querySelector(
            "h2"
        );

    if (resetTitle) {

        resetTitle.textContent =
            t.resetPasswordTitle;

    }


    if (newPasswordInput) {

        newPasswordInput.placeholder =
            t.newPassword;

    }


    if (confirmPasswordInput) {

        confirmPasswordInput.placeholder =
            t.confirmPassword;

    }


    if (updatePasswordButton) {

        updatePasswordButton.textContent =
            t.updatePassword;

    }


    // --------------------------------------------------------
    // LOGOUT
    // --------------------------------------------------------

    if (logoutButton) {

        logoutButton.textContent =
            t.logout;

    }


    // --------------------------------------------------------
    // CURRENT CLEANING
    // --------------------------------------------------------

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

        info[0].innerHTML = `

            <strong>${t.date}:</strong>

            <span id="cleaningDate"></span>

            <span class="thursday-note">
                ${t.thursdayNote}
            </span>

        `;


        info[1].innerHTML = `

            <strong>${t.responsible}:</strong>

            <span id="responsiblePerson"></span>

        `;


        info[2].innerHTML = `

            <strong>${t.time}:</strong>

            <span id="cleaningTime">
                08:00–18:00
            </span>

        `;

    }


    // --------------------------------------------------------
    // SCHEDULE
    // --------------------------------------------------------

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


    // --------------------------------------------------------
    // TASK TITLE
    // --------------------------------------------------------

    const taskTitle =
        document.querySelector(
            ".tasks h2"
        );

    if (taskTitle) {

        taskTitle.textContent =
            t.cleaningTasks;

    }


    // --------------------------------------------------------
    // TASK LABELS
    // --------------------------------------------------------

    const labels =
        document.querySelectorAll(
            ".tasks label"
        );


    labels.forEach(
        function (label, index) {

            const span =
                label.querySelector(
                    "span"
                );


            const translationKey =
                `task${index + 1}`;


            if (
                span &&
                t[translationKey]
            ) {

                span.textContent =
                    t[translationKey];

            }

        }
    );


    // --------------------------------------------------------
    // RE-RENDER DATA
    // --------------------------------------------------------

    if (
        scheduleData &&
        scheduleData.length > 0
    ) {

        displayWeek();

    } else {

        updateCompleteButton();

    }

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
        function (event) {

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
    function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                const selectedLanguage =
                    button.dataset.language;


                if (
                    !translations[selectedLanguage]
                ) {

                    return;

                }


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
        );

    }
);


// ============================================================
// CLOSE LANGUAGE MENU
// ============================================================

document.addEventListener(
    "click",
    function () {

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
        function () {

            if (selectedWeek > 0) {

                selectedWeek--;

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
        function () {

            if (
                selectedWeek <
                scheduleData.length - 1
            ) {

                selectedWeek++;

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
        async function () {

            const date =
                getScheduleDate();


            // ------------------------------------------------
            // FRONTEND CHECK
            // ------------------------------------------------

            if (!currentUser) {

                updateCompleteButton();

                return;

            }


            if (!canCompleteCleaning(date)) {

                updateCompleteButton();

                return;

            }


            const schedule =
                scheduleData[selectedWeek];


            if (!schedule) {

                console.error(
                    "No schedule found."
                );

                return;

            }


            completeButton.disabled =
                true;


            console.log(
                "Completing cleaning:",
                schedule.id
            );


            // ------------------------------------------------
            // SECURE SUPABASE RPC
            //
            // The database function should verify:
            //
            // 1. auth.uid() is authenticated
            // 2. auth.uid() = responsible_user_id
            // 3. cleaning is within the allowed window
            // 4. cleaning has not already been completed
            //
            // ------------------------------------------------

            const {
                data,
                error
            } =
                await supabaseClient.rpc(
                    "complete_cleaning",
                    {
                        p_schedule_id:
                        schedule.id
                    }
                );


            if (error) {

                console.error(
                    "Failed to complete cleaning:",
                    error
                );


                completeButton.disabled =
                    false;


                return;

            }


            console.log(
                "Cleaning completed:",
                data
            );


            // ------------------------------------------------
            // UPDATE LOCAL SCHEDULE
            // ------------------------------------------------

            if (data) {

                scheduleData[selectedWeek] =
                    Array.isArray(data)
                        ? data[0]
                        : data;

            }


            displayWeek();

        }
    );

}


// ============================================================
// TASK CHECKBOXES
// ============================================================

document.addEventListener(
    "change",
    function (event) {

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


        // ------------------------------------------------
        // USER MUST BE RESPONSIBLE
        // ------------------------------------------------

        if (!isCurrentUserResponsible()) {

            loadTasks(date);

            return;

        }


        // ------------------------------------------------
        // CHECK CLEANING WINDOW
        // ------------------------------------------------

        if (!canCompleteCleaning(date)) {

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

async function loadScheduleFromSupabase() {

    console.log(
        "Loading cleaning schedule..."
    );


    const pageSize =
        1000;

    let allData =
        [];

    let from =
        0;


    while (true) {

        const to =
            from +
            pageSize -
            1;


        const {
            data,
            error
        } =
            await supabaseClient
                .from("cleaning_schedule")
                .select(
                    `
                    id,
                    cleaning_date,
                    responsible,
                    responsible_user_id,
                    completed,
                    completed_at,
                    completed_by,
                    completed_by_user_id
                    `
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


        if (
            data.length <
            pageSize
        ) {

            break;

        }


        from +=
            pageSize;

    }


    scheduleData =
        allData;


    console.log(
        "Schedule loaded:",
        scheduleData.length,
        "rows"
    );


    selectedWeek =
        0;


    displayWeek();

}


// ============================================================
// START APPLICATION
// ============================================================

async function startApplication() {

    console.log(
        "Starting application..."
    );


    // --------------------------------------------------------
    // Apply language immediately
    // --------------------------------------------------------

    applyLanguage();


    // --------------------------------------------------------
    // Check existing Supabase session
    // --------------------------------------------------------

    const {
        data: {
            session
        }
    } =
        await supabaseClient.auth.getSession();


    if (session) {

        console.log(
            "Active session found:",
            session.user.email
        );


        updateAuthUI(
            session.user
        );


        await loadScheduleFromSupabase();

    } else {

        console.log(
            "No active session."
        );


        updateAuthUI(null);


        // ----------------------------------------------------
        // We still load the schedule.
        //
        // Users can see the schedule without logging in,
        // but only the responsible logged-in user can complete.
        // ----------------------------------------------------

        await loadScheduleFromSupabase();

    }

}


// ============================================================
// START
// ============================================================

startApplication();