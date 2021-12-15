let username = sessionStorage.getItem('username')
if(!username) {
    username = prompt('Ingresa tu username')
}

const socket =io.connect()

document.getElementById('username').innerText = username

socket.on('messages', data => {
    console.log(data)
    render(data)
})

function render(data) {
    let messages = ''
    data.forEach((message) => {
        messages += `
            <div>
               [${message.time}]<strong>${message.author}</strong>
                <em>${message.text}</em>
            </div>
        `
    })

    document.getElementById('messages').innerHTML = messages
}

document.getElementById('form').addEventListener('submit', addMessage)

function addMessage(e) {
    e.preventDefault()
    const message = {
        author: username,
        text: document.getElementById('text').value
    }

    socket.emit('new-message', message)
    document.getElementById('username').value = ""
    document.getElementById('text').value = ""
    return false
}

socket.on('stats', (data) => {
    document.getElementById('stats').innerHTML = data.numUsers
})