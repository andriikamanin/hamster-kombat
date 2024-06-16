document.addEventListener('DOMContentLoaded', (event) => {
    let counter = 0;
    let autoIncrement = 0;
    let incrementPerSecond = 1;  // The fixed increment value per second
    let pointsPerClick = 1;  // Points per click

    const counterElement = document.getElementById('counter');
    const incrementPerSecondElement = document.getElementById('increment-per-second');
    const buttonElement = document.getElementById('increment-button');
    const upgradeButton = document.getElementById('upgrade-button');
    const upgradeMenu = document.getElementById('upgrade-menu');
    const closeMenuButton = document.getElementById('close-menu');
    const overlay = document.getElementById('overlay');

    // Function to update the displayed counter
    const updateCounter = () => {
        counterElement.textContent = counter + autoIncrement;
    };

    // Function to update the displayed increment per second
    const updateIncrementPerSecond = () => {
        incrementPerSecondElement.textContent = incrementPerSecond;
    };

    // Event listener for the button click
    buttonElement.addEventListener('click', () => {
        counter += pointsPerClick;
        updateCounter();
    });

    // Set interval to increment the autoIncrement variable every second
    setInterval(() => {
        autoIncrement += incrementPerSecond;
        updateCounter();
    }, 1000);

    // Event listener to open the upgrade menu
    upgradeButton.addEventListener('click', () => {
        upgradeMenu.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Event listener to close the upgrade menu
    closeMenuButton.addEventListener('click', () => {
        upgradeMenu.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Event listener for overlay click to close the menu
    overlay.addEventListener('click', () => {
        upgradeMenu.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Event listener for upgrade options (increment per second)
    document.querySelectorAll('.upgrade-option').forEach(button => {
        button.addEventListener('click', (event) => {
            const upgradeValue = parseInt(event.target.getAttribute('data-upgrade'));
            incrementPerSecond += upgradeValue;
            updateIncrementPerSecond();
            upgradeMenu.style.display = 'none';
            overlay.style.display = 'none';
        });
    });

    // Event listener for click upgrade options (points per click)
    document.querySelectorAll('.click-upgrade-option').forEach(button => {
        button.addEventListener('click', (event) => {
            const clickUpgradeValue = parseInt(event.target.getAttribute('data-click-upgrade'));
            pointsPerClick += clickUpgradeValue;
            upgradeMenu.style.display = 'none';
            overlay.style.display = 'none';
        });
    });

    // Initial display update
    updateIncrementPerSecond();
});
