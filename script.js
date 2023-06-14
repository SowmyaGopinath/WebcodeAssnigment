const url = "https://api.openbrewerydb.org/v1/breweries";
try{
async function getData() {
  const response = await fetch(url);
  const names = await response.json();

  const table = document.getElementById('myTable');

  names.forEach(data => {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const typeCell = row.insertCell();
    const addressCell = row.insertCell();
    const cityCell = row.insertCell();
    const postalCodeCell = row.insertCell();
    const websiteCell = row.insertCell();
    const phoneCell = row.insertCell();

    nameCell.textContent = data.name;
    typeCell.textContent = data.brewery_type;
    addressCell.textContent = data.address_1;
    cityCell.textContent = data.city;
    postalCodeCell.textContent = data.postal_code;
    websiteCell.textContent = data.website_url;
    phoneCell.textContent = data.phone;
  });
  
}
getData();
}
catch(error){
    console.log(error)

}