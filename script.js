function loadForm() {
    const formType = document.getElementById("formType").value;
    const dynamicFormContent = document.getElementById("dynamicFormContent");

    // Clear any existing content
    dynamicFormContent.innerHTML = "";

    if (formType === "formA") {
        // Load Form A
        dynamicFormContent.innerHTML = `
            <h2>Sitewalk Information</h2>
            <form class="form-container" id="formA">
                <fieldset>
                    <legend>Worksite Information</legend>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label" for="worksitePhone">Phone Number</label>
                            <input type="text" id="worksitePhone" name="worksitePhone" class="form-input">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="worksiteCity">City</label>
                            <input type="text" id="worksiteCity" name="worksiteCity" class="form-input">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label" for="worksiteContactName">Contact Name</label>
                            <input type="text" id="worksiteContactName" name="worksiteContactName" class="form-input">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="worksitePhoneNumber">Phone Number</label>
                            <input type="text" id="worksitePhoneNumber" name="worksitePhoneNumber" class="form-input">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label" for="poNumber">PO Number</label>
                            <input type="text" id="poNumber" name="poNumber" class="form-input">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="jobNumber">Job Number</label>
                            <input type="text" id="jobNumber" name="jobNumber" class="form-input">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label" for="costCentre">Cost Centre</label>
                            <input type="text" id="costCentre" name="costCentre" class="form-input">
                        </div>
                    </div>
                </fieldset>
                
                <fieldset>
                    <legend>Customer Information</legend>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label" for="customerContactName">Contact Name</label>
                            <input type="text" id="customerContactName" name="customerContactName" class="form-input">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="customerAddress">Address</label>
                            <input type="text" id="customerAddress" name="customerAddress" class="form-input">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label" for="customerCity">City</label>
                            <input type="text" id="customerCity" name="customerCity" class="form-input">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="customerPhoneNumber">Phone Number</label>
                            <input type="text" id="customerPhoneNumber" name="customerPhoneNumber" class="form-input">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label" for="customerEmail">Email Address</label>
                            <input type="email" id="customerEmail" name="customerEmail" class="form-input">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="customerProvince">Province</label>
                            <select id="customerProvince" name="customerProvince" class="form-select">
                                <option value="">Please select</option>
                                <option value="Province1">Province 1</option>
                                <option value="Province2">Province 2</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

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
                        <select id="equipmentType" name="equipmentType" class="form-select" placeholder="Enter equipment type">
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="equip1">Forklift</option>
                            <option value="equip2">Scissor lift</option>
                            <option value="equip3">Special Equipment</option>
                        </select>
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

                <button type="submit" class="btn btn-primary">Submit Form</button>
            </form>
        `;

        // Add event listener to the Market Type dropdown
        const marketTypeDropdown = document.getElementById("marketType");
        const jobTypeSection = document.getElementById("jobTypeSection");

        if (marketTypeDropdown) {
            marketTypeDropdown.addEventListener("change", function() {
                const marketType = this.value;
                
                // Show Job Type section only if Market Type is Riser or KG10
                if (marketType === "Type7" || marketType === "Type8") {
                    jobTypeSection.style.display = "block";
                } else {
                    jobTypeSection.style.display = "none";
                }
            });
        }

        // Add event listener to the Equipment Required checkbox
        const equipmentCheckbox = document.getElementById("equipmentRequired");
        const equipmentSection = document.getElementById("equipmentSection");

        if (equipmentCheckbox) {
            equipmentCheckbox.addEventListener("change", function() {
                if (this.checked) {
                    equipmentSection.style.display = "block";
                } else {
                    equipmentSection.style.display = "none";
                }
            });
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
