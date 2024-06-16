document.addEventListener('DOMContentLoaded', (event) => {
    let counter = 0;
    let autoIncrement = 0;
    let incrementPerSecond = 1;  // The fixed increment value per second
    let pointsPerClick = 1;  // Points per click
    let maxEnergy = 10;
    let currentEnergy = maxEnergy;
    const energyRegenRate = 1;  // Energy regenerated per second

    const counterElement = document.getElementById('counter');
    const incrementPerSecondElement = document.getElementById('increment-per-second');
    const pointsPerClickElement = document.getElementById('points-per-click');
    const energyElement = document.getElementById('energy');
    const maxEnergyElement = document.getElementById('max-energy');
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

    // Function to update the displayed points per click
    const updatePointsPerClick = () => {
        pointsPerClickElement.textContent = pointsPerClick;
    };

    // Function to update the displayed energy
    const updateEnergy = () => {
        energyElement.textContent = currentEnergy;
        maxEnergyElement.textContent = maxEnergy;
    };

    // Set interval to increment the autoIncrement variable every second
    setInterval(() => {
        counter += incrementPerSecond;
        updateCounter();
    }, 1000);

    // Set interval to regenerate energy every second
    setInterval(() => {
        if (currentEnergy < maxEnergy) {
            currentEnergy += energyRegenRate;
            updateEnergy();
        }
    }, 1000);

    // Event listener for the button click
    buttonElement.addEventListener('click', () => {
        if (currentEnergy > 0) {
            counter += pointsPerClick;
            currentEnergy--;
            updateCounter();
            updateEnergy();
        } else {
            alert("Недостаточно энергии!");
        }
    });

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
            updatePointsPerClick();
            upgradeMenu.style.display = 'none';
            overlay.style.display = 'none';
        });
    });

    // Event listener for energy upgrade options (max energy)
    document.querySelectorAll('.energy-upgrade-option').forEach(button => {
        button.addEventListener('click', (event) => {
            const energyUpgradeValue = parseInt(event.target.getAttribute('data-energy-upgrade'));
            maxEnergy += energyUpgradeValue;
            updateEnergy();
            upgradeMenu.style.display = 'none';
            overlay.style.display = 'none';
        });
    });

    // Initial display update
    updateCounter();
    updateIncrementPerSecond();
    updatePointsPerClick();
    updateEnergy();


    document.querySelector('#tchests tr.show-more').onclick = function() {
        // Prevent default action for double click (on mobile)
        this.addEventListener('touchstart', function(event) {
            event.preventDefault();
        });
        // Your existing code for showing/hiding table rows goes here
    };
});
