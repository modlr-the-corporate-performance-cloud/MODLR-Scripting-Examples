function request(post) {
    var result = {"result": true};

    // Get parameters from post
    var message = script.escape(post.message);
    
    // Apply to result
    result.message = message;

    return JSON.stringify(result);
}
