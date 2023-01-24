const conversion = function(id, convert) {
    const input = document.querySelector(`${id} .input`)
    const choice = document.querySelector(id + " .choice")
    const display = document.querySelector(id.concat(" .display"))

    input.addEventListener("input", () => {
        display.innerText = convert(input.value, choice.value)
    })

    choice.addEventListener("change", () => {
        display.innerText = convert(input.value, choice.value)
    })
}

conversion("#length-conversion", (val, unit) => {
    return unit == "cm" ? val*2.54 : val/2.54
})

conversion("#weight-conversion", (val, unit) => {
    return unit == "g" ? val*453.6 : val/453.6
})
