document.getElementById('marketType').addEventListener('change', function() {
    const equipmentSection = document.getElementById('equipmentSection');
    const securitySection = document.getElementById('securitySection');
    
    if (this.value === 'kg10') {
        equipmentSection.style.display = 'block';
        securitySection.style.display = 'block';
    } else {
        equipmentSection.style.display = 'none';
        securitySection.style.display = 'none';
    }
});
document.getElementById('someoneElseCheckbox').addEventListener('change', function() {
    const managerInfo = document.getElementById('managerInfo');

    if (this.checked) {
        managerInfo.style.display = 'block'; // Show the hidden fields
    } else {
        managerInfo.style.display = 'none';  // Hide the hidden fields
    }
});
