function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    const formdata = new FormData();
    formdata.append("key", '0c9040692016fe7f516447bcb1c49fad');
    formdata.append("txt", formText);
    formdata.append("lang", 'en');  // 2-letter code, like en es fr ...

    const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(res => ({
        status: res.status,
        body: res.json(),
    }))
    .then(({status, body}) => {
        // console.log('Status:',status, 'Body:',body);
        return {status, body}
    })
    .then(data=>  {
        return data['body']
    })
    .then( data =>{
        document.getElementById('agreement').innerHTML = "Agreement/Disagreement: " + data.agreement;
        document.getElementById('subjectivity').innerHTML ="Sybjectivity/Objective: " + data.subjectivity;
        document.getElementById('confidence').innerHTML ="Confience(0-100): " + data.confidence;
        document.getElementById('irony').innerHTML = "Ironic/Nonironic: "+ data.irony;
    })
    .catch(error => console.log('error', error));

}

export { handleSubmit }
