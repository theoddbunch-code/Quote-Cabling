/*document.getElementById('marketType').addEventListener('change', function() {
    const equipmentSection = document.getElementById('equipmentSection');
    const securitySection = document.getElementById('securitySection');
    
    if (this.value === 'kg10') {
        equipmentSection.style.display = 'block';
        securitySection.style.display = 'block';
    } else {
        equipmentSection.style.display = 'none';
        securitySection.style.display = 'none';
    }
});*/
document.addEventListener("DOMContentLoaded", () => {
    const managerCheckbox = document.getElementById("someoneElseCheckbox");
    const managerDetails = document.getElementById("managerInfo");

    managerCheckbox.addEventListener("change", function() {
        if (this.checked) {
            managerDetails.style.display = "block";
        } else {
            managerDetails.style.display = "none";
        }
    });
