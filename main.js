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
        var key = document.createElement('kbd')
        key.className = 'key'
        keyRow.appendChild(key)
        key.textContent = allKeys[index1][index2]
    }
}