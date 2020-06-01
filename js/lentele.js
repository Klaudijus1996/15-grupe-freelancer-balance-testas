'use strict';
// Liudni reikalai :(
const months = [
    {
        1: 'Sausis'
    },
    {
        2: 'Vasaris'
    },
    {
        3: 'Kovas'
    },
    {
        4: 'Balandis'
    },
    {
        5: 'Geguze'
    },
    {
        6: 'Birzelis'
    },
    {
        7: 'Liepa'
    },
    {
        8: 'Rugpjutis'
    },
    {
        9: 'Rugsejis'
    },
    {
        10: 'Spalis'
    },
    {
        11: 'Lapkritis'
    },
    {
        12: 'Gruodis'
    }
];


let HTML = ``;

account.forEach(dalykai => {

    HTML += `<div class="table-row">
                <div class="cell">${dalykai.month}</div>
                <div class="cell">Sausis</div>
                <div class="cell">${dalykai.income}Eur</div>
                <div class="cell">${dalykai.expense}</div>
                <div class="cell">${dalykai.income-dalykai.expense}</div>
            </div>
    `;
    
                })

document.querySelector('.table-content').innerHTML += HTML

let footerHTML = ``;
// account.forEach(footer => {
//     footerHTML += `
//             <div class="cell"></div>
//             <div class="cell"></div>
//             <div class="cell">${footer.expense++} Eur</div>
//             <div class="cell">0.00 Eur</div>
//             <div class="cell">0.00 Eur</div>
//     `;
// })

for (let i = 0; i<account.length;i++) {
    console.log(account[i++].income)
    footerHTML += `
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell">${account[i].expense} Eur</div>
    <div class="cell">0.00 Eur</div>
    <div class="cell">0.00 Eur</div>
    `
}
document.querySelector('.table-footer').innerHTML += footerHTML
