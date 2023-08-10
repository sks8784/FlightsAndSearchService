const express=require("express");
const {PORT}=require("./config/serverConfig");
const bodyParser=require("body-parser");

const ApiRoutes=require('./routes/index');

const {Airport, City}=require('./models/index');
// const db=require('./models/index')

const setupAndStartServer =async()=>{
    
    const app=express();// creates the express object
   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=>{
        console.log(`Server started at ${PORT}`);

        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
        

        // const city=await City.findOne({
        //     where:{
        //         id:13
        //     }
        // });

        // const airports=await city.getAirports(); //gets all the airports whose cityId=id of the city passed in where above
      
        // const newAirport=await Airport.findOne({
        //     where:{
        //         id:13
        //     }
        // });
        // await city.addAirport(newAirport);// adds a new airport whose cityId will be equal to id of the city passed passed in where above
        // console.log(city,airports);
    
        
    })
}

setupAndStartServer();