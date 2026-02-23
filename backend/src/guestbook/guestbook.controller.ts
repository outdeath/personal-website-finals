import {
    Controller,
    Get,
    Post,
    Body,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { GuestbookService, GuestbookEntry } from './guestbook.service';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';

@Controller('guestbook')
export class GuestbookController {
    constructor(private readonly guestbookService: GuestbookService) { }

    /**
     * GET /guestbook
     * Returns all guestbook entries ordered by newest first.
     */
    @Get()
    async findAll(): Promise<GuestbookEntry[]> {
        return this.guestbookService.findAll();
    }

    /**
     * POST /guestbook
     * Accepts { name, message } and inserts a new entry.
     * Returns the created record with a 201 status.
     */
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(
        @Body() createGuestbookDto: CreateGuestbookDto,
    ): Promise<GuestbookEntry> {
        return this.guestbookService.create(createGuestbookDto);
    }
}
