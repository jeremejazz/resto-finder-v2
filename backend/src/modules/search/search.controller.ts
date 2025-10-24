import { FastifyReply, FastifyRequest } from "fastify"

export interface SearchQuery {
    text?: string;
}

const searchController = async ( request: FastifyRequest<{ Querystring: SearchQuery }>, reply: FastifyReply): Promise<string> => {

    console.log("search controller called")
    const text = request.query.text;
    return `search ${text}`;
};

export default searchController;