var unsereHaustiere = [
    {
      tiertyp: "Katze",
      names: [
        "Gipsy",
        "Nala",
        "Dinky"
      ]
    },
    {
      tiertyp: "Hunde",
      names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
      ],
      changeName: (newNames) => unsereHaustiere[1].names = newNames
    }
];
  
console.log(unsereHaustiere[0].names[1])
console.log(unsereHaustiere[1].names[2])
console.log(unsereHaustiere[1].names)
unsereHaustiere[1].changeName(["Snoopy", "Horst"])
console.log(unsereHaustiere[1].names)
  