const createHtml = (employee) => {
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
</article>
    `
}

export default createHtml