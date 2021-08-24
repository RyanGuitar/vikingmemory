function Slider(locations){
    let template = '';
    for(let {image} of locations){
        template += `
        <div class="center">
            <img src=${image} class="sticker-gallery" loading="lazy">
        </div>`
    }
    return template;
}

export default Slider