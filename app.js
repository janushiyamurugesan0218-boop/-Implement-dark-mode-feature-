document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const headline = document.getElementById('headline');

    // 1. Check for stored theme preference on load
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeButton.textContent = 'Switch to Light Mode';
        headline.textContent = 'Dark Mode Active';
    }

    // 2. Add click event listener to the button
    themeButton.addEventListener('click', () => {
        // Look at the current state of the data-theme attribute
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

        if (isDark) {
            // Switch to Light Mode
            document.documentElement.removeAttribute('data-theme');
            themeButton.textContent = 'Switch to Dark Mode';
            headline.textContent = 'Light Mode Active';
            localStorage.setItem('theme', 'light'); // Persist setting
        } else {
            // Switch to Dark Mode
            document.documentElement.setAttribute('data-theme', 'dark');
            themeButton.textContent = 'Switch to Light Mode';
            headline.textContent = 'Dark Mode Active';
            localStorage.setItem('theme', 'dark'); // Persist setting
        }
    });
});