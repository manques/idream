import addDocument from "../../model/add.document.mjs";
import getDocument from "../../model/get.document.mjs";
import getDocuments from "../../model/get.documents.mjs";
import updateDocument from "../../model/update.document.mjs";
import deleteDocument from "../../model/delete.document.mjs";
import deleteDocuments from "../../model/delete.documents.mjs";

import pageView from "../page-view.controller.mjs";

// create user
const createUser = async (req, res, next) => {
    console.log('create user');
    // console.log(req);
    const { username, email, phone, password } = req.body;
    const data = { username, email, phone, password };
    // console.log(req);
    try {
        const result = await addDocument("users", data);
        console.log(result);
        return res.json({
            ...result,
            ...data
        });
    } catch(e) {
        const error = e;
        return res.json(error);
    }
}

// get user
const getUser = async (req, res, next) => {
    console.log('get user');
    const id = req.params.id; 
    const result = await getDocument('users', id);
    return res.json(result);
}

// get users
const getUsers = async (req, res, next) => {
    console.log('get users');
    console.log(req.params);
    const query = req.params;
    const result = await getDocuments('users', query);
    return res.json(result);
}

// update user
const updateUser = async (req, res, next) => {
    console.log('update user');
    const data = req.body;
    const id = data.id;
    delete data.id;
    console.log(data);
    const result = await updateDocument('users', id, data);
    return res.json(result);
}

// delete user
const deleteUser = async (req, res, next) => {
    console.log('delete user');
    const id = req.params.id;
    const result = await deleteDocuments('users');
    return res.json({
        id,
        ...result
    });
}

// delete user
const deleteUsers = async (req, res, next) => {
    console.log('delete users');
    const id = req.params.id;
    const result = await deleteDocument('users', id);
    return res.json({ ...result });
}


export {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    deleteUsers,
    pageView
};
