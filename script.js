function change(name) {
    var elems = document.getElementsByClassName("section");

    for (var i = 0; i < elems.length; i ++)
        elems[i].style.display = (elems[i].id == name) ? '' : 'none';

    return false;
}
