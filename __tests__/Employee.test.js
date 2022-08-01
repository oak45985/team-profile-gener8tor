const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee('Larry','2','larry@gmail.com','manager');

    expect(employee.name).toBe(String);
    expect(employee.id).toBe(expect.any(String));
    expect(employee.email).toBe(expect.any(String));
    expect(employee.role).toBe(expect.any(String));
});