export default function passwordChecker(currentpassword, datacurrpass) {
  if (currentpassword === datacurrpass) {
    return "Proceed";
  } else {
    return "password is not correct";
  }
}
