"user server";

import path from "path";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";

export async function updateUser(
    userId:string,
    username: string,
    name:string,
    bio:string,
    image:string,
    path:string
    
    ): Promise<void> {
    connectToDB();
    await User.findOneAndUpdate(
        { id: userId }, 
        { username: username.toLowerCase(),
            name: name,
            bio: bio,
            image: image,
            path: path
        },
        { upsert: true, new: true, setDefaultsOnInsert: true},
        );

        if (path === '/profile/edit') {
            revalidatePath('/profile/edit')
        }
}