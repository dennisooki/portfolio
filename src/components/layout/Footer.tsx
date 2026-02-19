export function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-background/50 backdrop-blur-sm py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Dennis Ooki Magolo. All rights reserved.
                </p>
                <div className="flex items-center space-x-6">
                    <a
                        href="https://github.com/dennisooki"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:dennisooki@icloud.com"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
