function request(post) {
    var result = {"result": true};

    // Get parameters from post
    let cubeName = "cd67ee46ef478a879beb7692443d5878"; // Can be name

    result.value = cube.get(cubeName, "Budget", "CPI %");

    return JSON.stringify(result);
}
