const baseUrl = "http://localhost:3000";

export const getStaffList = () => {
  const relUrl = "/staffdirectory";

  return fetch(new URL(relUrl, baseUrl)).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject("There was some error getting data from the service");
  });
};

export const getStaffByName = (name:string) => {
  const relUrl = "/staffdirectory/staff?"

  return fetch('http://localhost:3000/staffdirectory/staff?' + new URLSearchParams({name: name}))
    .then((res) =>  res.json())
    .then(json=> { return json})
    .catch(console.error);
}

export const EditExistingStaff = (
  id: string,
  name: string,
  department: string,
  phone: string,
  address: string,
  city: string,
  state: string,
  zipcode: string,
  country: string,
  description: string
) => {
  const relUrl = "/staffdirectory/edit";

  const StaffObject = {
    id: id,
    name: name,
    department: department,
    phone: phone,
    address: address,
    city: city,
    state: state,
    zip: zipcode,
    country: country,
    description: description
  };

  const body = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(StaffObject),
  }
  
  return fetch(new URL(relUrl, baseUrl), body).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject("There was some error saving the information.");
  });
}

export const saveNewStaff = (
  name: string,
  department: string,
  phone: string,
  address: string,
  city: string,
  state: string,
  zipcode: string,
  country: string,
  description: string
) => {
  const relUrl = "/staffdirectory/create";

  const StaffObject = {
    name: name,
    department: department,
    phone: phone,
    address: address,
    city: city,
    state: state,
    zip: zipcode,
    country: country,
    description: description
  };

  const body = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(StaffObject),
  }
  
  return fetch(new URL(relUrl, baseUrl), body).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject("There was some error saving the information.");
  });
}
