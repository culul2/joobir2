// This script handles the submission of comments and questions

document.addEventListener('DOMContentLoaded', () => {
    const commentButton = document.querySelector('.comment-box button');
    const questionButton = document.querySelector('.general-question-box button');

    // Handle comment submission
    if (commentButton) {
        commentButton.addEventListener('click', () => {
            const commentText = document.querySelector('.comment-box textarea').value;
            if (commentText) {
                alert('Comment submitted: ' + commentText);
                document.querySelector('.comment-box textarea').value = ''; // Clear the textarea
            } else {
                alert('Please enter a comment before submitting. / Yaada dhiyeessi dura barreessi.');
            }
        });
    }

    // Handle question submission
    if (questionButton) {
        questionButton.addEventListener('click', () => {
            const questionText = document.querySelector('.general-question-box textarea').value;
            if (questionText) {
                alert('Question posted: ' + questionText);
                document.querySelector('.general-question-box textarea').value = ''; // Clear the textarea
            } else {
                alert('Please enter a question before posting. / Gaaffii dura barreessi.');
            }
        });
    }
});