async function login(event) {
    event.preventDefault();

    const form = document.querySelector('.auth-form');
    for (const elem of form.elements) {
        elem.disabled = true;
    }

    const response = await fetchMock('http://example.com/auth', {
        method: 'POST',
        body: new FormData(form)
    })

    console.info(response);
    alert('Login successful');
}

async function fetchMock(url, options) {
    await new Promise(resolve => {
        setTimeout(resolve, 2000);
    })

    return new Response(null, {status: 200, statusText: 'OK'});
}