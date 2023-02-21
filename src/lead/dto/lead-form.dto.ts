import { IsNotEmpty, Length } from 'class-validator';

export class LeadFormDto{

    @IsNotEmpty({message: "Full Name should not be empty"})
    @Length(1,225)
    fullName : string;

    @IsNotEmpty({message: "Email should not be empty"})
    @Length(5,10)
    email: string;

    @IsNotEmpty({message: "Mobile should not be empty"})
    @Length(5,225)
    mobile: number;

    @IsNotEmpty({message: "City should not be empty"})
    @Length(5,10)
    city: string;

    @IsNotEmpty({message: "Source should not be empty"})
    @Length(5,10)
    source: string;
}