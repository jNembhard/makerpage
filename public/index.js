function validateEmail(email) {
  let regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

function validate() {
  const $result = $("#result");
  const email = $("#email").val();
  const $email = $("#email");
  $result.text("");

  if (validateEmail(email)) {
    $email.addClass("border--success");
    $email.removeClass("border--error");
  } else if (email === "") {
    $result.text("Oops! Please add your email");
    $email.addClass("border--error");
    $email.removeClass("border--success");
  } else {
    $result.text("Oops! That doesn't look like an email");
    $email.addClass("border--error");
    $email.removeClass("border--success");
  }
  return false;
}
