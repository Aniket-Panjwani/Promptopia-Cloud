<<<<<<< HEAD
import { connectToDB, getDatabase } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const db = getDatabase(process.env.CLOUDANT_DB_NAME);
        
        const doc = await db.get(params.id);
        if (!doc) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(doc), { status: 200 });
    } catch (error) {
        return new Response("Internal Server Error"+error, { status: 500 });
    }
};
=======
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompt = await Prompt.findById(params.id).populate("creator")
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDB();
<<<<<<< HEAD
        const db = getDatabase(process.env.CLOUDANT_DB_NAME);
        
        const existingDoc = await db.get(params.id);
        if (!existingDoc) {
            return new Response("Prompt not found", { status: 404 });
        }

        const updatedDoc = {
            ...existingDoc,
            prompt,
            tag
        };

        const result = await db.update(params.id, updatedDoc);
        return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
        return new Response("Error Updating Prompt"+error, { status: 500 });
=======

        // Find the existing prompt by ID
        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        // Update the prompt with new data
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response("Successfully updated the Prompts", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Prompt", { status: 500 });
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
<<<<<<< HEAD
        const db = getDatabase(process.env.CLOUDANT_DB_NAME);
        
        const doc = await db.get(params.id);
        if (!doc) {
            return new Response("Prompt not found", { status: 404 });
        }

        await db.delete(params.id, doc._rev);
        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt"+error, { status: 500 });
=======

        // Find the prompt by ID and remove it
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt", { status: 500 });
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
    }
};
