topics = [
    {
        name: 'Structures',
        link: 'structure.html'
    },
    {
        name: 'Bitwise',
        link: 'bitwise.html'
    },
    {
        name: 'Pointer',
        link: 'pointer.html'
    },
    {
        name: 'String',
        link: 'string.html'
    },
    {
        name: 'File I/O',
        link: 'fileio.html'
    },
    {
        name: 'If Else',
        link: 'if_else.html'
    }
]

assignmentButtonElement = document.querySelector('.button-menu-container');
assignmentHtml = '';

topics.forEach((topic) => {
    assignmentHtml += `
        <div class="assignment-link-button">
            <a class="assignment-link-section" href="${topic.link}">
                ${topic.name}
            </a>
        </div>
    `;
});

assignmentButtonElement.innerHTML = assignmentHtml;