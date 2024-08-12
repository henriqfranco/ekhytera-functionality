const games = [
    {
        name: 'fortnite',
        minHardware: {
            GPU: {
                model: 'Intel HD 4000',
                rating: 51,
            },
            CPU: {
                model: 'Intel Core i3-3225',
                rating: 51,
            },
            RAM: 8,
        },
        recHardware: {
            GPU: {
                model: 'GTX 960',
                rating: 62,
            },
            CPU: {
                model: 'Intel Core i5-7300U',
                rating: 54,
            },
            RAM: 16,
        },
    },
    {
        name: 'valorant',
        minHardware: {
            GPU: {
                model: 'Intel HD 4000',
                rating: 51,
            },
            CPU: {
                model: 'Intel Core 2 Duo E8400',
                rating: 53,
            },
            RAM: 4,
        },
        recHardware: {
            GPU: {
                model: 'Geforce GT 730',
                rating: 54,
            },
            CPU: {
                model: 'Intel Core i3-4150',
                rating: 53,
            },
            RAM: 4,
        },
    },
    {
        name: 'cs2',
        minHardware: {
            GPU: {
                model: 'GTX 1060',
                rating: 67,
            },
            CPU: {
                model: 'Intel Core i5 2500k',
                rating: 76,
            },
            RAM: 4,
        },
        recHardware: {
            GPU: {
                model: 'RTX 2070',
                rating: 68,
            },
            CPU: {
                model: 'Intel Core i7 9700k',
                rating: 92,
            },
            RAM: 16,
        },
    },
    {
        name: 'lol',
        minHardware: {
            GPU: {
                model: 'GeForce 9600GT',
                rating: 53,
            },
            CPU: {
                model: 'Intel Core i3-530',
                rating: 51,
            },
            RAM: 2,
        },
        recHardware: {
            GPU: {
                model: 'GeForce 560',
                rating: 53,
            },
            CPU: {
                model: 'Intel Core i5 3330',
                rating: 54,
            },
            RAM: 4,
        },
    },
    {
        name: 'gtaV',
        minHardware: {
            GPU: {
                model: 'GeForce 9800 GT',
                rating: 52,
            },
            CPU: {
                model: 'Core 2 Quad Q6600',
                rating: 56,
            },
            RAM: 4,
        },
        recHardware: {
            GPU: {
                model: 'NVidia GTX 660',
                rating: 54,
            },
            CPU: {
                model: 'Intel Core i5 3470',
                rating: 56,
            },
            RAM: 8,
        },
    },
]

const fortnite = games.find(game => game.name === 'fortnite');
const valorant = games.find(game => game.name === 'valorant');
const cs2 = games.find(game => game.name === 'cs2');
const lol = games.find(game => game.name === 'lol');
const gtaV = games.find(game => game.name === 'gtaV');

let fortniteButton = document.getElementById('fort');
let valorantButton = document.getElementById('val');
let cs2Button = document.getElementById('cs');
let lolButton = document.getElementById('league');
let gtaButton = document.getElementById('gta');

let gameOptionsDiv = document.getElementById('gameOptions');
let gameSelection = document.getElementById('gameSelection');
let pc = document.getElementById('pc');

let selectedGames = [];

fortniteButton.addEventListener('click', function () {
    gameOptionsDiv.removeChild(fortniteButton);
    gameSelection.appendChild(fortniteButton);
    selectedGames.push(fortnite);
    calculatePCBuild();
})

valorantButton.addEventListener('click', function () {
    gameOptionsDiv.removeChild(valorantButton);
    gameSelection.appendChild(valorantButton);
    selectedGames.push(valorant);
    calculatePCBuild();
})

cs2Button.addEventListener('click', function () {
    gameOptionsDiv.removeChild(cs2Button);
    gameSelection.appendChild(cs2Button);
    selectedGames.push(cs2);
    calculatePCBuild();
})

lolButton.addEventListener('click', function () {
    gameOptionsDiv.removeChild(lolButton);
    gameSelection.appendChild(lolButton);
    selectedGames.push(lol);
    calculatePCBuild();
})

gtaButton.addEventListener('click', function () {
    gameOptionsDiv.removeChild(gtaButton);
    gameSelection.appendChild(gtaButton);
    selectedGames.push(gtaV);
    calculatePCBuild();
})

function calculatePCBuild() {
    let maxGPU = selectedGames[0].minHardware.GPU;
    let maxCPU = selectedGames[0].minHardware.CPU;
    let maxRAM = selectedGames[0].minHardware.RAM;

    selectedGames.forEach(game => {
        if (game.minHardware.GPU.rating > maxGPU.rating) {
            maxGPU = game.minHardware.GPU;
        }
        if (game.minHardware.CPU.rating > maxCPU.rating) {
            maxCPU = game.minHardware.CPU;
        }
        if (game.minHardware.RAM > maxRAM) {
            maxRAM = game.minHardware.RAM;
        }
    });

    let pcBuild = {
        GPU: maxGPU,
        CPU: maxCPU,
        RAM: maxRAM,
    };

    pc.textContent = JSON.stringify(pcBuild, null, 2);
}