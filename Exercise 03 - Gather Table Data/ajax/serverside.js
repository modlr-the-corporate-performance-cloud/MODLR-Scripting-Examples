function request(post) {
    var result = {"result": true};

    // Internal Datastore
    let datasourceName = "Internal Datastore";
    // Generate SQL Query
    let sql = "SELECT * FROM store_optimisation.users;";
    // Run SQL and add to result
    result.users = JSON.parse(datasource.select(datasourceName, sql));

    return JSON.stringify(result);
}
