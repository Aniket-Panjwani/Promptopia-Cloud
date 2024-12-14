<<<<<<< HEAD
import { connectToDB, getDatabase } from "@/utils/database";

export const GET = async () => {
    try {
        await connectToDB();
        const db = getDatabase(process.env.CLOUDANT_DB_NAME);
        
        const result = await db.find({
            selector: {
                type: 'prompt'
            }
        });
        return new Response(JSON.stringify(result.docs), { status: 200 }); // Ensure 'docs' is returned
    } catch (error) {
        return new Response("Failed to fetch all prompts: " + error, { status: 500 });
    }
}
=======
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({}).populate('creator')

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
