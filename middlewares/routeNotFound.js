const routeNotFound = (req, res) => {
    res.status(404).json({ msg: "Route Does Not Exists" });
};

module.exports = routeNotFound;
