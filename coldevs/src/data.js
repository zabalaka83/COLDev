const DATABASE = {
    users: [
        {   
            Id_Empleado: 1,
            cedula: 123456,
            password: 'qwert',
            rol: 1
        },
        {   
            Id_Empleado: 2,
            cedula: 789012,
            password: 'qwert',
            rol: 2
        },
        {   
            Id_Empleado: 3,
            cedula: 345678,
            password: 'qwert',
            rol: 3
        }
    ],
    ventas: [
        {
           Id_Venta: 1,
           Empleado: 'Empleado_1',
           Cliente: 'Cliente_1',
           Estado: 'Abierta',
           Total: 345345
        },
        {
            Id_Venta: 1,
            Empleado: 'Empleado_2',
            Cliente: 'Cliente_3',
            Estado: 'Abierta',
            Total: 345345
         },
         {
            Id_Venta: 1,
            Empleado: 'Empleado_1',
            Cliente: 'Cliente_2',
            Estado: 'Abierta',
            Total: 345345
         },
         {
            Id_Venta: 1,
            Empleado: 'Empleado_3',
            Cliente: 'Cliente_5',
            Estado: 'Abierta',
            Total: 345345
         },
         {
            Id_Venta: 1,
            Empleado: 'Empleado_1',
            Cliente: 'Cliente_4',
            Estado: 'Abierta',
            Total: 345345
         },
         {
            Id_Venta: 1,
            Empleado: 'Empleado_3',
            Cliente: 'Cliente_8',
            Estado: 'Abierta',
            Total: 345345
         }
    ],
    productos: [

    ],
    empleados: [

    ],
    pendientes: [

    ]
};
    
export default DATABASE;