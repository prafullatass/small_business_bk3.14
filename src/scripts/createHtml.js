const createHtml = {
    employeeHtml: (employee) => {
        return `
    <article class="employee">
    <header class="employee__name">
        <h1>${employee.firstName} ${employee.lastName}</h1>
    </header>
    <section class="employee__department">
        Works in the ${employee.department.deptName} department
    </section>
    <section class="employee__computer">
        Currently using a ${employee.computer.make} ${employee.computer.model}
    </section>
</article><hr/>
    `
    },
    computerHtml: (computer) => {
        let stringHtml = `<article class="employee">
        <header class="employee__name">
            <h1>${computer.make} ${computer.model} computer users :</h1>
        </header>`
        computer.employees.forEach(employee => {
            stringHtml += `<section class="employee__department">
            ${employee.firstName} ${employee.lastName}
        </section>`
        });
        return stringHtml
    }
}

export default createHtml