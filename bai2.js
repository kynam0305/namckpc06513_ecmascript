const createSayHello = (name, age) => {
    return () => {
        console.log(`Tôi tên là ${name}. Tôi ${age} tuổi.`);
    };
};

const sayHello1 = createSayHello("Hung", 36);
const sayHello2 = createSayHello("Tuan", 27);

sayHello1();
sayHello2();
