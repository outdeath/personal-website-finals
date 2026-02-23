import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateGuestbookDto {
    @IsString()
    @IsNotEmpty({ message: 'Name is required.' })
    @MaxLength(100, { message: 'Name must be at most 100 characters.' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Message is required.' })
    @MaxLength(500, { message: 'Message must be at most 500 characters.' })
    message: string;
}
