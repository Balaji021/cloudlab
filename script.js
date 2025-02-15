// Function to handle registration form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value;

    // Simulate saving registration (in a real app, you'd send this to a server)
    console.log(`Registered: ${name}, Email: ${email}, Phone: ${phone}`);

    document.getElementById('registrationMessage').innerText = 'Registration successful! You can now book an appointment.';
    
    // Show the appointment booking form after registration
    document.getElementById('registrationSection').style.display = 'none';
    document.getElementById('appointmentSection').style.display = 'block';
});

// Function to handle appointment booking form submission
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const appointmentDate = document.getElementById('appDate').value;
    const appointmentTime = document.getElementById('appTime').value;
    const service = document.getElementById('service').value;

    // Simulate booking the appointment (in a real app, you'd send this to a server)
    console.log(`Appointment booked for ${appointmentDate} at ${appointmentTime} for ${service}`);

    document.getElementById('appointmentMessage').innerText = `Appointment booked for ${service} on ${appointmentDate} at ${appointmentTime}.`;
});
