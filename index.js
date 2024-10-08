// JavaScript for form validation and user interaction

document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');

    // Form submit event listener
    feedbackForm.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Validate form fields
        const patientName = document.getElementById('patient-name').value.trim();
        const patientEmail = document.getElementById('patient-email').value.trim();
        const visitDate = document.getElementById('visit-date').value;
        const feedback = document.getElementById('feedback').value.trim();
        const doctorRating = document.getElementById('doctor-rating').value;
        const staffRating = document.getElementById('staff-rating').value;
        const cleanlinessRating = document.getElementById('cleanliness-rating').value;

        if (!patientName || !patientEmail || !visitDate || !feedback || !doctorRating || !staffRating || !cleanlinessRating) {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate form submission (can replace this with actual server-side handling)
        alert("Feedback Submitted Successfully!");
        
        // Reset form after submission
        feedbackForm.reset();
    });
});
