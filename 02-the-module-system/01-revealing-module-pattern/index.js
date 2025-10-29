const myModule = (() => {
    const privateFoo = () => {};
    const privateBar = [];

    console.log("Inside:", privateFoo, privateBar);

    const exported = {
        publicFoo: () => {},
        publicBar: () => {},
        name: "abhiram",
    };

    return exported;
})(); // once the parenthesis here are parsed, the function will be invoked and the returned value assigned to myModule

console.log(
    "Outside:",
    myModule.privateFoo,
    myModule.privateBar,
    myModule.name,
);

console.log("public ourside:", myModule.publicBar, myModule.publicFoo);

console.log("Module:", myModule);
