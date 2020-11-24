function request(post) {
    var result = {"result": true};

    // Get parameters from post
    let email_to = post.email_to;
    let email_subject = post.email_subject;
    let email_content = post.email_content;

    notification.email(email_to, "noreply@modlr.co", email_subject, email_content);

    return JSON.stringify(result);
}
