const express = require("express")
const router = express.Router()
const { getAllUsers,createNewUser,updateUser,deleteUser } = require("../controllers/usersControllers")

/*
const userArray = [
	{ id: 1, firstName: "John", lastName: "Doe", role: "admin" },
	{ id: 2, firstName: "Jane", lastName: "Smith", role: "user" },
	{ id: 3, firstName: "Alice", lastName: "Johnson", role: "moderator" },
	{ id: 4, firstName: "Bob", lastName: "Brown", role: "user" },
	{ id: 5, firstName: "Charlie", lastName: "Davis", role: "admin" },
]*/

router.get("/users", getAllUsers)


// POST : CRÉER un nouvel utilisateur, basé sur les données passées dans le corps(body) de la requête
router.post("/users", createNewUser)

// GET : LIRE tous les utilisateurs
/*app.get("/", (req, res) => {
	const id = parseInt(req.params.id)

	// trouve son index, verifier si le userIndex est positive
	const userIndex = users.findIndex((user) => user.id === id)

	// utilisateur non trouvé
	if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })
	// si el est trouvé
	res.json(users[userIndex])
})*/

// GET : LIRE tous les utilisateurs
router.put("/users/:id", updateUser)

// GET : LIRE tous les utilisateurs
router.delete("/users/:id", deleteUser)

module.exports = router