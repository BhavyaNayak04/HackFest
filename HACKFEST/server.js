import express from 'express'
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/home", async (req, res) => {
    const menus = await prisma.user.findMany();

    console.log(menus);
})
//USER RELATED

app.post("/users", async (req, res) => {
    const { name, location, role } = req.body;

    console.log(req.body)
    // Check if the role value is a valid enum value
    if (!['USER', 'DONOR'].includes(role)) {
        return res.status(400).json({ error: 'Invalid role value' });
    }

    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                location,
                role,
            },
        });
        res.json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//GET all user
app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

//GetUser By id
app.get("/users/:id", async (req, res) => {
    const userId = req.params.id;
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    res.json(user);
});

//DELETE user
app.delete("/users/:id", async (req, res) => {
    const userId = req.params.id;
    const deletedUser = await prisma.user.delete({
        where: {
            id: userId,
        },
    });
    res.json(deletedUser);
});


//MENU related
app.post("/menus", async (req, res) => {
    const { itemName, itemQuantity, userId } = req.body;
    const newMenu = await prisma.menu.create({
        data: {
            itemName,
            itemQuantity,
            userId,
        },
    });
    res.json(newMenu);
});

//GET MENUS
app.get("/menus", async (req, res) => {
    const menus = await prisma.menu.findMany();
    res.json(menus);
    console.log("lamo")
});

//GET MENU by ID
app.get("/menus/:id", async (req, res) => {
    const menuId = req.params.id;
    const menu = await prisma.menu.findUnique({
        where: {
            id: menuId,
        },
    });
    res.json(menu);
});

//DELETE menu
app.delete("/menus/:id", async (req, res) => {
    const menuId = req.params.id;
    const deletedMenu = await prisma.menu.delete({
        where: {
            id: menuId,
        },
    });
    res.json(deletedMenu);
});



app.listen(PORT, (req, res) => {
    console.log(`listening at ${PORT}`)
})
