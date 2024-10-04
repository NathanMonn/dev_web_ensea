// Création de l'objet student
let student = {
	name: "Marie",
	age: 20,
	courses: []
  };
  
// Modification de l'âge et ajout de la propriété grade
student.age = 21;
student.grade = "A";

// Ajout des éléments au tableau courses
student.courses.push("Math", "Physics", "Chemistry");

// Recherche de l'index de "Physics"
let physicsIndex = student.courses.indexOf("Physics");

// Création d'un nouveau tableau contenant les deux premiers éléments
let firstTwoCourses = student.courses.slice(0, 2);

// Affichage des résultats
console.log("Objet student après modifications :", student);
console.log("Index de 'Physics' :", physicsIndex);
console.log("Nouveau tableau avec slice :", firstTwoCourses);
  