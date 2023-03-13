function assignPatient() {
    // Get the form data
    var patient_id = document.getElementById("patient_id").value;
    var hospital_id = document.getElementById("hospital_id").value;

    // Make the API call
    axios.post('http:localhost/', {
        patient_id: patient_id,
        hospital_id: hospital_id
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}
