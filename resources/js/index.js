let adminCert1 = new Certification('Administrator', 60, 65);
const adminCert1CategoryNames = ['Organization Setup', 'User Setup', 'Security and Access', 'Standard and Custom Objects',
    'Sales and Marketing Applications', 'Service and Support Applications', 'Activity Management and Collaboration',
    'Data Management', 'Analytics - Reports and Dashboards', 'Workflow/Process Automation',
    'Desktop and Mobile Administration', 'AppExchange'
];
const adminCert1CategoryWeights = [3, 6, 14, 15, 15, 12, 3, 8, 10, 12, 1, 1];
adminCert1.setCategories(adminCert1CategoryNames, adminCert1CategoryWeights);

let adminCert2 = new Certification('Advanced Administrator', 60, 65);
const adminCert2CategoryNames = ['Security and Access', 'Extending Custom Objects and Applications', 'Auditing and Monitoring',
    'Sales Cloud Applications', 'Service Cloud Applications', 'Data Management',
    'Content Management', 'Change Management', 'Analytics, Reports and Dashboards',
    'Process Automation'
];
const adminCert2CategoryWeights = [20, 8, 6, 10, 10, 10, 3, 10, 10, 13];
adminCert2.setCategories(adminCert2CategoryNames, adminCert2CategoryWeights);

let platformAppBuilderCert = new Certification('Platform App Builder');
let developerCert1 = new Certification('Platform Developer I');
let developerCert2 = new Certification('Platform Developer II');

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

function handleSelectOption(certificationName) {
    switch (certificationName) {
        case 'Administrator':
            changeDropdownMenuText('Administrator');
            break;
        case 'Advanced Administrator':
            changeDropdownMenuText('Advanced Administrator');
            break;
        case 'Platform App Builder':
            changeDropdownMenuText('Platform App Builder');
            break;
        case 'Platform Developer I':
            changeDropdownMenuText('Platform Developer I');
            break;
        case 'Platform Developer II':
            changeDropdownMenuText('Platform Developer II');
            break;
    }

    hideShowDropdownMenu();
}

function changeDropdownMenuText(certificationName) {
    if (!certificationName) return;
    let dropdownMenuButton__text = document.getElementById('dropdownMenuButton__text');
    dropdownMenuButton__text.innerHTML = certificationName;
}

function handleCertificationSelection(certificationName) {
    //TODO: Build UI Properly
}