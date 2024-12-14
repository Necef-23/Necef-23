document.getElementById("mergeObjects").addEventListener("click", function () {
    const car1 = { marka: "Mercedes", model: "E-Class" };
    const car2 = { year: 2023, engine: "2.0L" };

    // Object.assign() ilə obyektləri birləşdiririk
    const mergedCar = Object.assign({}, car1, car2);

    // Nəticə
    document.getElementById("result").innerHTML = `
        <p><strong>Marka:</strong> ${mergedCar.marka}</p>
        <p><strong>Model:</strong> ${mergedCar.model}</p>
        <p><strong>İl:</strong> ${mergedCar.year}</p>
        <p><strong>Mühərrik:</strong> ${mergedCar.engine}</p>
    `;
});