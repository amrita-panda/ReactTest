'use strict';
module.exports={
    get:()=>{
        return Promise.resolve({
            "data":[
                {
                "id":1,
                "name":'amrita panda'
            },
            {
                "id":2,
                "name":'ashutosh '
            }
            ]
        })
    }
}