axios.get('http:localhost/hospital-project-backend/medications.php')
  .then(function(response) {

    var medications = response.data;
    var medicationList = document.getElementById('medication-list');
    for (var i = 0; i < medications.length; i++) {
      var medication = medications[i];
      var medicationItem = document.createElement('li');
      medicationItem.textContent = medication.name + ' - ' + medication.description;
      medicationList.appendChild(medicationItem);
    }
  })
  
