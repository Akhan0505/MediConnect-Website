// Booking page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const bookingForm = document.getElementById('bookingForm');
    const doctorSelect = document.getElementById('doctorSelect');
    const appointmentDate = document.getElementById('appointmentDate');
    const appointmentTime = document.getElementById('appointmentTime');
    const upcomingAppointments = document.getElementById('upcomingAppointments');
    const pastAppointments = document.getElementById('pastAppointments');
    const successModal = document.getElementById('successModal');
    const successMessage = document.getElementById('successMessage');
    
    let allDoctors = [];
    let appointments = [];
    
    // Initialize data
    if (typeof doctorsData !== 'undefined') {
        allDoctors = doctorsData;
        populateDoctorSelect();
    }
    
    // Load existing appointments
    appointments = storage.get('appointments') || [];
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    appointmentDate.min = today;
    
    // Check if a doctor was pre-selected
    const selectedDoctorId = storage.get('selectedDoctorId');
    if (selectedDoctorId) {
        doctorSelect.value = selectedDoctorId;
        updateAvailableTimeSlots();
        storage.remove('selectedDoctorId'); // Clear after use
    }
    
    // Event listeners
    bookingForm.addEventListener('submit', handleBookingSubmission);
    doctorSelect.addEventListener('change', updateAvailableTimeSlots);
    appointmentDate.addEventListener('change', updateAvailableTimeSlots);
    
    // Tab functionality
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Initialize display
    displayAppointments();
    
    function populateDoctorSelect() {
        const defaultOption = '<option value="">Choose a doctor...</option>';
        const doctorOptions = allDoctors.map(doctor => 
            `<option value="${doctor.id}">${doctor.name} - ${doctor.specialization} (${doctor.city})</option>`
        ).join('');
        
        doctorSelect.innerHTML = defaultOption + doctorOptions;
    }
    
    function updateAvailableTimeSlots() {
        const selectedDoctorId = parseInt(doctorSelect.value);
        const selectedDate = appointmentDate.value;
        
        if (!selectedDoctorId || !selectedDate) {
            appointmentTime.innerHTML = '<option value="">Select time...</option>';
            return;
        }
        
        const doctor = allDoctors.find(d => d.id === selectedDoctorId);
        if (!doctor || !doctor.availability) {
            appointmentTime.innerHTML = '<option value="">No time slots available</option>';
            return;
        }
        
        // Filter out already booked slots for the selected date and doctor
        const bookedSlots = appointments
            .filter(apt => apt.doctorId === selectedDoctorId && apt.date === selectedDate && apt.status !== 'cancelled')
            .map(apt => apt.time);
        
        const availableSlots = doctor.availability.filter(time => !bookedSlots.includes(time));
        
        if (availableSlots.length === 0) {
            appointmentTime.innerHTML = '<option value="">No available slots for this date</option>';
            return;
        }
        
        const timeOptions = availableSlots.map(time => 
            `<option value="${time}">${formatTime(time)}</option>`
        ).join('');
        
        appointmentTime.innerHTML = '<option value="">Select time...</option>' + timeOptions;
    }
    
    function handleBookingSubmission(e) {
        e.preventDefault();
        
        if (!validateForm(bookingForm)) {
            showToast('Please fill in all required fields', 'error');
            return;
        }
        
        const formData = new FormData(bookingForm);
        const selectedDoctorId = parseInt(formData.get('doctorSelect'));
        const doctor = allDoctors.find(d => d.id === selectedDoctorId);
        
        if (!doctor) {
            showToast('Selected doctor not found', 'error');
            return;
        }
        
        // Create new appointment
        const newAppointment = {
            id: Date.now(),
            patientName: formData.get('patientName'),
            patientPhone: formData.get('patientPhone'),
            doctorId: selectedDoctorId,
            doctorName: doctor.name,
            doctorSpecialization: doctor.specialization,
            doctorImage: doctor.image,
            date: formData.get('appointmentDate'),
            time: formData.get('appointmentTime'),
            consultationType: formData.get('consultationType'),
            symptoms: formData.get('symptoms'),
            status: 'upcoming',
            bookedAt: new Date().toISOString(),
            price: doctor.price
        };
        
        // Add to appointments array
        appointments.push(newAppointment);
        
        // Save to localStorage
        storage.set('appointments', appointments);
        
        // Show success message
        const appointmentDateTime = `${formatDate(newAppointment.date)} at ${formatTime(newAppointment.time)}`;
        successMessage.textContent = `Your appointment with ${doctor.name} has been scheduled for ${appointmentDateTime}.`;
        successModal.style.display = 'block';
        
        // Reset form
        bookingForm.reset();
        appointmentTime.innerHTML = '<option value="">Select time...</option>';
        
        // Refresh appointments display
        displayAppointments();
    }
    
    function displayAppointments() {
        const now = new Date();
        const upcoming = appointments.filter(apt => {
            const aptDate = new Date(`${apt.date}T${apt.time}`);
            return aptDate > now && apt.status !== 'cancelled';
        });
        
        const past = appointments.filter(apt => {
            const aptDate = new Date(`${apt.date}T${apt.time}`);
            return aptDate <= now || apt.status === 'completed' || apt.status === 'cancelled';
        });
        
        displayUpcomingAppointments(upcoming);
        displayPastAppointments(past);
    }
    
    function displayUpcomingAppointments(appointments) {
        if (appointments.length === 0) {
            upcomingAppointments.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-calendar-plus"></i>
                    <h3>No Upcoming Appointments</h3>
                    <p>You don't have any upcoming appointments scheduled.</p>
                    <button class="btn btn-primary" onclick="document.querySelector('.booking-form-section').scrollIntoView({behavior: 'smooth'})">
                        Book Your First Appointment
                    </button>
                </div>
            `;
            return;
        }
        
        upcomingAppointments.innerHTML = appointments.map(apt => `
            <div class="appointment-card">
                <div class="appointment-header">
                    <div class="appointment-info">
                        <h3>${apt.patientName}</h3>
                        <div class="appointment-doctor">Dr. ${apt.doctorName} - ${apt.doctorSpecialization}</div>
                    </div>
                    <div class="appointment-status status-${apt.status}">${apt.status}</div>
                </div>
                
                <div class="appointment-details">
                    <div class="appointment-detail">
                        <i class="fas fa-calendar"></i>
                        <strong>Date:</strong> ${formatDate(apt.date)}
                    </div>
                    <div class="appointment-detail">
                        <i class="fas fa-clock"></i>
                        <strong>Time:</strong> ${formatTime(apt.time)}
                    </div>
                    <div class="appointment-detail">
                        <i class="fas fa-video"></i>
                        <strong>Type:</strong> ${apt.consultationType}
                    </div>
                    <div class="appointment-detail">
                        <i class="fas fa-money-bill-wave"></i>
                        <strong>Fee:</strong> Rs. ${apt.price}
                    </div>
                    <div class="appointment-detail">
                        <i class="fas fa-phone"></i>
                        <strong>Contact:</strong> ${apt.patientPhone}
                    </div>
                    ${apt.symptoms ? `
                        <div class="appointment-detail">
                            <i class="fas fa-notes-medical"></i>
                            <strong>Symptoms:</strong> ${apt.symptoms}
                        </div>
                    ` : ''}
                </div>
                
                <div class="appointment-actions">
                    <button class="btn btn-secondary btn-sm" onclick="rescheduleAppointment(${apt.id})">
                        <i class="fas fa-edit"></i> Reschedule
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="cancelAppointment(${apt.id})">
                        <i class="fas fa-times"></i> Cancel
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    function displayPastAppointments(appointments) {
        if (appointments.length === 0) {
            pastAppointments.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-history"></i>
                    <h3>No Past Appointments</h3>
                    <p>Your appointment history will appear here.</p>
                </div>
            `;
            return;
        }
        
        pastAppointments.innerHTML = appointments.map(apt => `
            <div class="appointment-card">
                <div class="appointment-header">
                    <div class="appointment-info">
                        <h3>${apt.patientName}</h3>
                        <div class="appointment-doctor">Dr. ${apt.doctorName} - ${apt.doctorSpecialization}</div>
                    </div>
                    <div class="appointment-status status-${apt.status}">${apt.status}</div>
                </div>
                
                <div class="appointment-details">
                    <div class="appointment-detail">
                        <i class="fas fa-calendar"></i>
                        <strong>Date:</strong> ${formatDate(apt.date)}
                    </div>
                    <div class="appointment-detail">
                        <i class="fas fa-clock"></i>
                        <strong>Time:</strong> ${formatTime(apt.time)}
                    </div>
                    <div class="appointment-detail">
                        <i class="fas fa-video"></i>
                        <strong>Type:</strong> ${apt.consultationType}
                    </div>
                    <div class="appointment-detail">
                        <i class="fas fa-money-bill-wave"></i>
                        <strong>Fee:</strong> Rs. ${apt.price}
                    </div>
                    ${apt.symptoms ? `
                        <div class="appointment-detail">
                            <i class="fas fa-notes-medical"></i>
                            <strong>Symptoms:</strong> ${apt.symptoms}
                        </div>
                    ` : ''}
                </div>
                
                ${apt.status === 'completed' ? `
                    <div class="appointment-actions">
                        <button class="btn btn-primary btn-sm" onclick="bookFollowUp(${apt.doctorId})">
                            <i class="fas fa-redo"></i> Book Follow-up
                        </button>
                    </div>
                ` : ''}
            </div>
        `).join('');
    }
    
    function switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');
    }
    
    // Global functions for appointment management
    window.cancelAppointment = function(appointmentId) {
        if (confirm('Are you sure you want to cancel this appointment?')) {
            const appointmentIndex = appointments.findIndex(apt => apt.id === appointmentId);
            if (appointmentIndex !== -1) {
                appointments[appointmentIndex].status = 'cancelled';
                storage.set('appointments', appointments);
                displayAppointments();
                showToast('Appointment cancelled successfully', 'success');
            }
        }
    };
    
    window.rescheduleAppointment = function(appointmentId) {
        const appointment = appointments.find(apt => apt.id === appointmentId);
        if (appointment) {
            // Pre-fill form with existing appointment data
            document.getElementById('patientName').value = appointment.patientName;
            document.getElementById('patientPhone').value = appointment.patientPhone;
            doctorSelect.value = appointment.doctorId;
            document.getElementById('consultationType').value = appointment.consultationType;
            document.getElementById('symptoms').value = appointment.symptoms || '';
            
            // Cancel the old appointment
            appointment.status = 'cancelled';
            storage.set('appointments', appointments);
            
            // Scroll to booking form
            document.querySelector('.booking-form-section').scrollIntoView({behavior: 'smooth'});
            
            showToast('Please select a new date and time for your appointment', 'success');
            displayAppointments();
        }
    };
    
    window.bookFollowUp = function(doctorId) {
        doctorSelect.value = doctorId;
        updateAvailableTimeSlots();
        document.querySelector('.booking-form-section').scrollIntoView({behavior: 'smooth'});
        showToast('Doctor pre-selected for follow-up appointment', 'success');
    };
    
    window.closeSuccessModal = function() {
        successModal.style.display = 'none';
    };
    
    // Close modal when clicking outside
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            closeSuccessModal();
        }
    });
});