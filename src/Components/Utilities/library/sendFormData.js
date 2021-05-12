const sendFormData = (response, setMessage) => {
  const data = {};

  for (const key in response) {
    if (Object.hasOwnProperty.call(response, key)) {
      const element = response[key];
      const { name, value } = element;

      if (value) data[name] = value;
    }
  }

  console.log(data);

  fetch("https://formsubmit.co/ajax/garima@sociomonkey.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      setMessage(() => data["message"]);
      console.log(data);
    })
    .catch((error) => {
      setMessage(() => error["message"]);
      console.log(error);
    })
    .finally(() => {
      setTimeout(() => {
        setMessage(() => "");
      }, 10000);
    });
};

export default sendFormData;
