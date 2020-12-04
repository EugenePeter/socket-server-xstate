
module.exports = async (io:any) => {
  io.on("connection", async (socket: any) => {
    // console.log(`New connection from  >>>`, socket.id)

  //   socket.on("request", (data: any) => {
  //     console.log('%c 🍶 data: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', data);
  //     const admin_features = {
  //       reservation_date: {
  //         control: 'select',
  //         options: ['monday', 'tuesday'],
  //       },
  //       first_name: {
  //         control: 'input',
  //         readOnly: false,
  //         value: 'Franklin ',
  //       },
  //       last_name: {
  //         control: 'input',
  //         readOnly: false,
  //         value: 'Gabunada',
  //       },
  //     };


  //     socket.emit('data', {
  //       payload: {
  //         type: 'SESSION_CREATED',
  //         data: {
  //           controls: admin_features,
  //         },
  //       },
  //     });
  //   })
  //   socket.on('DATA', function (data: any) {

  //     console.log('Received: ', data);

  //     if (data.payload.user_role === 'admin') {
  //       const admin_features = {
  //         reservation_date: {
  //           control: 'select',
  //           options: ['monday', 'tuesday'],
  //         },
  //         first_name: {
  //           control: 'input',
  //           readOnly: false,
  //           value: 'Franklin ',
  //         },
  //         last_name: {
  //           control: 'input',
  //           readOnly: false,
  //           value: 'Gabunada',
  //         },
  //       };


  //       socket.emit('DATA', {
  //         payload: {
  //           type: 'SESSION_CREATED',
  //           data: {
  //             controls: admin_features,
  //           },
  //         },
  //       });
  //     }

  //     if (data.payload.user_role === 'user') {
  //       const admin_features = {
  //         reservation_date: {
  //           control: 'select',
  //           options: ['monday', 'tuesday'],
  //         },
  //         first_name: {
  //           control: 'input',
  //           readOnly: true,
  //           value: 'John ',
  //           disabled: 'disabled',
  //         },
  //         last_name: {
  //           control: 'input',
  //           readOnly: true,
  //           value: 'Ler',
  //           disabled: 'disabled'
  //         },
  //       };

  //       socket.emit('DATA', {
  //         payload: {
  //           type: 'SESSION_CREATED',
  //           data: {
  //             controls: admin_features,
  //           },
  //         },
  //       });
  //     }
  //   });
   })
}