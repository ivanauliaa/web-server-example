const { fetchHistoriesFromAPI } = require('../../api/getHistories');
// const { renderTableRow } = require('...');

const renderHistoriesPage = async () => {
    const results = await fetchHistoriesFromAPI();

    results.forEach((result) => {
        // render row table by calling renderTableRow and passing result into it
    });
}
