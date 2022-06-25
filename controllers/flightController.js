import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });
    console.log(user);
    res.send("Your flight has been booked");
}

export const getUser = (req, res) => {
    const singleUser = users.filter((user) => user.id === req.params.id);
    res.send(singleUser);
};

export const deleteUser = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id);
    res.send("Scheduled Flight deleted");
}

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);

    user.title = req.body.title;
    user.time = req.body.time;
    user.price = req.body.price;
    user.date = req.body.date;

    res.send("Scheduled flight updated");
}


