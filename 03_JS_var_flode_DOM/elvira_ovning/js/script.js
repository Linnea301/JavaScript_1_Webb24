let bobAge=30;
let robAge=25;
let zobAge=35;

if (bobAge > robAge && bobAge > zobAge){
    console.log("Bob är äldst");
} else if (robAge > bobAge && robAge > zobAge){
    console.log("Rob är äldst");
} else if (zobAge > bobAge && zobAge > robAge){
    console.log("Zob är äldst");
}

if (bobAge === robAge && bobAge === zobAge && robAge === zobAge) {
    console.log("Det har alla samma ålder");
} else if (bobAge === robAge || bobAge === zobAge || robAge === zobAge) {
    console.log("Det är lika mellan vissa personer");
}