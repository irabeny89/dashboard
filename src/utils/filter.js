export const filter = (gender, users, input) =>
  input && users.filter(({ name }) => 
    (name.first.toLowerCase().includes(input.toLowerCase()) || name.last.toLowerCase().includes(input.toLowerCase()))) ||
  gender == "male" && users.filter(({ gender }) => gender === "male") ||
  gender == "female" && users.filter(({ gender }) => gender === "female") ||
  users 