
//lista membri
const members = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        pic: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: " Chief Editor",
        pic: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Founder & CEO",
        pic: "walter-gordon-office-manager.jpg"
    },
    {
        name: " Angela Lopez",
        role: "Social Media Manager",
        pic: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        pic: " scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        pic: "barbara-ramos-graphic-designer.jpg"
    }

];



//stampo in console
for (let i = 0; i < members.length; i++) {

    const membersObject = members[i];

    for (let key in membersObject) {

        console.log(key + ": " + membersObject[key])
    }

    console.log("-------------")

}




