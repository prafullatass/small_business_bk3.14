const DataManager = {
    getEmployees : () => {
        return fetch("http://localhost:8088/employees?_expand=computer&_expand=department")
        .then(res=> res.json())
    },
    // get employees from computer
    getComputerDetails : () => {
        return fetch("http://localhost:8088/computers?_embed=employees")
        .then(res => res.json())
    }
}


export default DataManager