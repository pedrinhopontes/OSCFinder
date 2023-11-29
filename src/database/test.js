const Database = require('./db').default;
const saveInstitute = require('./saveInstitute');

Database.then(async db => {
   
    // inserir dados na tabela
    await saveInstitute(db, {
        lat: "-22.8681361",
        lng: "-43.4100327",
        name: "Lar das meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "98989897898",
        images: [
            "https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1601564267677-a36d03ec2be5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedInstitutes = await db.all("SELECT * FROM instutes")
    console.log(selectedInstitutes)

    // // consultar somente 1 orphanato, pelo id
    const instute = await db.all('SELECT * FROM instutes WHERE id = "2"')
    console.log(instute)

    // // deletar dado da tabela
    // console.log(await db.run("DELETE FROM instutes WHERE id = '4'"))
    // console.log(await db.run("DELETE FROM instutes WHERE id = '5'"))

})