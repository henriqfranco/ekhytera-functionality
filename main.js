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