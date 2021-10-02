const DATABASE = {
    empleados: [
        {   
            Id_Empleado: 1,
            cedula: '123456',
            password: 'qwert',
            nombre: 'Empleado_1',
            direccion: 'calle 23 # 2n34 - Medellin - Antioquia',
            rol: 1
        },
        {   
            Id_Empleado: 2,
            cedula: '789012',
            password: 'qwert',
            nombre: 'Empleado_2',
            direccion: 'calle 23 # 2n34 - Medellin - Antioquia',
            rol: 2
        },
        {   
            Id_Empleado: 3,
            cedula: '345678',
            password: 'qwert',
            nombre: 'Empleado_3',
            direccion: 'calle 23 # 2n34 - Medellin - Antioquia',
            rol: 3
        }
    ],
    ventas: [
        {
           Id_Venta: 1,
           Empleado: 'Empleado_1',
           Cliente: 'Cliente_1',
           Estado: 'Abierta',
           Total: 345345,
           Productos: [
                {
                    Id_Producto: 1,
                    nombre: 'Camisa',
                    cantidad: 3,
                    precioUnidad: 10000,
                    precioTotal: 30000
                },
                {
                    Id_Producto: 2,
                    nombre: 'Jeans',
                    cantidad: 5,
                    precioUnidad: 10000,
                    precioTotal: 50000
                },
                {
                    Id_Producto: 3,
                    nombre: 'Polo',
                    cantidad: 2,
                    precioUnidad: 10000,
                    precioTotal: 20000
                },
            ]
        },
        {
            Id_Venta: 2,
            Empleado: 'Empleado_2',
            Cliente: 'Cliente_3',
            Estado: 'Abierta',
            Total: 345345,
            Productos: [
                {
                    Id_Producto: 1,
                    nombre: 'Camisa',
                    cantidad: 3,
                    precioUnidad: 10000,
                    precioTotal: 30000
                },
                {
                    Id_Producto: 2,
                    nombre: 'Jeans',
                    cantidad: 5,
                    precioUnidad: 10000,
                    precioTotal: 50000
                },
                {
                    Id_Producto: 3,
                    nombre: 'Polo',
                    cantidad: 2,
                    precioUnidad: 10000,
                    precioTotal: 20000
                },
            ]
         },
         {
            Id_Venta: 3,
            Empleado: 'Empleado_1',
            Cliente: 'Cliente_2',
            Estado: 'Abierta',
            Total: 345345,
            Productos: [
                {
                    Id_Producto: 1,
                    nombre: 'Camisa',
                    cantidad: 3,
                    precioUnidad: 10000,
                    precioTotal: 30000
                },
                {
                    Id_Producto: 2,
                    nombre: 'Jeans',
                    cantidad: 5,
                    precioUnidad: 10000,
                    precioTotal: 50000
                },
                {
                    Id_Producto: 3,
                    nombre: 'Polo',
                    cantidad: 2,
                    precioUnidad: 10000,
                    precioTotal: 20000
                },
            ]
         },
         {
            Id_Venta: 4,
            Empleado: 'Empleado_3',
            Cliente: 'Cliente_5',
            Estado: 'Abierta',
            Total: 345345,
            Productos: [
                {
                    Id_Producto: 1,
                    nombre: 'Camisa',
                    cantidad: 3,
                    precioUnidad: 10000,
                    precioTotal: 30000
                },
                {
                    Id_Producto: 2,
                    nombre: 'Jeans',
                    cantidad: 5,
                    precioUnidad: 10000,
                    precioTotal: 50000
                },
                {
                    Id_Producto: 3,
                    nombre: 'Polo',
                    cantidad: 2,
                    precioUnidad: 10000,
                    precioTotal: 20000
                },
            ]
         },
         {
            Id_Venta: 5,
            Empleado: 'Empleado_1',
            Cliente: 'Cliente_4',
            Estado: 'Abierta',
            Total: 345345,
            Productos: [
                {
                    Id_Producto: 1,
                    nombre: 'Camisa',
                    cantidad: 3,
                    precioUnidad: 10000,
                    precioTotal: 30000
                },
                {
                    Id_Producto: 2,
                    nombre: 'Jeans',
                    cantidad: 5,
                    precioUnidad: 10000,
                    precioTotal: 50000
                },
                {
                    Id_Producto: 3,
                    nombre: 'Polo',
                    cantidad: 2,
                    precioUnidad: 10000,
                    precioTotal: 20000
                },
            ]
         },
         {
            Id_Venta: 6,
            Empleado: 'Empleado_3',
            Cliente: 'Cliente_8',
            Estado: 'Abierta',
            Total: 345345,
            Productos: [
                {
                    Id_Producto: 1,
                    nombre: 'Camisa',
                    cantidad: 3,
                    precioUnidad: 10000,
                    precioTotal: 30000
                },
                {
                    Id_Producto: 2,
                    nombre: 'Jeans',
                    cantidad: 5,
                    precioUnidad: 10000,
                    precioTotal: 50000
                },
                {
                    Id_Producto: 3,
                    nombre: 'Polo',
                    cantidad: 2,
                    precioUnidad: 10000,
                    precioTotal: 20000
                },
            ]
         }
    ],
    productos: [
        
    ],
    pendientes: [
        
    ]
};
    
export default DATABASE;