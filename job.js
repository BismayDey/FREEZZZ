const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Innovators Inc.', location: 'Remote', description: 'We are looking for a talented frontend developer with experience in HTML, CSS, and JavaScript.' },
    { id: 2, title: 'Backend Developer', company: 'CodeCraft Labs', location: 'New York, NY', description: 'Join our backend team to work on scalable APIs and microservices.' },
    { id: 3, title: 'UI/UX Designer', company: 'DesignHub', location: 'kolkata, West Bengal', description: 'We need a creative designer to craft user-friendly interfaces.' },
    { id: 4, title: 'Full Stack Developer', company: 'WebWorks Solutions', location: 'Gurgaon, New Delhi', description: 'Exciting opportunity for a full stack developer experienced in both frontend and backend technologies.' },
    { id: 5, title: 'Product Manager', company: 'Strategic Vision Co.', location: 'Remote', description: 'We are seeking a product manager to lead our product development and strategy.' },
    { id: 6, title: 'Data Scientist', company: 'DataDriven Insights', location: 'San Francisco, CA', description: 'Join our team as a data scientist to analyze and interpret complex data sets.' },
    { id: 7, title: 'DevOps Engineer', company: 'OpsGenie Technologies', location: 'Austin, TX', description: 'Looking for a DevOps engineer to streamline our development and operations processes.' },
    { id: 8, title: 'Marketing Specialist', company: 'BrandBoosters', location: 'Remote', description: 'We need a marketing specialist to develop and execute marketing strategies.' },
    { id: 9, title: 'Quality Assurance Analyst', company: 'SoftTest Pro', location: 'New York, NY', description: 'Join our QA team to ensure the quality and reliability of our software products.' },
    { id: 10, title: 'Sales Executive', company: 'MarketLeaders Ltd.', location: 'Los Angeles, CA', description: 'We are hiring a sales executive to drive sales and build client relationships.' },
    { id: 11, title: 'Business Analyst', company: 'Insightful Analytics', location: 'Chicago, IL', description: 'Seeking a business analyst to analyze business needs and provide actionable insights.' },
    { id: 12, title: 'System Administrator', company: 'ITGuardians', location: 'Remote', description: 'Join our IT team as a system administrator to manage and maintain our IT infrastructure.' },
    { id: 13, title: 'Customer Support Specialist', company: 'CustomerFirst Services', location: 'Remote', description: 'We need a customer support specialist to provide excellent service and resolve customer issues.' },
    { id: 14, title: 'Content Writer', company: 'CreativeWriters Hub', location: 'Austin, TX', description: 'Join our content team to create engaging and compelling content for our audience.' },
    { id: 15, title: 'Graphic Designer', company: 'Visual Arts Studio', location: 'San Francisco, CA', description: 'We are looking for a graphic designer to create visually stunning designs for our projects.' },
    { id: 16, title: 'Software Engineer', company: 'Innovative Tech Solutions', location: 'Seattle, WA', description: 'Seeking a software engineer to develop innovative software solutions and enhance our applications.' },
    { id: 17, title: 'HR Manager', company: 'PeopleFirst Corp.', location: 'New York, NY', description: 'Join our HR team as a manager to oversee recruitment, employee relations, and company policies.' },
    { id: 18, title: 'Finance Analyst', company: 'FinSolve Advisors', location: 'Chicago, IL', description: 'We need a finance analyst to manage financial data and provide insights for business decisions.' },
    { id: 19, title: 'Social Media Manager', company: 'SocialSavvy Marketing', location: 'Remote', description: 'Looking for a social media manager to develop and implement our social media strategy.' },
    { id: 20, title: 'Operations Manager', company: 'OptiManage Inc.', location: 'Los Angeles, CA', description: 'Join our operations team as a manager to oversee day-to-day operations and optimize processes.' },
    { id: 21, title: 'Web Developer', company: 'WebGenie Solutions', location: 'San Diego, CA', description: 'Seeking a web developer to build and maintain websites with a focus on performance and user experience.' },
    { id: 22, title: 'Network Engineer', company: 'NetGuard Technologies', location: 'Remote', description: 'We are hiring a network engineer to design, implement, and maintain our network infrastructure.' },
    { id: 23, title: 'Administrative Assistant', company: 'OfficeAssist Ltd.', location: 'Dallas, TX', description: 'Join our administrative team to provide support and ensure smooth office operations.' },
    { id: 24, title: 'Research Scientist', company: 'SciResearch Labs', location: 'San Francisco, CA', description: 'We need a research scientist to conduct experiments and analyze data for scientific research.' },
    { id: 25, title: 'Technical Support Specialist', company: 'TechHelp Solutions', location: 'Remote', description: 'Looking for a technical support specialist to assist users with technical issues and solutions.' },
    { id: 26, title: 'Event Coordinator', company: 'EventMasters', location: 'Chicago, IL', description: 'Join our team as an event coordinator to plan and execute successful events and gatherings.' },
    { id: 27, title: 'Product Designer', company: 'DesignPro Inc.', location: 'Seattle, WA', description: 'We are seeking a product designer to create intuitive and aesthetically pleasing product designs.' },
    { id: 28, title: 'SEO Specialist', company: 'SEOExperts Co.', location: 'Remote', description: 'We need an SEO specialist to optimize our website for search engines and improve organic traffic.' },
    { id: 29, title: 'Sales Manager', company: 'SalesForce Group', location: 'New York, NY', description: 'Looking for a sales manager to lead and motivate our sales team to achieve targets and goals.' },
    { id: 30, title: 'Legal Counsel', company: 'LegalEase Advisors', location: 'San Francisco, CA', description: 'Join our legal team as a counsel to provide legal advice and support on various matters.' },
];
function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';
    
    const title = document.createElement('h3');
    title.innerHTML = `${job.title}`;

    const company = document.createElement('p');
    company.className = 'company-name';
    company.textContent = job.company;

    const jobType = document.createElement('p');
    jobType.className = 'job-type';
    jobType.textContent = job.type;

    const location = document.createElement('p');
    location.innerHTML = `<strong>Location:</strong> ${job.location}`;

    const description = document.createElement('p');
    description.textContent = job.description;

    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply Now';
    applyButton.className = 'apply-button';
    applyButton.addEventListener('click', () => alert(`Applied to ${job.title} at ${job.company}`));

    card.appendChild(title);
    card.appendChild(company); // Added company name
    card.appendChild(jobType); // Added job type
    card.appendChild(location);
    card.appendChild(description);
    card.appendChild(applyButton);

    return card;
}

const jobList = document.getElementById('job-list');
jobs.forEach(job => {
    const jobCard = createJobCard(job);
    jobList.appendChild(jobCard);
    setTimeout(() => jobCard.classList.add('show'), 100); // Add show class for animation
});
// Add this to your existing app.js or equivalent file

// Listen for click events on "Apply Now" buttons
document.querySelectorAll('.apply-button').forEach(button => {
    button.addEventListener('click', function() {
        // Redirect to the confirmation page
        window.location.href = 'hire.html';
    });
});
