
function debounce(fn, delay) {
    let timeoutId: null = null;
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fn();
    }, delay);
}