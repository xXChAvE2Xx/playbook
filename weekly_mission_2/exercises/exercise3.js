const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: false
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]


// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("Ejercicio 1: ");
explorers.forEach(explorer => console.log(explorer.name))

//Imprime el stack de cada explorer, usa FOR EACH
console.log("Ejercicio 2: ");
explorers.forEach(stack => console.log(stack.stack));

//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("Ejercicio 3: ");
const listStacks = explorers.map(stacks => stacks.stack);
console.log(listStacks);

//Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("Ejercicio 4: ");
//const result = explorers.filter(text => text.stack == 'js');
const result = explorers.filter(text => text.stack.includes('js'));
console.log(result);

//Busca el primer explorer que sea de la CDMX, usa FIND
console.log("Ejercicio 5: ");
const result1 = explorers.find(search => search.city === "CDMX");
console.log(result1);

//Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("Ejercicio 6: ");
const exercises_completed = explorers.reduce((sum, exercise) => sum + exercise.exercises_completed, 0);
console.log(exercises_completed);

//Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log("Ejercicio 7: ");
const exercisesFinishedTrue = explorers.some((isTrue) => isTrue.missions.frontend.exercisesFinished === true);
console.log(exercisesFinishedTrue);
//console.log(explorers[0].missions["onboarding"].isFinished);

//Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log("Ejercicio 8: ");
const isFinishedTrue = explorers.every((isTrue) => isTrue.missions.onboarding.isFinished === true);
console.log(isFinishedTrue)