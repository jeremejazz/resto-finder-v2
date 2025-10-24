import { FastifyReply, FastifyRequest } from "fastify"
import * as searchService from './search.service';

export interface SearchQuery {
    text?: string;
}
const searchController = async ( request: FastifyRequest<{ Querystring: SearchQuery }>, reply: FastifyReply): Promise<any> => {
    const text = request.query.text || '';
    const results = await searchService.searchGoogle(text);
    return {
        data: results
    };
};

export default searchController;