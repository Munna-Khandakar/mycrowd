export type User = {
    id: string;
    name: string;
    profilePicture?: string;
    phone: string;
    address: string;
    bloodGroup?: 'O+' | 'O-' | 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-';
    medicalHistory?: string;
    gender?: 'male' | 'female' | 'other';
    age?: number;
}