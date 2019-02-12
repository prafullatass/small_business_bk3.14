const printToDom = (whatToPrint, WhereonDom) => {
    document.querySelector(WhereonDom).innerHTML += whatToPrint
}

export default printToDom