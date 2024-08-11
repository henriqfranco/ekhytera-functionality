const games2 = [
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

const games = [
    {
        name: 'fortnite',
        GPU: {
            model: 'GTX 960',
            rating: 62
        },
        CPU: {
            model: 'Intel Core i5-7300U',
            rating: 54
        },
        RAM: 16
    },

    {
        name: 'valorant',
        GPU: {
            model: 'Geforce GT 730',
            rating: 54
        },
        CPU: {
            model: 'Intel Core i3-4150',
            rating: 53
        },
        RAM: 4
    },

    {
        name: 'counterStrike2',
        GPU: {
            model: 'RTX 2070',
            rating: 68
        },
        CPU: {
            model: 'Intel Core i7 9700k',
            rating: 92
        },
        RAM: 16
    },

    {
        name: 'leagueOfLegends',
        GPU: {
            model: 'GeForce 560',
            rating: 53
        },
        CPU: {
            model: 'Intel Core i5 3330',
            rating: 54
        },
        RAM: 4
    },

    {
        name: 'grandTheftAutoV',
        GPU: {
            model: 'NVidia GTX 660',
            rating: 54,
        },
        CPU: {
            model: 'Intel Core i5 3470',
            rating: 56,
        },
        RAM: 8,
    }
];

let selectedGames = [
    games.find(game => game.name === 'valorant'),
    games.find(game => game.name === 'fortnite'),
    games.find(game => game.name === 'grandTheftAutoV'),
];

let maxGPU = selectedGames[0].GPU;
let maxCPU = selectedGames[0].CPU;
let maxRAM = selectedGames[0].RAM;

selectedGames.forEach(game => {
    if (game.GPU.rating > maxGPU.rating) {
        maxGPU = game.GPU;
    }
    if (game.CPU.rating > maxCPU.rating) {
        maxCPU = game.CPU;
    }
    if (game.RAM > maxRAM) {
        maxRAM = game.RAM;
    }
});

let pcBuild = {};

pcBuild.GPU = maxGPU;
pcBuild.CPU = maxCPU;
pcBuild.RAM = maxRAM;

console.log(pcBuild);