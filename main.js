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


function CreateHtmlTag(tagname, TagProperties) {
    var tag = document.createElement(tagname)
    for (i in TagProperties) {
        tag[i] = TagProperties[i]
    }
    return tag
}

function ClickEditButton(button) {
    button.addEventListener('click', function (e) {
        var input = "输入网址"
        var userInput = prompt(input, 'google.com')
        inputImg = document.getElementById(e.target.id)
        inputImg.src = 'http://' + userInput + '/favicon.ico'
        if (inputImg.src == 'http://undefined/favicon.ico' || inputImg.src == 'http://null/favicon.ico') {
            inputImg.src = 'https://i.imgur.com/tDXa3EN.png'
        }
        inputImg.onerror = function (e) {
            inputImg.src = 'https://i.imgur.com/tDXa3EN.png'
            console.log('wrong');
        }
        keysToUrlsFromLocal[e.target.id] = userInput
        setLocalStorage(keysToUrlsFromLocal)
    })
}

function setLocalStorage(objectData) {
    var jsonData = JSON.stringify(objectData)
    var setData = localStorage.setItem('localkeysToUrlsFromLocal', jsonData)
    return setData
}

function getLocalStorage(jsondata) {
    var getJsonData = localStorage.getItem(jsondata)
    var objectData = JSON.parse(getJsonData)
    return objectData
}



var keysToUrlsFromLocal = getLocalStorage('localkeysToUrlsFromLocal')

//防止对浏览器local storge清理后，keysToUrlsFromLocal的值变成null
if (keysToUrlsFromLocal === null) {
    keysToUrlsFromLocal = keysToUrls
} else {
    keysToUrlsFromLocal = JSON.parse(localStorage.getItem('localkeysToUrlsFromLocal'))
}

for (index1 = 0; index1 < allKeys.length; index1++) {
    var keyRow = CreateHtmlTag('div', {
        'className': 'keyRow'
    })
    var table = document.getElementById('table')
    table.appendChild(keyRow)
    for (index2 = 0; index2 < allKeys[index1].length; index2++) {
        var keyText = allKeys[index1][index2]
        var url = keysToUrlsFromLocal[keyText]
        var key = CreateHtmlTag('kbd', {
            'className': 'key',
            'textContent': keyText,
        })
        var img = CreateHtmlTag('img', {
            'className': 'logo',
            'id': keyText,
            'src': 'http://' + url + '/favicon.ico'
        })


        if (img.src == 'http://undefined/favicon.ico' || img.src == 'http://null/favicon.ico') {
            img.src = 'https://i.imgur.com/tDXa3EN.png'
        }
        img.onerror = function (e) {
            img.src = 'https://i.imgur.com/tDXa3EN.png'
        }


        var editButton = CreateHtmlTag('button', {
            'clasName': 'edit',
            'textContent': 'edit',
            'id': keyText,
        })
        keyRow.appendChild(key)
        key.appendChild(img)
        key.appendChild(editButton)
        ClickEditButton(editButton)
    }
}

document.addEventListener('keypress', function (e) {
    var url = 'http://' + keysToUrlsFromLocal[e.key]
    open(url)
})