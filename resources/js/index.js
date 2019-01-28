function hideShowDropdownMenu() {
    let dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu.classList.contains('hide')) {
        dropdownMenu.classList.remove('hide');
    } else {
        dropdownMenu.classList.add('hide');
    }
}