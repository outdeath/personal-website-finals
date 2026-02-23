import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';

export interface GuestbookEntry {
    id: number;
    name: string;
    message: string;
    created_at: string;
}

@Injectable()
export class GuestbookService {
    constructor(private readonly supabaseService: SupabaseService) { }

    async findAll(): Promise<GuestbookEntry[]> {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('guestbook')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            throw new InternalServerErrorException(
                `Failed to fetch guestbook entries: ${error.message}`,
            );
        }

        return data as GuestbookEntry[];
    }

    async create(dto: CreateGuestbookDto): Promise<GuestbookEntry> {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('guestbook')
            .insert([{ name: dto.name, message: dto.message }])
            .select()
            .single();

        if (error) {
            throw new InternalServerErrorException(
                `Failed to create guestbook entry: ${error.message}`,
            );
        }

        return data as GuestbookEntry;
    }
}
