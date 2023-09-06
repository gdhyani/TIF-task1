import "./globals.css";

export const metadata = {
    title: "TIF-Task1",
    description: "Task 1 of TIF",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
