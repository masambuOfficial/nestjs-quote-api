import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
    constructor(private readonly quotesService: QuotesService) {}

    // GET /quotes --> []
    @Get()
    getQuotes( @Query('type') type: string){
        return [{ type }];
    }

    // GET /quotes/:id --> { ..... }
    @Get(':id')
    getOneQuote(@Param('id') id: string) {
        return {
            id,
        };
    }

    // POST /quotes/:id --> { .... }
    @Post()
    createQuotes( @Body() createQuotesDto){
        return {};
    }

    // PUT /quotes/:id --> { ..... }
    @Put(':id')
    updateQuote( @Param('id') id: string ){
        return {};
    }

    // DELETE /quotes/:id
    @Delete(':id')
    removeQuote( @Param('id') id: string ){
        return {};
    };
}


