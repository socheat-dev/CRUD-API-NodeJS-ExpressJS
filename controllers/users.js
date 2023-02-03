import { v4 as uuidv4 } from "uuid";
let users = [];

export const getUsers = (req, res) => {
  //   console.log(users);
  res.send(users);
};

export const createUsers = (req, res) => {
  //   console.log("POST ROUTE REACHED");
  //   console.log(req.body);
  const user = req.body;
  //   const userId = uuidv4();
  //   const userWithId = {
  //     ...user,
  //     id: uuidv4(),
  //   };
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstName} added to the database!`);
};

export const getUser = (req, res) => {
  //   console.log(req.params);
  //   res.send(req.params);
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deletedUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database!`);
};

export const updatedUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
};
