export function sortBy(sortingProperty, sortingOrder, array) {
    if (sortingProperty === 'hdd_capacity') {
        if (sortingOrder === 'DESC') {
            return array.sort((a, b) => (Number(a[sortingProperty]) < Number(b[sortingProperty])) ? 1 : -1);
        } else {
            return array.sort((a, b) => (Number(a[sortingProperty]) > Number(b[sortingProperty])) ? 1 : -1);
        }
    } else {
        if (sortingOrder === 'DESC') {
            return array.sort((a, b) => (a[sortingProperty] < b[sortingProperty]) ? 1 : -1);
        } else {
            return array.sort((a, b) => (a[sortingProperty] > b[sortingProperty]) ? 1 : -1);
        }
    }
}


