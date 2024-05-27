document.getElementById('login').addEventListener('click', setCookie);
document.getElementById('show').addEventListener('click', showCookies);

function setCookie() {
    let cookieValueName = document.getElementById('firstname').value;
    document.cookie = `firstname=${cookieValueName}`;
    let cookieValueMail = document.getElementById('email').value;
    document.cookie = `email=${cookieValueMail}`;
}

function showCookies() {
    let cookieArray = document.cookie.split(';');
    let cookieOutput = '';
    cookieArray.forEach(cookie => {
        cookieOutput += `<p>${cookie}</p>`;
    });
    document.getElementById('cookies').innerHTML = cookieOutput;
}