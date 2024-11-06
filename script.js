// Existing loadForm function with all previously added sections and logic
function loadForm() {
    const formType = document.getElementById("formType").value;
    const dynamicFormContent = document.getElementById("dynamicFormContent");

    // Clear any existing content
    dynamicFormContent.innerHTML = "";

    if (formType === "formA") {
        // Load Form A with all previously added sections
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
            
            <!-- Material Required Checkbox -->
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="materialRequired" name="materialRequired">
                        Material
                    </label>
                </div>

                <!-- Materials Section (initially hidden) -->
                <fieldset id="materialSection" style="display: none;">
                    <legend>Materials</legend>
                    ${Array(8).fill(`
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label" for="quantity">Quantity</label>
                                <input type="number" name="quantity" class="form-input" placeholder="Quantity">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="material">Material</label>
                                <select name="material" class="form-select">
                                    <option value="">Please select</option>
                                    <option value="Material1">Material 1</option>
                                    <option value="Material2">Material 2</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="unitPrice">Unit Price</label>
                                <input type="number" name="unitPrice" class="form-input" placeholder="Unit Price">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="total">Total</label>
                                <input type="number" name="total" class="form-input" placeholder="Total" readonly>
                            </div>
                        </div>
                    `).join('')}
                </fieldset>

                <!-- Labours Required Checkbox -->
            <div class="form-group">
                <label>
                    <input type="checkbox" id="labourRequired" name="labourRequired">
                    Labours
                </label>
            </div>
                
                <!-- Labours Section (initially hidden) -->
                <fieldset id="labourSection" style="display: none;">
                    <legend>Labours</legend>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label" for="numTechs">Number of techs</label>
                            <input type="number" id="numTechs" name="numTechs" class="form-input" placeholder="Quantity">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="numHours">Number of Hours</label>
                            <input type="number" id="numHours" name="numHours" class="form-input" placeholder="Quantity">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="totalHours">Total hours</label>
                            <input type="number" id="totalHours" name="totalHours" class="form-input" placeholder="Quantity" readonly>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="commentSection">Comment section</label>
                        <textarea id="commentSection" name="commentSection" class="form-input" rows="3" placeholder="Comments - Scope of Work"></textarea>
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
                if (marketType === "Type7" || marketType === "Type8") {
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

        // New event listener for Material checkbox
        const materialCheckbox = document.getElementById("materialRequired");
        const materialSection = document.getElementById("materialSection");

        if (materialCheckbox) {
            materialCheckbox.addEventListener("change", function() {
                materialSection.style.display = this.checked ? "block" : "none";
            });
        }

         // New event listener for Labours checkbox
        const labourCheckbox = document.getElementById("labourRequired");
        const labourSection = document.getElementById("labourSection");

        if (labourCheckbox) {
            labourCheckbox.addEventListener("change", function() {
                labourSection.style.display = this.checked ? "block" : "none";
            });
        }
    } else if (formType === "formD") {
        // Load Form B
        dynamicFormContent.innerHTML = `
<h2>Form D</h2>
            <form class="form-container" id="formD">
                <fieldset>
                    <legend>Total</legend>

                    <div class="form-group">
                        <label class="form-label" for="sap">SAP</label>
                        <input type="text" id="sap" name="sap" class="form-input" placeholder="SAP Number">
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label" for="hours">Hours</label>
                            <input type="number" id="hours" name="hours" class="form-input" placeholder="Hours">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="rate">Rate</label>
                            <input type="number" id="rate" name="rate" class="form-input" placeholder="Rate">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="total">Total</label>
                            <input type="number" id="total" name="total" class="form-input" placeholder="Total" readonly>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="markup">Markup</label>
                            <select id="markup" name="markup" class="form-select">
                                <option value="">Select Markup</option>
                                <option value="5">5%</option>
                                <option value="10">10%</option>
                                <option value="15">15%</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="materialTotal">Material Total</label>
                        <input type="number" id="materialTotal" name="materialTotal" class="form-input" placeholder="Material Total" readonly>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="labourTotal">Labour Total</label>
                        <input type="number" id="labourTotal" name="labourTotal" class="form-input" placeholder="Labour Total" readonly>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="subtotal">Subtotal</label>
                        <input type="number" id="subtotal" name="subtotal" class="form-input" placeholder="Subtotal" readonly>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="hst">HST</label>
                        <input type="number" id="hst" name="hst" class="form-input" placeholder="HST" readonly>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="grandTotal">Total</label>
                        <input type="number" id="grandTotal" name="grandTotal" class="form-input" placeholder="Total" readonly>
                    </div>
                </fieldset>

                <button type="submit" class="btn btn-primary">Submit Form</button>
            </form>
        `;
    }
}
