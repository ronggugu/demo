const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function exportToCsv(data, filename) {
    const csvWriter = createCsvWriter({
        path: filename,
        header: Object.keys(data[0]).map(key => ({ id: key, title: key }))
    });

    // 将数字格式化为文本格式，并添加引号
    const formattedData = data.map(row => {
        const formattedRow = {};
        Object.keys(row).forEach(key => {
            formattedRow[key] = typeof row[key] === 'number' ? `"${row[key].toString()}"` : row[key];
        });
        return formattedRow;
    });

    csvWriter.writeRecords(formattedData)
        .then(() => {
            console.log('CSV file was written successfully');
        });
}

const data = [
    { id: '09', name: 'John Doe' },
    { id: '10', name: 'Jane Doe' }
];

exportToCsv(data, 'output.csv');
