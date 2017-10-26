import { GET_USERS } from "./action";
const api = "https://randomuser.me/api/?results=50&nat=gb";

export function handleUser() {
  console.log('SDASDAsdasdas')
  return function(dispatch) {
    fetch(api)
    .then(response => response.json())
    .then(parsedResponse => parsedResponse.results.map(user => ({
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      thumbnail: user.picture.thumbnail,
      phone:user.phone
    })))
    .then(arrnotri => {
      return arrnotri
        .sort(function(a, b) {
          return a.name.localeCompare(b.name);
        })
        .reduce(
          (acc, val) => {
            if (!acc[val.name[0]]) {
              acc[val.name[0]] = [val];
            } else {
              acc[val.name[0]].push(val);
            }
            return acc;
          },
          {}
        );
    })
      .then(response => {
        dispatch({ type: GET_USERS, response })
      })
      .catch(error => console.error("FETCH error", error));
  };
}
