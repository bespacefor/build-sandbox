class App {

    run = async (name = 'World') => {
        console.log(`Hello ${name}`);
        console.log([1, 2, [2, 3]].flat());
    };
}

const app = new App();
app.run()
    .then((e) = console.log('done'))
    .catch((e) = console.log('error'));
