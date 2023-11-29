import Database from "./database/db.js";
import saveInstitutes from "./database/saveInstitute.js";

export function index(req, res) {
    return res.render("index");
  }

  export async function institute(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const results = await db.all(
        `SELECT * FROM institutes WHERE id = "${id}"`
      );
      const institute = results[0];

      institute.images = institute.images.split(",");
      institute.firstImage = institute.images[0];

      if (institute.open_on_weekends == "0") {
        institute.open_on_weekends = false;
      } else {
        institute.open_on_weekends = true;
      }

      return res.render("institute", { institute });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados! 1");
    }
  }

  export async function institutes(req, res){
    try{
        const db = await Database;
        const institutes = await db.all("SELECT * FROM institutes");
        return res.render("institutes", { institutes });
    } catch (error) {
        console.log(error);
        return res.send("Erro no banco de dados! 2");
    }
  }

  export function createInstitute(req, res) {
    return res.render("create-institute");
  }

  export async function saveInstitute(req, res) {
    const fields = req.body;

    // validar se todos os campos estao preenchidos
    if (Object.values(fields).includes('')) {
      return res.send("Todos os campos devem ser preenchidos!");
    }

    try {
      // salvar um instituto
      const db = await Database;
      await saveInstitutes(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      // redirecionando
      return res.redirect("/institutes");
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados! 3");
    }
  }

