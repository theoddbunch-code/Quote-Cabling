function loadForm() {
    const formType = document.getElementById("formType").value;
    const dynamicFormContent = document.getElementById("dynamicFormContent");

    // Clear any existing content
    dynamicFormContent.innerHTML = "";

    if (formType === "formA") {
        // Load Form A
        dynamicFormContent.innerHTML = `
            <h2>Form A - Worksite and Customer Information</h2>
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
