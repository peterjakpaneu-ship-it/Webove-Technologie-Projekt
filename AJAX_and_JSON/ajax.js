fetch('../AJAX_and_JSON/data.json')
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("dataOutput");

    // create table
    const table = document.createElement("table");
    table.classList.add("dataTable");

    // table header
    table.innerHTML = `
      <tr>
        <th>Continent</th>
        <th>Country</th>
        <th>City</th>
        <th>Price ($)</th>
      </tr>
    `;

    data.destinations.forEach(continent => {
      continent.countries.forEach(country => {
        country.cities.forEach(city => {

          const row = document.createElement("tr");

          row.innerHTML = `
            <td class="continent">${continent.continent}</td>
            <td class="country">${country.name}</td>
            <td>${city.city}</td>
            <td>${city.price}</td>
          `;

          table.appendChild(row);

        });
      });
    });

    container.appendChild(table);

  })
  .catch(err => console.error(err));