function request(post) {
    var result = {"result": true};

    // Get parameters from post
    var paramOne = post.param1;
    var paramTwo = post.param2;

    // Add String to end
    paramOne += " World";
    paramTwo += " Ipsum";
    
    // Apply to result
    result.param1 = paramOne;
    result.param2 = paramTwo;

    return JSON.stringify(result);
}
