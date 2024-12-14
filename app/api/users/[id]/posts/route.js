<<<<<<< HEAD
import { connectToDB, getDatabase } from "@/utils/database";

export const GET = async (req, { params }) => {
    try {
        const { id } = params;
        
        await connectToDB();
        const db = getDatabase(process.env.CLOUDANT_DB_NAME);
        
        const result = await db.find({
            selector: {
                type: 'prompt',
                creator: {
                    _id: id
                }
            }
        });

        return new Response(JSON.stringify(result.docs), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch prompts created by user"+error, { status: 500 });
    }
}
=======
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
