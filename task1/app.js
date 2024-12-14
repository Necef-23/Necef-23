function Car(marka, model, year, engine) {
    this.marka = marka;
    this.model = model;
    this.year = year;
    this.engine = engine;
}

// 3 ferqli obyekt
const car1 = new Car("Toyota", "Corolla", 2020, "1.8L");
const car2 = new Car("BMW", "X5", 2022, "3.0L");
const car3 = new Car("Mercedes", "E-Class", 2023, "2.0L");


// maşınları göstərmək
document.getElementById("showCars").addEventListener("click", function () {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p><strong>1-ci Maşın:</strong> Marka: ${car1.marka}, Model: ${car1.model}, İl: ${car1.year}, Mühərrik: ${car1.engine}</p>
        <p><strong>2-ci Maşın:</strong> Marka: ${car2.marka}, Model: ${car2.model}, İl: ${car2.year}, Mühərrik: ${car2.engine}</p>
        <p><strong>3-cü Maşın:</strong> Marka: ${car3.marka}, Model: ${car3.model}, İl: ${car3.year}, Mühərrik: ${car3.engine}</p>
    `;
});