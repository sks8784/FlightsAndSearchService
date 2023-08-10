const {City}=require('../models/index');
const {Op}=require('sequelize');


class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({
                name
            });
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");    
            throw{error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");  
            throw{error};          
        }
    }

    async updateCity(cityId,data){
        try {
            // the below approach also works but will not return updated object

            // const city=await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // });
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");  
            throw{error};             
        }
    }

    async getCity(cityId){
        try {
            const city=await City.findByPk(cityId);//it directly does the find quey on our Primary key(Pk) and here our Pk is id
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");  
            throw{error};   
        }
    }

    async getAllCities(filter){
        try {
            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                });
                return cities;
            }
            const cities=await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");  
            throw{error};   
        }
    }

}

module.exports=CityRepository;