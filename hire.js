document.addEventListener('DOMContentLoaded', () => {
    // Create the header with the website name
    const header = document.createElement('header');
    header.className = 'header';

    const websiteName = document.createElement('h1');
    websiteName.className = 'website-name';
    websiteName.textContent = 'FREEZZZ';

    header.appendChild(websiteName);
    document.body.appendChild(header);

    // Create the container
    const container = document.createElement('div');
    container.className = 'container';
    
    // Create the heading and paragraph
    const heading = document.createElement('h2');
    heading.textContent = 'Join Our Team';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'We are looking for talented individuals to join our company. Please fill out the form below to apply for the job.';
    
    // Create the form
    const form = document.createElement('form');
    form.action = '#'; // Set action to '#' since we'll handle the submission with JavaScript
    form.method = 'POST';

    // Create form fields
    const fields = [
        { type: 'text', id: 'name', name: 'name', label: 'Full Name:' },
        { type: 'email', id: 'email', name: 'email', label: 'Email:' },
        { type: 'tel', id: 'phone', name: 'phone', label: 'Phone Number:' },
        { type: 'text', id: 'position', name: 'position', label: 'Position Applying For:' },
        { type: 'file', id: 'resume', name: 'resume', label: 'Upload Resume:' },
    ];

    fields.forEach(field => {
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;

        const input = document.createElement(field.type === 'textarea' ? 'textarea' : 'input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.name;
        input.required = true;

        if (field.type === 'textarea') {
            input.rows = 5;
        }

        form.appendChild(label);
        form.appendChild(input);
    });

    // Create cover letter field
    const coverLetterLabel = document.createElement('label');
    coverLetterLabel.setAttribute('for', 'cover-letter');
    coverLetterLabel.textContent = 'Cover Letter:';
    
    const coverLetterTextArea = document.createElement('textarea');
    coverLetterTextArea.id = 'cover-letter';
    coverLetterTextArea.name = 'cover-letter';
    coverLetterTextArea.rows = 5;
    coverLetterTextArea.required = true;

    form.appendChild(coverLetterLabel);
    form.appendChild(coverLetterTextArea);

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit Application';

    form.appendChild(submitButton);

    // Append all elements to the container
    container.appendChild(heading);
    container.appendChild(paragraph);
    container.appendChild(form);

    // Append the container to the body
    document.body.appendChild(container);

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        
        // Basic validation (optional)
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const position = document.getElementById('position').value.trim();
        const resume = document.getElementById('resume').files.length;
        const coverLetter = document.getElementById('cover-letter').value.trim();

        if (!name || !email || !phone || !position || resume === 0 || !coverLetter) {
            alert('Please fill out all required fields and upload your resume.');
            return;
        }

        // Redirect to job2.html
        window.location.href = 'apply.html';
    });
});
