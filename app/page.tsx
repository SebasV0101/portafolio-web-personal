import { FC } from "react";
import Header from "../app/components/Header";
import ProjectCard from "../app/components/ProjectCard";
import ContactForm from "../app/components/ContactForm";
import Footer from "../app/components/Footer";

const HomePage: FC = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      
      <section id="inicio" className="min-h-screen flex flex-col items-center justify-center p-8">
  
        <img
          src="/ruta-a-tu-imagen.jpg" // Reemplaza con la ruta correcta de tu imagen
          alt="Sebastian Vasquez Tamayo"
          className="w-32 h-32 rounded-full border-4 border-primary" // Ajusta el tamaño y bordes
        />
        <h1 className="text-5xl font-bold mt-4">Hola, soy Sebastian Vasquez Tamayo</h1>
        <p className="mt-4 text-lg">Desarrollador junior backend apasionado por crear soluciones eficientes y escalables.</p>
      </section>


      <section id="proyectos" className="p-8">
        <h2 className="text-3xl font-semibold text-center">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          <ProjectCard
            title="Proyecto 1"
            description="Descripción breve del proyecto."
            link="#"
          />
          <ProjectCard
            title="Proyecto 2"
            description="Descripción breve del proyecto."
            link="#"
          />
          <ProjectCard
            title="Proyecto 3"
            description="Descripción breve del proyecto."
            link="#"
          />
        </div>
      </section>

      <section id="habilidades" className="bg-background p-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold">Habilidades</h2>
        <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-left">
          {[
            "Node.js",
            "React",
            "TypeScript",
            "TailwindCSS",
            "Next.js",
            "Github",
            "PostgreSQL",
            "Java",
            "JavaScript",
            "API REST",
            "GraphQL",
            "Docker",
            "CI/CD",
            "JWT",
            "MongoDB",
          ].map((habilidad, index) => (
            <span
              key={index}
              className="before:content-['•'] before:text-foreground before:font-bold before:mr-2"
            >
              {habilidad}
            </span>
          ))}
        </div>
      </section>


      <section id="contacto" className="p-8">
        <h2 className="text-3xl font-semibold text-center">Contacto</h2>
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
