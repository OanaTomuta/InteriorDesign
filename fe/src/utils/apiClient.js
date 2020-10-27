const fetchForm = () => fetch('/appointments')
    .then(httpResponse => httpResponse.json())

const createAppointment = (appointmentData) =>
    fetch('/appointments',{
        method:'POST',
        body: JSON.stringify(appointmentData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(httpResponse => httpResponse.json())

module.exports = {
    fetchForm,
    createAppointment
}