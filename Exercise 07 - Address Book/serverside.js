function request(post) {
    let result = {"result": true};
    let sql = "";
    let datasourceName = "Internal Datastore";

    // Get parameters from post
    let action = post.action;

    if(action === "add") {
        // Add Contact
        let name = post.name;
        let role = post.role;
        let email = post.email;
        let phone = post.phone;

        // Generate SQL
        sql = "INSERT INTO exercise_07.address_book (address_book_name, address_book_role, address_book_email, address_book_number) VALUES(?,?,?,?);";
        // Insert the data using the SQL with the parameters
        datasource.insert(datasourceName, sql, [name, role, email, phone]);
    } else if(action === "edit") {
        // Edit contact by unique id
        let name = post.name;
        let role = post.role;
        let email = post.email;
        let phone = post.phone;
        let id = post.id;

        // Generate SQL
        sql = "UPDATE exercise_07.address_book SET address_book_name = ?, address_book_role = ?, address_book_email = ?, address_book_number = ? WHERE address_book_id = ?;";
        // Update the data using the SQL with the parameters
        datasource.update(datasourceName, sql, [name, role, email, phone, id]);

    } else if(action === "delete") {
        // Delete contact by unique id
        let id = post.id;

        // Generate SQL
        sql = "DELETE FROM exercise_07.address_book WHERE address_book_id = ?;";
        // Update the data using the SQL with the parameters
        datasource.update(datasourceName, sql, [id]);
    } else if(action === "get") {
        let id = post.id;
        // Generate SQL
        sql = "SELECT * FROM exercise_07.address_book WHERE address_book_id = ?;";
        // Execute the SQL and parse it so we can access the data
        let contacts = JSON.parse(datasource.select(datasourceName, sql, [id]));
        // We're expecting only one contact, so check length
        if(contacts.length == 0) {
            // No contact could be found throw an error (console)
            result.result = false;
            result.error = "Could not find user";
        } else {
            // We got a result, we only want the first index of the array so return this.
            result.contact = contacts[0];
        }
    }

    // Whenever there's a request lets refresh the main table

    // Generate SQL
    sql = "SELECT * FROM exercise_07.address_book;";
    // Parse and return the results
    result.address_book = JSON.parse(datasource.select(datasourceName, sql));

    return JSON.stringify(result);
}
