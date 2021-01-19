
// import {setupServer} from 'msw/node';
// import {rest} from 'msw';

// const server =setupServer(rest.get("https://api.exchangeratesapi.io/latest",(req,res,ctx)=>{
//     return res(ctx.status(200),ctx.json({rates:{CAD:1.42} }))
//     }),
//     rest.get("*",(req,res,ctx)=>{
//         console.error(`please add request handeler for ${req.url.toString()}`)
//         return res(
//            ctx.status(500),
//             ctx.json({error:"please add request"})
//         )
//     })
// )
// beforeAll(()=>{
//     server.listen();
// })
// afterAll(()=>{
//     server.close();
// })
// afterEach(()=>{
//     server.resetHandlers();
// })
// export {server,rest}