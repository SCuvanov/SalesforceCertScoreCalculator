//ADMIN
let adminCert1 = new Certification('Administrator', 60, 65);
const adminCert1CategoryNames = ['Organization Setup', 'User Setup', 'Security and Access', 'Standard and Custom Objects',
    'Sales and Marketing Applications', 'Service and Support Applications', 'Activity Management and Collaboration',
    'Data Management', 'Analytics - Reports and Dashboards', 'Workflow/Process Automation',
    'Desktop and Mobile Administration', 'AppExchange'
];
const adminCert1CategoryWeights = [3, 7, 13, 14, 14, 13, 3, 10, 10, 8, 3, 2];
adminCert1.setCategories(adminCert1CategoryNames, adminCert1CategoryWeights);

let adminCert2 = new Certification('Advanced Administrator', 60, 65);
const adminCert2CategoryNames = ['Security and Access', 'Extending Custom Objects and Applications', 'Auditing and Monitoring',
    'Sales Cloud Applications', 'Service Cloud Applications', 'Data Management',
    'Content Management', 'Change Management', 'Analytics, Reports and Dashboards',
    'Process Automation'
];
const adminCert2CategoryWeights = [20, 8, 6, 10, 10, 10, 3, 10, 10, 13];
adminCert2.setCategories(adminCert2CategoryNames, adminCert2CategoryWeights);

//APPBUILDER
let platformAppBuilderCert = new Certification('Platform App Builder', 60, 63);
const platformAppBuilderCertCategoryNames = ['Salesforce Fundamentals', 'Data Modeling and Management', 'Security',
    'Business Logic and Process Automation', 'Social', 'User Interface', 'Reporting', 'Mobile',
    'App Development'
];
const platformAppBuilderCertCategoryWeights = [8, 20, 10, 27, 3, 14, 5, 5, 8];
platformAppBuilderCert.setCategories(platformAppBuilderCertCategoryNames, platformAppBuilderCertCategoryWeights);

//DEVELOPER
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

//CONSULTANT
let communityCloudConsCert = new Certification('Community Cloud Consultant', 60, 62);
const communityCloudConsCertCategoryNames = ['Implementation', 'Sharing and Security', 'Community Setup', 'Community Builder', 'Community Management', 'Content', 'Templates and Use Cases'];
const communityCloudConsCertCategoryWeights = [22, 20, 18, 12, 11, 9, 8];
communityCloudConsCert.setCategories(communityCloudConsCertCategoryNames, communityCloudConsCertCategoryWeights);

let marketingCloudConsCert = new Certification('Marketing Cloud Consultant', 60, 68);
const marketingCloudConsCertCategoryNames = ['Discovery', 'Conceptual Design', 'Marketing Cloud Connect', 'Account Configuration', 'Reporting', 'Data Design',
    'Automation', 'Email Build', 'Contact Builder', 'Journey Builder'
];
const marketingCloudConsCertCategoryWeights = [13, 12, 6, 10, 7, 13, 8, 6, 14, 11];
marketingCloudConsCert.setCategories(marketingCloudConsCertCategoryNames, marketingCloudConsCertCategoryWeights);

let salesCloudConsCert = new Certification('Marketing Cloud Consultant', 60, 68);
const salesCloudConsCertCategoryNames = ['Industry Knowledge', 'Implementation Strategies', 'Sales Cloud Solution Design', 'Marketing and Leads',
    'Account and Contact Management', 'Opportunity Management', 'Sales Productivity', 'Communities and Site Management', 'Sales Cloud Analytics', 'Integration and Data Management'
];
const salesCloudConsCertCategoryWeights = [5, 6, 25, 7, 12, 15, 12, 5, 5, 8];
salesCloudConsCert.setCategories(salesCloudConsCertCategoryNames, salesCloudConsCertCategoryWeights);

let serviceCloudConsCert = new Certification('Service Cloud Consultant', 60, 68);
const serviceCloudConsCertCategoryNames = ['Industry Knowledge', 'Implementation Strategies', 'Service Cloud Solution Design', 'Knowledge Management',
    'Interaction Channels', 'Case Management', 'Contact Center Analytics', 'Integration and Data Management', 'Service Console'
];
const serviceCloudConsCertCategoryWeights = [10, 15, 16, 9, 10, 15, 5, 5, 15];
serviceCloudConsCert.setCategories(serviceCloudConsCertCategoryNames, serviceCloudConsCertCategoryWeights);

let identityAndAccessMgmtCert = new Certification('Identity and Access Management Designer', 60, 65);
const identityCertCategoryNames = ['Salesforce as an Identity Provider', 'Access Management Best Practices', 'Community (Partner and Customer)', 
'Salesforce Identity', 'Accepting 3rd Party Identity in Salesforce', 'Identity Management Concepts'
];

const identityCertCategoryWeights = [18, 12, 7, 8, 21, 34];
identityAndAccessMgmtCert.setCategories(identityCertCategoryNames, identityCertCategoryWeights);

const certificationMap = new Map();
certificationMap.set('Administrator', adminCert1);
certificationMap.set('Advanced Administrator', adminCert2);
certificationMap.set('Platform App Builder', platformAppBuilderCert);
certificationMap.set('Platform Developer I', developerCert1);
certificationMap.set('Platform Developer II', developerCert2);
certificationMap.set('Community Cloud Consultant', communityCloudConsCert);
certificationMap.set('Marketing Cloud Consultant', marketingCloudConsCert);
certificationMap.set('Sales Cloud Consultant', salesCloudConsCert);
certificationMap.set('Service Cloud Consultant', serviceCloudConsCert);
certificationMap.set('Identity and Access Management Designer', identityAndAccessMgmtCert);

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

function hideTotal() {
    let totalContainer = document.getElementById('tool__content-total');
    totalContainer.classList.add('hide');
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
        case 'Community Cloud Consultant':
            changeDropdownMenuText('Community Cloud Consultant');
            break;
        case 'Marketing Cloud Consultant':
            changeDropdownMenuText('Marketing Cloud Consultant');
            break;
        case 'Sales Cloud Consultant':
            changeDropdownMenuText('Sales Cloud Consultant');
            break;
        case 'Service Cloud Consultant':
            changeDropdownMenuText('Service Cloud Consultant');
            break;
        case 'Identity and Access Management Designer':
            changeDropdownMenuText('Identity and Access Management Designer');
            break;
    }

    selectedCertification = certificationMap.get(certificationName);
    handleCertificationSelection(selectedCertification);
    hideShowDropdownMenu();
    hideTotal();
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


    const totalScoreDifference = Math.abs(finalScore - selectedCertification.passingScore);


    let message = document.getElementById('tool__content-total-message');

    if (finalScore < selectedCertification.passingScore) {
        if (totalScoreDifference < 5) {
            message.innerHTML = 'Almost! Keep trying.';
        } else if (totalScoreDifference < 10) {
            message.innerHTML = 'Keep Studying! You will get it next time.';
        } else if (totalScoreDifference < 15) {
            message.innerHTML = 'Time to bust out the study guides.';
        } else if (totalScoreDifference < 20) {
            message.innerHTML = 'Oof! You definately got this next time.';
        } else if (totalScoreDifference < 25) {
            message.innerHTML = '=/ No big deal! Practice makes perfect.';
        } else {
            message.innerHTML = 'Whatever you do, don\'t give up. You got this.';
        }
    } else {
        message.innerHTML = 'Woohoo! You passed.';
    }

    let score = document.getElementById('tool__content-total-score');
    score.innerHTML = 'Final Score: ' + finalScore;

    let scoreneeded = document.getElementById('tool__content-total-scoreneeded');
    scoreneeded.innerHTML = 'Score Needed: ' + selectedCertification.passingScore;

    return false;
}
