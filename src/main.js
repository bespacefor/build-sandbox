class App {

    run = async (name = 'World') => {
        console.log(`Hello ${name}`);
    };
}

const app = new App();
app.run()
    .then((e) = console.log('done'))
    .catch((e) = console.log('error'));
