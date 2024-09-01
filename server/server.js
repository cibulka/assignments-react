const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

function getItemById(id) {
    return router.db.get('items').find({ id }).value();
}

function writeItem(id, payload) {
    router.db.get('items').find({ id }).assign(payload).write()
}

// TODO: This returns 404 on client
server.put(`/items/:id/complete`, (req, res) => {
    const id = req.params.id;
    const item = getItemById(id);
    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }
    const modifiedItem = {
        ...item,
        finishedAt: Date.now(),
        isDone: true,
    };
    writeItem(id, modifiedItem);
    res.status(200).json(modifiedItem);
});

// TODO: This returns 404 on client
server.put(`/items/:id/incomplete`, (req, res) => {
    const id = req.params.id;
    const item = getItemById(id);
    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }
    const { finishedAt, ...rest } = item;
    const modifiedItem = {
        ...rest,
        isDone: false,
    };
    writeItem(id, modifiedItem);
    res.status(200).json(modifiedItem);
});

server.use(jsonServer.bodyParser);
server.use((req, _res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
