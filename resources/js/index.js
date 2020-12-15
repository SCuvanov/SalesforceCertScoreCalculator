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

let cPQSpecialist = new Certification('CPQ Specialist', 60, 65);
const cPQSpecialistCategoryNames = ['CPQ Platform', 'Bundle Configurations', 'Pricing',
    'Quote Templates', 'Product Selection', 'Orders, Contracts, Amendments, and Renewals', 'Products', 'Approvals'
];
const cPQSpecialistCategoryWeights = [23, 17, 16, 7, 7, 15, 11, 4];
cPQSpecialist.setCategories(cPQSpecialistCategoryNames, cPQSpecialistCategoryWeights);

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

let javaScriptDeveloperI = new Certification('JavaScript Developer I', 60, 65);
const javaScriptDeveloperICategoryNames = ['Variables, Types, and Collections', 'Objects, Functions, and Classes', 'Browser and Events',
    'Debugging and Error Handling', 'Asynchronous Programming', 'Server Side JavaScript', 'Testing'
];
const javaScriptDeveloperIWeights = [23, 25, 17, 7, 13, 8, 7];
javaScriptDeveloperI.setCategories(javaScriptDeveloperICategoryNames, javaScriptDeveloperIWeights);

let b2CCommerceDeveloper = new Certification('B2C Commerce Developer', 60, 65);
const b2CCommerceDeveloperCategoryNames = ['B2C Commerce Setup', 'Work With a B2C Site', 'Data Management Using Business Manager Usage',
    'Application Development'
];
const b2CCommerceDeveloperCategoryWeights = [11, 12, 24, 53];
b2CCommerceDeveloper.setCategories(b2CCommerceDeveloperCategoryNames, b2CCommerceDeveloperCategoryWeights);

//MARKETING
let marketingEmailSpecialist = new Certification('Marketing Cloud Email Specialist', 60, 65);
const marketingEmailSpecialistCategoryNames = ['Email Marketing Best Practices', 'Email Message Design', 'Content Creation and Delivery',
    'Marketing Automation', 'Subscriber and Data Management', 'Tracking and Reporting'
];
const marketingEmailSpecialistCategoryWeights = [15, 13, 18, 19, 28, 7];
marketingEmailSpecialist.setCategories(marketingEmailSpecialistCategoryNames, marketingEmailSpecialistCategoryWeights);

let marketingCloudAdministrator = new Certification('Marketing Cloud Administrator', 60, 67);
const marketingCloudAdministratorCategoryNames = ['Digital Marketing Proficiency', 'Subscriber Data Management', 'Setup',
    'Channel Management', 'Maintenance'
];
const marketingCloudAdministratorCategoryWeights = [13, 18, 38, 16, 15];
marketingCloudAdministrator.setCategories(marketingCloudAdministratorCategoryNames, marketingCloudAdministratorCategoryWeights);

let marketingCloudDeveloper = new Certification('Marketing Cloud Developer', 60, 63);
const marketingCloudDeveloperCategoryNames = ['Data Modeling', 'Programmatic Languages', 'API',
    'Data Management', 'Security'
];
const marketingCloudDeveloperCategoryWeights = [14, 35, 22, 22, 7];
marketingCloudDeveloper.setCategories(marketingCloudDeveloperCategoryNames, marketingCloudDeveloperCategoryWeights);

let pardotSpecialist = new Certification('Pardot Specialist', 60, 72);
const pardotSpecialistCategoryNames = ['Visitors and Prospects', 'Administration', 'Pardot Forms, Form Handlers and Landing Pages',
    'Lead Management', 'Email Marketing', 'Engagement Studio'
];
const pardotSpecialistCategoryWeights = [8, 11, 20, 24, 20, 17];
pardotSpecialist.setCategories(pardotSpecialistCategoryNames, pardotSpecialistCategoryWeights);

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

let pardotConsultant = new Certification('Pardot Consultant', 60, 70);
const pardotConsultantCategoryNames = ['Discovery', 'Account Configuration', 'Lead Generation', 'Automating Business Processes',
    'Email Marketing', 'Lead Qualification', 'Personalizing the Prospect Experience', 'Reporting', 'Salesforce Engage'
];
const pardotConsultantCategoryWeights = [13, 13, 12, 15, 15, 13, 7, 7, 5];
pardotConsultant.setCategories(pardotConsultantCategoryNames, pardotConsultantCategoryWeights);

let fieldServiceLightningConsultant = new Certification('Field Service Lightning Consultant', 60, 63);
const fieldServiceLightningConsultantCategoryNames = ['Managing Resources', 'Managing Work Orders', 'Managing Scheduling and Optimization', 'Configuring Mobility',
    'Managing Inventory', 'Managing Assets', 'Configuring Maintenance Plans', 'Permissions and Sharing'
];
const fieldServiceLightningConsultantCategoryWeights = [16, 23, 28, 10, 8, 5, 5, 5];
fieldServiceLightningConsultant.setCategories(fieldServiceLightningConsultantCategoryNames, fieldServiceLightningConsultantCategoryWeights);

let einsteinAnalyticsConsultant = new Certification('Einstein Analytics and Discovery Consultant', 60, 68);
const einsteinAnalyticsConsultantCategoryNames = ['Data Layer', 'Security', 'Admin', 'Analytics Dashboard Design',
    'Analytics Dashboard Implementation', 'Einstein Discovery Story Design'
];
const einsteinAnalyticsConsultantCategoryWeights = [24, 11, 9, 19, 18, 19];
einsteinAnalyticsConsultant.setCategories(einsteinAnalyticsConsultantCategoryNames, einsteinAnalyticsConsultantCategoryWeights);

let nonprofitCloudConsultant = new Certification('Nonprofit Cloud Consultant', 60, 63);
const nonprofitCloudConsultantCategoryNames = ['NPSP Settings and Administration', 'Nonprofit Cloud Data Management', 'Nonprofit Cloud Analytics', 'Domain Expertise',
    'Nonprofit Cloud Solution Design', 'Nonprofit Implementation Strategies and Best Practices'
];
const nonprofitCloudConsultantCategoryWeights = [20, 11, 6, 18, 24, 21];
nonprofitCloudConsultant.setCategories(nonprofitCloudConsultantCategoryNames, nonprofitCloudConsultantCategoryWeights);

let educationCloudConsultant = new Certification('Education Cloud Consultant', 60, 68);
const educationCloudConsultantCategoryNames = ['Education Cloud Applications, Settings, and Configuration', 'Implementation Strategies', 'Solution Design',
'Domain Expertise', 'Integration and Data Management', 'Analytics'
];
const educationCloudConsultantCategoryWeights = [23, 18, 19, 19, 17, 5];
educationCloudConsultant.setCategories(educationCloudConsultantCategoryNames, educationCloudConsultantCategoryWeights);

//ARCHITECTURE
let sharingAndVisibilityDesigner = new Certification('Sharing and Visibility Designer', 60, 68);
const sharingAndVisibilityCategoryNames = ['Declarative Sharing', 'Performance', 'Programmatic Sharing'];
const sharingAndVisibilityCategoryWeights = [64, 8, 28];
sharingAndVisibilityDesigner.setCategories(sharingAndVisibilityCategoryNames, sharingAndVisibilityCategoryWeights);

let identityAndAccessMgmtCert = new Certification('Identity and Access Management Designer', 60, 65);
const identityCertCategoryNames = ['Identity Management Concepts', 'Accepting Third-Party Identity in Salesforce', 'Salesforce as an Identity Provider',
    'Access Management Best Practices', 'Salesforce Identity', 'Community (Partner and Customer)'
];
const identityCertCategoryWeights = [28, 22, 23, 15, 7, 5];
identityAndAccessMgmtCert.setCategories(identityCertCategoryNames, identityCertCategoryWeights);

let dataArchitectureAndManagementDesignerCert = new Certification('Data Architecture and Management Designer', 60, 67);
const dataArchitectureAndManagementDesignerCategoryNames = ['Data Modeling/Database Design', 'Master Data Management', 'Salesforce Data Management',
    'Data Governance', 'Large Data Volume Considerations', 'Data Migration'
];
const dataArchitectureAndManagementDesignerCategoryWeights = [25, 5, 25, 10, 20, 15];
dataArchitectureAndManagementDesignerCert.setCategories(dataArchitectureAndManagementDesignerCategoryNames, dataArchitectureAndManagementDesignerCategoryWeights);

let integrationArchitectureDesignerCert = new Certification('Integration Architecture Designer', 60, 67);
const integrationArchitectureDesignerCategoryNames = ['Salesforce Integration Capabilities', 'Salesforce Integration Patterns', 'Enterprise Integration Architecture Concepts', 'Salesforce Integration Testing',
    'Integrating with Salesforce Security', 'Tools', 'Monitoring'
];
const integrationArchitectureDesignerCategoryWeights = [28, 17, 15, 10, 15, 10, 5];
integrationArchitectureDesignerCert.setCategories(integrationArchitectureDesignerCategoryNames, integrationArchitectureDesignerCategoryWeights);

let developmentLifecycleandDeploymentDesigner = new Certification('Development Lifecycle and Deployment Designer', 60, 68);
const developmentLifecycleandDeploymentDesignerCategoryNames = ['Environments', 'Application Lifecycle Management', 'Testing', 'Governance',
    'Risk Identification and Mitigation', 'Change Sets', 'Metadata API', 'Continuous Integration Techniques', 'Methodology Tools', 'Understanding Packages'
];
const developmentLifecycleandDeploymentDesignerCategoryWeights = [15, 17, 10, 17, 12, 5, 10, 8, 3, 3];
developmentLifecycleandDeploymentDesigner.setCategories(developmentLifecycleandDeploymentDesignerCategoryNames, developmentLifecycleandDeploymentDesignerCategoryWeights);

let herokuArchitectureDesigner = new Certification('Heroku Architecture Designer', 60, 72);
const herokuArchitectureDesignerCategoryNames = ['Heroku Platform', 'Data', 'Security', 'Heroku Enterprise',
    'Architect Applications', 'Integrations'
];
const herokuArchitectureDesignerCategoryWeights = [10, 17, 15, 28, 15, 15];
herokuArchitectureDesigner.setCategories(herokuArchitectureDesignerCategoryNames, herokuArchitectureDesignerCategoryWeights);

const certificationMap = new Map();
certificationMap.set(adminCert1.getName(), adminCert1);
certificationMap.set(adminCert2.getName(), adminCert2);
certificationMap.set(platformAppBuilderCert.getName(), platformAppBuilderCert);
certificationMap.set(cPQSpecialist.getName(), cPQSpecialist);
certificationMap.set(developerCert1.getName(), developerCert1);
certificationMap.set(javaScriptDeveloperI.getName(), javaScriptDeveloperI);
certificationMap.set(developerCert2.getName(), developerCert2);
certificationMap.set(marketingEmailSpecialist.getName(), marketingEmailSpecialist);
certificationMap.set(marketingCloudAdministrator.getName(), marketingCloudAdministrator);
certificationMap.set(marketingCloudDeveloper.getName(), marketingCloudDeveloper);
certificationMap.set(communityCloudConsCert.getName(), communityCloudConsCert);
certificationMap.set(marketingCloudConsCert.getName(), marketingCloudConsCert);
certificationMap.set(salesCloudConsCert.getName(), salesCloudConsCert);
certificationMap.set(serviceCloudConsCert.getName(), serviceCloudConsCert);
certificationMap.set(identityAndAccessMgmtCert.getName(), identityAndAccessMgmtCert);
certificationMap.set(sharingAndVisibilityDesigner.getName(), sharingAndVisibilityDesigner);
certificationMap.set(dataArchitectureAndManagementDesignerCert.getName(), dataArchitectureAndManagementDesignerCert);
certificationMap.set(integrationArchitectureDesignerCert.getName(), integrationArchitectureDesignerCert);
certificationMap.set(developmentLifecycleandDeploymentDesigner.getName(), developmentLifecycleandDeploymentDesigner);
certificationMap.set(herokuArchitectureDesigner.getName(), herokuArchitectureDesigner);
certificationMap.set(b2CCommerceDeveloper.getName(), b2CCommerceDeveloper);
certificationMap.set(pardotConsultant.getName(), pardotConsultant);
certificationMap.set(pardotSpecialist.getName(), pardotSpecialist);
certificationMap.set(fieldServiceLightningConsultant.getName(), fieldServiceLightningConsultant);
certificationMap.set(einsteinAnalyticsConsultant.getName(), einsteinAnalyticsConsultant);
certificationMap.set(nonprofitCloudConsultant.getName(), nonprofitCloudConsultant);
certificationMap.set(educationCloudConsultant.getName(), educationCloudConsultant);

// Here we map certifications to one or more Roles that can be filtered on
const RoleMap = new Map();
RoleMap.set('Salesforce Administrator', [adminCert1, adminCert2, platformAppBuilderCert, cPQSpecialist, marketingCloudAdministrator]);
RoleMap.set('Salesforce Developer', [platformAppBuilderCert, developerCert1, developerCert2, javaScriptDeveloperI, marketingCloudDeveloper, b2CCommerceDeveloper]);
RoleMap.set('Salesforce Architect', [platformAppBuilderCert, developerCert1, sharingAndVisibilityDesigner, identityAndAccessMgmtCert, dataArchitectureAndManagementDesignerCert, 
    integrationArchitectureDesignerCert,developmentLifecycleandDeploymentDesigner, herokuArchitectureDesigner]);
RoleMap.set('Salesforce Marketer', [marketingCloudAdministrator, marketingEmailSpecialist, marketingCloudConsCert, marketingCloudDeveloper, pardotConsultant, pardotSpecialist]);
RoleMap.set('Salesforce Consultant', [salesCloudConsCert, serviceCloudConsCert, communityCloudConsCert, marketingCloudConsCert, pardotConsultant, fieldServiceLightningConsultant,
    einsteinAnalyticsConsultant, nonprofitCloudConsultant, educationCloudConsultant]);

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
        // Hide the certification drop down if it's shown, when you click the Role drop down
        let certDropDownMenu = document.getElementById('dropdown-menu');
        let certBtnIcon = document.getElementById('btn-icon');
        if (!certDropDownMenu.classList.contains('hide')) {
            certDropDownMenu.classList.add('hide');
            certBtnIcon.classList.remove('fa-angle-up');
            certBtnIcon.classList.add('fa-angle-down');
        }
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
    selectedCertification = certification;
    const certificationCategories = certification.getCategories();
    hideMoreStats();
    let toolContentContainer = document.getElementById('tool__content-container');
    toolContentContainer.innerHTML = '';

    for (let i = 0; i < certificationCategories.length; i++) {
        const category = certificationCategories[i];

        let htmlContent = '<div class="tool__content-box"><label for="category-' + i + '" id="categoryLabel-' + i + '" class="tool__content-category">' + category.name + '</label><input type="number" min=0 max=100 name="category-' + i + '" class="tool__content-categoryvalue" id="category-' + i + '" required></div>';
        toolContentContainer.insertAdjacentHTML('beforeend', htmlContent);
    }
}

function showMoreStats() {
    if (document.getElementById('categoryLabel-1').innerHTML.endsWith('%)')) {
        resetCategoryLabels();
    }
    const categories = selectedCertification.getCategories();
    const inputs = document.getElementsByTagName('input');
    let moreStatsTag = document.getElementById('tool__content-moreStats-message');
    let bullet = '•';
    document.getElementById('tool__content-moreStats').classList.remove('hide');
    moreStatsTag.innerHTML = '';
    let explenation = '<i class="far fa-info"></i> </br><i>Each <font color="#530040">•</font> represents the negative impact each category had on your result. The dots translates to how many percentages away you were from the maximum it could give. Keep on studying on the categories that have the most dots (negative impact), and you\'ll do even better in no time!</i>';
    for (let i = 0; i < inputs.length; ++i) {
        document.getElementById('categoryLabel-' + i).innerHTML += ' (' + Math.round(inputs[i].value * categories[i].weight) + '% / ' + Math.round(categories[i].weight * 100) + '%)';
        moreStatsTag.innerHTML += '</br>' + categories[i].name + '</br><font color="#530040">' + bullet.repeat(Math.round(categories[i].weight * 100) - Math.round(inputs[i].value * categories[i].weight)) + '</font>';
    }
    moreStatsTag.innerHTML += '</br></br></br>' + explenation;
    document.getElementById('moreStatsButton').classList.add('hide');
    
    return false;
}

function hideMoreStats() {
    document.getElementById('tool__content-moreStats').classList.add('hide');
    document.getElementById('moreStatsButton').classList.remove('hide');
}

function resetCategoryLabels() {
    const inputs = document.getElementsByTagName('input');
    const categories = selectedCertification.getCategories();
    for (let i = 0; i < inputs.length; ++i) {
        document.getElementById('categoryLabel-' + i).innerHTML = categories[i].name;
    }
}

function handleCalculate() {
    showTotal();
    if (!document.getElementById('tool__content-moreStats').classList.contains('hide')) {
        resetCategoryLabels();
        showMoreStats();
    }
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
