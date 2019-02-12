// fetch Data
// make html
//print to DOm
import DataManager from "./DataManager"
import createHtml from "./createHtml"
import printToDOM from "./printToDOM"

DataManager.getEmployees().then(
    employees => {
        employees.forEach(employee => {
            printToDOM (createHtml.employeeHtml(employee), ".employeeList")
        });
    }
)
DataManager.getComputerDetails().then(
    computers => {
        computers.forEach(computer => {
            printToDOM (createHtml.computerHtml(computer), ".computerList")
        });
    }
)