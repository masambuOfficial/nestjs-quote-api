import { Controller, Get } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
    constructor(private readonly quotesService: QuotesService) {}
    
    // GET /quotes --> []
    @Get()
    getQuotes(){
        return [];
    }

    // GET /quotes/:id --> { ..... }
    @Get(':id')
    getOneQuotes(){
        return [];
    }
    // POST /quotes/:id --> { .... }
    // PUT /quotes/:id --> { ..... }
    // DELETE /quotes/:id
}


