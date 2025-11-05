import { FastifyPluginAsync } from "fastify";
import checkApiKey from "../../../../hooks/check-api-key";
import searchController, {
  SearchQuery,
} from "../../../../modules/search/search.controller";

const search: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const searchTypes = ["restaurant", "bakery", "coffee_shop", "ice_cream_shop", "juice_shop", "tea_house"];
  fastify.get<{ Querystring: SearchQuery }>(
    "/",
    {
      config: {
        rateLimit: {
          max: 10,
          timeWindow: '1 minute'
        }
      },
      preHandler: [checkApiKey],
      schema: {
        querystring: {
          type: "object",
          properties: { text: { type: "string", minLength: 5, maxLength: 5000 }, type: { type: "string", enum: searchTypes } },
          required: ["text", "type"],
        },
      },
    },
    searchController
  );
};

export default search;
