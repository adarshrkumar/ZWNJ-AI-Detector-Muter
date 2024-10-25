function go() {
    var ele = document.querySelector('textarea')
    if (ele.value) {
        ele.value = ele.value.split('').join('‌')
        ele.focus()
    }
}