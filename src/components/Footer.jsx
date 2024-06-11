import { Button } from "./ui/button"

function Footer() {
    return (
        <footer className='flex items-center justify-center mt-auto bg-secondary rounded-t-lg'>Made by
            <Button variant="link" asChild className="py-1 px-2">
                <p className="text-destructive text-base">Aman & Team</p>
            </Button>
        </footer>
    )
}

export default Footer