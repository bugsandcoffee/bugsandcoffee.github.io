function sendMail(params) {
    var tempParams = {
        name: document.getElementById('name').value,
        user_email: document.getElementById('user_email').value,
        message: document.getElementById('message').value,
    }
    emailjs.send('service_jym8ivl','template_t0fyrfa', tempParams)
    .then(function(res){
        console.log('success',res.status)
    })
}

function clearField(params) {
    document.getElementById('name').value = ""
    document.getElementById('user_email').value = ""
    document.getElementById('message').value = ""
}

function success() {
    Swal.fire({
      icon: "success",
      title: "Thank you...",
      text: "We'll brew your reply shortly!",
    });
  }


function comingSoon() {
    Swal.fire({
      icon: "error",
      title: "Sorry!",
      text: "Social Media Coming Soon...",
      confirmButtonText: "OK!",
    });
}