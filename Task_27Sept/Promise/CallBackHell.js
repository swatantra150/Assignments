// Simulating async operations with callbacks

function fetchData(dataId, callback) {
    setTimeout(() => {
        console.log(`Data fetched for ID: ${dataId}`);
        callback(null, dataId);
    }, 1000);
}

function processData(dataId, callback) {
    setTimeout(() => {
        console.log(`Data processed for ID: ${dataId}`);
        callback(null, dataId);
    }, 1000);
}

function saveData(dataId, callback) {
    setTimeout(() => {
        console.log(`Data saved for ID: ${dataId}`);
        callback(null, 'Success');
    }, 1000);
}

// This is callback hell (deeply nested callbacks)
fetchData(1, (err, dataId) => {
    if (err) {
        console.error('Error fetching data');
    } else {
        processData(dataId, (err, processedData) => {
            if (err) {
                console.error('Error processing data');
            } else {
                saveData(processedData, (err, status) => {
                    if (err) {
                        console.error('Error saving data');
                    } else {
                        console.log('All operations completed:', status);
                    }
                });
            }
        });
    }
});
