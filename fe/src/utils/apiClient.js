const fetchForm = async () => fetch('/appointments')
    .then(httpResponse => httpResponse.json())

const fetchAdmin = async () => fetch('/admin')
    .then(httpResponse => httpResponse.json())

const fetchRooms = async () => fetch('/roomCards')
    .then(httpResponse => {
        console.log(httpResponse)
        return httpResponse.json()
    })

const fetchStyles = async (byRoom) =>{
    let url = '/styleCards'
    if(byRoom){
        url = url.concat(`?filterByRoom=${byRoom}`)
    }
    return fetch(url).then(httpResponse => httpResponse.json())
}

const createAppointment = async (appointmentData) =>
    fetch('/appointments',{
        method:'POST',
        body: JSON.stringify(appointmentData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(httpResponse => httpResponse.json())

const checkLogin = async (loginData) =>
    fetch('/login',{
        method:'POST',
        body: JSON.stringify(loginData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(httpResponse => httpResponse.json())

const addNewRoom = async (formData) =>
    fetch('/addRoom',{
        method:'POST',
        body: formData,
    })
        .then(httpResponse => httpResponse.json())

const editRoom = async (formData) =>
    fetch('/editRoom',{
        method:'POST',
        body: formData,
    })
        .then(httpResponse => httpResponse.json())

const deleteRoom = async (selectedRoom) =>
    fetch('/roomCardsDelete',{
        method:'PUT',
        body: JSON.stringify(selectedRoom),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(httpResponse => httpResponse.json())

const addNewStyle = async (formData) =>
    fetch('/upload',{
        method:'POST',
        body: formData
    })
        .then(httpResponse => httpResponse.json())

const editStyle = async (formData) =>
    fetch('/changeStyle',{
        method:'POST',
        body: formData
    })
        .then(httpResponse => httpResponse.json())

const deleteStyle = async (roomOption, selectedStyle) =>
    fetch('/styleCards',{
        method:'PUT',
        body: JSON.stringify({roomOption, selectedStyle}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(httpResponse => httpResponse.json())


module.exports = {
    fetchAdmin,
    fetchForm,
    createAppointment,
    checkLogin,
    addNewRoom,
    fetchRooms,
    editRoom,
    deleteRoom,
    addNewStyle,
    fetchStyles,
    editStyle,
    deleteStyle
}