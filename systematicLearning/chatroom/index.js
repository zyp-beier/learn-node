let userName,socket,tbxUsername,tbxMsg,divChat
function window_onload() {
    divChat = document.querySelector('.divchat')
    tbxUsername = document.querySelector('.tbxUsername')
    tbxMsg = document.querySelector('.tbxMsg')
    tbxUsername.focus()
    tbxUsername.select()
}

function addMsg(msg) {
    divChat.innerHTML += msg + '<br>'
    if(divChat.scrollHeight > divChat.clientHeight){
        divChat.scrollTop = divChat.scrollHeight-divChat.clientHeight
    }
}

function btnLogin_onclick() {
    if(tbxUsername.value.trim()==''){
        alert('请输入用户名')
        return
    }
    userName = tbxUsername.value.trim()
    socket = io.connect()
    socket.on('connect',function () {
        addMsg('与聊天服务器的连接已经建立')
        socket.on('login',function (name) {
            addMsg('欢迎用户' + name + '进入聊天室')
        })
        socket.on('sendClients',function (names) {
            const divRight = document.querySelector('.divRight')
            let str = ''
            names.forEach(item => {
                str += item + '<br>'
            })
            divRight.innerHTML = '用户列表' + '<br>'
            divRight.innerHTML += str
        })
        socket.on('chat',function (data) {
            addMsg(data.user + '说' + data.msg)
        })
        socket.on('disconnect',function () {
            addMsg('与聊天服务器连接已断开')
            document.querySelector('.benSend').disabled = true
            document.querySelector('.btnLoginout').disabled = true
            document.querySelector('.btnLogin').disabled = ''
            const divRight = document.querySelector('.divRight')
            divRight.innerHTML = '用户列表'
        })
        socket.on('logout',function (name) {
            addMsg('用户' + name + '已退出聊天室')
        })
        socket.on('duplicate',function () {
            alert('该用户名已经被使用')
            document.querySelector('.benSend').disabled = true
            document.querySelector('.btnLoginout').disabled = true
            document.querySelector('.btnLogin').disabled = ''
        })
    })
    socket.on('error',function (err) {
        addMsg('与聊天服务器之间的连接发生错误')
        socket.disconnect()
        socket.removeAllListeners('connect')
        io.sockets = {}
    })
    socket.emit('login',userName)
    document.querySelector('.benSend').disabled = ''
    document.querySelector('.btnLoginout').disabled = ''
    document.querySelector('.btnLogin').disabled = true
}
function btnSend_onclick() {
    let msg = tbxMsg.value
    if(msg.length>0){
        socket.emit('chat',{userName:name,msg: msg})
        tbxMsg.value = ''
    }
}

function btnLogout_onclick() {
    socket.emit('logout',userName)
    socket.disconnect()
    socket.removeAllListeners('connect')
    io.sockets = {}
    addMsg('用户' + userName + '退出聊天室')
    const divRight = document.querySelector('.divRight')
    divRight.innerHTML = '用户列表' + '<br>'
    document.querySelector('.benSend').disabled = 'disabled'
    document.querySelector('.btnLoginout').disabled = 'disabled'
    document.querySelector('.btnLogin').disabled = ''

}

function window_onunload() {
    socket.emit('logout',userName)
    socket.disconnect()
}
