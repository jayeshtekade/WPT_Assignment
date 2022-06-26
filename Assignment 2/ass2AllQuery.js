let userdata={

    host:"localhost",
    user:"root",
    password:"cdac",
    database:"work",
    port:"3306",

}

const mysql=require('mysql2');
const con=mysql.createConnection(userdata);

let itemno="3";
let itemname="dipak";
let price="1000";
let category="man";

// con.query('insert into item values (?,?,?,?)',[itemno,itemname,price,category],(err,res)=>{
//     con.query('update item set price =? ,category =? where itemno =?',[price,category,itemno],(err,res)=>{

//     if(err){
//         console.log("error aa gaya");
//     }else{
//         console.log(res.affectedRows);
//     }
// });

// con.query('select * from item where itemno =?',[itemno],(err,res)=>{

//     if(err){
//         console.log("error aa gaya");
//     }else{
//         console.log("find");
//         if(res.length >0){
//             console.log(res[0].itemno,res[0].itemname);
//         }
//     }
// });

// con.query('select * from item where itemname =?',[itemname],(err,res)=>{

//     if(err){
//         console.log("error aa gaya");
//     }else{
//         console.log("find");
//         if(res.length >0){
//             for(let i=0;i <res.length;i++){
//                 console.log(res[i].itemno +" "+res[i].itemname+" "+res[i].price +" "+res[i].category);
//             }
//         }
//     }
// });

con.query('select * from item',(err,res)=>{

    if(err){
        console.log("error aa gaya");
    }else{
        console.log("find");
        if(res.length >0){
            for(let i=0;i <res.length;i++){
                console.log(res[i].itemno +" "+res[i].itemname+" "+res[i].price +" "+res[i].category);
            }
        }
    }
});

