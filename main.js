var allKeys = {
    0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    length: 3
}

var keysToUrls = {
    'q': 'qq.com',
    'w': 'wordpress.com',
    'e': 'ele.me',

    'z': 'baidu.com'
}



for (index1 = 0; index1 < allKeys.length; index1++) {
    var keyRow = document.createElement('div')
    keyRow.className = 'keyRow'
    var table = document.getElementById('table')
    table.appendChild(keyRow)
    for (index2 = 0; index2 < allKeys[index1].length; index2++) {
        var keyText = allKeys[index1][index2]
        var key = document.createElement('kbd')
        var img = document.createElement('img')
        var editButton = document.createElement('button')
        editButton.className = 'edit'
        editButton.textContent = 'e'
        editButton.id = keyText
        key.className = 'key'
        img.className = 'logo'
        var url = keysToUrls[keyText]
        img.src = 'http://' + url + '/favicon.ico'
        img.id = keyText
        keyRow.appendChild(key)
        key.textContent = keyText
        key.appendChild(img)
        key.appendChild(editButton)
        editButton.addEventListener('click', function (e) {
            console.log(e.target.id)
            var input = "输入"
            var userInput = prompt(input, 'google.com')
            inputImg = document.getElementById(e.target.id)
            inputImg.src = 'http://' + userInput + '/favicon.ico'
        })
    }
}

document.addEventListener('keypress', function (e) {
    var url = 'http://' + keysToUrls[e.key]
    open(url)
})