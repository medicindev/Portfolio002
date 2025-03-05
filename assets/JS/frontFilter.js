document.addEventListener("DOMContentLoaded", function () {
    // Select all filter buttons
    let filterButtons = document.querySelectorAll("#portfolio-flters li");

    // Select all project elements
    let projects = document.querySelectorAll(".main-project-div-inner");

    // Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Step 1: Remove the 'filter-active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("filter-active"));

            // Step 2: Add 'filter-active' class to the clicked button
            this.classList.add("filter-active");

            // Step 3: Get the filter category from the clicked button
            let filterValue = this.getAttribute("data-filter");

            // Step 4: Loop through all projects and filter them
            projects.forEach(project => {
                if (filterValue === "*") {
                    // Show all projects if 'All' is selected
                    project.style.display = "block";
                } else if (project.classList.contains(filterValue.substring(1))) {
                    // Show the project if it matches the selected filter
                    project.style.display = "block";
                } else {
                    // Hide the project if it does not match
                    project.style.display = "none";
                }
            });
        });
    });
});


