
if (!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i))) {
    document.body.style.cssText = "width:60%;margin:auto;"
}
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
    document.getElementById('desc').className = 'w3-half w3-padding'
}

document.getElementById('alert').onclick = e=>{
    const txt = `${process.env.UNAME}:${process.env.PWORD}`
    fetch('https://4i7ncv.deta.dev/',{
        method:"GET",
        headers: {
            'Authorization':`Basic ${btoa(txt)}`
        }
    })
        .then(res=>{
            alert(res.statusText)
        })
}