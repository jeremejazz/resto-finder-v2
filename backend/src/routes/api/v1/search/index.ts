import { FastifyPluginAsync } from "fastify";
import checkApiKey from "../../../../hooks/check-api-key";
import searchController, {
  SearchQuery,
} from "../../../../modules/search/search.controller";

const search: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

  fastify.get<{ Querystring: SearchQuery }>(
    "/",
    {
      preHandler: [checkApiKey],
      schema: {
        querystring: {
          type: "object",
          properties: { text: { type: "string", minLength: 5 }, type: { type: "string", enum: ["restaurant", "bakery", "coffee_shop"] } },
          required: ["text", "type"],
        },
      },
    },
    searchController
  );
};

export default search;
