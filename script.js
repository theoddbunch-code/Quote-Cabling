function loadForm() {
    const formType = document.getElementById("formType").value;
    const dynamicFormContent = document.getElementById("dynamicFormContent");

    // Clear any existing content
    dynamicFormContent.innerHTML = "";

    if (formType === "formA") {
        // Load Form A with additional Job Type and Equipment sections
        dynamicFormContent.innerHTML = `
            <h2>Form A - Worksite and Customer Information</h2>
            <form class="form-container" id="formA">
                <fieldset>
                    <legend>Worksite Information</legend>
                    <!-- Worksite fields here -->
                </fieldset>
                
                <fieldset>
                    <legend>Customer Information</legend>
                    <!-- Customer fields here -->
                </fieldset>

                <!-- Market Type Dropdown -->
                <div class="form-group">
                    <label class="form-label" for="marketType">Market Type</label>
                    <select id="marketType" name="marketType" class="form-select">
                        <option value="">Select Market Type</option>
                        <option value="Riser">Riser</option>
                        <option value="KG10">KG10</option>
                        <option value="Type7">Type 7</option>
                        <!-- Add other market types as needed -->
                    </select>
                </div>

                <!-- Job Type Section (initially hidden) -->
                <fieldset id="jobTypeSection" style="display: none;">
                    <legend>Job Type</legend>
                    <div class="form-group">
                        <label class="form-label" for="jobType">Job Type</label>
                        <select id="jobType" name="jobType" class="form-select">
                            <option value="">Select Job Type</option>
                            <option value="Type1">Type 1</option>
                            <option value="Type2">Type 2</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="descriptionOfWork">Description of Work</label>
                        <textarea id="descriptionOfWork" name="descriptionOfWork" class="form-input" rows="4" placeholder="Enter description..."></textarea>
                    </div>
                </fieldset>

                <!-- Equipment Required Checkbox -->
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="equipmentRequired" name="equipmentRequired">
                        Equipment Required
                    </label>
                </div>

                <!-- Equipment Section (initially hidden) -->
                <fieldset id="equipmentSection" style="display: none;">
                    <legend>Equipment Details</legend>
                    <div class="form-group">
                        <label class="form-label" for="equipmentType">Equipment required</label>
                        <input type="text" id="equipmentType" name="equipmentType" class="form-input" placeholder="Enter equipment type">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="equipmentDescription">Equipment Description</label>
                        <textarea id="equipmentDescription" name="equipmentDescription" class="form-input" rows="3" placeholder="Enter description..."></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="liftUse">Is the lift being used in or out tenants space?</label>
                        <select id="liftUse" name="liftUse" class="form-select">
                            <option value="">Select</option>
                            <option value="in">In Tenant Space</option>
                            <option value="out">Out Tenant Space</option>
                        </select>
                        <small class="help-text">Available KG10/riser and Scissor lift selected</small>
                    </div>
                </fieldset>

                <button type="submit" class="btn btn-primary">Submit Form A</button>
            </form>
        `;

        // Add event listener to the Market Type dropdown
        const marketTypeDropdown = document.getElementById("marketType");
        const jobTypeSection = document.getElementById("jobTypeSection");

        if (marketTypeDropdown) {
            console.log("Market Type dropdown found. Adding event listener."); // Debugging log
            marketTypeDropdown.addEventListener("change", function() {
                const marketType = this.value;
                console.log("Market Type selected:", marketType);  // Debugging log
                
                // Show Job Type section only if Market Type is Riser or KG10
                if (marketType === "Riser" || marketType === "KG10") {
                    jobTypeSection.style.display = "block";
                    console.log("Job Type section shown");  // Debugging log
                } else {
                    jobTypeSection.style.display = "none";
                    console.log("Job Type section hidden");  // Debugging log
                }
            });
        } else {
            console.error("Market Type dropdown not found.");  // Debugging error if Market Type dropdown is missing
        }

        // Add event listener to the Equipment Required checkbox
        const equipmentCheckbox = document.getElementById("equipmentRequired");
        const equipmentSection = document.getElementById("equipmentSection");

        if (equipmentCheckbox) {
            equipmentCheckbox.addEventListener("change", function() {
                if (this.checked) {
                    equipmentSection.style.display = "block";
                    console.log("Equipment section shown");  // Debugging log
                } else {
                    equipmentSection.style.display = "none";
                    console.log("Equipment section hidden");  // Debugging log
                }
            });
        } else {
            console.error("Equipment Required checkbox not found.");  // Debugging error if checkbox is missing
        }
    } else if (formType === "formB") {
        // Load Form B
        dynamicFormContent.innerHTML = `
            <h2>Form B</h2>
            <form class="form-container">
                <div class="form-group">
                    <label class="form-label" for="fieldB1">Field B1</label>
                    <input type="text" id="fieldB1" name="fieldB1" class="form-input" required>
                </div>
                <div class="form-group">
                    <label class="form-label" for="fieldB2">Field B2</label>
                    <input type="text" id="fieldB2" name="fieldB2" class="form-input" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit Form B</button>
            </form>
        `;
    }
}
