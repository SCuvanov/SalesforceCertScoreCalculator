//ADMIN
let adminCert1 = new Certification('Administrator', 60, 65);
const adminCert1CategoryNames = ['Configuration and Setup', 'Object Manager and Lightning App Builder', 'Sales and Marketing Applications',
    'Service and Support Applications', 'Productivity and Collaboration', 'Data and Analytics Management', 'Workflow/Process Automation'
];
const adminCert1CategoryWeights = [20, 20, 12, 11, 7, 14, 16];
adminCert1.setCategories(adminCert1CategoryNames, adminCert1CategoryWeights);

let adminCert2 = new Certification('Advanced Administrator', 60, 65);
const adminCert2CategoryNames = ['Security and Access', 'Objects and Applications', 'Auditing and Monitoring', 'Cloud Applications', 'Data and Analytics Management', 'Environment Management and Deployment', 'Process Automation'];
const adminCert2CategoryWeights = [20, 19, 10, 11, 13, 7, 20];
adminCert2.setCategories(adminCert2CategoryNames, adminCert2CategoryWeights);

let cPQSpecialist = new Certification('CPQ Specialist', 60, 65);
const cPQSpecialistCategoryNames = ['CPQ Platform', 'Bundle Configurations', 'Pricing',
    'Quote Templates', 'Product Selection', 'Orders, Contracts, Amendments, and Renewals', 'Products', 'Approvals'
];
const cPQSpecialistCategoryWeights = [23, 17, 16, 7, 7, 15, 11, 4];
cPQSpecialist.setCategories(cPQSpecialistCategoryNames, cPQSpecialistCategoryWeights);

//APPBUILDER
let platformAppBuilderCert = new Certification('Platform App Builder', 60, 63);
const platformAppBuilderCertCategoryNames = ['Salesforce Fundamentals', 'Data Modeling and Management',
    'Business Logic and Process Automation', 'User Interface', 'App Development'
];
const platformAppBuilderCertCategoryWeights = [23, 22, 28, 17, 10];
platformAppBuilderCert.setCategories(platformAppBuilderCertCategoryNames, platformAppBuilderCertCategoryWeights);

//DEVELOPER
let developerCert1 = new Certification('Platform Developer I', 60, 68);
const developerCert1CategoryNames = ['Developer Fundamentals', 'Process Automation and Logic', 'User Interface', 'Testing, Debugging, and Deployment'];
const developerCert1CategoryWeights = [23, 30, 25, 22];
developerCert1.setCategories(developerCert1CategoryNames, developerCert1CategoryWeights);

let developerCert2 = new Certification('Platform Developer II', 60, 70);
const developerCert2CategoryNames = ['Advanced Developer Fundamentals', 'Process Automation, Logic, and Integration', 'User Interface', 'Testing, Debugging, and Deployment', 'Performance'];
const developerCert2CategoryWeights = [18, 24, 20, 20, 18];
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

let industriesCPQDeveloper = new Certification('Industries CPQ Developer', 60, 63);
const industriesCPQDeveloperCategoryNames = ['Products', 'Promotions and Discounts', 'Pricing', 'Rules', 'APIs', 'Ordering and Quoting',
    'Troubleshooting'
];
const industriesCPQDeveloperCategoryWeights = [20, 7, 17, 12, 12, 12, 20];
industriesCPQDeveloper.setCategories(industriesCPQDeveloperCategoryNames, industriesCPQDeveloperCategoryWeights);

let omniStudioDeveloper = new Certification('OmniStudio Developer', 60, 67);
const omniStudioDeveloperCategoryNames = ['Flex Cards', 'OmniScripts', 'Integration Procedures', 'Data Raptors', 'Calculation Procedures & Matrices',
    'Integrated Troubleshooting and Deployment'
];
const omniStudioDeveloperCategoryWeights = [15, 20, 17, 20, 8, 20];
omniStudioDeveloper.setCategories(omniStudioDeveloperCategoryNames, omniStudioDeveloperCategoryWeights);

//MARKETING
let marketingEmailSpecialist = new Certification('Marketing Cloud Email Specialist', 60, 67);
const marketingEmailSpecialistCategoryNames = ['Email Marketing Best Practices', 'Content Creation and Delivery', 'Marketing Automation', 'Subscriber and Data Management', 'Insights and Analytics'];
const marketingEmailSpecialistCategoryWeights = [10, 24, 26, 26, 14];
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
let businessAnalyst = new Certification('Business Analyst', 60, 62);
const businessAnalystCategoryNames = ['Customer Discovery', 'Collaboration with Stakeholders', 'Business Process Mapping', 'Requirements', 'User Stories', 'User Acceptance'];
const businessAnalystCategoryWeights = [17, 24, 16, 17, 18, 8];
businessAnalyst.setCategories(businessAnalystCategoryNames, businessAnalystCategoryWeights);

let communityCloudConsCert = new Certification('Experience Cloud Consultant', 60, 65);
const communityCloudConsCertCategoryNames = ['Experience Cloud Basics', 'Sharing, Visibility, and Licensing', 'Branding, Personalization, and Content', 'Templates and Themes', 'User Creation and Authentication', 'Adoption and Analytics', 'Administration, Setup and Configuration', 'Customization Considerations, and Limitations'];
const communityCloudConsCertCategoryWeights = [8, 17, 15, 10, 13, 5, 25, 7];
communityCloudConsCert.setCategories(communityCloudConsCertCategoryNames, communityCloudConsCertCategoryWeights);

let marketingCloudConsCert = new Certification('Marketing Cloud Consultant', 60, 67);
const marketingCloudConsCertCategoryNames = ['Discovery and Architecture', 'Integration', 'Account Configuration', 'Automation', 'Data Modeling and Management', 'Messaging'];
const marketingCloudConsCertCategoryWeights = [16, 20, 12, 20, 21, 11];
marketingCloudConsCert.setCategories(marketingCloudConsCertCategoryNames, marketingCloudConsCertCategoryWeights);

let salesCloudConsCert = new Certification('Sales Cloud Consultant', 60, 68);
const salesCloudConsCertCategoryNames = ['Sales Practices', 'Implementation Strategies', 'Application of Product Knowledge', 'Lead Management',
    'Account and Contact Management', 'Opportunity Management', 'Sales Productivity and Integration', 'Consulting Practices', 'Sales Metrics, Reports & Dashboards', 'Data Management'
];
const salesCloudConsCertCategoryWeights = [11, 13, 18, 7, 11, 10, 8, 7, 7, 8];
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

let fieldServiceLightningConsultant = new Certification('Field Service Consultant', 60, 63);
const fieldServiceLightningConsultantCategoryNames = ['Managing Resources', 'Managing Work Orders', 'Managing Scheduling and Optimization', 'Configuring Mobility',
    'Managing Inventory', 'Managing Assets', 'Configuring Maintenance Plans', 'Permissions and Sharing'
];
const fieldServiceLightningConsultantCategoryWeights = [16, 23, 28, 10, 8, 5, 5, 5];
fieldServiceLightningConsultant.setCategories(fieldServiceLightningConsultantCategoryNames, fieldServiceLightningConsultantCategoryWeights);

let einsteinAnalyticsConsultant = new Certification('Tableau CRM and Einstein Discovery Consultant', 60, 68);
const einsteinAnalyticsConsultantCategoryNames = ['Data Layer', 'Security', 'Administration', 'Tableau CRM Dashboard Design',
    'Tableau CRM Dashboard Implementation', 'Einstein Discovery Story Design'
];
const einsteinAnalyticsConsultantCategoryWeights = [24, 11, 9, 19, 18, 19];
einsteinAnalyticsConsultant.setCategories(einsteinAnalyticsConsultantCategoryNames, einsteinAnalyticsConsultantCategoryWeights);

let nonprofitCloudConsultant = new Certification('Nonprofit Cloud Consultant', 60, 63);
const nonprofitCloudConsultantCategoryNames = ['Domain Expertise', 'Nonprofit Cloud Product Configuration', 'Implementation Strategies and Best Practices', 'Solution Design', 
    'Integration and Data Management', 'Analytics'
];
const nonprofitCloudConsultantCategoryWeights = [20, 22, 18, 20, 15, 5];
nonprofitCloudConsultant.setCategories(nonprofitCloudConsultantCategoryNames, nonprofitCloudConsultantCategoryWeights);

let educationCloudConsultant = new Certification('Education Cloud Consultant', 60, 68);
const educationCloudConsultantCategoryNames = ['Education Cloud Applications, Settings, and Configuration', 'Implementation Strategies', 'Solution Design',
'Domain Expertise', 'Integration and Data Management', 'Analytics'
];
const educationCloudConsultantCategoryWeights = [23, 18, 19, 19, 17, 5];
educationCloudConsultant.setCategories(educationCloudConsultantCategoryNames, educationCloudConsultantCategoryWeights);

let omniStudioConsultant = new Certification('OmniStudio Consultant', 60, 63);
const omniStudioConsultantCategoryNames = ['FlexCards', 'OmniScripts', 'Data Tools', 'Best Fit Solutioning'];
const omniStudioConsultantCategoryWeights = [23, 27, 23, 27];
omniStudioConsultant.setCategories(omniStudioConsultantCategoryNames, omniStudioConsultantCategoryWeights);

//ARCHITECTURE
let sharingAndVisibilityDesigner = new Certification('Sharing and Visibility Architect', 60, 67);
const sharingAndVisibilityCategoryNames = ['Declarative Sharing', 'Performance and Scalability', 'Programmatic Sharing'];
const sharingAndVisibilityCategoryWeights = [76, 7, 17];
sharingAndVisibilityDesigner.setCategories(sharingAndVisibilityCategoryNames, sharingAndVisibilityCategoryWeights);

let identityAndAccessMgmtCert = new Certification('Identity and Access Management Architect', 60, 67);
const identityCertCategoryNames = ['Identity Management Concepts', 'Accepting Third-Party Identity in Salesforce', 'Salesforce as an Identity Provider',
    'Access Management Best Practices', 'Salesforce Identity', 'Community (Partner and Customer)'
];
const identityCertCategoryWeights = [17, 21, 17, 15, 12, 18];
identityAndAccessMgmtCert.setCategories(identityCertCategoryNames, identityCertCategoryWeights);

let dataArchitectureAndManagementDesignerCert = new Certification('Data Architect', 60, 58);
const dataArchitectureAndManagementDesignerCategoryNames = ['Data Modeling/Database Design', 'Master Data Management', 'Salesforce Data Management',
    'Data Governance', 'Large Data Volume Considerations', 'Data Migration'
];
const dataArchitectureAndManagementDesignerCategoryWeights = [25, 5, 25, 10, 20, 15];
dataArchitectureAndManagementDesignerCert.setCategories(dataArchitectureAndManagementDesignerCategoryNames, dataArchitectureAndManagementDesignerCategoryWeights);

let integrationArchitectureDesignerCert = new Certification('Integration Architect', 60, 67);
const integrationArchitectureDesignerCategoryNames = ['Evaluate the Current System Landscape', 'Evaluate Business Needs', 'Translate Needs to Integration Requirements', 'Design Integration Solutions',
    'Build Solution', 'Maintain Integration'
];
const integrationArchitectureDesignerCategoryWeights = [8, 11, 22, 28, 23, 8];
integrationArchitectureDesignerCert.setCategories(integrationArchitectureDesignerCategoryNames, integrationArchitectureDesignerCategoryWeights);

let developmentLifecycleandDeploymentDesigner = new Certification('Development Lifecycle and Deployment Architect', 60, 65);
const developmentLifecycleandDeploymentDesignerCategoryNames = ['Application Lifecycle Management', 'Planning', 'System Design', 'Building', 'Deploying', 'Testing',
'Releasing', 'Operating'];
const developmentLifecycleandDeploymentDesignerCategoryWeights = [8, 13, 15, 14, 14, 13, 13, 10];
developmentLifecycleandDeploymentDesigner.setCategories(developmentLifecycleandDeploymentDesignerCategoryNames, developmentLifecycleandDeploymentDesignerCategoryWeights);

let herokuArchitectureDesigner = new Certification('Heroku Architecture Designer', 60, 72);
const herokuArchitectureDesignerCategoryNames = ['Heroku Platform', 'Data', 'Security', 'Heroku Enterprise',
    'Architect Applications', 'Integrations'
];
const herokuArchitectureDesignerCategoryWeights = [10, 17, 15, 28, 15, 15];
herokuArchitectureDesigner.setCategories(herokuArchitectureDesignerCategoryNames, herokuArchitectureDesignerCategoryWeights);

let b2CSolutionArchitect = new Certification('B2C Solution Architect', 60, 63);
const b2CSolutionArchitectCategoryNames = ['Discovery and Customer Success', 'Functional Capabilities and Business Value', 'Architecture Design', 'Data Models and Management',
    'Integration'
];
const b2CSolutionArchitectCategoryWeights = [18, 19, 23, 21, 19];
b2CSolutionArchitect.setCategories(b2CSolutionArchitectCategoryNames, b2CSolutionArchitectCategoryWeights);

let b2BSolutionArchitect = new Certification('B2B Solution Architect', 60, 58);
const b2BSolutionArchitectCategoryNames = ['Discovery and Customer Success', 'Data Governance and Integration', 'Design', 'Delivery', 'Operationalize the Solution'
];
const b2BSolutionArchitectCategoryWeights = [25, 26, 29, 12, 8];
b2BSolutionArchitect.setCategories(b2BSolutionArchitectCategoryNames, b2BSolutionArchitectCategoryWeights);

let b2CCommerceArchitect = new Certification('B2C Commerce Architect', 60, 65);
const b2CCommerceArchitectCategoryNames = ['Design/Discovery', 'Build', 'Monitoring/Troubleshooting', 'Integrations and Customizations', 'Launch'];
const b2CCommerceArchitectCategoryWeights = [29, 19, 14, 22, 16];
b2CCommerceArchitect.setCategories(b2CCommerceArchitectCategoryNames, b2CCommerceArchitectCategoryWeights);

// Salesforce Designer Certs
let userExperienceDesigner = new Certification('User Experience Designer', 60, 65);
const userExperienceDesignerCategoryNames = ['Discovery', 'UX Fundamentals', 'Human-Centered Design', 'Declarative Design', 'Testing', 'Salesforce Lightning Design System (SLDS)'];
const userExperienceDesignerCategoryWeights = [13, 16, 12, 27, 11, 21];
userExperienceDesigner.setCategories(userExperienceDesignerCategoryNames, userExperienceDesignerCategoryWeights);

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
certificationMap.set(b2CSolutionArchitect.getName(), b2CSolutionArchitect);
certificationMap.set(b2BSolutionArchitect.getName(), b2BSolutionArchitect);
certificationMap.set(b2CCommerceArchitect.getName(), b2CCommerceArchitect);
certificationMap.set(pardotConsultant.getName(), pardotConsultant);
certificationMap.set(pardotSpecialist.getName(), pardotSpecialist);
certificationMap.set(fieldServiceLightningConsultant.getName(), fieldServiceLightningConsultant);
certificationMap.set(einsteinAnalyticsConsultant.getName(), einsteinAnalyticsConsultant);
certificationMap.set(nonprofitCloudConsultant.getName(), nonprofitCloudConsultant);
certificationMap.set(educationCloudConsultant.getName(), educationCloudConsultant);
certificationMap.set(industriesCPQDeveloper.getName(), industriesCPQDeveloper);
certificationMap.set(omniStudioDeveloper.getName(), omniStudioDeveloper);
certificationMap.set(omniStudioConsultant.getName(), omniStudioConsultant);
certificationMap.set(userExperienceDesigner.getName(), userExperienceDesigner);
certificationMap.set(businessAnalyst.getName(), businessAnalyst);

// Here we map certifications to one or more Roles that can be filtered on
const RoleMap = new Map();
RoleMap.set('Salesforce Administrator', [adminCert1, adminCert2, businessAnalyst, platformAppBuilderCert, cPQSpecialist, marketingCloudAdministrator]);
RoleMap.set('Salesforce Developer', [platformAppBuilderCert, developerCert1, developerCert2, javaScriptDeveloperI, marketingCloudDeveloper, b2CCommerceDeveloper, industriesCPQDeveloper, omniStudioDeveloper]);
RoleMap.set('Salesforce Architect', [b2BSolutionArchitect, b2CSolutionArchitect, b2CCommerceArchitect, platformAppBuilderCert, developerCert1, sharingAndVisibilityDesigner, identityAndAccessMgmtCert, dataArchitectureAndManagementDesignerCert, 
    integrationArchitectureDesignerCert,developmentLifecycleandDeploymentDesigner, herokuArchitectureDesigner]);
RoleMap.set('Salesforce Marketer', [marketingCloudAdministrator, marketingEmailSpecialist, marketingCloudConsCert, marketingCloudDeveloper, pardotConsultant, pardotSpecialist]);
RoleMap.set('Salesforce Consultant', [businessAnalyst, salesCloudConsCert, serviceCloudConsCert, communityCloudConsCert, marketingCloudConsCert, pardotConsultant, fieldServiceLightningConsultant,
    einsteinAnalyticsConsultant, nonprofitCloudConsultant, educationCloudConsultant, omniStudioConsultant]);
RoleMap.set('Salesforce Designer', [userExperienceDesigner]);

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
            message.innerHTML = 'Oof! You definitely got this next time.';
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
