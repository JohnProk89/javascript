const titleDOM = document.getElementById('title')
const auebTextDOM = document.querySelector('.aueb-text')
const main = document.querySelector('.main')
let image = 'https://codingfactory.aueb.gr/sites/all/themes/cf_theme/logo.png'
let cfName = 'Coding Factory'


titleDOM.textContent = "Coding Factory"
auebTextDOM.innerHTML = `Το Coding Factory είναι ένα εκπαιδευτικό πρόγραμμα στην Ανάπτυξη Λογισμικού του Κέντρου Δια Βίου Μάθησης
του Οικονομικού Πανεπιστημίου Αθηνών (ΟΠΑ) και στη συνέχεια διασύνδεσης των αποφοίτων με συνεργαζόμενες επιχειρήσεις σε όλη την Ελλάδα.
Η συνολική διάρκεια του προγράμματος είναι έξι (6) μήνες. `
main.innerHTML = `<article class="course">
        <div class="cf-container">
            <img src="${image}" class="cf-img img" alt="${cfName}" />
        </div>
        <footer>
            <p class="course-name">&copy; AUEB - Coding Factory</p>
        </footer>
        </article>`