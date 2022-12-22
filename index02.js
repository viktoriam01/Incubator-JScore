//Самые используемые методы массивов
// CRUD -
// Create - [...arr, newEl]  - то же самое что и [...arr].push(newEl)
// Read - {} +> <> </> - map, filter, sort?  - sort (если сортировка не устроена на бэке)
// Update - map
// Delete - filter

// arr = arr[arr.length-1]  переписывает изначальный массив, удаляя последний элемент

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
        scores: 85
    },

    {
        id: 2,
        name: 'Alex',
        isStudent: true,
        scores: 89
    },

    {
        id: 3,
        name: 'Ann',
        isStudent: true,
        scores: 120
    },

    {
        id: 4,
        name: 'Donald',
        isStudent: true,
        scores: 100
    },
]

