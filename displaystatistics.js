axios('http:localhost/hospital-project-backend/statistics.php')
.then(response => response.json())
.then(data => {
  document.getElementById('female-count').innerText = data.female_count;
  document.getElementById('male-count').innerText = data.male_count;
  data.patient_counts.forEach(hospital => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const countCell = document.createElement('td');
    nameCell.innerText = hospital.hospital_name;
    countCell.innerText = hospital.patient_count;
    row.appendChild(nameCell);
    row.appendChild(countCell);
    document.getElementById('patient-counts').appendChild(row);
  });
})
.catch(error => console.error(error));