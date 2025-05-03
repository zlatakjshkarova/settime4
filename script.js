const url1 = "https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_3840x2160.jpg"

const url2 = "https://images.wallpaperscraft.ru/image/single/bmw_avtomobil_bamper_191131_3840x2160.jpg"

const url3 = "https://images.wallpaperscraft.ru/image/single/mitsubishi_lancer_evo_x_tiuning_96277_3840x2400.jpg"

const img = document.createElement('img')
img.height = 200;
img.src = url1
document.body.append(img)

img.addEventListener('load', () => {
    const img2 = document.createElement('img')
    img2.height = 200;
    img2.src = url2
    document.body.append(img2)

    img2.addEventListener('load', () => {
        const img3 = document.createElement('img')
        img3.height = 200;
        img3.src = url3

        document.body.append(img3)
        img3.addEventListener('load', () => {
            console.log('все картинки загружены')
        })
    })
})





