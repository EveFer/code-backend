const socket = io()

// socket.on('saludar', data => {
//     console.log(data)
// })

// setInterval(() => {
//     socket.emit('saludar', `Hola a todos amigos desde el Cliente ${new Date().toLocaleTimeString()}`)
// }, 2000)

socket.on('sendMessage', data => {
    console.log(data)
    document.getElementById('chat').append(data.message)
})

document.getElementById('send').addEventListener('click', () => {
    let message = document.getElementById('msn').value

    socket.emit('sendMessage', { message, date: new Date().toLocaleTimeString() })

    document.getElementById('msn').value = ""
})
