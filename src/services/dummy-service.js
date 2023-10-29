// export function getUserData(userId) {
//   return fetch(`https://api.example.com/users/${userId}`)
//     .then(response => response.json())
//     .then(data => {
//       return {
//         name: data.name,
//         email: data.email,
//         age: data.age
//       };
//     });
// }

// export const calculate = (n1, operator, n2) => {
//   return operator(n1, n2);
// };

// export const sum = (n1, n2) => n1 + n2;

// export const substract = (n1, n2) => n1 - n2;

export const helper = ()=>{
    const random = Math.random();
    if(random > 0.5)
    {
      return true;
    }
    else
    {
      return false;
    }
}


export const execute = ()=>{
      if(exports.helper())
      {
        return "Hello World"
      }
      else
      {
        return "bye world";
      }
}