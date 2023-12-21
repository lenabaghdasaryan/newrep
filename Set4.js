//Given an array of email addresses, use a Set to identify and log unique email addresses. This exercise simulates processing a list of user emails and ensuring there are no duplicates.
function getUniqueEmails(email) {
    let unique = new Set();
    email.forEach(element => {
        unique.add(element)
    });
    return unique

}
console.log(getUniqueEmails(['l.bagh@gmail.com', 'k.sogh@mail.ru',
    'm.bad@yahoo.com', 'anush.as@bk.ru',
    's.isr@rambler.com', 'k.sogh@mail.ru',
    'anush.as@bk.ru', 'n.khach.yandex.ru']))
