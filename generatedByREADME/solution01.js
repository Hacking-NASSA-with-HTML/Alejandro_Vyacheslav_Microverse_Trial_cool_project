// This file was generated by README.org, read the solution from the source to get the link to the problem
function minimumDistances(a) {
    // Write your code here
    const minDistances = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            if (a[i] === a[j]) {
                minDistances.push(Math.abs(i-j));
            }
        }
    };

    return minDistances.length > 0 ? Math.min(...minDistances): -1;
}
