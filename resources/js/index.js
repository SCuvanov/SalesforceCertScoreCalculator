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

let platformAppBuilderCert = new Certification('Platform App Builder', 60, 63);
const platformAppBuilderCertCategoryNames = ['Salesforce Fundamentals', 'Data Modeling and Management', 'Security',
    'Business Logic and Process Automation', 'Social', 'User Interface', 'Reporting', 'Mobile',
    'App Development'
];
const platformAppBuilderCertCategoryWeights = [8, 20, 10, 27, 3, 14, 5, 5, 8];
platformAppBuilderCert.setCategories(platformAppBuilderCertCategoryNames, platformAppBuilderCertCategoryWeights);

let developerCert1 = new Certification('Platform Developer I', 60, 65);
const developerCert1CategoryNames = ['Salesforce Fundamentals', 'Data Modeling and Management', 'Logic and Process Automation',
    'User Interface', 'Testing', 'Debug and Deployment Tools'
];
const developerCert1CategoryWeights = [10, 12, 46, 10, 12, 10];
developerCert1.setCategories(developerCert1CategoryNames, developerCert1CategoryWeights);

let developerCert2 = new Certification('Platform Developer II', 60, 63);
const developerCert2CategoryNames = ['Salesforce Fundamentals', 'Data Modeling and Management', 'Logic and Process Automation',
    'User Interface', 'Performance', 'Integration', 'Testing', 'Debug and Deployment Tools'
];
const developerCert2CategoryWeights = [5, 7, 33, 20, 7, 11, 12, 5];
developerCert2.setCategories(developerCert2CategoryNames, developerCert2CategoryWeights);

const certificationMap = new Map();
certificationMap.set('Administrator', adminCert1);
certificationMap.set('Advanced Administrator', adminCert2);
certificationMap.set('Platform App Builder', platformAppBuilderCert);
certificationMap.set('Platform Developer I', developerCert1);
certificationMap.set('Platform Developer II', developerCert2);

let selectedCertification = adminCert1;

window.addEventListener('load', function () {
    handleSelectOption('Administrator');
    hideShowDropdownMenu();
})

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

function showTotal() {
    let totalContainer = document.getElementById('tool__content-total');
    totalContainer.classList.remove('hide');
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

    selectedCertification = certificationMap.get(certificationName);
    handleCertificationSelection(selectedCertification);
    hideShowDropdownMenu();
}

function changeDropdownMenuText(certificationName) {
    if (!certificationName) return;
    let dropdownMenuButton__text = document.getElementById('dropdownMenuButton__text');
    dropdownMenuButton__text.innerHTML = certificationName;
}

function handleCertificationSelection(certification) {
    if (!certification) return;
    const certificationCategories = certification.getCategories();

    let toolContentContainer = document.getElementById('tool__content-container');
    toolContentContainer.innerHTML = '';

    for (let i = 0; i < certificationCategories.length; i++) {
        const category = certificationCategories[i];

        let htmlContent = '<div class="tool__content-box"><label for="category-' + i + '" class="tool__content-category">' + category.name + '</label><input type="number" name="category-' + i + '" class="tool__content-categoryvalue" id="category-' + i + '" required></div>';
        toolContentContainer.insertAdjacentHTML('beforeend', htmlContent);
    }
}

function handleCalculate() {
    showTotal();

    let finalScore = 0;

    const categories = selectedCertification.getCategories();
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; ++i) {
        let inputValue = inputs[i].value;
        const category = categories[i];

        finalScore += (inputValue * category.weight);
    }


    finalScore = Math.round(finalScore);

    let message = document.getElementById('tool__content-total-message');
    if (finalScore < selectedCertification.passingScore) {
        message.innerHTML = 'Almost! Keep trying.';
    } else {
        message.innerHTML = 'Woohoo! You passed.';
    }

    let score = document.getElementById('tool__content-total-score');
    score.innerHTML = 'Final Score: ' + finalScore;


    return false;
}