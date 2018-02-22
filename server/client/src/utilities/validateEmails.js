const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
    const invalidEmails = emails
    .split(',') //put each email into array
    .map(email => email.trim()) //remove whitespace
    .filter(email => !regex.test(email))

    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }

    return
};