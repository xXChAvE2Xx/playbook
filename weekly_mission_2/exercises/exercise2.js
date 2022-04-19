const facebook = {
    user: "Raul Chavez",
    post: 40,
    biography: "Estudiante de la Facultad de Telematica y desarrollaodr apasionado de backend.",
    hobbies: ["Viajes", "Videojuegos", "Musica"],
    city: "Colima",
    friends: 500
}

const twitter = {
    user: "RikuS4ma",
    trending_topic: 45,
    hashtag: "#Innovacion",
    followers: 33
}

const uber = {
    profile: "Raul Antonio Chavez Aguirre",
    travels: 45,
    lastTravel: "Villa de Alvarez"
}

//Imprimiendo los nombes de los perfieles
console.log("Nombre perfil de Facebook: " + facebook.user);
console.log("Nombre perfil de Twitter: " + twitter.user);
console.log("Nombre perfil de Uber: " + uber.profile);

//Imprimiendo enteros
console.log("Total Post Facebook: " + facebook.post);
console.log("Followers en Twitter: " + twitter.followers
);
console.log("Total de viajes en Uber: " + uber.travels);

//Sumando enteros
console.log(`Seguidores en Twitter (${twitter.followers}) + Amigos en Facebook (${facebook.friends}):`  + (facebook.friends + twitter.followers));