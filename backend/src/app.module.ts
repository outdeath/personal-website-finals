import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GuestbookModule } from './guestbook/guestbook.module';
import { SupabaseService } from './supabase/supabase.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        GuestbookModule,
    ],
    providers: [SupabaseService],
})
export class AppModule { }
