// import Prompt from "@models/prompt";
// import { connectToDB } from "@utils/database";

// export const GET = async (request) => {
//   try {
//     await connectToDB();

//     const prompts = await Prompt.find({}).populate("creator");

//
//   } catch (error) {
//     return new Response("Failed to fetch all prompts", { status: 500 });
//   }
// };

import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, response) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(
      JSON.stringify(prompts),
      {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
      { status: 200 }
    );
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
