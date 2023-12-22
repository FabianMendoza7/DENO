async function saveUser() {
  const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(
      {
        name: "Elon Musk",
        job: "billionaire",
      },
    ),
  });

  const responseData = await response.json();
  console.log(responseData);
}

await saveUser();
