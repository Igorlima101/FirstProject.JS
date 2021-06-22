function createItems() {
    for (item = 0; item < 10; item++) {
        let text = "Hello World"
        switch (item) {
            case 0:
                document.write(`<p class = "on">${text} </p>`);
                break;
            case 1:
                document.write(`<p>${text.toUpperCase()}</p>`);
                break;
            case 2:
                document.write(`<p>${text.toLowerCase()}</p>`);
                break;
            case 3:
                document.write(`<p>${text.split("").reverse().join("")}</p>`);
                break;
            case 4:
                document.write(`<p>${text.split(" ").reverse().join("")}</p>`);
                break;
            case 5:
                document.write(`<p> H <br> E <br> 
                L <br> L <br> O <br> <br> W <br> O <br> R <br> L <br> D 
                </p>`);

                break;
            case 6:
                document.write(`<p>${text.split(" ").reverse().join(" ")}</p>`);
                break;
            case 7:
                document.write(`<p class = "rotates">${text.charAt(0,).toUpperCase()} ${text.slice(1)}</p>`);
                break;
            case 8:
                document.write(`<p class = "nova">${text.fontsize(7)} </p>`);
                break;
            case 9:
                document.write(`<p>${text.split("").reverse().join(" ")}</p>`);
                break;

            default:
                break;
        }
    }
}

createItems();