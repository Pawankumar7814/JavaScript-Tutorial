function chang1(obj) {
    obj.name = "ninjas";
};

function chang2(obj) {
    obj = { name: "changed" };
};

var obj = { name: "coding" };
chang1(obj);
chang2(obj);

console.log(obj.name);