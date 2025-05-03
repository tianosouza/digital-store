import Footer from "./Footer";
import Header from "./Header";

export default function ContainerMain({ children }) {
  return (
    <div className="min-h-screen bg-color-secondary-light dark:bg-color-secondary-dark text-gray-900 dark:text-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto flex-grow flex items-center justify-center p-4 gap-4 flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
