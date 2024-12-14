<<<<<<< HEAD
import { connectToDB, getDatabase } from "@/utils/database";
import Prompt from "@/models/prompt";

export const POST = async (request) => {
    const { userId, prompt, tag, username, imageUrl, fullname, email } = await request.json();

    try {
        await connectToDB();
        const db = getDatabase(process.env.CLOUDANT_DB_NAME);
        
        const creator = {
          _id: userId,
          username,
          imageUrl,
          fullname,
          email
        };

        const newPrompt = new Prompt({
            creator: creator,
            prompt,
            tag,
            type: 'prompt'
        });
        
        newPrompt.validate();
        const result = await db.create(newPrompt);
        
        return new Response(JSON.stringify({
            ...newPrompt,
            _id: result.id,
            _rev: result.rev
        }), { status: 201 }); // Ensure all necessary fields are returned
    } catch (error) {
        return new Response("Failed to create a new prompt"+error, { status: 500 });
=======
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
    }
}
