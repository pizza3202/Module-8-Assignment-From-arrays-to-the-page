// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
    {
        country: 'China',
        capital: 'Beijing',
        largestCity: 'Shanghai',
        subdivisionName: 'province',
        subdivisions: [
            {
                name: 'Guangdong',
                capital: 'Guangzhou',
                largestCity: 'Guangzhou',
                area: 179800,
            },
            {
                name: 'Sichuan',
                capital: 'Chengdu',
                largestCity: 'Chengdu',
                area: 485000,
            },
            {
                name: 'Henan',
                capital: 'Zhengzhou',
                largestCity: 'Zhengzhou',
                area: 167000,
            },
        ],
    },
    {
        country: 'South Korea',
        capital: 'Seoul',
        largestCity: 'Seoul',
        subdivisionName: 'province',
        subdivisions: [
            {
                name: 'Gyeonggi',
                capital: 'Suwon',
                largestCity: 'Suwon',
                area: 10188,
            },
            {
                name: 'Jeju',
                capital: 'Jeju City',
                largestCity: 'Jeju City',
                area: 1848,
            },
            {
                name: 'Busan',
                capital: 'Busan',
                largestCity: 'Busan',
                area: 769,
            },
        ],
    },
    {
        country: 'Japan',
        capital: 'Tokyo',
        largestCity: 'Tokyo',
        subdivisionName: 'prefecture',
        subdivisions: [
            {
                name: 'Hokkaido',
                capital: 'Sapporo',
                largestCity: 'Sapporo',
                area: 83424,
            },
            {
                name: 'Osaka',
                capital: 'Osaka',
                largestCity: 'Osaka',
                area: 1905,
            },
            {
                name: 'Kanagawa',
                capital: 'Yokohama',
                largestCity: 'Yokohama',
                area: 2415,
            },
        ],
    },
    {
        country: 'Philippines',
        capital: 'Manila',
        largestCity: 'Quezon City',
        subdivisionName: 'region',
        subdivisions: [
            {
                name: 'Calabarzon',
                capital: 'Calamba',
                largestCity: 'Antipolo',
                area: 13284,
            },
            {
                name: 'Central Luzon',
                capital: 'City of San Fernando',
                largestCity: 'Angeles',
                area: 22163,
            },
            {
                name: 'Western Visayas',
                capital: 'Iloilo City',
                largestCity: 'Bacolod',
                area: 20564,
            },
        ],
    },
];

// Your code goes below
function generateTable(list) {
    const container = document.getElementById('table-container');
    let table = '<table>';
    table += `
      <tr>
        <th>Country</th>
        <th>Capital</th>
        <th>Largest City</th>
        <th>Subdivision Name</th>
        <th>Subdivision Capital</th>
        <th>Subdivision Largest City</th>
        <th>Area (sq km)</th>
      </tr>
    `;
    list.forEach(country => {
      country.subdivisions.forEach((subdivision, index) => {
        table += `
        <tr>
          ${index === 0 ? `<td rowspan="${country.subdivisions.length}">${country.country}</td>
          <td rowspan="${country.subdivisions.length}">${country.capital}</td>
          <td rowspan="${country.subdivisions.length}">${country.largestCity}</td>` : ''}
          <td>${subdivision.name}</td>
          <td>${subdivision.capital}</td>
          <td>${subdivision.largestCity}</td>
          <td>${subdivision.area.toLocaleString()}</td>
        </tr>
        `;
      });
    });
  
    table += '</table>';
    container.innerHTML = table; 
  }
  generateTable(GEOGRAPHY_LIST);