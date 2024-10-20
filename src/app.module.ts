import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesModule } from './quotes/quotes.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [QuotesModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
