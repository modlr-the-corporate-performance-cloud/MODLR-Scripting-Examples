function request(post) {
    var result = {"result": true};

    // Get parameters from post
    var url = post.url;

    result.downloaded = http.download(url,"GET","","external_file.xls");

    return JSON.stringify(result);
}
