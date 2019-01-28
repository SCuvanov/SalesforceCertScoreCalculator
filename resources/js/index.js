function hideShowDropdownMenu() {
    let dropdownMenu = document.getElementById('dropdown-menu');
    let btnIcon = document.getElementById('btn-icon');
    if (dropdownMenu.classList.contains('hide')) {
        dropdownMenu.classList.remove('hide');
        btnIcon.classList.remove('fa-angle-down');
        btnIcon.classList.add('fa-angle-up');
    } else {
        dropdownMenu.classList.add('hide');
        btnIcon.classList.remove('fa-angle-up');
        btnIcon.classList.add('fa-angle-down');
    }
}

function handleSelectOption_Admin(certificationName) {
    switch(certificationName){
        case 'Administrator':
            let dropdownMenuButton__text = document.getElementById('dropdownMenuButton__text');
            dropdownMenuButton__text.innerHTML = 'Administrator';
            break;
    }

    hideShowDropdownMenu();
}