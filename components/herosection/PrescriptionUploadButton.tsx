import { Button } from "@/components/ui/button"
import {Camera} from "lucide-react";
import './HeroSection.css';

export const PrescriptionUploadButton = () => {
    return (
        <div>
            <Button variant="ghost" className="flex hero-cta-button rounded px-4 py-2 mt-3 text-white items-center">
                <Camera />
                <span className="ml-2">Upload</span>
            </Button>
        </div>
    );
}