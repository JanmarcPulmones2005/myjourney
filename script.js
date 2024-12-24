// Toggle the dropdown content
// function toggleDropdown() {
//     const dropdownMenu = document.getElementById('dropdownMenu');
//     dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
// }

// // Optional: Close the dropdown if clicked outside
// window.onclick = function(event) {
//     if (!event.target.matches('.dropdown-button')) {
//         const dropdowns = document.getElementsByClassName('dropdown-content');
//         for (let i = 0; i < dropdowns.length; i++) {
//             dropdowns[i].style.display = 'none';
//         }
//     }
// }

function toggleDropdown(id) {
    // Close any other open dropdowns
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].id !== id) {
            dropdowns[i].style.display = 'none';
        }
    }

    // Toggle the clicked dropdown
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close dropdowns when clicking outside
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = 'none';
        }
    }
};