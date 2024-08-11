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

let selectedGames = [
    games.find(game => game.name === 'valorant'),
    games.find(game => game.name === 'fortnite'),
    games.find(game => game.name === 'gtaV'),
];

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

let pcBuild = {};

pcBuild.GPU = maxGPU;
pcBuild.CPU = maxCPU;
pcBuild.RAM = maxRAM;

console.log(pcBuild);