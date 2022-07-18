// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(n => {
        return n.toUpperCase() === name.toUpperCase();
    });
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(n => {
        return n.substring(0, name.length) === name;
    });
}

function matchName(drivers, name) {
    return drivers.filter(n => {
        return n.name === name;
    });
}
