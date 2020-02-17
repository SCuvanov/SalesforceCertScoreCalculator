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
let developerCert1 = new Certification('Platform Developer I', 60, 62);
const developerCert1CategoryNames = ['Salesforce Fundamentals', 'Data Modeling and Management', 'Process Automation and Logic',
    'User Interface', 'Testing, Debugging, and Deployment'
];
const developerCert1CategoryWeights = [7, 13, 38, 25, 17];
developerCert1.setCategories(developerCert1CategoryNames, developerCert1CategoryWeights);

let developerCert2 = new Certification('Platform Developer II', 60, 70);
const developerCert2CategoryNames = ['Salesforce Fundamentals', 'Data Modeling and Management', 'Logic and Process Automation',
    'User Interface', 'Performance', 'Integration', 'Testing', 'Debug and Deployment Tools'
];
const developerCert2CategoryWeights = [8, 5, 20, 20, 15, 14, 13, 5];
developerCert2.setCategories(developerCert2CategoryNames, developerCert2CategoryWeights);

//MARKETING
let marketingEmailSpecialist = new Certification('Marketing Cloud Email Specialist', 60, 65);
const marketingEmailSpecialistCategoryNames = ['Email Marketing Best Practices', 'Email Message Design', 'Content Creation and Delivery',
    'Marketing Automation', 'Subscriber and Data Management', 'Tracking and Reporting'
];
const marketingEmailSpecialistCategoryWeights = [15, 13, 18, 19, 28, 7];
marketingEmailSpecialist.setCategories(marketingEmailSpecialistCategoryNames, marketingEmailSpecialistCategoryWeights);

//CONSULTANT
let communityCloudConsCert = new Certification('Community Cloud Consultant', 60, 62);
const communityCloudConsCertCategoryNames = ['Implementation', 'Sharing and Security', 'Community Setup', 'Community Builder', 'Community Management', 'Content', 'Templates and Use Cases'];
const communityCloudConsCertCategoryWeights = [22, 20, 18, 12, 11, 9, 8];
communityCloudConsCert.setCategories(communityCloudConsCertCategoryNames, communityCloudConsCertCategoryWeights);

let marketingCloudConsCert = new Certification('Marketing Cloud Consultant', 60, 68);
const marketingCloudConsCertCategoryNames = ['Discovery', 'Conceptual Design', 'Marketing Cloud Connect', 'Account Configuration', 'Reporting', 'Data Design',
    'Automation', 'Email Build', 'Contact Builder', 'Journey Builder'
];
const marketingCloudConsCertCategoryWeights = [15, 12, 6, 10, 5, 12, 8, 7, 15, 10];
marketingCloudConsCert.setCategories(marketingCloudConsCertCategoryNames, marketingCloudConsCertCategoryWeights);

let salesCloudConsCert = new Certification('Sales Cloud Consultant', 60, 62);
const salesCloudConsCertCategoryNames = ['Industry Knowledge', 'Implementation Strategies', 'Sales Cloud Solution Design', 'Marketing and Leads',
    'Account and Contact Management', 'Opportunity Management', 'Sales Productivity', 'Sales Cloud Analytics', 'Integration and Data Management'
];
const salesCloudConsCertCategoryWeights = [7, 12, 21, 8, 13, 13, 9, 9, 8];
salesCloudConsCert.setCategories(salesCloudConsCertCategoryNames, salesCloudConsCertCategoryWeights);

let serviceCloudConsCert = new Certification('Service Cloud Consultant', 60, 67);
const serviceCloudConsCertCategoryNames = ['Industry Knowledge', 'Implementation Strategies', 'Service Cloud Solution Design', 'Knowledge Management',
    'Interaction Channels', 'Case Management', 'Contact Center Analytics', 'Integration and Data Management', 'Service Console'
];
const serviceCloudConsCertCategoryWeights = [10, 15, 16, 9, 10, 15, 5, 5, 15];
serviceCloudConsCert.setCategories(serviceCloudConsCertCategoryNames, serviceCloudConsCertCategoryWeights);

//ARCHITECTURE
let identityAndAccessMgmtCert = new Certification('Identity and Access Management Designer', 60, 65);
const identityCertCategoryNames = ['Identity Management Concepts', 'Accepting Third-Party Identity in Salesforce', 'Salesforce as an Identity Provider',
    'Access Management Best Practices', 'Salesforce Identity', 'Community (Partner and Customer)'
];
const identityCertCategoryWeights = [28, 22, 23, 15, 7, 5];
identityAndAccessMgmtCert.setCategories(identityCertCategoryNames, identityCertCategoryWeights);

let dataArchitectureAndManagementDesignerCert = new Certification('Data Architecture and Management Designer', 60, 67);
const dataArchitectureAndManagementDesignerCategoryNames = ['Data Modeling', 'Conceptual Design', 'Master Data Management', 'Metadata Management',
    'Data Archiving', 'Data Governance', 'Business Intelligence, Reporting & Analytics', 'Data Migration', 'Performance Tuning'
];
const dataArchitectureAndManagementDesignerCategoryWeights = [20, 15, 10, 7, 10, 7, 10, 10, 11];
dataArchitectureAndManagementDesignerCert.setCategories(dataArchitectureAndManagementDesignerCategoryNames, dataArchitectureAndManagementDesignerCategoryWeights);

const certificationMap = new Map();
certificationMap.set(adminCert1.getName(), adminCert1);
certificationMap.set(adminCert2.getName(), adminCert2);
certificationMap.set(platformAppBuilderCert.getName(), platformAppBuilderCert);
certificationMap.set(developerCert1.getName(), developerCert1);
certificationMap.set(developerCert2.getName(), developerCert2);
certificationMap.set(marketingEmailSpecialist.getName(), marketingEmailSpecialist);
certificationMap.set(communityCloudConsCert.getName(), communityCloudConsCert);
certificationMap.set(marketingCloudConsCert.getName(), marketingCloudConsCert);
certificationMap.set(salesCloudConsCert.getName(), salesCloudConsCert);
certificationMap.set(serviceCloudConsCert.getName(), serviceCloudConsCert);
certificationMap.set(identityAndAccessMgmtCert.getName(), identityAndAccessMgmtCert);
certificationMap.set(dataArchitectureAndManagementDesignerCert.getName(), dataArchitectureAndManagementDesignerCert);

// Here we map certifications to one or more Roles that can be filtered on
const RoleMap = new Map();
RoleMap.set('Salesforce Administrator', [adminCert1, adminCert2, platformAppBuilderCert]);
RoleMap.set('Salesforce Developer', [platformAppBuilderCert, developerCert1, developerCert2]);
RoleMap.set('Salesforce Architect', [identityAndAccessMgmtCert, dataArchitectureAndManagementDesignerCert]);
RoleMap.set('Salesforce Marketer', [marketingEmailSpecialist, marketingCloudConsCert]);
RoleMap.set('Salesforce Consultant', [communityCloudConsCert, marketingCloudConsCert, salesCloudConsCert, serviceCloudConsCert]);

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

function hideShowRoleDropdownMenu() {
    let dropdownMenu = document.getElementById('dropdown-menu2');
    let btnIcon = document.getElementById('btn-icon2');
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
    changeDropdownMenuText(certificationName);
    handleCertificationSelection(certificationMap.get(certificationName));
    hideShowDropdownMenu();
    hideTotal();
}

function handleRoleSelectOption(mainCategory) {
    if (!mainCategory) return;
    document.getElementById('dropdownMenuButton__text2').innerHTML = mainCategory;
    handleSelectOption(RoleMap.get(mainCategory)[0].name);
    hideShowRoleDropdownMenu();
    hideShowDropdownMenu();
    showRelevantCertifications(mainCategory);
}

function showRelevantCertifications(mainCategory) {
    var divs = document.querySelectorAll('*[id^="pick"]');
    let certs = RoleMap.get(mainCategory);
    let certsText = [];
    for (let i = 0; i < certs.length; i++) {
        certsText[i] = certs[i].name;
    }
    for (var i = 0; i < divs.length; i++) {
        if (certsText.includes(divs[i].textContent)) {
            divs[i].classList.remove('hide');
        } else {
            divs[i].classList.add('hide');
        }
    }
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
        finalScore += inputs[i].value * categories[i].weight;
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
