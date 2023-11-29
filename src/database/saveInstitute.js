function saveInstitutes(db, institute) {
    return db.run(`
        INSERT INTO institutes (
            lat, 
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "${institute.lat}",
            "${institute.lng}",
            "${institute.name}",
            "${institute.about}",
            "${institute.whatsapp}",
            "${institute.images}",
            "${institute.instructions}",
            "${institute.opening_hours}",
            "${institute.open_on_weekends}"
        );
    `)
}

export default saveInstitutes;