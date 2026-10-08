function removecolor() {
    var x = document.getElementById("colorSelect");
    if (x.selectedIndex !== -1) {
        x.remove(x.selectedIndex);
    }
}
