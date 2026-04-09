const ADMIN = 'Salesforce Administrator', DEVELOPER = 'Salesforce Developer', ARCHITECT = 'Salesforce Architect', MARKETER = 'Salesforce Marketer', CONSULTANT = 'Salesforce Consultant', DESIGNER = 'Salesforce Designer', ASSOCIATE = 'Salesforce Associate';
let certificationMap = new Map();

certificationMap.set('Salesforce Associate', new Certification('Salesforce Associate', 40, 62, [ASSOCIATE], new Map([
    ['Salesforce Ecosystem', 32],
    ['Navigation', 28],
    ['Data Model', 25],
    ['Reports & Dashboards', 15]
])));

//ADMIN
certificationMap.set('Administrator', new Certification('Administrator', 60, 65, [ADMIN], new Map([
    ['Configuration and Setup', 20],
    ['Object Manager and Lightning App Builder', 20],
    ['Sales and Marketing Applications', 12],
    ['Service and Support Applications', 11],
    ['Productivity and Collaboration', 7],
    ['Data and Analytics Management', 14],
    ['Workflow/Process Automation', 16]
])));

certificationMap.set('Advanced Administrator', new Certification('Advanced Administrator', 60, 65, [ADMIN], new Map([
    ['Security and Access', 20],
    ['Objects and Applications', 19],
    ['Auditing and Monitoring', 10],
    ['Cloud Applications', 11],
    ['Data and Analytics Management', 13],
    ['Environment Management and Deployment', 7],
    ['Process Automation', 20]
])));

certificationMap.set('CPQ Specialist', new Certification('CPQ Specialist', 60, 65, [ADMIN], new Map([
    ['CPQ Platform', 23],
    ['Bundle Configurations', 17],
    ['Pricing', 16],
    ['Quote Templates', 7],
    ['Product Selection', 7],
    ['Orders, Contracts, Amendments, and Renewals', 15],
    ['Products', 11],
    ['Approvals', 4]
])));

//APPBUILDER
certificationMap.set('Platform App Builder', new Certification('Platform App Builder', 60, 63, [ADMIN, DEVELOPER, ARCHITECT], new Map([
    ['Salesforce Fundamentals', 23],
    ['Data Modeling and Management', 22],
    ['Business Logic and Process Automation', 28],
    ['User Interface', 17],
    ['App Development', 10]
])));

//DEVELOPER
certificationMap.set('Platform Developer I', new Certification('Platform Developer I', 60, 68, [DEVELOPER, ARCHITECT], new Map([
    ['Developer Fundamentals', 23],
    ['Process Automation and Logic', 30],
    ['User Interface', 25],
    ['Testing, Debugging, and Deployment', 22]
])));

certificationMap.set('Platform Developer II', new Certification('Platform Developer II', 60, 70, [DEVELOPER], new Map([
    ['Advanced Developer Fundamentals', 15],
    ['Process Automation, Logic, and Integration', 27],
    ['User Interface', 20],
    ['Testing, Debugging, and Deployment', 20],
    ['Performance', 18]
])));

certificationMap.set('JavaScript Developer I', new Certification('JavaScript Developer I', 60, 65, [DEVELOPER], new Map([
    ['Variables, Types, and Collections', 23],
    ['Objects, Functions, and Classes', 25],
    ['Browser and Events', 17],
    ['Debugging and Error Handling', 7],
    ['Asynchronous Programming', 13],
    ['Server Side JavaScript', 8],
    ['Testing', 7]
])));

certificationMap.set('B2C Commerce Developer', new Certification('B2C Commerce Developer', 60, 65, [DEVELOPER], new Map([
    ['B2C Commerce Setup', 11],
    ['Work With a B2C Site', 12],
    ['Data Management Using Business Manager Usage', 24],
    ['Application Development', 53]
])));

certificationMap.set('Industries CPQ Developer', new Certification('Industries CPQ Developer', 60, 63, [DEVELOPER], new Map([
    ['Products', 20],
    ['Promotions and Discounts', 7],
    ['Pricing', 17],
    ['Rules', 12],
    ['APIs', 12],
    ['Ordering and Quoting', 12],
    ['Troubleshooting', 20]
])));

certificationMap.set('OmniStudio Developer', new Certification('OmniStudio Developer', 60, 67, [DEVELOPER], new Map([
    ['FlexCards', 15],
    ['OmniScripts', 20],
    ['Integration Procedures', 17],
    ['Data Raptors', 20],
    ['Expression Sets & Decision Matrices', 8],
    ['Integrated Troubleshooting and Deployment', 20]
])));

//MARKETING
certificationMap.set('Marketing Cloud Email Specialist', new Certification('Marketing Cloud Email Specialist', 60, 67, [MARKETER], new Map([
    ['Email Marketing Best Practices', 10],
    ['Content Creation and Delivery', 24],
    ['Marketing Automation', 26],
    ['Subscriber and Data Management', 26],
    ['Insights and Analytics', 14]
])));

certificationMap.set('Marketing Cloud Administrator', new Certification('Marketing Cloud Administrator', 60, 67, [ADMIN, MARKETER], new Map([
    ['Digital Marketing Proficiency', 13],
    ['Subscriber Data Management', 18],
    ['Setup', 38],
    ['Channel Management', 16],
    ['Maintenance', 15]
])));

certificationMap.set('Marketing Cloud Developer', new Certification('Marketing Cloud Developer', 60, 63, [DEVELOPER, MARKETER], new Map([
    ['Data Modeling', 14],
    ['Programmatic Languages', 35],
    ['API', 22],
    ['Data Management', 22],
    ['Security', 7]
])));

certificationMap.set('Pardot Specialist', new Certification('Pardot Specialist', 60, 72, [MARKETER], new Map([
    ['Visitors and Prospects', 8],
    ['Administration', 11],
    ['Pardot Forms, Form Handlers and Landing Pages', 20],
    ['Lead Management', 24],
    ['Email Marketing', 20],
    ['Engagement Studio', 17]
])));

// //CONSULTANT
certificationMap.set('Business Analyst', new Certification('Business Analyst', 60, 72, [ADMIN, CONSULTANT], new Map([
    ['Customer Discovery', 17],
    ['Collaboration with Stakeholders', 24],
    ['Business Process Mapping', 16],
    ['Requirements', 17],
    ['User Stories', 18],
    ['User Acceptance', 8]
])));

certificationMap.set('Experience Cloud Consultant', new Certification('Experience Cloud Consultant', 60, 65, [CONSULTANT], new Map([
    ['Experience Cloud Basics', 8],
    ['Sharing, Visibility, and Licensing', 17],
    ['Branding, Personalization, and Content', 15],
    ['Templates and Themes', 10],
    ['User Creation and Authentication', 13],
    ['Adoption and Analytics', 5],
    ['Administration, Setup and Configuration', 25],
    ['Customization Considerations, and Limitations', 7]
])));

certificationMap.set('Marketing Cloud Consultant', new Certification('Marketing Cloud Consultant', 60, 67, [MARKETER, CONSULTANT], new Map([
    ['Discovery and Architecture', 16],
    ['Integration', 20],
    ['Account Configuration', 12],
    ['Automation', 20],
    ['Data Modeling and Management', 21],
    ['Messaging', 11]
])));

certificationMap.set('Sales Cloud Consultant', new Certification('Sales Cloud Consultant', 60, 68, [CONSULTANT], new Map([
    ['Sales Practices', 11],
    ['Implementation Strategies', 13],
    ['Application of Product Knowledge', 18],
    ['Lead Management', 7],
    ['Account and Contact Management', 11],
    ['Opportunity Management', 10],
    ['Sales Productivity and Integration', 8],
    ['Consulting Practices', 7],
    ['Sales Metrics, Reports & Dashboards', 7],
    ['Data Management', 8]
])));

certificationMap.set('Service Cloud Consultant', new Certification('Service Cloud Consultant', 60, 67, [CONSULTANT], new Map([
    ['Industry Knowledge', 10],
    ['Implementation Strategies', 15],
    ['Service Cloud Solution Design', 16],
    ['Knowledge Management', 9],
    ['Interaction Channels', 10],
    ['Case Management', 15],
    ['Contact Center Analytics', 5],
    ['Integration and Data Management', 5],
    ['Service Console', 15]
])));

certificationMap.set('Pardot Consultant', new Certification('Pardot Consultant', 60, 68, [MARKETER, CONSULTANT], new Map([
    ['Evaluation', 17],
    ['Account Configuration', 20],
    ['Automating Business Processes', 17],
    ['Email Marketing', 10],
    ['Lead Management', 14],
    ['Personalizing the Prospect Experience', 8],
    ['Reporting, Metrics & Analytics', 11],
    ['Salesforce Engage', 3]
])));

certificationMap.set('Field Service Consultant', new Certification('Field Service Consultant', 60, 63, [CONSULTANT], new Map([
    ['Managing Resources', 16],
    ['Managing Work Orders', 23],
    ['Managing Scheduling and Optimization', 28],
    ['Configuring Mobility', 10],
    ['Managing Inventory', 8],
    ['Managing Assets', 5],
    ['Configuring Maintenance Plans', 5],
    ['Permissions and Sharing', 5]
])));

certificationMap.set('Tableau CRM and Einstein Discovery Consultant', new Certification('Tableau CRM and Einstein Discovery Consultant', 60, 68, [CONSULTANT], new Map([
    ['Data Layer', 24],
    ['Security', 11],
    ['Administration', 9],
    ['Tableau CRM Dashboard Design', 19],
    ['Tableau CRM Dashboard Implementation', 18],
    ['Einstein Discovery Story Design', 19]
])));

certificationMap.set('Nonprofit Cloud Consultant', new Certification('Nonprofit Cloud Consultant', 60, 67, [CONSULTANT], new Map([
    ['Domain Expertise', 20],
    ['Nonprofit Cloud Product Configuration', 22],
    ['Implementation Strategies and Best Practices', 18],
    ['Solution Design', 20],
    ['Integration and Data Management', 15],
    ['Analytics', 5]
])));

certificationMap.set('Education Cloud Consultant', new Certification('Education Cloud Consultant', 60, 67, [CONSULTANT], new Map([
    ['Domain Expertise', 18],
    ['Education Cloud Configuration', 22],
    ['Implementation Strategies and Best Practices', 18],
    ['Solution Design', 19],
    ['Integration and Data Management', 16],
    ['Analytics', 7]
])));

certificationMap.set('OmniStudio Consultant', new Certification('OmniStudio Consultant', 60, 63, [CONSULTANT], new Map([
    ['FlexCards', 23],
    ['OmniScripts', 27],
    ['Data Tools', 23],
    ['Best Fit Solutioning', 27]
])));

// //ARCHITECTURE
certificationMap.set('Sharing and Visibility Architect', new Certification('Sharing and Visibility Architect', 60, 67, [ARCHITECT], new Map([
    ['Declarative Sharing', 76],
    ['Performance and Scalability', 7],
    ['Programmatic Sharing', 17]
])));

certificationMap.set('Identity and Access Management Architect', new Certification('Identity and Access Management Architect', 60, 67, [ARCHITECT], new Map([
    ['Identity Management Concepts', 17],
    ['Accepting Third-Party Identity in Salesforce', 21],
    ['Salesforce as an Identity Provider', 17],
    ['Access Management Best Practices', 15],
    ['Salesforce Identity', 12],
    ['Community (Partner and Customer)', 18]
])));

certificationMap.set('Data Architect', new Certification('Data Architect', 60, 58, [ARCHITECT], new Map([
    ['Data Modeling/Database Design', 25],
    ['Master Data Management', 5],
    ['Salesforce Data Management', 25],
    ['Data Governance', 10],
    ['Large Data Volume Considerations', 20],
    ['Data Migration', 15]
])));

certificationMap.set('Integration Architect', new Certification('Integration Architect', 60, 67, [ARCHITECT], new Map([
    ['Evaluate the Current System Landscape', 8],
    ['Evaluate Business Needs', 11],
    ['Translate Needs to Integration Requirements', 22],
    ['Design Integration Solutions', 28],
    ['Build Solution', 23],
    ['Maintain Integration', 8]
])));

certificationMap.set('Development Lifecycle and Deployment Architect', new Certification('Development Lifecycle and Deployment Architect', 60, 65, [ARCHITECT], new Map([
    ['Application Lifecycle Management', 8],
    ['Planning', 13],
    ['System Design', 15],
    ['Building', 14],
    ['Deploying', 14],
    ['Testing', 13],
    ['Releasing', 13],
    ['Operating', 10]
])));

certificationMap.set('Heroku Architect', new Certification('Heroku Architect', 60, 72, [ARCHITECT], new Map([
    ['Heroku Platform', 10],
    ['Data', 17],
    ['Security', 15],
    ['Heroku Enterprise', 28],
    ['Architect Applications', 15],
    ['Integrations', 15]
])));

certificationMap.set('B2C Solution Architect', new Certification('B2C Solution Architect', 60, 63, [ARCHITECT], new Map([
    ['Discovery and Customer Success', 18],
    ['Functional Capabilities and Business Value', 19],
    ['Architecture Design', 23],
    ['Data Models and Management', 21],
    ['Integration', 19]
])));

certificationMap.set('B2B Solution Architect', new Certification('B2B Solution Architect', 60, 58, [ARCHITECT], new Map([
    ['Discovery and Customer Success', 25],
    ['Data Governance and Integration', 26],
    ['Design', 29],
    ['Delivery', 12],
    ['Operationalize the Solution', 8]
])));

certificationMap.set('B2C Commerce Architect', new Certification('B2C Commerce Architect', 60, 65, [ARCHITECT], new Map([
    ['Design/Discovery', 29],
    ['Build', 19],
    ['Monitoring/Troubleshooting', 14],
    ['Integrations and Customizations', 22],
    ['Launch', 16]
])));

// // Salesforce Designer Certs
certificationMap.set('User Experience Designer', new Certification('User Experience Designer', 60, 65, [DESIGNER], new Map([
    ['Discovery', 13],
    ['UX Fundamentals', 16],
    ['Human-Centered Design', 12],
    ['Declarative Design', 27],
    ['Testing', 11],
    ['Salesforce Lightning Design System (SLDS)', 21]
])));

certificationMap.set('Strategy Designer', new Certification('Strategy Designer', 60, 70, [DESIGNER], new Map([
    ['Value Design', 32],
    ['Tools and Artifacts', 23],
    ['Intangible Deliverables', 26],
    ['Leveraging Adjacent Roles/Skills', 19]
])));

// Sort all the Certifications alphabetically
certificationMap = new Map([...certificationMap].sort());

// Here we map certifications to one or more Roles that can be filtered on
let RoleMap = new Map();
for (const cert of certificationMap.values()) {
    for (const role of cert.roles) {
        if (RoleMap.has(role)) {
            let tempRoleArray = RoleMap.get(role);
            tempRoleArray.push(cert);
            RoleMap.set(role, tempRoleArray);
        } else {
            RoleMap.set(role, [cert]);
        }
    }
}

// Verifying that the categories for each certification sum up to 100
for (const cert of certificationMap.values()) {
    let sumOfCategories = 0;
    for (const category of cert.categories.values()) {
        sumOfCategories += category;
    }
    if (sumOfCategories !== 100) {
        console.error(`Certification ${cert.name}'s categories sum up to ${sumOfCategories}. You should check that..`);
    }
}

// Sort all the Roles alphabetically
RoleMap = new Map([...RoleMap].sort());

// Set default certification
let selectedCertification = certificationMap.get('Salesforce Associate');

window.addEventListener('load', function () {
    // Auto-populate the Roles on the canvas
    let rolePicklist = document.getElementById('dropdown-menu2');
    rolePicklist.innerHTML = '';
    for (const role of RoleMap.keys()) {
        rolePicklist.insertAdjacentHTML('beforeend', `<a class="dropdown-item" href="javascript:void();" onclick="handleRoleSelectOption('${role}')">${role}</a>`);
    }

    // Auto-populate the Certifications on the canvas
    let certPicklist = document.getElementById('dropdown-menu');
    certPicklist.innerHTML = '';
    for (const cert of certificationMap.keys()) {
        certPicklist.insertAdjacentHTML('beforeend', `<a class="dropdown-item" href="javascript:void();" onclick="handleSelectOption('${cert}')" id="pick">${cert}</a>`);
    }

    // Load default certification
    handleSelectOption(selectedCertification.getName());
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
    let certsText = [];
    for (const cert of RoleMap.get(mainCategory)) {
        certsText.push(cert.name);
    }
    let picks = document.querySelectorAll('*[id^="pick"]');
    for (const pick of picks) {
        if (certsText.includes(pick.textContent)) {
            pick.classList.remove('hide');
        } else {
            pick.classList.add('hide');
        }
    }
}

function changeDropdownMenuText(certificationName) {
    if (!certificationName) return;
    document.getElementById('dropdownMenuButton__text').innerHTML = certificationName;
}

function handleCertificationSelection(certification) {
    if (!certification) return;
    selectedCertification = certification;
    hideMoreStats();
    let toolContentContainer = document.getElementById('tool__content-container');
    toolContentContainer.innerHTML = '';
    for (const key of certification.getCategories().keys()) {
        const kebabKey = toKebabCase(key);
        const htmlContent = `<div class="tool__content-box"><label for="category-${kebabKey}" id="category-${kebabKey}-label" class="tool__content-category">${key}</label><input type="number" min=0 max=100 name="${key}" class="tool__content-categoryvalue" id="category-${kebabKey}" required></div>`;
        toolContentContainer.insertAdjacentHTML('beforeend', htmlContent);
    };
}

function showMoreStats() {
    resetCategoryLabels();
    const categories = selectedCertification.getCategories();
    const inputs = document.getElementsByTagName('input');
    let moreStatsTag = document.getElementById('tool__content-moreStats-message');
    let bullet = '•';
    document.getElementById('tool__content-moreStats').classList.remove('hide');
    moreStatsTag.innerHTML = '';
    for (const input of inputs) {
        document.getElementById(`${input.id}-label`).innerHTML += ` (${Math.round(input.value * categories.get(input.name) * 0.01)}% / ${Math.round(categories.get(input.name))}%)`;
        moreStatsTag.innerHTML += `</br>${input.name}</br><font color="#530040">${bullet.repeat(Math.round(categories.get(input.name)) - Math.round(input.value * categories.get(input.name) * 0.01))}</font>`;
    }
    moreStatsTag.innerHTML += '</br></br></br><i class="far fa-info"></i> </br><i>Each <font color="#530040">•</font> represents the negative impact each category had on your result. The dots translates to how many percentages away you were from the maximum it could give. Keep on studying on the categories that have the most dots (negative impact), and you\'ll do even better in no time!</i>';
    document.getElementById('moreStatsButton').classList.add('hide');
    
    return false;
}

function hideMoreStats() {
    document.getElementById('tool__content-moreStats').classList.add('hide');
    document.getElementById('moreStatsButton').classList.remove('hide');
}

function resetCategoryLabels() {
    const inputs = document.getElementsByTagName('input');
    for (const input of inputs) {
        document.getElementById(input.id + '-label').innerHTML = input.name;
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
        finalScore += inputs[i].value * categories.get(inputs[i].name) * 0.01;
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

const toKebabCase = str =>
    str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-');