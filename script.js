function loadForm() {
    const formType = document.getElementById("formType").value;
    const dynamicFormContent = document.getElementById("dynamicFormContent");

    // Clear any existing content
    dynamicFormContent.innerHTML = "";

    if (formType === "formA") {
        // Load Form A
        dynamicFormContent.innerHTML = `
            <h2>Sitewalk </h2>
            <form class="form-container">
                <div class="form-group">
                    <label class="form-label" for="fieldA1">Field A1</label>
                    <input type="text" id="fieldA1" name="fieldA1" class="form-input" required>
                </div>
                <div class="form-group">
                    <label class="form-label" for="fieldA2">Field A2</label>
                    <input type="text" id="fieldA2" name="fieldA2" class="form-input" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit Form A</button>
            </form>
        `;
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
