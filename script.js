// Existing loadForm function with all previously added sections and logic
function loadForm() {
    const formType = document.getElementById("formType").value;
    const dynamicFormContent = document.getElementById("dynamicFormContent");

    // Clear any existing content
    dynamicFormContent.innerHTML = "";

    if (formType === "formA") {
        // Load Form A with all previously added sections
        dynamicFormContent.innerHTML = `
            <!-- Existing HTML content for Form A with Worksite, Customer Info, Job Type, Equipment, and Security sections -->

            <!-- Market Type Dropdown for Job Type Section -->
            <div class="form-group">
                <label class="form-label" for="marketType">Market Type</label>
                <select id="marketType" name="marketType" class="form-select">
                    <option value="">Select Market Type</option>
                    <option value="Riser">Riser</option>
                    <option value="KG10">KG10</option>
                    <option value="Type7">Type 7</option>
                    <option value="Type8">Type 8</option>
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

            <!-- Security Required Checkbox -->
            <div class="form-group">
                <label>
                    <input type="checkbox" id="securityRequired" name="securityRequired">
                    Security Required
                </label>
            </div>

            <!-- Security Section (initially hidden) -->
            <fieldset id="securitySection" style="display: none;">
                <legend>Security Details</legend>
                <div class="form-group">
                    <label class="form-label" for="securityType">Security required</label>
                    <input type="text" id="securityType" name="securityType" class="form-input" placeholder="Enter security type">
                </div>
                <div class="form-group">
                    <label class="form-label" for="securityDescription">Security Details</label>
                    <textarea id="securityDescription" name="securityDescription" class="form-input" rows="3" placeholder="Enter security details..."></textarea>
                </div>
                <small class="help-text">Requirement: Charging Security Flag for KG10 and Security selected</small>
            </fieldset>

            <!-- Access Requirement Checkbox -->
            <div class="form-group">
                <label>
                    <input type="checkbox" id="accessRequirementCheckbox" name="accessRequirementCheckbox">
                    Access Requirement
                </label>
            </div>

            <!-- Access Requirement Section (initially hidden) -->
            <fieldset id="accessRequirementSection" style="display: none;">
                <legend>Access Requirement</legend>
                <div class="form-group">
                    <label class="form-label" for="accessRequirement">Access requirement</label>
                    <select id="accessRequirement" name="accessRequirement" class="form-select">
                        <option value="">Select Access Requirement</option>
                        <option value="Requirement1">Requirement 1</option>
                        <option value="Requirement2">Requirement 2</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label" for="accessRequired">Access required</label>
                    <select id="accessRequired" name="accessRequired" class="form-select">
                        <option value="">Select Access Required</option>
                        <option value="Required1">Required 1</option>
                        <option value="Required2">Required 2</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label" for="scopeOfRequirements">Scope of requirements</label>
                    <textarea id="scopeOfRequirements" name="scopeOfRequirements" class="form-input" rows="3" placeholder="Enter scope of requirements..."></textarea>
                </div>
            </fieldset>

            <button type="submit" class="btn btn-primary">Submit Form</button>
        `;

        // Previous event listeners for other sections
        const marketTypeDropdown = document.getElementById("marketType");
        const jobTypeSection = document.getElementById("jobTypeSection");

        if (marketTypeDropdown) {
            marketTypeDropdown.addEventListener("change", function() {
                const marketType = this.value;
                if (marketType === "Riser" || marketType === "KG10") {
                    jobTypeSection.style.display = "block";
                } else {
                    jobTypeSection.style.display = "none";
                }
            });
        }

        const equipmentCheckbox = document.getElementById("equipmentRequired");
        const equipmentSection = document.getElementById("equipmentSection");

        if (equipmentCheckbox) {
            equipmentCheckbox.addEventListener("change", function() {
                equipmentSection.style.display = this.checked ? "block" : "none";
            });
        }

        const securityCheckbox = document.getElementById("securityRequired");
        const securitySection = document.getElementById("securitySection");

        if (securityCheckbox) {
            securityCheckbox.addEventListener("change", function() {
                securitySection.style.display = this.checked ? "block" : "none";
            });
        }

        // New Access Requirement functionality
        const accessRequirementCheckbox = document.getElementById("accessRequirementCheckbox");
        const accessRequirementSection = document.getElementById("accessRequirementSection");

        if (accessRequirementCheckbox) {
            accessRequirementCheckbox.addEventListener("change", function() {
                accessRequirementSection.style.display = this.checked ? "block" : "none";
            });
        }
    } else if (formType === "formB") {
        // Load Form B
        dynamicFormContent.innerHTML = `
            <h2>Form B</h2>
            <form class="form-container">
                <!-- Form B fields here -->
            </form>
        `;
    }
}
