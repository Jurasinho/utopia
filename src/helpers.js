const R = require('ramda');

const peopleProperties = ['population', 'unemployment', 'births', 'deaths'];
const cashProperties = ['GDP', 'consumption', 'investment', 'government'];

const includes = array => value => array.find(val => value.includes(val));
const isItPeople = val => includes(peopleProperties)(val);
const isItCash = val => includes(cashProperties)(val);

export function formatValue(value, key) {
    const patterns = [
        [(value, key) => typeof value === "number" && key.includes('ratio'), (val) => `${val}%`],
        [(value, key) => typeof value === "number" && isItCash(key), (val) => `${val.format()} $`],
        [(value, key) => typeof value === "number" && isItPeople(key), (val) => `${val.format()}`],
        [(value, key) => true, val => val]
    ];

    let pattern = patterns.find(p => p[0](value, key));

    return pattern[1](value);
}
