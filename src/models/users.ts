import mongoose, {Schema, model} from "mongoose";

export interface User extends mongoose.Document{
    id:               Number,
    name:            String,
    lastname:        String,
    email:           String ,
    password:        String,
    adress:          String,
    description:     String,
    typeUser:        String,
};

const userSchema = new Schema({ 
        id:             Number,    
        name:            String,
        lastname:        String,
        email:           String ,
        password:        String,
        adress:          String,
        description:     String,
        typeUser:        String,
});

export default model<User>('User', userSchema);
