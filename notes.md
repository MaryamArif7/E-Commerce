const register = async (values, onSubmitProps) => {
  // This allows us to send form info with image
  const formData = new FormData();
  for (let value in values) {
    formData.append(value, values[value]);
  }
  formData.append("picturePath", values.picture.name);

  // Pauses execution of the register function until the fetch Promise is resolved
  const savedUserResponse = await fetch(
    "http://localhost:3001/auth/register",
    {
      method: "POST",
      body: formData,
    }
  );

  // Pauses execution of the register function until the json() Promise is resolved
  const savedUser = await savedUserResponse.json();

  // Calls a method to reset the form fields to their initial values
  onSubmitProps.resetForm();

  // If the user is successfully registered, then set the page type to "login"
  if (savedUser) {
    setPageType("login");
  }
};
1:
async Function: An async function always returns a Promise. This allows you to use await within it.
await Keyword: When await is used, it pauses the execution of the async function until the awaited Promise is resolved or rejected.
Promise: A Promise represents an asynchronous operation that can either be resolved (success) or rejected (failure).
2:
The execution pauses at await fetch(...) until the network request completes and the Promise returned by fetch is resolved.
It then pauses again at await savedUserResponse.json() until the Promise returned by json() is resolved.
During these pauses, other JavaScript code can continue to run, making the application more efficient.